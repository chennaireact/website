import ICAL from "ical.js";
import { NextResponse } from "next/server";

const calendarUrl = process.env.LUMA_CALENDAR_ICS_URL;
const calendarPage = "https://lu.ma/chennai-react";

async function getCover(url: string): Promise<string | null> {
  try {
    const eventUrl = new URL(url);
    if (!["lu.ma", "luma.com"].includes(eventUrl.hostname) || eventUrl.pathname === "/chennai-react") return null;
    const response = await fetch(eventUrl, { next: { revalidate: 86400 }, signal: AbortSignal.timeout(6000), redirect: "follow" });
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

export async function GET() {
  try {
    if (!calendarUrl) throw new Error("Calendar is not configured");
    const response = await fetch(calendarUrl, { next: { revalidate: 3600 }, signal: AbortSignal.timeout(10000) });
    if (!response.ok) throw new Error("Calendar unavailable");
    const calendar = new ICAL.Component(ICAL.parse(await response.text()));
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
    const eventsWithCovers = await Promise.all(events.map(async event => ({ ...event, image: await getCover(event.url) })));
    return NextResponse.json({ events: eventsWithCovers }, { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" } });
  } catch {
    return NextResponse.json({ error: "Events are temporarily unavailable." }, { status: 502, headers: { "Cache-Control": "no-store" } });
  }
}
