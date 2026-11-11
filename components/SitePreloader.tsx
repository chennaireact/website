"use client";

import { useEffect, useState } from "react";
import "./site-preloader.css";

// Allow the fade to finish within the ten-second maximum.
const MAX_WAIT_MS = 9700;
const FADE_MS = 300;

function waitForImage(image: HTMLImageElement, signal: AbortSignal): Promise<void> {
  return new Promise((resolve) => {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      image.removeEventListener("load", loaded);
      image.removeEventListener("error", finish);
      signal.removeEventListener("abort", finish);
      resolve();
    };
    const loaded = () => {
      if (typeof image.decode !== "function") return finish();
      image.decode().then(finish, finish);
    };

    image.addEventListener("load", loaded, { once: true });
    image.addEventListener("error", finish, { once: true });
    signal.addEventListener("abort", finish, { once: true });
    if (signal.aborted) return finish();

    // Start the browser's selected responsive source, even for off-screen images.
    if (image.loading === "lazy") image.loading = "eager";
    if (image.complete && image.currentSrc) {
      if (image.naturalWidth > 0) loaded();
      else finish();
    } else if (!image.getAttribute("src") && !image.getAttribute("srcset")) {
      finish();
    }
  });
}

function backgroundImages(): string[] {
  const urls = new Set<string>();
  for (const element of document.querySelectorAll("body *")) {
    if (element.closest(".site-preloader")) continue;
    for (const pseudo of [null, "::before", "::after"] as const) {
      const style = window.getComputedStyle(element, pseudo);
      if (style.display === "none" || (pseudo && style.content === "none")) continue;
      for (const match of style.backgroundImage.matchAll(/url\(\s*["']?(.*?)["']?\s*\)/g)) {
        try {
          const url = new URL(match[1], document.baseURI);
          if (url.protocol === "http:" || url.protocol === "https:") urls.add(url.href);
        } catch {
          // Ignore invalid CSS URLs and allow the page to render normally.
        }
      }
    }
  }
  return [...urls];
}

export default function SitePreloader() {
  const [phase, setPhase] = useState<"loading" | "leaving" | "done">("loading");

  useEffect(() => {
    const controller = new AbortController();
    let removeTimer: number | undefined;
    let scanFrame: number | undefined;
    let leaving = false;
    const finish = () => {
      if (leaving) return;
      leaving = true;
      controller.abort();
      setPhase("leaving");
      removeTimer = window.setTimeout(() => setPhase("done"), FADE_MS);
    };

    const fallback = window.setTimeout(finish, MAX_WAIT_MS);
    // Let the initial page commit before taking a snapshot of its images.
    scanFrame = window.requestAnimationFrame(() => {
      const pageImages = [...document.images].filter((image) => !image.closest(".site-preloader"));
      const imageUrls = new Set(pageImages.map((image) => image.currentSrc || image.src).filter(Boolean));
      const backgrounds = backgroundImages()
        .filter((url) => !imageUrls.has(url))
        .map((url) => {
          const image = new window.Image();
          image.src = url;
          return image;
        });
      Promise.all([...pageImages, ...backgrounds].map((image) => waitForImage(image, controller.signal)))
        .then(finish, finish);
    });

    return () => {
      controller.abort();
      window.clearTimeout(fallback);
      window.clearTimeout(removeTimer);
      if (scanFrame !== undefined) window.cancelAnimationFrame(scanFrame);
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
