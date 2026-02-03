"use client";

import Partners from "@/components/Partners";
import { Socials } from "@/components/Socials";
import Sponsors from "@/components/Sponsors";
import Team from "@/components/Team";
import { GridCard } from "@/components/ui/grid-card";
import logo from "@/public/chennaireact.png";
import ReactLogo from "@/public/react-logo.svg";
import { motion } from "framer-motion";
import Image from "next/image";

// ... imports ...
// We can remove the static image imports for events and use string paths now.

export default function SocialsPage() {
  const upcomingEvents = [
    {
      title: "Chennai React Meetup #16",
      link: "https://luma.com/v864j0r8",
      image: "/events/upcoming/meetup16.png",
    },
  ];

  return (
    <motion.div
      className="mx-auto flex min-h-screen w-full flex-col gap-10 px-4 py-10 sm:px-6 md:px-48 lg:grid lg:max-w-7xl lg:grid-cols-[450px_1fr] lg:gap-10 lg:px-4 xl:max-w-[min(100vw,1728px)] xl:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex w-full flex-col items-center lg:sticky lg:top-0 lg:h-screen lg:w-full lg:self-start lg:overflow-y-auto lg:border-gray-100 lg:bg-white/80 lg:pt-20 lg:backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* ... (Center Image Logic remains same) ... */}
        {/* Center Image with Floating Elements */}
        <div className="relative mb-8 flex h-[250px] w-[250px] items-center justify-center md:h-[300px] md:w-[300px]">
          {/* Main circular image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-full w-full overflow-hidden rounded-full border-8 border-white shadow-2xl"
          >
            <Image src={logo} alt="Chennai React Community" fill className="object-cover" priority />
          </motion.div>

          {/* Floating Element 1: Location Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-[20%] left-[-20%] rounded-2xl bg-white px-4 py-2 shadow-lg md:top-[20%] md:left-[-10%]"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">📍</span>
              <div className="text-left">
                <div className="text-xs text-gray-500">Based in</div>
                <div className="text-sm font-semibold text-gray-900">Chennai</div>
              </div>
            </div>
          </motion.div>

          {/* Floating Element 2: Welcome Bubble */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute top-[3%] right-0 rounded-2xl bg-white px-4 py-3 shadow-lg md:top-[5%]"
          >
            <div className="text-lg font-medium">👋 Welcome!</div>
          </motion.div>

          {/* Floating Element 3: React Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute right-0 bottom-[2%] flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg"
          >
            <motion.div whileHover={{ rotate: 120 }}>
              <Image src={ReactLogo} alt="React Logo" width={48} height={48} style={{ objectFit: "contain" }} priority />
            </motion.div>
          </motion.div>
        </div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-6 text-center lg:text-left"
        >
          <h1 className="mb-4 text-4xl font-black tracking-tight text-gray-900 uppercase md:text-5xl lg:text-4xl xl:text-5xl">Chennai React</h1>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full space-y-3 text-center"
        >
          <p className="text-base text-gray-700 md:text-lg">We are a community of enthusiasts who are passionate about all things React.</p>
          <p className="text-sm text-gray-600 md:text-base">
            This community provides a platform to meetup, connect, and deepen our knowledge on the latest trends and developments in Reactjs.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex w-full flex-col pt-10 lg:min-h-screen lg:pt-24 lg:pr-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Socials />

        {/* UPCOMING EVENTS */}
        <motion.div className="my-10 h-full w-full" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="my-8 text-2xl font-bold sm:text-left">Upcoming events</h2>
          <div className="grid w-full grid-cols-1 gap-4 lg:gap-10 xl:grid-cols-2">
            {upcomingEvents.map((event, idx) => (
              <GridCard key={idx} title={event.title} image={event.image} link={event.link} />
            ))}
          </div>
        </motion.div>

        <motion.div className="my-10" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Sponsors />
        </motion.div>
        <motion.div className="my-10" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Partners />
        </motion.div>
        <motion.div className="my-10" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Team />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
