import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS class names conditionally.
 *
 * Combines `clsx` (conditional class joining) with `tailwind-merge`
 * (deduplicating conflicting Tailwind utilities) so the last-declared
 * utility wins. This is the single helper used across all UI components.
 *
 * @example
 * cn("px-2 py-1", isActive && "bg-primary", "px-4") // -> "py-1 bg-primary px-4"
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
