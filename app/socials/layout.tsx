import type { Metadata } from "next";

export const metadata: Metadata = { title: "Community links", robots: { index: false, follow: true }, alternates: { canonical: "/socials" } };
export default function SocialsLayout({ children }: { children: React.ReactNode }) { return children; }
