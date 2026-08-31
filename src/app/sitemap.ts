import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { siteUrl } from "@/lib/metadata";

/**
 * Generate the sitemap from the navigation links (which mirror the sitemap of
 * routes). `lastModified` uses build time until per-page dates are tracked.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return siteConfig.navLinks.map((link) => ({
    url: new URL(link.href, siteUrl).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: link.href === "/" ? 1 : 0.8,
  }));
}
