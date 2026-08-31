"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Render as a different element (e.g. `li`, `section`). */
  as?: React.ElementType;
  /** Entrance animation variant. */
  animation?: "fade-up" | "fade" | "scale";
  /** Delay in milliseconds, used to stagger sibling reveals. */
  delay?: number;
}

/**
 * Scroll-triggered entrance wrapper.
 *
 * Uses an `IntersectionObserver` to add a `data-visible` attribute once the
 * element enters the viewport; the actual motion is CSS-driven (see the
 * `.reveal` rules in `globals.css`) so it is automatically disabled for users
 * with `prefers-reduced-motion`. Content is always rendered (no layout shift,
 * SEO-safe) — only its opacity/transform animate.
 */
export function Reveal({
  as: Component = "div",
  animation = "fade-up",
  delay = 0,
  className,
  style,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect reduced-motion / no-IO by showing on the next frame (avoids a
    // synchronous setState inside the effect body).
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const frame = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      data-visible={visible ? "true" : undefined}
      className={cn("reveal", `reveal-${animation}`, className)}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
      {...props}
    />
  );
}
