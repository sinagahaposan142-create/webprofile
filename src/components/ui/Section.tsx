import { cn } from "@/lib/utils";

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement> {
  /** Apply a muted background surface. */
  muted?: boolean;
  /** Vertical spacing preset. */
  spacing?: "default" | "compact" | "none";
}

const spacingClasses: Record<NonNullable<SectionProps["spacing"]>, string> = {
  none: "",
  compact: "py-12 lg:py-16",
  default: "py-[var(--spacing-section)] lg:py-[var(--spacing-section-lg)]",
};

/**
 * Semantic `<section>` wrapper providing consistent vertical rhythm and an
 * optional muted background surface. Pair with `<Container>` for horizontal
 * gutters.
 */
export function Section({
  muted = false,
  spacing = "default",
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        spacingClasses[spacing],
        muted && "bg-neutral-50",
        className,
      )}
      {...props}
    />
  );
}
