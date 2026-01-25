"use client";

import dynamic from "next/dynamic";
import PillNav from "@/components/layout/pill-nav";
import { AboutSection } from "@/components/sections/about-section";
import { MainSection } from "@/components/sections/main-section";
import { StaggerTestimonials } from "@/components/sections/stagger-testimonials";
import { COLORS } from "@/lib/theme";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { ScrollLogoProvider } from "@/context/scroll-logo-context";
import { IMAGES } from "@/lib/images";

const Robot3D = dynamic(() => import("@/components/3d/robot-3d"), { ssr: false });

export default function Home() {
  return (
    <ScrollLogoProvider>
      <PillNav
        logo={IMAGES.ReactLogo}
        logoAlt="Company Logo"
        items={NAVIGATION_ITEMS}
        className="custom-nav"
        ease="power2.easeOut"
        baseColor={COLORS.nav.base}
        pillColor={COLORS.nav.pill}
        hoveredPillTextColor={COLORS.nav.hoverText}
        pillTextColor={COLORS.nav.pillText}
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
