"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import { buttonClasses } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/links";
import { cn } from "@/lib/utils";

export interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  /** Id used to wire the toggle button's `aria-controls`. */
  id: string;
}

/**
 * Accessible slide-in mobile navigation.
 *
 * - Closes on `Escape` and on backdrop click.
 * - Moves focus to the panel on open and restores it to the trigger on close.
 * - Locks body scroll while open.
 * - Uses a CSS transition that the global `prefers-reduced-motion` block
 *   automatically neutralises.
 */
export function MobileMenu({ open, onClose, id }: MobileMenuProps) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
      previouslyFocused.current?.focus?.();
    };
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-neutral-900/50 transition-opacity duration-200",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        id={id}
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
        tabIndex={-1}
        className={cn(
          "absolute right-0 top-0 flex h-full w-4/5 max-w-sm flex-col gap-6 bg-background p-6 shadow-xl outline-none transition-transform duration-200",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-xl font-extrabold text-primary-700">
            {siteConfig.name}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup menu"
            className="rounded-md p-2 text-neutral-700 transition-colors hover:bg-neutral-100"
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
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav aria-label="Menu utama (mobile)">
          <ul className="flex flex-col gap-1">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "block rounded-md px-3 py-2 text-base font-medium transition-colors",
                      isActive
                        ? "bg-primary-50 text-primary-800"
                        : "text-neutral-700 hover:bg-neutral-100",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className={buttonClasses({ variant: "primary", size: "md", fullWidth: true })}
        >
          Hubungi via WhatsApp
        </Link>
      </div>
    </div>
  );
}
