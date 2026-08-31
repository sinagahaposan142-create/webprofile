import { Reveal } from "@/components/common/Reveal";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib/utils";

export interface ProgramDetailSectionProps {
  /** Stable id used for the heading anchor + `aria-labelledby`. */
  id: string;
  /** Optional small label above the title. */
  eyebrow?: string;
  title: string;
  /** Optional intro paragraph below the title. */
  description?: string;
  /** Apply a muted background surface. */
  muted?: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 * Reusable titled block used to compose every program detail page section
 * (target peserta, deskripsi, tujuan, materi, metode, benefit, fasilitas, alur,
 * FAQ, CTA). Provides consistent spacing, a scroll-revealed header, and an
 * accessible `aria-labelledby` association, so detail pages stay uniform.
 */
export function ProgramDetailSection({
  id,
  eyebrow,
  title,
  description,
  muted = false,
  className,
  children,
}: ProgramDetailSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "py-12 lg:py-16",
        muted && "bg-neutral-50",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal as="div" className="flex flex-col gap-3">
          {eyebrow && (
            <span className="text-sm font-semibold uppercase tracking-wide text-primary-700">
              {eyebrow}
            </span>
          )}
          <Heading as="h2" size="lg" id={headingId}>
            {title}
          </Heading>
          {description && (
            <p className="text-base text-neutral-600 sm:text-lg">
              {description}
            </p>
          )}
        </Reveal>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

/**
 * Consistent icon-led list used for tujuan / metode / benefit / target peserta.
 */
export function DetailList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item, index) => (
        <Reveal
          as="li"
          key={item}
          delay={(index % 4) * 60}
          className="flex items-start gap-3 text-base text-neutral-700"
        >
          <span
            aria-hidden="true"
            className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </span>
          <span>{item}</span>
        </Reveal>
      ))}
    </ul>
  );
}
