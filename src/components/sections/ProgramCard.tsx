import Link from "next/link";
import { Card, CardBody } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/common/Icon";
import type { Program } from "@/content/programs";

export interface ProgramCardProps {
  program: Program;
}

/**
 * Reusable program card used on the `/program` overview grid.
 *
 * The entire card is a clickable surface via a stretched-link pattern (the
 * program-name `<Link>` covers the card with an absolutely-positioned
 * pseudo-element), keeping a single, accessible link target per card while the
 * name remains the semantic anchor.
 */
export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <Card elevation="sm" interactive className="relative h-full">
      <CardBody className="flex h-full flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-100 text-secondary-700">
            <Icon name={program.icon} />
          </span>
          <Badge variant="neutral">{program.tag}</Badge>
        </div>
        <Heading as="h3" size="sm">
          <Link
            href={`/program/${program.slug}`}
            className="transition-colors after:absolute after:inset-0 hover:text-primary-700 focus-visible:outline-none"
          >
            {program.name}
          </Link>
        </Heading>
        <p className="text-sm text-neutral-600">{program.summary}</p>
        <span
          aria-hidden="true"
          className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-primary-700"
        >
          Lihat detail
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </CardBody>
    </Card>
  );
}
