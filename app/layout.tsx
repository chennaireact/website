import type { Metadata } from "next";
import { siteDescription, siteName, siteUrl } from "@/lib/seo";
import SitePreloader from "@/components/SitePreloader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Chennai React | Chennai’s React Developer Community", template: "%s | Chennai React" },
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName, title: "Chennai React | Chennai’s React Developer Community", description: siteDescription, url: "/", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Chennai React community" }] },
  twitter: { card: "summary_large_image", title: "Chennai React | Chennai’s React Developer Community", description: siteDescription, images: ["/opengraph-image"] },
};

const organization = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: siteName, url: siteUrl, logo: `${siteUrl}/logo/logo.png`, description: siteDescription, email: "chennaireactjs@gmail.com", sameAs: ["https://www.linkedin.com/company/chennaireact/", "https://github.com/chennaireact", "https://instagram.com/chennaireact", "https://x.com/chennaireact", "https://www.youtube.com/@ChennaiReactJS"] },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, name: siteName, url: siteUrl, publisher: { "@id": `${siteUrl}/#organization` }, inLanguage: "en-IN" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body><SitePreloader /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />{children}</body></html>;
}
