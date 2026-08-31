/**
 * RUBELA — Homepage content.
 *
 * Single source of truth for the marketing copy shown on the homepage. Only
 * facts confirmed by the RUBELA team / reference document are stated as real.
 * Anything not yet confirmed is clearly marked `TODO` / `PLACEHOLDER` and MUST
 * NOT be fabricated (statistics, testimonials, named teacher bios, prices,
 * gallery photos, registration URL).
 */

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
}

/**
 * Curated subset of RUBELA's programs for the homepage. The full catalogue can
 * be added on a dedicated Program page later.
 */
export const featuredPrograms: ProgramItem[] = [
  {
    icon: "calendar",
    name: "Kelas Intensif Online",
    description:
      "Kelas daring rutin setiap hari bersama tutor, dengan materi terstruktur, PPT, serta latihan dan penilaian berkala.",
    tag: "Kelas rutin",
  },
  {
    icon: "target",
    name: "Try Out Akbar",
    description:
      "Simulasi UTBK skala nasional dengan sistem menyerupai ujian asli, dilengkapi pembahasan dan analisis hasil.",
    tag: "Simulasi",
  },
  {
    icon: "chart",
    name: "Try Out Mini",
    description:
      "Try out rutin berskala kecil sebagai alat diagnostik untuk memetakan perkembangan belajar secara berkala.",
    tag: "Diagnostik",
  },
  {
    icon: "award",
    name: "Webinar Indonesia Beasiswa (WIB)",
    description:
      "Webinar seputar strategi memburu beasiswa dalam dan luar negeri langsung dari narasumber berpengalaman.",
    tag: "Beasiswa",
  },
  {
    icon: "compass",
    name: "Coaching Motivasi & Mental",
    description:
      "Pendampingan motivasi dan persiapan mental agar mentee tetap tangguh dan fokus sepanjang persiapan UTBK.",
    tag: "Pendampingan",
  },
  {
    icon: "users",
    name: "Peer Help & Sahabat Belajar",
    description:
      "Belajar bersama teman sebaya dan pendampingan emosional agar tidak ada mentee yang berjuang sendirian.",
    tag: "Komunitas",
  },
];

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

export interface TeacherProfile {
  /** Placeholder name — real named bios need publication consent. */
  name: string;
  subject: string;
  bio: string;
}

/**
 * PLACEHOLDER teacher profiles. No named public teacher bios exist yet, and
 * internal pengurus names must not be published as marketing without consent.
 * TODO: Replace with real, consented tutor profiles (name, subject, photo).
 */
export const teachers: TeacherProfile[] = [
  {
    name: "Tutor RUBELA",
    subject: "Tes Potensi Skolastik",
    bio: "Profil tutor akan ditampilkan setelah data dan persetujuan publikasi tersedia.",
  },
  {
    name: "Tutor RUBELA",
    subject: "Literasi Bahasa Indonesia & Inggris",
    bio: "Profil tutor akan ditampilkan setelah data dan persetujuan publikasi tersedia.",
  },
  {
    name: "Tutor RUBELA",
    subject: "Penalaran Matematika",
    bio: "Profil tutor akan ditampilkan setelah data dan persetujuan publikasi tersedia.",
  },
];

export interface Facility {
  icon: IconName;
  title: string;
  description: string;
}

export const facilities: Facility[] = [
  {
    icon: "presentation",
    title: "Kelas virtual interaktif",
    description:
      "Ruang kelas daring via Zoom/Google Meet dengan materi presentasi yang disiapkan tutor.",
  },
  {
    icon: "book",
    title: "Bank soal & try out",
    description:
      "Kumpulan latihan dan try out bergaya UTBK lengkap dengan pembahasan.",
  },
  {
    icon: "chat",
    title: "Konseling & pendampingan",
    description:
      "Dukungan konseling dan komunitas Sahabat Belajar untuk menjaga semangat mentee.",
  },
  {
    icon: "award",
    title: "Program beasiswa & webinar",
    description:
      "Akses webinar pendidikan gratis dan bimbingan beasiswa dari tutor berpengalaman.",
  },
];

export interface Testimonial {
  /** Placeholder attribution — no real testimonials collected yet. */
  name: string;
  role: string;
  quote: string;
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
  },
  {
    name: "Mentee RUBELA",
    role: "Alumni bimbingan (contoh)",
    quote:
      "Testimoni asli dari mentee akan ditampilkan di sini setelah dikumpulkan dan mendapat persetujuan.",
  },
  {
    name: "Mentee RUBELA",
    role: "Alumni bimbingan (contoh)",
    quote:
      "Testimoni asli dari mentee akan ditampilkan di sini setelah dikumpulkan dan mendapat persetujuan.",
  },
];

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
