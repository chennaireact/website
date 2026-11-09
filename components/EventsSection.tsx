"use client";

import { ArrowUpRight, CalendarBlank, MapPin } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type Event = { id: string; title: string; start: string; end: string | null; location: string; url: string; image: string | null };
const calendar = "https://lu.ma/chennai-react";
const dateParts = (date: string) => {
  const value = new Date(date);
  return {
    month: new Intl.DateTimeFormat("en-IN", { month: "short", timeZone: "Asia/Kolkata" }).format(value),
    day: new Intl.DateTimeFormat("en-IN", { day: "numeric", timeZone: "Asia/Kolkata" }).format(value),
    full: new Intl.DateTimeFormat("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Kolkata" }).format(value),
    time: new Intl.DateTimeFormat("en-IN", { hour: "numeric", minute: "2-digit", timeZone: "Asia/Kolkata" }).format(value),
  };
};

export default function EventsSection({ timeline = false }: { timeline?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const cloudDrift = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const reduceMotion = useReducedMotion();
  const [events, setEvents] = useState<Event[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const [showAll, setShowAll] = useState(false);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    if (timeline && new URLSearchParams(window.location.search).get("view") === "past") setTab("past");
    fetch("/api/events?covers=2", { signal: controller.signal, cache: "no-store" }).then(response => {
      if (!response.ok) throw new Error("Events unavailable");
      return response.json();
    }).then(data => { setEvents(data.events); setStatus("ready"); }).catch(error => { if (error.name !== "AbortError") setStatus("error"); });
    return () => controller.abort();
  }, [attempt, timeline]);
  const now = Date.now();
  const upcoming = events.filter(event => new Date(event.end || event.start).getTime() >= now);
  const past = events.filter(event => new Date(event.end || event.start).getTime() < now).reverse();
  const selected = tab === "upcoming" ? upcoming : past;
  const visible = timeline || showAll ? selected : selected.slice(0, 6);

  return <section ref={sectionRef} className={`events-section${timeline ? " is-timeline" : ""}`} id="events">{!timeline && <motion.div aria-hidden="true" className="events-clouds" style={{ x: reduceMotion ? 0 : cloudDrift }} />}<div className="wrap section events-wrap">
    {timeline && <div className="events-intro"><div><h2>Community events.</h2><p>Meet the community, share ideas, and learn something new together.</p></div><a className="events-calendar-link" href={calendar} target="_blank" rel="noreferrer">View calendar <ArrowUpRight size={17}/></a></div>}
    <div className={`events-panel${!timeline && status === "ready" && upcoming.length === 0 ? " is-empty" : ""}`}>
      <div className="events-panel-head">{timeline ? <div className="events-tabs" role="group" aria-label="Event period"><button type="button" className={tab === "upcoming" ? "active" : ""} aria-pressed={tab === "upcoming"} onClick={() => { setTab("upcoming"); setShowAll(false); }}>Upcoming</button><button type="button" className={tab === "past" ? "active" : ""} aria-pressed={tab === "past"} onClick={() => { setTab("past"); setShowAll(false); }}>Past events</button></div> : <><h2 className="homepage-events-label"><span className="events-live-dot" /> Upcoming events</h2>{upcoming.length > 0 && <a href="/events">All events <ArrowUpRight size={16}/></a>}</>}</div>
      {status === "loading" && <div className="events-state" role="status">Loading events…</div>}
      {status === "error" && <div className="events-state"><CalendarBlank size={28}/><p>We couldn’t load events right now.</p><button type="button" onClick={() => { setStatus("loading"); setAttempt(n => n + 1); }}>Try again</button><a href={calendar} target="_blank" rel="noreferrer">View on Luma <ArrowUpRight size={15}/></a></div>}
      {status === "ready" && selected.length === 0 && <div className="events-state"><CalendarBlank size={28}/><p>{tab === "upcoming" ? "Nothing on the calendar just yet." : "No past events to show yet."}</p>{timeline && <span>{tab === "upcoming" ? "Check back soon or explore our past meetups." : "Come back after our next meetup."}</span>}{tab === "upcoming" && (timeline ? (past.length > 0 && <button type="button" onClick={() => setTab("past")}>Explore past events</button>) : <a href="/events?view=past">See past events <ArrowUpRight size={15}/></a>)}</div>}
      {status === "ready" && visible.length > 0 && <div className="events-list">{visible.map(event => { const date = dateParts(event.start); return <a className="event-row" href={event.url} key={event.id} target="_blank" rel="noreferrer"><div className="event-art">{event.image ? <img className="event-cover" src={event.image} alt="" loading="lazy" onError={event => { event.currentTarget.onerror = null; event.currentTarget.className = "event-fallback"; event.currentTarget.src = "/logo/logo.png"; }} /> : <img className="event-fallback" src="/logo/logo.png" alt="" />}<div className="event-calendar-date"><span>{date.month}</span><strong>{date.day}</strong></div><span className="event-card-arrow" aria-hidden="true"><ArrowUpRight size={19}/></span></div><div className="event-row-body"><span className="event-row-date">{date.full} · {date.time} IST</span><h3>{event.title}</h3><span className="event-row-location"><MapPin size={15}/>{event.location}</span></div></a>; })}</div>}
      {status === "ready" && !timeline && selected.length > 6 && <button className="events-more" type="button" onClick={() => setShowAll(!showAll)}>{showAll ? "Show fewer events" : `Show all ${selected.length} events`}</button>}
    </div>
  </div></section>;
}
