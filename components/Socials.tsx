import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import linkedin from "@/public/socials/linkedin.gif";
import luma from "@/public/socials/luma.jpeg";
import discord from "@/public/socials/discord.gif";
import twitter from "@/public/socials/twitter.gif";
import github from "@/public/socials/github.gif";
import youtube from "@/public/socials/youtube.gif";
import instagram from "@/public/socials/instagram.gif";
import cfs from "@/public/socials/callforspeakers.png";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { source } from "framer-motion/client";

export function Socials() {
  function useCurrentWidth() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
  }
  const width = useCurrentWidth();
  const reorderedItems = width <= 1279 ? [items[1], items[0], ...items.slice(2)] : items;

  return (
    <div className="">
      <h2 className="mb-8 text-2xl font-bold">Socials</h2>
      <BentoGrid className="mx-auto h-full max-w-4xl">
        {reorderedItems.map((item, i) => (
          <BentoGridItem
            key={i}
            source={item.src}
            header={item.header}
            className={
              i === 0 || i === 7 ? `border-slate-200 xl:col-span-2 ${i == 0 || i == 7 ? "col-span-2 max-w-xl justify-items-center" : ""}` : "border-slate-300"
            }
            time={i}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex h-full w-full flex-1 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800"></div>
);

const items = [
  {
    header: <Skeleton />,
    src: linkedin,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: <Skeleton />,
    src: luma,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: <Skeleton />,
    src: discord,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: <Skeleton />,
    src: twitter,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: <Skeleton />,
    src: github,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: <Skeleton />,
    src: instagram,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    src: youtube,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    src: cfs,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
