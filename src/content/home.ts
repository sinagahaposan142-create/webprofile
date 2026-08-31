/**
 * RUBELA — Homepage content.
 *
 * Single source of truth for the marketing copy shown on the homepage. Only
 * facts confirmed by the RUBELA team / reference document are stated as real.
 * Anything not yet confirmed is clearly marked `TODO` / `PLACEHOLDER` and MUST
 * NOT be fabricated (statistics, testimonials, named teacher bios, prices,
 * gallery photos, registration URL).
 */

import { programs } from "@/content/programs";

/** Small identifier used to pick an inline SVG icon in the UI layer. */
export type IconName =
  | "book"
  | "users"
  | "target"
  | "sparkles"
  | "heart"
  | "chat"
  | "chart"
  | "calendar"
  | "award"
  | "presentation"
  | "compass"
  | "shield";

export interface Announcement {
  /** Whether to render the top announcement bar. */
  enabled: boolean;
  /** Short message shown in the bar. */
  message: string;
  /** Optional call-to-action label. */
  ctaLabel: string;
}

/**
 * Top announcement bar. Registration windows are announced via Instagram
 * @rubelautbk, so the CTA points there rather than to an unconfirmed form URL.
 */
export const announcement: Announcement = {
  enabled: true,
  message: "Pendaftaran mentee & informasi program diumumkan via Instagram",
  ctaLabel: "@rubelautbk",
};

export interface HeroContent {
  eyebrow: string;
  headline: string;
  headlineHighlight: string;
  subheadline: string;
  primaryCta: { label: string };
  secondaryCta: { label: string; href: string };
  /** Compact trust signals shown under the hero CTAs. */
  highlights: string[];
}

export const hero: HeroContent = {
  eyebrow: "Bimbingan Belajar UTBK · Non-profit · Nasional",
  headline: "Ruang belajar UTBK yang membuatmu",
  headlineHighlight: "belajar, tumbuh, dan berjuang bersama",
  subheadline:
    "RUBELA mendampingi siswa kelas 12, gap-year, dan semi gap-year menyiapkan UTBK secara online dengan materi terstruktur, tutor profesional, dan komunitas yang suportif — gratis untuk kelompok kurang mampu.",
  primaryCta: { label: "Daftar & Info Program" },
  secondaryCta: { label: "Pelajari RUBELA", href: "#program" },
  highlights: [
    "Online, jangkauan nasional",
    "Gratis untuk yang membutuhkan",
    "Tutor lulusan PTN favorit",
  ],
};

export interface ValueItem {
  icon: IconName;
  title: string;
  description: string;
}

/** Value proposition — the core promise, distilled into a few pillars. */
export const valueProps: ValueItem[] = [
  {
    icon: "book",
    title: "Materi lengkap & terstruktur",
    description:
      "Silabus resmi UTBK disusun per topik dan jenjang kesulitan agar belajar terarah dari dasar hingga siap ujian.",
  },
  {
    icon: "users",
    title: "Tutor berpengalaman",
    description:
      "Dibimbing tutor lulusan PTN favorit yang dilatih secara berkala untuk mengajar dengan efektif dan empatik.",
  },
  {
    icon: "target",
    title: "Simulasi UTBK realistis",
    description:
      "Bank soal dan try out meniru pola serta waktu UTBK, lengkap dengan pembahasan dan analisis kekuatan-kelemahan.",
  },
  {
    icon: "heart",
    title: "Inklusif & non-profit",
    description:
      "Gratis untuk kelompok kurang mampu, dengan komunitas belajar yang positif, suportif, dan bebas menghakimi.",
  },
];

export interface ProgramItem {
  icon: IconName;
  name: string;
  description: string;
  /** Short label to categorise the program in the UI. */
  tag: string;
  /** Slug of the matching program detail page, when one exists. */
  slug?: string;
}

/**
 * Curated subset of RUBELA's programs for the homepage.
 *
 * Derived from the shared program catalogue (`src/content/programs.ts`) so the
 * homepage and the `/program` pages never drift out of sync. The full
 * catalogue lives on the dedicated `/program` overview page.
 */
export const featuredPrograms: ProgramItem[] = programs
  .slice(0, 6)
  .map((program) => ({
    icon: program.icon,
    name: program.name,
    description: program.summary,
    tag: program.tag,
    slug: program.slug,
  }));

