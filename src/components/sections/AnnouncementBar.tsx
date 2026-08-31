import Link from "next/link";
import { announcement } from "@/content/home";
import { siteConfig } from "@/content/site";

/**
 * Slim top announcement bar. Registration windows are announced on Instagram,
 * so the CTA links to the RUBELA profile rather than an unconfirmed form URL.
 */
export function AnnouncementBar() {
  if (!announcement.enabled) return null;

  return (
    <div className="bg-primary-800 text-primary-50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-2 text-center text-xs sm:text-sm">
        <span>{announcement.message}</span>
        <Link
          href={siteConfig.socials.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-white underline underline-offset-2 transition-colors hover:text-accent-300"
        >
          {announcement.ctaLabel}
        </Link>
      </div>
    </div>
  );
}
