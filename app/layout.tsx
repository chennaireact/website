import type { Metadata } from "next";
import { siteDescription, siteName, siteUrl, socialImage } from "@/lib/seo";
import SitePreloader from "@/components/SitePreloader";
import { mediaUrl } from "@/lib/imagekit";
import type { CSSProperties } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Chennai React | Chennai’s React Developer Community", template: "%s | Chennai React" },
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName, title: "Chennai React | Chennai’s React Developer Community", description: siteDescription, url: "/", images: [socialImage] },
  twitter: { card: "summary_large_image", title: "Chennai React | Chennai’s React Developer Community", description: siteDescription, images: [socialImage] },
};

const organization = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: siteName, url: siteUrl, logo: `${siteUrl}/logo/logo.png`, description: siteDescription, email: "chennaireactjs@gmail.com", sameAs: ["https://www.linkedin.com/company/chennaireact/", "https://github.com/chennaireact", "https://instagram.com/chennaireact", "https://x.com/chennaireact", "https://www.youtube.com/@ChennaiReactJS"] },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, name: siteName, url: siteUrl, publisher: { "@id": `${siteUrl}/#organization` }, inLanguage: "en-IN" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body style={{ "--kolam-image": `url("${mediaUrl("/illustrations/kolam.png")}")` } as CSSProperties}><SitePreloader /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />{children}</body></html>;
}
