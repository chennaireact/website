"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface GridCardProps {
  title: string;
  image: string | StaticImageData;
  link?: string;
  className?: string;
  objectFit?: "cover" | "contain";
  imageClassName?: string;
}

export function GridCard({ title, image, link = "#", className, objectFit = "cover", imageClassName }: GridCardProps) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className={cn("group relative block aspect-square", className)}>
      <motion.div
        className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-300 bg-gray-50 dark:bg-neutral-900"
        initial="initial"
        whileHover="hover"
        whileTap="hover" // This makes the hover state (title, overlay) trigger on mobile tap
      >
        <motion.div
          className="h-full w-full"
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.1 },
          }}
          transition={{ duration: 0.3 }}
        >
          <Image src={image} alt={title} fill className={cn(objectFit === "contain" ? "object-contain p-8" : "object-cover", imageClassName)} />
        </motion.div>

        {/* Gradient Overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 to-transparent"
          variants={{
            initial: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Arrow Icon */}
        <motion.div
          className="pointer-events-none absolute top-2 right-2 rounded-full bg-white/30 p-2"
          variants={{
            initial: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUpRight className="h-4 w-4 text-white" />
        </motion.div>

        {/* Title Badge */}
        <div className="pointer-events-none absolute right-4 bottom-4 left-4">
          <motion.div
            className="transform rounded-xl bg-white px-3 py-2 text-center shadow-lg"
            variants={{
              initial: { opacity: 0, y: 10 },
              hover: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-sm font-medium text-black">{title}</span>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}
