import { cn } from "@/lib/utils";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "mx-auto grid gap-4",
        "grid-cols-2 xl:grid-cols-4",
        "auto-rows-[9rem] sm:auto-rows-[10rem] lg:auto-rows-[13rem] xl:auto-rows-[11rem]", // Responsive row heights
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  source,
  icon,
  time = 0,
}: {
  className?: string;

  source?: string | StaticImageData;

  icon?: React.ReactNode;
  time?: number;
}) => {
  const isStaticImageData = (src: string | StaticImageData): src is StaticImageData => typeof src !== "string";

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: time * 0.2,
        duration: 0.5,
        ease: "easeInOut",
      }}
      className={cn(
        "shadow-input group flex w-full flex-col justify-between rounded-xl border border-transparent bg-white transition duration-200 hover:shadow-xl",
        "dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}
      style={{
        backgroundImage: `url(${source ? (isStaticImageData(source) ? source.src : source) : ""})`, // Set background image if provided
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="transition duration-200 group-hover:translate-x-2">{icon}</div>
    </motion.div>
  );
};
