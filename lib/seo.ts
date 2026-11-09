import type { Metadata } from "next";

export const siteUrl = "https://www.chennaireact.in";
export const siteName = "Chennai React";
export const siteDescription = "Chennai React is a community for React developers in Chennai to meet, share ideas, and learn together.";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName, title: `${title} | ${siteName}`, description, url: path, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Chennai React community" }] },
    twitter: { card: "summary_large_image", title: `${title} | ${siteName}`, description, images: ["/opengraph-image"] },
  };
}
