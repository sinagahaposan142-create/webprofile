import { cn } from "@/lib/utils";

export type BadgeVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "neutral";

const variantClasses: Record<BadgeVariant, string> = {
  primary: "bg-primary-100 text-primary-800",
  secondary: "bg-secondary-100 text-secondary-800",
  accent: "bg-accent-100 text-accent-800",
  neutral: "bg-neutral-100 text-neutral-700",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color mapped to the brand palette. */
  variant?: BadgeVariant;
}

/** Small inline label / pill for statuses, categories, or highlights. */
export function Badge({
  variant = "primary",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
