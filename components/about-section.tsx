"use client";

import { motion } from "framer-motion";
import Image from "next/image";
export function AboutSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-linear-to-b from-sky-200 via-blue-100 to-white">
      <div className="container mx-auto px-4 py-24 md:py-32">
        {/* Center Image with Floating Elements */}
        <div className="relative mx-auto mb-12 flex h-[300px] w-[300px] items-center justify-center md:h-[400px] md:w-[400px]">
          {/* Main circular image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-full w-full overflow-hidden rounded-full border-8 border-white shadow-2xl"
          >
            <Image src="/chennaireact.png" alt="Chennai React Community" fill className="object-cover" priority />
          </motion.div>

          {/* Floating Element 1: Location Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute top-[20%] left-0 rounded-2xl bg-white px-4 py-2 shadow-lg"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">📍</span>
              <div className="text-left">
                <div className="text-xs text-gray-500">Based in</div>
                <div className="text-sm font-semibold text-gray-900">Chennai</div>
              </div>
            </div>
          </motion.div>

          {/* Floating Element 2: Hello Speech Bubble */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute top-[10%] right-0 rounded-2xl bg-white px-4 py-3 shadow-lg"
          >
            <div className="text-xl font-medium">👋 Hello!</div>
          </motion.div>

          {/* Floating Element 3: Fire Emoji */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute right-[10%] bottom-[15%] flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg"
          >
            <span className="text-3xl">🔥</span>
          </motion.div>
        </div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="mb-4 text-5xl leading-tight font-black tracking-tight text-gray-900 uppercase md:text-7xl lg:text-8xl">Chennai React</h2>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl space-y-4 text-center"
        >
          <p className="text-lg text-gray-700 md:text-xl lg:text-2xl">We are a community of enthusiasts who are passionate about all things React.</p>
          <p className="text-base text-gray-600 md:text-lg lg:text-xl">
            This community provides a platform to meetup, connect, and deepen our knowledge on the latest trends and developments in Reactjs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
