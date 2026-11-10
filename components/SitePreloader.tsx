"use client";

import { useEffect, useState } from "react";
import "./site-preloader.css";

export default function SitePreloader() {
  const [phase, setPhase] = useState<"loading" | "leaving" | "done">("loading");

  useEffect(() => {
    let exitTimer: number | undefined;
    let removeTimer: number | undefined;
    let leaving = false;
    const started = performance.now();

    const finish = () => {
      if (leaving) return;
      leaving = true;
      const remaining = Math.max(0, 500 - (performance.now() - started));
      exitTimer = window.setTimeout(() => {
        setPhase("leaving");
        removeTimer = window.setTimeout(() => setPhase("done"), 350);
      }, remaining);
    };

    const fallback = window.setTimeout(finish, 2400);
    // Only wait for the artwork needed on entry; lazy-loaded content can load later.
    const artwork = window.location.pathname === "/"
      ? ["/chennai-central-hero.svg", "/chennai-central-foreground.svg"]
      : [];
    let remaining = artwork.length;
    const images = artwork.map((src) => {
      const image = new window.Image();
      image.onload = image.onerror = () => {
        remaining -= 1;
        if (remaining === 0) finish();
      };
      image.src = src;
      return image;
    });
    if (remaining === 0) finish();

    return () => {
      window.clearTimeout(fallback);
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
      images.forEach((image) => { image.onload = null; image.onerror = null; });
    };
  }, []);

  if (phase === "done") return null;

  return <div className={`site-preloader${phase === "leaving" ? " is-leaving" : ""}`} aria-hidden="true">
    <div className="site-preloader-content">
      <img src="/logo/logo.png" alt="" width="72" height="57" />
      <span>Chennai React</span>
      <div className="site-preloader-track"><div /></div>
    </div>
  </div>;
}
