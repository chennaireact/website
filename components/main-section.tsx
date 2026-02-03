import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { useScrollLogo } from "../context/ScrollLogoContext";
import ChennaiCentral from "../public/chennai-central-1.svg";
import ReactLogo from "../public/react-outline.svg";

export function MainSection() {
  // Scroll progress (0 = top, 1 = fully zoomed)
  const { scrollY } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });
  const { setIsLogoDocked, isLogoDocked, targetRect } = useScrollLogo();

  // Responsive: measure image size
  useLayoutEffect(() => {
    function updateSize() {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setImgSize({ width: rect.width, height: rect.height });
      }
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Animation: scale from 1 to targetScale, always zooming into bottom center
  const targetScale = 30; // adjust as needed for how much you want to zoom
  const zoomStart = 0;
  const zoomEnd = 1200; // px scrolled (reduced for faster animation)
  const scale = useTransform(scrollY, [zoomStart, zoomEnd], [1, targetScale]);

  // Removed old useEffect for isLogoDocked as it's now handled with flightEnd
  // useLayoutEffect(() => {
  //   return scrollY.on("change", (latest) => {
  //     // Toggle docked state based on scroll position matching the end of zoom/hero section
  //     // Adding a small buffer to ensure smooth transition
  //     const shouldDock = latest > zoomEnd - 100;
  //     setIsLogoDocked(shouldDock);
  //   });
  // }, [scrollY, setIsLogoDocked, zoomEnd]);

  // No translateY: keep bottom edge always at viewport bottom

  // React logo animation
  const logoAppearStart = 0; // as a fraction of zoom progress
  const logoAppearPx = zoomStart + (zoomEnd - zoomStart) * logoAppearStart;
  // Opacity reaches 1 sooner (at 1/3 of the zoom range) for better visibility
  const opacityEnd = logoAppearPx + (zoomEnd - logoAppearPx) * 0.8;
  const reactOpacity = useTransform(scrollY, [logoAppearPx, opacityEnd], [0, 1]);
  // Flight animation range: starts slightly before zoom ends for smoothness
  const flightStart = zoomEnd - 900;
  const flightEnd = zoomEnd - 200; // Duration of the flight in pixels

  // Initial logo position (bottom center)
  // We need window dimensions to calculate centered position reliably.
  // Using fixed percentage/pixels for simplicity based on previous layout:
  // left: 50% - 50px, bottom: 18%
  // But useTransform needs numbers.
  // Ideally, we'd measure the initial position too, but let's approximate:
  // Initial Width = 100px.
  // Initial X (center) = windowWidth / 2 - 50.
  // Initial Y (bottom) = windowHeight * (1 - 0.18) - 100.

  // Since we don't have window size readily in useTransform content without client-side measurement,
  // Let's use 'vw'/'vh' and CSS calc if possible, or measure window in useEffect.
  // A robust way for scrub is to use `motion.div`'s `style` with `useTransform` that outputs pixel values if we have them.

  const [windowSize, setWindowSize] = useState({ w: 0, h: 0 });
  useLayoutEffect(() => {
    setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    const handleResize = () => setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Compute destination from targetRect
  // The PillNav Link has p-1 (4px padding), so we need to match the inner image position.
  const padding = 4;
  const destX = targetRect ? targetRect.left : 0;
  const destY = targetRect ? targetRect.top + padding : 0;
  const destW = targetRect ? targetRect.width - padding * 2 : 50;
  const destH = targetRect ? targetRect.height - padding * 2 : 50;

  // Compute start
  const startW = 200;
  const startH = 200;
  const startX = windowSize.w / 2 - startW / 2;
  const startY = windowSize.h * (1 - 0.18) - startH;

  const logoX = useTransform(scrollY, [flightStart, flightEnd], [startX, destX]);
  const logoY = useTransform(scrollY, [flightStart, flightEnd], [startY, destY]);
  const logoWidth = useTransform(scrollY, [flightStart, flightEnd], [startW, destW]);
  const logoHeight = useTransform(scrollY, [flightStart, flightEnd], [startH, destH]);
  // Spin animation: 2 full rotations (720°) during flight
  const logoRotate = useTransform(scrollY, [flightStart, flightEnd], [0, 720]);

  useLayoutEffect(() => {
    return scrollY.on("change", (latest) => {
      // Dock ONLY when flight finished
      const shouldDock = latest > flightEnd;
      setIsLogoDocked(shouldDock);
    });
  }, [scrollY, setIsLogoDocked, flightEnd]);

  return (
    <div style={{ height: "210vh", overflow: "hidden", position: "relative" }}>
      <motion.div
        ref={containerRef}
        style={{
          scale,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          overflow: "hidden",
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          transformOrigin: "50% 100%", // bottom center
          transform: "translateZ(0)",
        }}
      >
        <div className="flex h-full w-full items-end justify-center">
          <Image
            className="absolute bottom-[-4px] h-auto w-full object-contain"
            src={ChennaiCentral}
            alt="Chennai Central"
            priority
            style={{ pointerEvents: "none", userSelect: "none" }}
            draggable={false}
          />
        </div>
      </motion.div>
      {/* React Logo */}
      {!isLogoDocked && (
        <motion.div
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: logoWidth,
            height: logoHeight,
            x: logoX,
            y: logoY,
            rotate: logoRotate,
            zIndex: 9999,
            opacity: reactOpacity,
            pointerEvents: "none",
          }}
        >
          <Image src={ReactLogo} alt="React Logo" fill style={{ objectFit: "contain" }} priority />
        </motion.div>
      )}
    </div>
  );
}
