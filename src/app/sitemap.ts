import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { programSlugs } from "@/content/programs";
import { siteUrl } from "@/lib/metadata";

/**
 * Generate the sitemap from the navigation links (which mirror the sitemap of
 * routes) plus the dynamic program detail pages. `lastModified` uses build time
 * until per-page dates are tracked.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const navEntries: MetadataRoute.Sitemap = siteConfig.navLinks.map((link) => ({
    url: new URL(link.href, siteUrl).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: link.href === "/" ? 1 : 0.8,
  }));

  const programEntries: MetadataRoute.Sitemap = programSlugs.map((slug) => ({
    url: new URL(`/program/${slug}`, siteUrl).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...navEntries, ...programEntries];
}
