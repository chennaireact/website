"use client";

import dynamic from "next/dynamic";

const Robot3D = dynamic(() => import("./components/robot-3d"), { ssr: false });

import { MainSection } from "./components/main-section";

export default function Home() {
  return (
    <>
      <MainSection />
      {/* <main className="h-full">
        <Robot3D />
      </main> */}
    </>
  );
}
