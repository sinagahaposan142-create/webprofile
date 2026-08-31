import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/common/Reveal";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Alignment of the header block. */
  align?: "center" | "left";
  className?: string;
}

/**
 * Consistent section intro (eyebrow badge + heading + description) reused across
 * homepage sections. Content is revealed on scroll.
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <Reveal
      as="div"
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      {eyebrow && <Badge variant="secondary">{eyebrow}</Badge>}
      <Heading as="h2" size="xl" className="max-w-2xl">
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base text-neutral-600 sm:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
