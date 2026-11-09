"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import CommunityGallery from "@/components/CommunityGallery";
import EventsSection from "@/components/EventsSection";
import CommunitySupport from "@/components/CommunitySupport";
import EventsGallery from "@/components/EventsGallery";
import MetroCrossing from "@/components/MetroCrossing";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { ArrowDown, ArrowRight, ArrowUpRight, Code, Coffee, GithubLogo, InstagramLogo, LinkedinLogo, MapPin, MicrophoneStage, Sparkle, UsersThree, WhatsappLogo, List, X } from "@phosphor-icons/react";

const luma = "https://lu.ma/chennai-react";
const whatsapp = "https://chat.whatsapp.com/GVVDcSrckq2FTBXtKBwVbd?mode=r_c";
const rise = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: .6 } };

export default function Home() {
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 800], [0, 100]);
  const reducedMotion = useReducedMotion();
  return <main>
    <div className="announcement"><span>✳</span> VANAKKAM, DEVELOPERS! <span>✳</span> MADE FOR THE COMMUNITY, BY THE COMMUNITY <span>✳</span></div>
    <SiteHeader />

    <section className="hero" id="top" aria-label="Chennai React community" tabIndex={0} onKeyDown={event => { if (event.target !== event.currentTarget) return; if (event.key === "ArrowDown") { event.preventDefault(); document.getElementById("events")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" }); } else if (event.key === "ArrowUp") { event.preventDefault(); window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" }); } }}>
      <motion.div className="hero-parallax" aria-hidden="true" style={{ y: reducedMotion ? 0 : heroParallax }} />
      <div className="hero-content"><h1 className="hero-title">Chennai’s own <span>React community.</span></h1><div className="hero-join"><a className="button button-lime hero-events-link" href={luma} target="_blank" rel="noreferrer">Explore events <ArrowUpRight size={18} weight="bold" /></a></div></div>
      <img className="hero-foreground" src="/chennai-central-foreground.svg" alt="Illustration of Chennai Central railway station" />
      <a className="hero-scroll" href="#about" aria-label="Scroll to community"><ArrowDown size={20} /></a>
    </section>

    <EventsSection />

    <section className="about section" id="about"><div className="wrap">
      <h2 className="about-title">Our community.</h2>
      <CommunityGallery />
      <motion.div className="community-stats" aria-label="Community at a glance" initial={reducedMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}><div><strong>10k+</strong><span>Members</span></div><div><strong>12+</strong><span>Meetups</span></div><div><strong>2+</strong><span>Years</span></div></motion.div>
    </div></section>

    <MetroCrossing direction="left" />
    <CommunitySupport />
    <MetroCrossing direction="right" />

    <EventsGallery />

    <SiteFooter />
  </main>;
}
