import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { whatsappLink, emailLink } from "@/lib/links";

/**
 * Site footer: brand blurb, navigation, and contact details. All copy is
 * sourced from `siteConfig`.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-neutral-50">
      <Container size="wide" className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-2xl font-extrabold text-primary-700">
              {siteConfig.name}
            </span>
            <p className="max-w-sm text-sm text-neutral-600">
              {siteConfig.shortDescription}
            </p>
            <p className="text-sm text-neutral-500">{siteConfig.location}</p>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigasi footer">
            <h2 className="mb-3 font-display text-sm font-semibold uppercase tracking-wide text-neutral-500">
              Navigasi
            </h2>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-primary-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="mb-3 font-display text-sm font-semibold uppercase tracking-wide text-neutral-500">
              Kontak
            </h2>
            <ul className="flex flex-col gap-2 text-sm text-neutral-600">
              <li>
                <Link
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary-700"
                >
                  WhatsApp: {siteConfig.contact.whatsapp}
                </Link>
              </li>
              <li>
                <Link
                  href={emailLink()}
                  className="transition-colors hover:text-primary-700"
                >
                  {siteConfig.contact.email}
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.socials.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary-700"
                >
                  Instagram: {siteConfig.socials.instagram}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-neutral-500">
          &copy; {year} {siteConfig.name}. {siteConfig.fullName}.
        </div>
      </Container>
    </footer>
  );
}