/** "Mengapa RUBELA" — the 11 keunggulan condensed for scannability. */
export const advantages: ValueItem[] = [
  {
    icon: "sparkles",
    title: "Suasana belajar kondusif & inspiratif",
    description:
      "Ruang kelas virtual dirancang nyaman dan memotivasi sehingga mentee betah belajar lebih lama.",
  },
  {
    icon: "book",
    title: "Materi lengkap & terstruktur",
    description:
      "Mengikuti silabus resmi UTBK, tersusun per topik dan jenjang kesulitan.",
  },
  {
    icon: "users",
    title: "Tutor berpengalaman & profesional",
    description:
      "Lulusan PTN favorit yang dilatih berkala untuk menjaga kualitas pengajaran.",
  },
  {
    icon: "target",
    title: "Simulasi & latihan soal realistis",
    description:
      "Bank soal meniru pola dan waktu UTBK agar mentee terbiasa dengan tekanan ujian.",
  },
  {
    icon: "chat",
    title: "Bimbingan konseling",
    description:
      "Layanan konseling bersama konselor untuk menjaga kesehatan mental selama persiapan.",
  },
  {
    icon: "chart",
    title: "Try out rutin bulanan",
    description:
      "Disertai analisis kekuatan dan kelemahan untuk menyusun strategi belajar berikutnya.",
  },
  {
    icon: "calendar",
    title: "Kelas intensif setiap hari",
    description:
      "Kelas online berlangsung 7 hari dalam seminggu agar momentum belajar terjaga.",
  },
  {
    icon: "award",
    title: "Bimbingan & webinar beasiswa gratis",
    description:
      "Pendampingan beasiswa dan webinar pendidikan terbuka tanpa biaya.",
  },
];

export interface MethodStep {
  title: string;
  description: string;
}

/** Metode pembelajaran — marketing-appropriate summary (not the internal SOP). */
export const methodSteps: MethodStep[] = [
  {
    title: "Belajar daring, fleksibel",
    description:
      "Kelas berlangsung online melalui Zoom Meetings atau Google Meet sehingga bisa diikuti dari mana saja di Indonesia.",
  },
  {
    title: "Rutin & terjadwal",
    description:
      "Sesi rutin setiap hari dengan durasi terukur, menjaga konsistensi tanpa membuat mentee kelelahan.",
  },
  {
    title: "Materi & tugas terarah",
    description:
      "Tutor menyiapkan materi presentasi, memberi latihan, serta penilaian agar perkembangan mentee terpantau.",
  },
  {
    title: "Evaluasi berkala",
    description:
      "Try out dan evaluasi rutin membantu mentee memahami posisinya dan memperbaiki strategi belajar.",
  },
];

export interface Stat {
  /** Placeholder value string. Real numbers are NOT yet available. */
  value: string;
  label: string;
}

/**
 * PLACEHOLDER statistics. Real achievement numbers (mentee lulus PTN, %,
 * jumlah alumni/tutor) are NOT available yet — these are intentionally shown as
 * "data menyusul" and MUST be replaced with confirmed figures before launch.
 * TODO: Replace with real, verified statistics from the RUBELA team.
 */
export const stats: Stat[] = [
  { value: "Data menyusul", label: "Mentee terbimbing" },
  { value: "Data menyusul", label: "Tutor & relawan" },
  { value: "Data menyusul", label: "Try out terselenggara" },
  { value: "Nasional", label: "Jangkauan wilayah" },
];

/**
 * Teacher, facility, and testimonial data now live in dedicated content modules
 * so items can be added without touching the UI, and so the homepage sections
 * and the dedicated `/pengajar`, `/fasilitas`, and `/testimoni` pages share a
 * SINGLE source of truth. Re-exported here for backward compatibility with the
 * existing homepage section components.
 */
export type { TeacherProfile } from "@/content/teachers";
export { teachers } from "@/content/teachers";
export type { FacilityItem } from "@/content/facilities";
export type { FacilityItem as Facility } from "@/content/facilities";
export { facilities } from "@/content/facilities";
export type { Testimonial } from "@/content/testimonials";
export { testimonials } from "@/content/testimonials";

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "Apa itu RUBELA?",
    answer:
      "RUBELA (Ruang Belajar UTBK Indonesia) adalah bimbingan belajar UTBK non-profit yang diselenggarakan online dengan jangkauan nasional, berbasis di Depok, Jawa Barat.",
  },
  {
    question: "Siapa yang bisa bergabung?",
    answer:
      "Program ditujukan untuk siswa kelas 12 SMA/SMK/MA, serta peserta gap-year dan semi gap-year (hingga tiga tahun setelah lulus) yang ingin menyiapkan UTBK.",
  },
  {
    question: "Apakah bimbingan RUBELA berbayar?",
    answer:
      "RUBELA gratis untuk kelompok kurang mampu dan rentan, sedangkan peserta dari kalangan ekonomi menengah ke atas berkontribusi. Rincian biaya diinformasikan langsung oleh tim. (TODO: konfirmasi detail biaya.)",
  },
  {
    question: "Bagaimana cara belajar di RUBELA?",
    answer:
      "Pembelajaran berlangsung daring melalui Zoom Meetings atau Google Meet, dengan sesi rutin setiap hari, materi terstruktur, latihan, serta try out dan evaluasi berkala.",
  },
  {
    question: "Bagaimana cara mendaftar?",
    answer:
      "Alur bergabung meliputi pengisian administrasi dan pakta integritas, wawancara daring, lalu simulasi kelas daring. Jadwal pendaftaran diumumkan melalui Instagram @rubelautbk.",
  },
];
