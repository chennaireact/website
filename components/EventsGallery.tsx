"use client";

import Image from "next/image";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./events-gallery.css";
import imageFiles from "@/lib/gallery-images.json";

const photos = imageFiles.map((file, index) => ({
  src: `/images/gallery/${encodeURIComponent(file)}`,
  title: `Community moment ${String(index + 1).padStart(2, "0")}`,
  caption: "A moment from the Chennai React community.",
}));

export default function EventsGallery() {
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState(1000);
  const root = useRef<HTMLDivElement>(null);
  const journey = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: journey, offset: ["start start", "end end"] });
  const drag = useRef<{ x: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);
  const reducedMotion = useReducedMotion();
  const cardWidth = Math.min(240, Math.max(145, width * .42));
  const spacing = cardWidth * 1.18;
  const go = (index: number) => {
    const next = Math.max(0, Math.min(photos.length - 1, index));
    setActive(next);
    if (reducedMotion || !journey.current) return;
    const section = journey.current;
    const start = section.getBoundingClientRect().top + window.scrollY;
    const travel = Math.max(0, section.offsetHeight - window.innerHeight);
    window.scrollTo({ top: start + travel * ((next + 0.15) / photos.length), behavior: "smooth" });
  };

  useEffect(() => {
    if (!root.current) return;
    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    observer.observe(root.current);
    return () => observer.disconnect();
  }, []);
  useMotionValueEvent(scrollYProgress, "change", progress => {
    if (!reducedMotion) setActive(Math.min(photos.length - 1, Math.floor(progress * photos.length)));
  });

  if (photos.length === 0) return null;

  return <div className={`memories-journey${reducedMotion ? " reduced-motion" : ""}`} style={reducedMotion ? undefined : { height: `${Math.max(150, photos.length * 65)}svh` }} ref={journey}><section className="memories-section" aria-labelledby="memories-title"><div className="wrap memories-intro"><p>THE MOMENTS WE SHARE</p><h2 id="memories-title">Good times, together.</h2><span>A little look back at the people and moments that make Chennai React.</span><small className="memories-scroll-hint">Scroll to explore ↓</small></div>
    <div className="memory-carousel" ref={root} role="region" aria-roledescription="carousel" aria-label="Photos from past community events" tabIndex={0} onPointerDown={event => { if ((event.target as HTMLElement).closest(".memory-bar")) return; suppressClick.current = false; drag.current = { x: event.clientX, moved: false }; }} onPointerMove={event => { if (drag.current && Math.abs(event.clientX - drag.current.x) > 12) { drag.current.moved = true; } }} onPointerUp={event => { const current = drag.current; drag.current = null; if (current?.moved) { suppressClick.current = true; const delta = event.clientX - current.x; if (Math.abs(delta) > 35) go(active + (delta < 0 ? 1 : -1)); } }} onPointerCancel={() => { drag.current = null; }} onKeyDown={event => { if (event.key === "ArrowRight") { event.preventDefault(); go(active + 1); } if (event.key === "ArrowLeft") { event.preventDefault(); go(active - 1); } }}>
      <svg className="memory-string" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true"><path d="M0 16 Q500 98 1000 16" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" /></svg>
      {photos.map((photo, index) => {
        const offset = index - active;
        const ratio = Math.min(1, Math.abs(offset * spacing) / Math.max(width / 2, 1));
        const top = 26 + 40 * (1 - ratio * ratio);
        return <motion.div key={photo.src} className="memory-card" style={{ width: cardWidth, marginLeft: -cardWidth / 2, zIndex: photos.length - Math.abs(offset) }} initial={false} animate={{ x: offset * spacing, y: top, rotate: reducedMotion ? 0 : Math.max(-7, Math.min(7, offset * 2.5)) }} transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 120, damping: 20 }}>
          <button type="button" className="memory-print" aria-label={`Show ${photo.title}`} aria-pressed={index === active} onClick={() => { if (!suppressClick.current) go(index); }}><span className="memory-peg" aria-hidden="true"/><span className="memory-image"><Image src={photo.src} alt="" fill sizes="(max-width: 600px) 180px, 240px" quality={85} /></span><span className="memory-note">{photo.title}</span></button>
        </motion.div>;
      })}
      <div className="memory-bar"><div className="memory-caption" aria-live="polite"><strong>{photos[active].title}</strong><span>{photos[active].caption}</span></div><span className="memory-count">{String(active + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</span></div>
    </div>
  </section></div>;
}
