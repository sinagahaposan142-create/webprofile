import { cn } from "@/lib/utils";

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Render as a different element (e.g. `header`, `main`). */
  as?: React.ElementType;
  /** Max-width preset. `default` maps to a comfortable reading/content width. */
  size?: "default" | "narrow" | "wide";
}

const sizeClasses: Record<NonNullable<ContainerProps["size"]>, string> = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

/**
 * Centered content wrapper with responsive horizontal padding and a max-width.
 * Keeps page content aligned to a consistent gutter across breakpoints.
 */
export function Container({
  as: Component = "div",
  size = "default",
  className,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  );
}
