/**
 * RUBELA — "Tentang Kami" (About) page content.
 *
 * Single source of truth for the profile & identity storytelling page at
 * `/tentang-kami`. Only facts confirmed by the RUBELA team / reference document
 * are stated as real. Anything not yet confirmed is clearly marked
 * `PLACEHOLDER` / `TODO` and MUST NOT be fabricated (statistics, achievements,
 * a detailed milestone history, photos, the logo asset, or a full address).
 *
 * Reused data (to avoid duplication): the 11 keunggulan live in
 * `src/content/home.ts` (`advantages`), and the core values live in
 * `src/content/site.ts` (`siteConfig.coreValues`). Import those rather than
 * copying them here.
 */

import type { IconName } from "@/content/home";

/** Confirmed founding date (user-confirmed: 17 Oktober 2024). */
export const foundingDate = {
  iso: "2024-10-17",
  display: "17 Oktober 2024",
};

export interface AboutHero {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  /** Emotive philosophy quote used as the closing beat of the hero. */
  quote: string;
}

export const aboutHero: AboutHero = {
  eyebrow: "Tentang Kami",
  title: "Ruang belajar yang membuka",
  titleHighlight: "kesempatan menuju perguruan tinggi",
  description:
    "RUBELA (Ruang Belajar UTBK Indonesia) adalah bimbingan belajar UTBK non-profit yang hadir untuk menjembatani kesenjangan akses pendidikan — agar setiap pelajar kelas 12 punya kesempatan yang sama untuk belajar, tumbuh, dan berjuang bersama.",
  quote:
    "Setiap mentee yang terpilih bukan hanya karena cerdas, tetapi karena bertekad untuk belajar, tumbuh, dan berjuang bersama.",
};

/** "Tentang RUBELA" — identity paragraphs plus quick identity facts. */
export interface IdentityFact {
  label: string;
  value: string;
}

export const tentangRubela = {
  paragraphs: [
    "RUBELA adalah Bimbingan Belajar \u201cRuang Belajar\u201d UTBK Indonesia — sebuah organisasi non-formal dan non-profit yang berawal dari Project IKMA UI di SMAPAT. RUBELA diselenggarakan sepenuhnya secara daring dengan jangkauan nasional dan berkedudukan di Depok, Jawa Barat.",
    "Bersifat terbuka, gratis, kompeten, online, dan profesional, RUBELA hadir untuk mendampingi pelajar kelas 12 SMA/sederajat mempersiapkan UTBK masuk perguruan tinggi negeri. Program bimbingan gratis untuk kelompok kurang mampu, rentan, dan menuju menengah, sementara peserta dari kalangan menengah ke atas berkontribusi.",
  ],
  facts: [
    { label: "Nama lengkap", value: "Bimbingan Belajar Ruang Belajar UTBK Indonesia" },
    { label: "Sifat", value: "Non-formal & non-profit" },
    { label: "Berdiri", value: foundingDate.display },
    { label: "Kedudukan", value: "Depok, Jawa Barat" },
    { label: "Model belajar", value: "Online, jangkauan nasional" },
    { label: "Asal mula", value: "Project IKMA UI di SMAPAT" },
  ] satisfies IdentityFact[],
};

/** "Latar belakang" — the founding story. */
export const latarBelakang = {
  paragraphs: [
    "Pendidikan berperan krusial dalam membuka masa depan, namun banyak pelajar Indonesia terkendala melanjutkan ke perguruan tinggi — baik karena keterbatasan biaya, akses, maupun pendampingan.",
    "RUBELA hadir untuk menyediakan ruang dan kesempatan belajar bagi pelajar kelas 12 SMA/sederajat dalam mempersiapkan UTBK masuk PTN. Kami percaya setiap anak berpotensi sukses bila diberi kesempatan.",
    "Karena itu, RUBELA menyediakan program persiapan UTBK dengan biaya nol rupiah bagi mereka yang membutuhkan, sebagai upaya menjembatani kesenjangan akses pendidikan.",
  ],
};

/** "Visi" — official vision statement. */
export const visi =
  "Memberikan bimbingan belajar yang edukatif dan profesional dalam mempersiapkan peserta bimbingan untuk menghadapi ujian tes berbasis komputer masuk perguruan tinggi di Indonesia.";

