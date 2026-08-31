"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { buttonClasses } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { whatsappLink } from "@/lib/links";
import { cn } from "@/lib/utils";

const MOBILE_MENU_ID = "mobile-navigation";

/**
 * Sticky, responsive site header.
 *
 * Desktop renders the full nav from `siteConfig.navLinks` plus a WhatsApp CTA;
 * mobile collapses to a hamburger that toggles the accessible `MobileMenu`.
 */
export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <Container size="wide">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="font-display text-2xl font-extrabold tracking-tight text-primary-700"
          >
            {siteConfig.name}
          </Link>

          <nav aria-label="Menu utama" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "text-primary-700"
                          : "text-neutral-700 hover:text-primary-700",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonClasses({ variant: "primary", size: "sm" }),
                "hidden lg:inline-flex",
              )}
            >
              Hubungi Kami
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Buka menu"
              aria-expanded={menuOpen}
              aria-controls={MOBILE_MENU_ID}
              className="rounded-md p-2 text-neutral-700 transition-colors hover:bg-neutral-100 lg:hidden"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </Container>

      <MobileMenu
        id={MOBILE_MENU_ID}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </header>
  );
}
