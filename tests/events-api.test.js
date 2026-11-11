import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import { GET } from "../app/api/events/route";

const originalFetch = globalThis.fetch;
const originalCalendarUrl = process.env.LUMA_CALENDAR_ICS_URL;
const originalError = console.error;
const calendar = [
  "BEGIN:VCALENDAR",
  "VERSION:2.0",
  "BEGIN:VEVENT",
  "UID:test-event",
  "DTSTAMP:20260101T000000Z",
  "DTSTART:20261201T100000Z",
  "DTEND:20261201T120000Z",
  "SUMMARY:React meetup",
  "DESCRIPTION:View the public page at https://lu.ma/test-event",
  "LOCATION:Chennai, India",
  "END:VEVENT",
  "END:VCALENDAR",
  "",
].join("\r\n");

describe("events API", () => {
  beforeEach(() => { console.error = () => {}; process.env.LUMA_CALENDAR_ICS_URL = "https://example.test/private-calendar"; });
  afterEach(() => {
    globalThis.fetch = originalFetch;
    console.error = originalError;
    if (originalCalendarUrl === undefined) delete process.env.LUMA_CALENDAR_ICS_URL;
    else process.env.LUMA_CALENDAR_ICS_URL = originalCalendarUrl;
  });

  test("distinguishes missing configuration without exposing details", async () => {
    delete process.env.LUMA_CALENDAR_ICS_URL;
    const response = await GET();
    expect(response.status).toBe(503);
    expect(await response.json()).toEqual({ error: "Events are temporarily unavailable." });
  });

  test("returns a gateway error for an unavailable or invalid calendar", async () => {
    globalThis.fetch = async () => new Response("unavailable", { status: 503 });
    expect((await GET()).status).toBe(502);
    globalThis.fetch = async () => new Response("not a calendar");
    expect((await GET()).status).toBe(502);
    globalThis.fetch = async () => { throw new Error("network failed"); };
    expect((await GET()).status).toBe(502);
  });

  test("returns events even when the optional cover fetch fails", async () => {
    globalThis.fetch = async (url) => String(url).includes("private-calendar")
      ? new Response(calendar)
      : new Response("unavailable", { status: 503 });
    const response = await GET();
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.events).toHaveLength(1);
    expect(data.events[0]).toMatchObject({ title: "React meetup", location: "Chennai", url: "https://lu.ma/test-event", image: null });
  });
});
