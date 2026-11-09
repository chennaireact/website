import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/events", "/team", "/sponsor", "/coc"].map(path => ({ url: `${siteUrl}${path}` }));
}
