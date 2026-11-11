"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./metro-crossing.css";

export default function MetroCrossing({ direction = "left" }: { direction?: "left" | "right" }) {
  const container = useRef<HTMLDivElement>(null);
  const train = useRef<HTMLImageElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, trainWidth: 0 });
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: container, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], direction === "left" ? [dimensions.width, -dimensions.trainWidth] : [-dimensions.trainWidth, dimensions.width]);

  useEffect(() => {
    const measure = () => setDimensions({ width: container.current?.clientWidth ?? 0, trainWidth: train.current?.offsetWidth ?? 0 });
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return <div className="metro-crossing" ref={container} aria-hidden="true"><div className="metro-crossing-track"><motion.img ref={train} src="/illustrations/chennai-metro-horizontal.svg" alt="" className="metro-crossing-train" style={{ x: reducedMotion ? 0 : x, scaleX: direction === "right" ? -1 : 1 }} /></div></div>;
}
