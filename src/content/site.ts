/**
 * RUBELA — Single source of content truth.
 *
 * All brand, contact, navigation, and organizational copy lives here so pages
 * and components never hard-code strings. Values marked with `TODO` are NOT
 * confirmed yet and MUST NOT be fabricated: fill them in once the team provides
 * the real data.
 */

export interface NavLink {
  /** Display label (Bahasa Indonesia). */
  label: string;
  /** App Router path. */
  href: string;
}

export interface SiteContact {
  /** WhatsApp number in local display format. */
  whatsapp: string;
  /** WhatsApp link-ready number in international format (no leading `+`). */
  whatsappIntl: string;
  /** Primary contact email. */
  email: string;
}

export interface SiteSocials {
  /** Instagram handle including the leading `@`. */
  instagram: string;
  /** Full Instagram profile URL. */
  instagramUrl: string;
}

export interface SiteConfig {
  /** Short brand name. */
  name: string;
  /** Full legal / descriptive name. */
  fullName: string;
  /** One-line description for meta tags and hero subtitles. */
  shortDescription: string;
  /** Longer description for the About section and structured data. */
  longDescription: string;
  /** Whether the organization operates on a non-profit basis. */
  nonProfit: boolean;
  /** Human-readable location. */
  location: string;
  /**
   * Founding year.
   * TODO: Confirm the exact founding date (day/month) with the RUBELA team.
   */
  foundedYear: number;
  /** Hero tagline. */
  tagline: string;
  /** Core organizational values. */
  coreValues: string[];
  contact: SiteContact;
  socials: SiteSocials;
  /** Primary navigation, reflecting the planned sitemap. */
  navLinks: NavLink[];
}

export const siteConfig: SiteConfig = {
  name: "RUBELA",
  fullName: "Bimbingan Belajar Ruang Belajar UTBK Indonesia",
  shortDescription:
    "Bimbingan belajar UTBK non-profit untuk siswa kelas 12, diselenggarakan secara online dengan jangkauan nasional.",
  longDescription:
    "RUBELA (Ruang Belajar UTBK Indonesia) adalah program bimbingan belajar UTBK non-profit yang ditujukan bagi siswa kelas 12. Diselenggarakan secara online dengan jangkauan nasional dan berbasis di Depok, Jawa Barat, RUBELA hadir untuk mendampingi mentee terpilih agar dapat belajar, tumbuh, dan berjuang bersama menuju perguruan tinggi impian.",
  nonProfit: true,
  location: "Depok, Jawa Barat",
  // TODO: Confirm the exact founding date (day/month) with the RUBELA team.
  foundedYear: 2024,
  tagline:
    "Setiap mentee yang terpilih bukan hanya karena cerdas, tetapi karena bertekad untuk belajar, tumbuh, dan berjuang bersama.",
  coreValues: ["Profesionalisme", "Kepercayaan", "Orientasi pada Hasil"],
  contact: {
    whatsapp: "0812-1154-0750",
    whatsappIntl: "6281211540750",
    email: "rubelautbk@gmail.com",
  },
  socials: {
    instagram: "@rubelautbk",
    instagramUrl: "https://www.instagram.com/rubelautbk",
  },
  navLinks: [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Program", href: "/program" },
    { label: "Keunggulan", href: "/keunggulan" },
    { label: "Beasiswa", href: "/beasiswa" },
    { label: "Tim", href: "/tim" },
    { label: "Cara Bergabung", href: "/cara-bergabung" },
    { label: "Galeri", href: "/galeri" },
    { label: "FAQ", href: "/faq" },
    { label: "Kontak", href: "/kontak" },
  ],
};

/**
 * PLACEHOLDER data — NOT yet provided by the RUBELA team. Do NOT fabricate real
 * values here. These constants exist so components can wire up structure now and
 * be populated later once the real content is available.
 */
export const placeholders = {
  // TODO: Add real achievements once confirmed by the team.
  prestasi: [] as string[],
  // TODO: Add real testimonials (name, batch, quote) once collected.
  testimoni: [] as { name: string; role: string; quote: string }[],
  // TODO: Add real gallery photos (src, alt) once provided.
  foto: [] as { src: string; alt: string }[],
  // TODO: Confirm pricing details (RUBELA is non-profit — clarify any fees).
  harga: null as string | null,
  // TODO: Add the official Google Form / registration link once available.
  registrationUrl: null as string | null,
};

export default siteConfig;
