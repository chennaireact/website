"use client";

import { Socials } from "@/components/Socials";
import Image from "next/image";
import { motion } from "framer-motion";
import upevent from "@/public/events/upcoming/event1.jpeg";
import past1 from "@/public/events/past/past1.png";
import past2 from "@/public/events/past/past2.jpeg";
import past3 from "@/public/events/past/past3.jpeg";
import sponsor1 from "@/public/sponsors/sponsor1.jpeg";
import sponsor2 from "@/public/sponsors/sponsor2.jpeg";
import logo from "@/public/chennaireact.png";
import Card from "@/components/Card";
import Partners from "@/components/Partners";
import Team from "@/components/Team";

export default function Home() {
  return (
    <motion.div
      className="mx-auto flex h-full w-full max-w-xl flex-col items-center gap-9 p-10 xl:mx-5 xl:flex-row xl:items-start"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex flex-col items-start gap-4 xl:fixed xl:items-start"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image className="mb-5 w-40 rounded-full border border-slate-200" src={logo} alt="Chennai React Logo" />
        <h1 className="text-3xl font-bold xl:text-4xl">Chennai React</h1>
        <div className="tablet:pr-12 text-wrap xl:max-w-md xl:pr-0 xl:text-xl">
          <span className="text-md font-light text-[#565656]">We are a community of enthusiasts who are passionate about all things React.</span>
          <h2 className="text-md mt-3 font-light text-[#565656]">
            This community provides a platform to meetup, connect, and deepen our knowledge on the latest trends and developments in Reactjs.
          </h2>
        </div>
      </motion.div>

      <motion.div
        className="flex max-w-xl flex-col flex-wrap xl:absolute xl:right-0 xl:mx-5 xl:max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Socials />

        <motion.div className="my-10 h-full w-full" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="mt-8 text-2xl font-bold">Upcoming events</h2>
          <div className="flex flex-col flex-wrap items-center justify-center gap-10 md:justify-start xl:flex-row xl:items-start">
            <Card src={upevent} alt="Upcoming event" />
          </div>
        </motion.div>

        <motion.div
          className="my-10 flex h-full w-full flex-col"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold">Past events</h2>
          <div className="flex flex-col flex-wrap items-center justify-center gap-10 md:justify-start xl:flex-row xl:items-start">
            <Card src={past1} alt="Past event" />
            <Card src={past2} alt="Past event" />
            <Card src={past3} alt="Past event" />
          </div>
        </motion.div>

        <motion.div className="my-10" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-2xl font-bold">Sponsors</h2>
          <div className="flex flex-col flex-wrap items-center justify-center gap-10 md:justify-start xl:flex-row xl:items-start">
            <Card src={sponsor1} alt="Sponsor" />
            <Card src={sponsor2} alt="Sponsor" />
          </div>
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
