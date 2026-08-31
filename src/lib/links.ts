import { siteConfig } from "@/content/site";

/**
 * Build a `wa.me` WhatsApp deep link from the site contact number.
 *
 * @param message Optional pre-filled message text.
 */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.contact.whatsappIntl}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** `mailto:` link for the primary contact email. */
export function emailLink(): string {
  return `mailto:${siteConfig.contact.email}`;
}
