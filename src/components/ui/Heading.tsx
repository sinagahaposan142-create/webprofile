import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Semantic heading element to render. Defaults to `h2`. */
  as?: HeadingLevel;
  /**
   * Visual size, decoupled from the semantic level so document outline and
   * visual hierarchy can differ. Defaults to a size derived from `as`.
   */
  size?: HeadingSize;
}

const sizeClasses: Record<HeadingSize, string> = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl",
  xl: "text-4xl",
  "2xl": "text-5xl",
  "3xl": "text-6xl",
};

/** Sensible default visual size for each semantic level. */
const defaultSizeForLevel: Record<HeadingLevel, HeadingSize> = {
  h1: "2xl",
  h2: "xl",
  h3: "lg",
  h4: "md",
  h5: "sm",
  h6: "sm",
};

/**
 * Polymorphic heading using the display font. The semantic element (`as`) and
 * the visual `size` are independent so pages keep a valid document outline
 * while still matching the type scale.
 */
export function Heading({
  as: Component = "h2",
  size,
  className,
  ...props
}: HeadingProps) {
  const resolvedSize = size ?? defaultSizeForLevel[Component];

  return (
    <Component
      className={cn(
        "font-display font-bold tracking-tight text-foreground",
        sizeClasses[resolvedSize],
        className,
      )}
      {...props}
    />
  );
}
