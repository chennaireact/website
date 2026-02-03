import { GridCard } from "@/components/ui/grid-card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "grid w-full gap-4",
        "grid-cols-2 xl:grid-cols-4",
        "auto-rows-[9rem] sm:auto-rows-[10rem] lg:auto-rows-[15rem] xl:auto-rows-[13rem]", // Responsive row heights
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  image,
  link = "#",
  time = 0,
}: {
  className?: string;
  title: string;
  image: string | StaticImageData;
  link?: string;
  time?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: time * 0.2,
        duration: 0.5,
        ease: "easeInOut",
      }}
      className={cn("h-full w-full", className)}
    >
      <GridCard title={title} image={image} link={link} className="aspect-auto h-full w-full" objectFit="cover" />
    </motion.div>
  );
};
