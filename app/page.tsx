"use client";

import dynamic from "next/dynamic";

const Robot3D = dynamic(() => import("./components/robot-3d"), { ssr: false });

import { AboutSection } from "../components/about-section";
import { MainSection } from "../components/main-section";
import { StaggerTestimonials } from "../components/stagger-testimonials";

import PillNav from "../components/PillNav";
import { ScrollLogoProvider } from "../context/ScrollLogoContext";
import ReactLogo from "../public/react-outline.svg";

export default function Home() {
  return (
    <ScrollLogoProvider>
      <PillNav
        logo={ReactLogo}
        logoAlt="Company Logo"
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Services", href: "/services" },
          { label: "Contact", href: "/contact" },
        ]}
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />

      <MainSection />
      <AboutSection />
      <StaggerTestimonials />

      {/* <main className="h-full">
        <Robot3D />
      </main> */}
    </ScrollLogoProvider>
  );
}
