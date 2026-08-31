import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Elevation preset mapped to the shadow tokens. */
  elevation?: "sm" | "md" | "lg";
  /** Add interactive hover elevation (for clickable cards). */
  interactive?: boolean;
}

const elevationClasses: Record<NonNullable<CardProps["elevation"]>, string> = {
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
};

/**
 * Surface container with border and elevation. Compose with the exported
 * `CardHeader`, `CardBody`, and `CardFooter` subcomponents for consistent
 * internal spacing.
 */
export function Card({
  elevation = "sm",
  interactive = false,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-background",
        elevationClasses[elevation],
        interactive &&
          "transition-shadow hover:shadow-lg focus-within:shadow-lg",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col gap-1 p-6 pb-0", className)}
      {...props}
    />
  );
}

export function CardBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center gap-3 p-6 pt-0", className)}
      {...props}
    />
  );
}
