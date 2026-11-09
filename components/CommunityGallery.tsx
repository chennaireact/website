"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const cards = [
  { id: "organizers", src: "/images/about%20section/DSC06451.JPG", title: "Making it happen", description: "Community members bringing ideas and energy to every meetup." },
  { id: "speakers", src: "/images/about%20section/DSC02603.JPG", title: "Ideas worth sharing", description: "Community members sharing ideas, experiences, and the things they have learned." },
  { id: "attendees", src: "/images/about%20section/DSC02515.JPG", title: "Curiosity in the room", description: "Curious minds showing up, asking questions, and meeting their fellow developers." },
  { id: "community", src: "/images/about%20section/DSC02723.JPG", title: "Finding our people", description: "A welcoming space to find your people and grow together in Chennai." },
  { id: "learning", src: "/images/about%20section/IMG_3751.JPG", title: "Learning together", description: "Fresh perspectives and practical knowledge to take into whatever you build next." },
  { id: "fun", src: "/images/about%20section/DSC02541.JPG", title: "The moments between", description: "The voices and moments that make each meetup memorable." },
] as const;

export default function CommunityGallery() {
  const [active, setActive] = useState(0);
  const [canDrag, setCanDrag] = useState(false);
  const [paused, setPaused] = useState(false);
  const dragging = useRef(false);
  useEffect(() => { setCanDrag(window.matchMedia("(pointer: fine)").matches); }, []);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setTimeout(() => setActive(current => (current + 1) % cards.length), 4000);
    return () => window.clearTimeout(timer);
  }, [active, paused, reducedMotion]);
  const selected = cards[active];
  const hand = cards.filter((_, index) => index !== active);

  return <div className="community-gallery" aria-label="Community photo gallery" onPointerEnter={(event) => { if (event.pointerType === "mouse") setPaused(true); }} onPointerLeave={(event) => { if (event.pointerType === "mouse" && !(document.activeElement instanceof HTMLElement && document.activeElement.matches(":focus-visible") && event.currentTarget.contains(document.activeElement))) setPaused(false); }} onFocusCapture={(event) => { if (event.target.matches(":focus-visible")) setPaused(true); }} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}>
    <div className="gallery-heading" aria-live="polite">
      <span className="gallery-count">{String(active + 1).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}</span>
      <h3>{selected.title}</h3>
    </div>
    <div className="gallery-hand" aria-label="Choose a community photo">
      {cards.map((card, index) => {
        const isActive = index === active;
        const handIndex = hand.findIndex(item => item.id === card.id);
        const offset = handIndex - (hand.length - 1) / 2;
        return <motion.button
          type="button"
          key={card.id}
          className={`gallery-card${isActive ? " is-active" : ""}`}
          aria-label={`${card.title}, photo ${index + 1} of ${cards.length}`}
          aria-pressed={isActive}
          onPointerDown={() => { dragging.current = false; }}
          onClick={() => { if (!dragging.current) setActive(index); }}
          drag={canDrag && !isActive ? "y" : false}
          dragConstraints={{ top: -170, bottom: 0 }}
          dragElastic={0.12}
          dragSnapToOrigin
          onDragStart={() => { dragging.current = true; }}
          onDragEnd={(_, info) => { if (info.offset.y < -90 || info.velocity.y < -600) setActive(index); }}
          initial={false}
          animate={isActive ? { x: 0, y: 0, rotate: 0, scale: 1 } : { x: offset * 44, y: 145 + Math.abs(offset) * 8, rotate: offset * 7, scale: .72 }}
          whileHover={isActive || reducedMotion ? undefined : { y: 120 + Math.abs(offset) * 8 }}
          transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 27 }}
          style={{ zIndex: isActive ? 20 : 5 + handIndex }}
        ><Image src={card.src} alt="" fill sizes="(max-width: 380px) 165px, (max-width: 700px) 190px, 230px" quality={95} className="gallery-photo" /></motion.button>;
      })}
    </div>
    <div className="gallery-description" aria-live="polite"><span className="gallery-overline">THE PEOPLE BEHIND THE CODE</span><p>{selected.description}</p><span className="gallery-hint">PICK A PHOTO TO EXPLORE</span></div>
    <div className="gallery-controls" aria-label="Photo selection">{cards.map((card, index) => <button key={card.id} type="button" className={index === active ? "active" : ""} aria-label={`Show ${card.title}`} aria-pressed={index === active} onClick={() => setActive(index)} />)}</div>
  </div>;
}
