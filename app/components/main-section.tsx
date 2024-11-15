import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import ChennaiCentral from "../../public/chennai-central-1.svg";

export function MainSection() {
  const { scrollY } = useScroll();

  // Adjust the scale and vertical translation based on scroll
  const scale = useTransform(scrollY, [0, 1000], [1, 30]); // Adjust for desired zoom levels
  const translateY = useTransform(scrollY, [0, 1000], [0, -13000]); // Adjust to keep bottom-center focus

  return (
    <div style={{ height: "200vh", overflow: "hidden" }}>
      <motion.div
        style={{
          scale,
          y: translateY,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Image className="w-full" src={ChennaiCentral} alt={""} />
      </motion.div>
    </div>
  );
}
