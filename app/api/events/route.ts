import ICAL from "ical.js";
import { NextResponse } from "next/server";

const calendarPage = "https://lu.ma/chennai-react";

async function getCover(url: string, timeoutMs: number): Promise<string | null> {
  try {
    const eventUrl = new URL(url);
    if (!["lu.ma", "luma.com"].includes(eventUrl.hostname) || eventUrl.pathname === "/chennai-react") return null;
    const response = await fetch(eventUrl, { next: { revalidate: 86400 }, signal: AbortSignal.timeout(timeoutMs), redirect: "follow" });
    if (!response.ok) return null;
    const html = await response.text();
    const pageData = html.match(/<script\b[^>]*id=["']__NEXT_DATA__["'][^>]*>([\s\S]*?)<\/script>/i)?.[1];
    if (!pageData) return null;
    const data = JSON.parse(pageData);
    const cover = data?.props?.pageProps?.initialData?.data?.event?.cover_url;
    if (typeof cover !== "string") return null;
    const image = new URL(cover);
    return image.protocol === "https:" && image.hostname === "images.lumacdn.com" && image.pathname.startsWith("/event-covers/") ? image.href : null;
  } catch { return null; }
}

type CalendarFailure = "configuration" | "upstream_request" | "upstream_response" | "invalid_calendar";

function unavailable(reason: CalendarFailure, status: number, upstreamStatus?: number) {
  // Never log the subscription URL, response body, or exception: they can contain private links.
  console.error("Events calendar unavailable", { reason, ...(upstreamStatus ? { upstreamStatus } : {}) });
  return NextResponse.json({ error: "Events are temporarily unavailable." }, { status, headers: { "Cache-Control": "no-store" } });
}

async function addCovers<T extends { url: string }>(events: T[]) {
  const covers = new Map<string, string | null>();
  const urls = [...new Set(events.map(event => event.url).filter(url => url !== calendarPage))];
  const deadline = Date.now() + 3000;
  let next = 0;
  const workers = Array.from({ length: Math.min(5, urls.length) }, async () => {
    while (next < urls.length) {
      const remaining = deadline - Date.now();
      if (remaining <= 0) break;
      const url = urls[next++];
      covers.set(url, await getCover(url, Math.min(remaining, 1500)));
    }
  });
  await Promise.all(workers);
  return events.map(event => ({ ...event, image: covers.get(event.url) ?? null }));
}

export async function GET() {
  const calendarUrl = process.env.LUMA_CALENDAR_ICS_URL?.trim();
  if (!calendarUrl) return unavailable("configuration", 503);

  let response: Response;
  try {
    response = await fetch(calendarUrl, { next: { revalidate: 3600 }, signal: AbortSignal.timeout(10000) });
  } catch {
    return unavailable("upstream_request", 502);
  }
  if (!response.ok) return unavailable("upstream_response", 502, response.status);

  try {
    const calendar = new ICAL.Component(ICAL.parse(await response.text()));
    if (calendar.name !== "vcalendar") return unavailable("invalid_calendar", 502);
    const events = calendar.getAllSubcomponents("vevent").flatMap(component => {
      try {
        const event = new ICAL.Event(component);
        if (!event.startDate || component.getFirstPropertyValue("status") === "CANCELLED") return [];
        const description = event.description || "";
        // Only return the public event page; the feed may also contain private organizer links.
        const publicUrl = description.match(/View the public page at\s+(https:\/\/(?:lu\.ma|luma\.com)\/[^\s]+)/i)?.[1];
        const location = event.location || "";
        const start = event.startDate.toJSDate();
        const end = event.endDate?.toJSDate();
        if (!Number.isFinite(start.getTime())) return [];
        return [{ id: event.uid, title: event.summary || "Community event", start: start.toISOString(), end: end && Number.isFinite(end.getTime()) ? end.toISOString() : null, location: /^https?:\/\//i.test(location) ? "Online event" : (location.split(",")[0] || "Details on Luma"), url: publicUrl || calendarPage }];
      } catch { return []; }
    }).sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
    const eventsWithCovers = await addCovers(events);
    return NextResponse.json({ events: eventsWithCovers }, { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" } });
  } catch {
    return unavailable("invalid_calendar", 502);
  }
}
