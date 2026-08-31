import Image from "next/image";
import { Card, CardBody } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/common/Icon";
import type { Testimonial } from "@/content/testimonials";

export interface TestimonialCardProps {
  testimonial: Testimonial;
}

/** Build a compact initials label from a name for the avatar fallback. */
function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

/**
 * Reusable testimonial card with a modern layout: quote glyph, blockquote, and
 * an avatar (photo or initials fallback) with attribution. Placeholder
 * testimonials are clearly marked. Includes a hover lift.
 */
export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card
      elevation="sm"
      className="group h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <CardBody className="flex h-full flex-col gap-4">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-700"
        >
          <Icon name="chat" width={20} height={20} />
        </span>

        <blockquote className="flex-1 text-sm leading-relaxed text-neutral-700">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        <footer className="flex items-center gap-3 border-t border-border pt-4">
          {testimonial.photo ? (
            <Image
              src={testimonial.photo}
              alt={`Foto ${testimonial.name}`}
              width={44}
              height={44}
              className="h-11 w-11 shrink-0 rounded-full object-cover"
            />
          ) : (
            <span
              aria-hidden="true"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary-100 font-display text-sm font-bold text-secondary-700"
            >
              {initials(testimonial.name)}
            </span>
          )}
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-2">
              <Heading as="h3" size="sm" className="text-base">
                {testimonial.name}
              </Heading>
              {testimonial.placeholder && (
                <Badge variant="neutral">Contoh</Badge>
              )}
            </div>
            <span className="text-xs text-neutral-500">{testimonial.role}</span>
          </div>
        </footer>
      </CardBody>
    </Card>
  );
}
