"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const photos = ["DSC06426.JPG", "DSC06408.JPG", "DSC06430.JPG", "DSC06420.JPG"];

export default function ConductGallery() {
  const reduceMotion = useReducedMotion();
  return <div className="conduct-gallery" aria-label="Community members at a Chennai React meetup">{photos.map((photo, index) => <motion.div className={`conduct-gallery-cell cell-${index + 1}`} key={photo} initial={reduceMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : .4, delay: reduceMotion ? 0 : index * .12 }}><Image src={`/images/coc/${photo}`} alt="" fill sizes="(max-width: 700px) 45vw, 270px" quality={85} /></motion.div>)}</div>;
}
