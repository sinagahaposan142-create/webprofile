/**
 * RUBELA — Testimoni (single source of truth).
 *
 * Drives BOTH the homepage `Testimonials` section and the dedicated
 * `/testimoni` page via the shared `TestimonialCard`. To add a testimonial,
 * append a new {@link Testimonial} entry below — no UI changes required.
 *
 * FACTUAL POLICY (important): NO real testimonials exist in the reference
 * document. Therefore every entry below is a clearly-marked PLACEHOLDER
 * (`placeholder: true`). Do NOT present invented quotes as real. Replace with
 * real, consented testimonials (name, batch, quote) when collected.
 */

export interface Testimonial {
  /** Placeholder attribution — no real testimonials collected yet. */
  name: string;
  /** Role / batch, e.g. "Mentee 2024". */
  role: string;
  /** The testimonial quote. */
  quote: string;
  /**
   * Photo source (relative to `/public`) when a consented photo exists. Left
   * `undefined` renders an initial-based avatar placeholder instead.
   */
  photo?: string;
  /** Whether this is a clearly-marked placeholder. */
  placeholder: boolean;
}

/**
 * PLACEHOLDER testimonials. No real testimonials exist yet.
 * TODO: Replace with real, consented testimonials (name, batch, quote).
 */
export const testimonials: Testimonial[] = [
  {
    name: "Mentee RUBELA",
    role: "Alumni bimbingan (contoh)",
    quote:
      "Testimoni asli dari mentee akan ditampilkan di sini setelah dikumpulkan dan mendapat persetujuan.",
    placeholder: true,
  },
  {
    name: "Mentee RUBELA",
    role: "Alumni bimbingan (contoh)",
    quote:
      "Testimoni asli dari mentee akan ditampilkan di sini setelah dikumpulkan dan mendapat persetujuan.",
    placeholder: true,
  },
  {
    name: "Mentee RUBELA",
    role: "Alumni bimbingan (contoh)",
    quote:
      "Testimoni asli dari mentee akan ditampilkan di sini setelah dikumpulkan dan mendapat persetujuan.",
    placeholder: true,
  },
];
