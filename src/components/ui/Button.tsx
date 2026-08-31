import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-700 text-white hover:bg-primary-800 active:bg-primary-900",
  secondary:
    "bg-secondary-700 text-white hover:bg-secondary-800 active:bg-secondary-900",
  outline:
    "border border-primary-700 text-primary-800 hover:bg-primary-50 active:bg-primary-100",
  ghost: "text-neutral-800 hover:bg-neutral-100 active:bg-neutral-200",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm gap-1.5",
  md: "h-11 px-5 text-base gap-2",
  lg: "h-12 px-7 text-lg gap-2.5",
};

/**
 * Shared button/link class string. Reuse for anchor elements (e.g. `next/link`)
 * that should look like a `Button` without being a `<button>`.
 */
export function buttonClasses({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
} = {}): string {
  return cn(
    "inline-flex items-center justify-center rounded-lg font-display font-semibold transition-colors",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600",
    "disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className,
  );
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. */
  variant?: ButtonVariant;
  /** Sizing preset. */
  size?: ButtonSize;
  /** Stretch to fill the available inline space. */
  fullWidth?: boolean;
}

/**
 * Accessible button primitive with brand variants and sizes.
 *
 * Uses `forwardRef` so it can be composed (e.g. tooltips, menus) and exposes
 * disabled + focus-visible states styled from the design tokens.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      type = "button",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={buttonClasses({ variant, size, fullWidth, className })}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