/** "Misi" — the five official mission points. */
export const misi: string[] = [
  "Menyediakan materi belajar yang lengkap dan terstruktur.",
  "Memberikan bimbingan melalui tutor berpengalaman dan profesional.",
  "Melaksanakan simulasi dan latihan soal UTBK yang realistis.",
  "Menjadi organisasi dan bimbingan belajar yang suportif dan positif.",
  "Membangun generasi yang berwawasan dan bermimpi besar.",
];

/**
 * "Nilai-nilai" — short descriptions layered on top of the shared core values
 * (`siteConfig.coreValues`). Keyed by the value name so the UI can pair each
 * value with an icon and blurb without duplicating the value list.
 */
export interface CoreValueDetail {
  icon: IconName;
  description: string;
}

export const coreValueDetails: Record<string, CoreValueDetail> = {
  Profesionalisme: {
    icon: "shield",
    description:
      "Materi terstruktur, tutor terlatih, dan pengelolaan bimbingan yang serius menjaga kualitas di setiap sesi.",
  },
  Kepercayaan: {
    icon: "heart",
    description:
      "Lingkungan yang jujur, suportif, dan bebas menghakimi sehingga mentee nyaman bertumbuh bersama.",
  },
  "Orientasi pada Hasil": {
    icon: "target",
    description:
      "Try out, evaluasi, dan pendampingan diarahkan untuk membangun kompetensi serta kepercayaan diri menghadapi UTBK.",
  },
};

/** "Filosofi pendidikan" — logo philosophy as storytelling beats. */
export interface FilosofiItem {
  icon: IconName;
  title: string;
  description: string;
}

export const filosofiPendidikan: FilosofiItem[] = [
  {
    icon: "book",
    title: "Buku terbuka (hijau)",
    description:
      "Melambangkan sumber pengetahuan dan pembelajaran berkelanjutan. Warna hijau mewakili pertumbuhan, pembaruan, dan harapan.",
  },
  {
    icon: "users",
    title: "Tiga figur yang bertumbuh (biru)",
    description:
      "Menggambarkan perjalanan pendidikan dari tahap awal hingga mencapai puncak potensi. Warna biru mewakili kepercayaan, stabilitas, dan kedalaman ilmu.",
  },
  {
    icon: "sparkles",
    title: "Keseimbangan hijau & biru",
    description:
      "Perpaduan keduanya mencerminkan keseimbangan antara pertumbuhan pribadi dan stabilitas emosional dalam proses belajar.",
  },
];

/**
 * "Timeline / perjalanan".
 *
 * The only documented, hard milestone is the founding date. There is NO
 * documented multi-year milestone history, so the beats below combine that one
 * real milestone with clearly-labelled PLACEHOLDER items. The `placeholder`
 * flag drives an obvious "placeholder" style + note in the UI, and these items
 * are easy to edit/replace once the team confirms the real history.
 *
 * TODO: Replace placeholder milestones with real, confirmed history.
 */
export interface TimelineItem {
  /** Display date/period label. */
  date: string;
  title: string;
  description: string;
  /** When true, the UI marks this as an editable placeholder, not real history. */
  placeholder?: boolean;
}

export const timeline: TimelineItem[] = [
  {
    date: foundingDate.display,
    title: "RUBELA didirikan",
    description:
      "Berawal dari Project IKMA UI di SMAPAT, RUBELA resmi berdiri sebagai bimbingan belajar UTBK non-profit dengan jangkauan nasional.",
  },
  {
    date: "Selanjutnya",
    title: "Angkatan mentee & program berjalan",
    description:
      "Placeholder — tonggak perjalanan berikutnya (mis. angkatan mentee, try out, dan program) akan ditambahkan setelah datanya dikonfirmasi tim.",
    placeholder: true,
  },
];

/** "Keunggulan" — intro copy. The 11 items reuse `advantages` from home.ts. */
export const keunggulan = {
  eyebrow: "Keunggulan",
  title: "Mengapa memilih RUBELA",
  description:
    "Dari materi terstruktur hingga pendampingan mental, setiap layanan dirancang untuk mendukung perjalanan UTBK-mu.",
};
