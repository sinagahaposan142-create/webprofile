import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

/**
 * Canonical site URL. Configured via `NEXT_PUBLIC_SITE_URL` in the environment
 * (set this in Vercel).
 *
 * TODO: Replace the fallback with the real production domain once registered.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://rubela.example";

/**
 * Base metadata shared across every route. Individual pages extend or override
 * fields via {@link createMetadata}.
 */
export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} — ${siteConfig.fullName}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.shortDescription,
  applicationName: siteConfig.name,
  keywords: [
    "RUBELA",
    "bimbingan belajar UTBK",
    "UTBK",
    "SNBT",
    "bimbel online",
    "kelas 12",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.fullName}`,
    description: siteConfig.shortDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.fullName}`,
    description: siteConfig.shortDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export interface CreateMetadataOptions {
  title?: string;
  description?: string;
  /** Path relative to the site root, e.g. `/tentang`. */
  path?: string;
}

/**
 * Build per-page `Metadata` that inherits the base OpenGraph/Twitter config
 * while overriding the title, description, and canonical path.
 */
export function createMetadata({
  title,
  description,
  path,
}: CreateMetadataOptions = {}): Metadata {
  const resolvedDescription = description ?? siteConfig.shortDescription;
  const url = path ? new URL(path, siteUrl).toString() : siteUrl;

  return {
    title,
    description: resolvedDescription,
    alternates: { canonical: url },
    openGraph: {
      ...baseMetadata.openGraph,
      url,
      title: title ?? undefined,
      description: resolvedDescription,
    },
    twitter: {
      ...baseMetadata.twitter,
      title: title ?? undefined,
      description: resolvedDescription,
    },
  };
}
