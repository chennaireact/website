import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import ChennaiCentral from "../../public/chennai-central-1.svg";
import ReactLogo from "../../public/react-js-icon.svg";

export function MainSection() {
  const { scrollY } = useScroll();

  // Adjust the scale and vertical translation based on screen size and scroll
  const scale = useTransform(scrollY, [0, 800], [1, window.innerWidth <= 768 ? 15 : 25]);
  const translateY = useTransform(scrollY, [0, 800], [0, window.innerWidth <= 768 ? -6000 : -11000]);

  // React logo animation with adjusted values for mobile
  const reactScale = useTransform(scrollY, [0, 1200, 1600], [0.1, window.innerWidth <= 768 ? 2.5 : 4, window.innerWidth <= 768 ? 2.5 : 4]);
  const reactOpacity = useTransform(scrollY, [0, 800, 1200], [0, 1, 1]);
  const reactY = useTransform(scrollY, [400, 1200, 1600], [0, 0, 0]);

  return (
    <div style={{ height: "300vh", overflow: "hidden", position: "relative" }}>
      <motion.div
        style={{
          scale,
          y: translateY,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          overflow: "hidden",
          width: "100%",
          maxWidth: "100vw",
          pointerEvents: "none",
          height: "100vh",
          transform: "translateZ(0)",
        }}
      >
        <div className="flex h-full w-full items-end justify-center">
          <Image className="h-auto w-full object-contain" src={ChennaiCentral} alt="Chennai Central" priority />
        </div>
      </motion.div>
      {/* React Logo */}
      <motion.div
        style={{
          position: "fixed",
          top: "50%",
          left: window.innerWidth <= 768 ? "50%" : "48%",
          transform: "translate(-50%, -50%)",
          width: window.innerWidth <= 768 ? "80px" : "100px",
          height: window.innerWidth <= 768 ? "80px" : "100px",
          scale: reactScale,
          opacity: reactOpacity,
          y: reactY,
        }}
      >
        <Image src={ReactLogo} alt="React Logo" fill style={{ objectFit: "contain" }} priority />
      </motion.div>
    </div>
  );
}
