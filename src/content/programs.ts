/**
 * RUBELA — Program catalogue (single source of truth).
 *
 * This module drives BOTH the `/program` overview page and the dynamic
 * `/program/[slug]` detail routes. The system is intentionally slug-driven and
 * scalable: to publish a new program, append a new {@link Program} entry to the
 * `programs` array below — the overview grid, static params, sitemap, and the
 * detail page will pick it up automatically. No new files are required.
 *
 * FACTUAL POLICY (important): RUBELA is a UTBK-only, non-profit bimbel for
 * grade-12 SMA/SMK/MA students plus gap-year / semi gap-year peserta (up to 3
 * years after graduation). There is NO SD / SMP / general-SMA program in the
 * reference material, so none are invented here. Only programs supported by the
 * reference document are listed as real. Anything not yet confirmed (detailed
 * silabus, prices, batch schedules, registration form URL, statistics) is left
 * as a clearly-marked placeholder / TODO and MUST NOT be fabricated.
 */

import type { IconName } from "@/content/home";

export interface ProgramFaqItem {
  question: string;
  answer: string;
}

export interface Program {
  /** URL slug, e.g. `kelas-intensif`. Used by `/program/[slug]`. */
  slug: string;
  /** Full program name. */
  name: string;
  /** Icon key resolved by the shared `Icon` component. */
  icon: IconName;
  /** Short category label shown on cards. */
  tag: string;
  /** One-line summary for cards, overview grid, and meta description. */
  summary: string;
  /** Hero eyebrow shown above the title on the detail page. */
  eyebrow: string;
  /** Longer narrative description (1–2 paragraphs worth). */
  description: string;
  /** Who the program is for. */
  targetPeserta: string[];
  /** Learning goals / tujuan pembelajaran. */
  tujuan: string[];
  /**
   * Materi / kurikulum. Detailed silabus per program is NOT available in the
   * reference document, so `curriculumAvailable` is `false` for every program
   * and the UI renders a clearly-marked placeholder instead of invented topics.
   * High-level, document-supported notes may live in `curriculumNote`.
   * TODO: Replace with the real, confirmed silabus per program when available.
   */
  curriculumAvailable: boolean;
  curriculumNote?: string;
  /**
   * Detailed silabus/topics, ONLY when `curriculumAvailable` is `true`. Left
   * unset for now because per-program silabus is not in the reference material.
   * TODO: Populate with the real, confirmed curriculum per program.
   */
  curriculum?: string[];
  /** Method of learning specific to (or shared by) this program. */
  metode: string[];
  /** Concrete benefits a mentee gains. */
  benefit: string[];
  /** Facilities / fasilitas provided. */
  fasilitas: { icon: IconName; title: string; description: string }[];
  /** Program-specific FAQ (composed with shared join-flow FAQs in the UI). */
  faqs?: ProgramFaqItem[];
}

/**
 * Shared "alur pembelajaran / bergabung" steps (SNPMB-style selection flow).
 * Kept separate so every detail page shows the same, document-supported flow.
 */
export interface AlurStep {
  title: string;
  description: string;
}

export const alurPembelajaran: AlurStep[] = [
  {
    title: "Administrasi & Pakta Integritas",
    description:
      "Calon mentee mengisi formulir administrasi melalui Google Form dan menyetujui pakta integritas sebagai bentuk komitmen belajar.",
  },
  {
    title: "Wawancara daring",
    description:
      "Sesi wawancara online untuk mengenal motivasi, kebutuhan, dan kesiapan calon mentee mengikuti program.",
  },
  {
    title: "Simulasi kelas daring",
    description:
      "Mencoba langsung suasana kelas RUBELA secara daring agar mentee memahami ritme dan metode belajar sebelum resmi bergabung.",
  },
];

/**
 * Facts shared by most programs. Reused to keep detail pages consistent without
 * duplicating strings. Individual programs may override or extend these.
 */
const sharedTarget: string[] = [
  "Pelajar kelas 12 SMA/SMK/MA sederajat yang bersekolah di Indonesia.",
  "Peserta gap-year dan semi gap-year hingga tiga tahun setelah lulus.",
  "Mentee yang bertekad untuk belajar, tumbuh, dan berjuang bersama.",
];

const sharedMetode: string[] = [
  "Belajar daring melalui Zoom Meetings atau Google Meet, bisa diikuti dari mana saja di Indonesia.",
  "Sesi rutin hingga 7 hari dalam seminggu dengan durasi sekitar 90 menit per pertemuan.",
  "Tutor menyiapkan materi presentasi, memberi latihan dan penilaian, serta try out dan evaluasi berkala.",
];

const sharedFasilitas: Program["fasilitas"] = [
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
      "Latihan dan try out bergaya UTBK lengkap dengan pembahasan untuk mengasah kesiapan.",
  },
  {
    icon: "chat",
    title: "Konseling & pendampingan",
    description:
      "Dukungan konseling serta komunitas Sahabat Belajar untuk menjaga semangat mentee.",
  },
];

export const programs: Program[] = [
  {
    slug: "kelas-intensif",
    name: "Kelas Intensif Online 7 Hari",
    icon: "calendar",
    tag: "Kelas rutin",
    summary:
      "Kelas daring rutin setiap hari bersama tutor dengan materi, latihan soal, dan diskusi UTBK per subtest.",
    eyebrow: "Program inti · Kelas rutin",
    description:
      "Kelas Intensif Online adalah program inti RUBELA berupa kelas daring yang berlangsung hingga tujuh hari dalam seminggu. Pada setiap pertemuan berdurasi sekitar 90 menit, tutor menyampaikan materi, membahas soal latihan, dan memimpin diskusi soal UTBK untuk tiap subtest. Fokusnya adalah memperdalam pemahaman konsep sekaligus melatih kecepatan dan ketepatan mengerjakan soal.",
    targetPeserta: sharedTarget,
    tujuan: [
      "Memperdalam pemahaman konsep pada tiap subtest UTBK.",
      "Melatih pengerjaan soal secara terstruktur dan konsisten.",
      "Menguasai strategi dan trik cepat menghadapi soal ujian.",
    ],
    curriculumAvailable: false,
    curriculumNote:
      "Materi disusun per topik dan jenjang kesulitan mengikuti silabus resmi UTBK yang mencakup tujuh subtest. Rincian kurikulum per pertemuan menyusul.",
    metode: sharedMetode,
    benefit: [
      "Momentum belajar terjaga berkat sesi rutin setiap hari.",
      "Bimbingan langsung dari tutor lulusan PTN favorit.",
      "Latihan dan penilaian berkala untuk memantau perkembangan.",
    ],
    fasilitas: sharedFasilitas,
    faqs: [
      {
        question: "Berapa lama durasi setiap pertemuan?",
        answer:
          "Setiap pertemuan berlangsung sekitar 90 menit dan diadakan secara rutin hingga tujuh hari dalam seminggu.",
      },
    ],
  },
  {
    slug: "try-out-akbar",
    name: "Try Out Akbar",
    icon: "target",
    tag: "Simulasi",
    summary:
      "Evaluasi skala nasional dengan sistem penilaian menyerupai UTBK, lengkap dengan pembahasan dan analisis performa.",
    eyebrow: "Simulasi · Skala nasional",
    description:
      "Try Out Akbar adalah simulasi UTBK berskala nasional dengan sistem penilaian yang dibuat menyerupai ujian asli. Peserta memperoleh pembahasan soal serta analisis performa sehingga dapat mengukur kesiapan secara nasional dalam suasana yang realistis dan kompetitif.",
    targetPeserta: sharedTarget,
    tujuan: [
      "Mengukur kesiapan menghadapi UTBK dalam skala nasional.",
      "Memberikan simulasi ujian yang realistis dengan tekanan waktu.",
      "Menyediakan analisis nilai yang akurat untuk menyusun strategi.",
      "Mendorong motivasi belajar yang kompetitif dan terukur.",
    ],
    curriculumAvailable: false,
    curriculumNote:
      "Komposisi soal mengikuti pola tujuh subtest UTBK. Rincian kisi-kisi tiap gelombang try out menyusul.",
    metode: [
      "Diselenggarakan daring dengan sistem penilaian menyerupai UTBK.",
      "Peserta mengerjakan soal dalam batas waktu yang menyerupai ujian asli.",
      "Setiap sesi dilengkapi pembahasan soal dan analisis performa.",
    ],
    benefit: [
      "Gambaran posisi kesiapan dibanding peserta se-Indonesia.",
      "Analisis kekuatan dan kelemahan sebagai dasar perbaikan.",
      "Terbiasa dengan tekanan dan ritme ujian sesungguhnya.",
    ],
    fasilitas: sharedFasilitas,
  },
  {
    slug: "try-out-mini",
    name: "Try Out Mini",
    icon: "chart",
    tag: "Diagnostik",
    summary:
      "Try out rutin berskala kecil sebagai sarana diagnostik kemajuan mentee dengan pembahasan langsung.",
    eyebrow: "Diagnostik · Rutin",
    description:
      "Try Out Mini adalah try out rutin berskala lebih kecil yang berfungsi sebagai sarana diagnostik kemajuan mentee. Formatnya membiasakan peserta dengan pola soal dan tekanan waktu UTBK, dan setiap sesi disertai pembahasan langsung agar mentee dapat segera memahami kesalahannya.",
    targetPeserta: sharedTarget,
    tujuan: [
      "Memetakan perkembangan belajar mentee secara berkala.",
      "Membiasakan mentee dengan format dan tekanan waktu UTBK.",
      "Memberi umpan balik cepat melalui pembahasan langsung.",
    ],
    curriculumAvailable: false,
    curriculumNote:
      "Soal disusun mengikuti pola subtest UTBK. Rincian jadwal dan cakupan tiap sesi menyusul.",
    metode: [
      "Diselenggarakan daring secara rutin dalam skala kecil.",
      "Pembahasan diberikan langsung setelah sesi try out.",
      "Hasil digunakan sebagai bahan diagnostik perkembangan mentee.",
    ],
    benefit: [
      "Pantauan kemajuan yang lebih sering dan terukur.",
      "Kesempatan memperbaiki kesalahan lebih dini.",
      "Kebiasaan mengerjakan soal dalam batas waktu.",
    ],
    fasilitas: sharedFasilitas,
  },
  {
    slug: "webinar-beasiswa",
    name: "Webinar Indonesia Beasiswa (WIB)",
    icon: "award",
    tag: "Beasiswa",
    summary:
      "Webinar online seputar beasiswa dalam dan luar negeri bersama pembicara di bidang beasiswa, dengan tema berbeda tiap sesi.",
    eyebrow: "Webinar · Beasiswa",
    description:
      "Webinar Indonesia Beasiswa (WIB) adalah webinar online yang membahas beragam beasiswa dalam dan luar negeri. Setiap sesi mengangkat tema berbeda dan menghadirkan pembicara yang berpengalaman di bidang beasiswa, sehingga peserta memperoleh gambaran nyata tentang peluang dan strategi meraihnya.",
    targetPeserta: sharedTarget,
    tujuan: [
      "Membuka wawasan tentang peluang beasiswa dalam dan luar negeri.",
      "Memberi strategi mempersiapkan diri untuk mendaftar beasiswa.",
      "Menghubungkan peserta dengan narasumber yang berpengalaman.",
    ],
    curriculumAvailable: false,
    curriculumNote:
      "Tema tiap sesi webinar diumumkan menjelang acara. Jadwal dan daftar pembicara menyusul.",
    metode: [
      "Diselenggarakan daring dalam format webinar bertema.",
      "Menghadirkan pembicara yang berpengalaman di bidang beasiswa.",
      "Terbuka dan gratis sesuai semangat non-profit RUBELA.",
    ],
    benefit: [
      "Informasi beasiswa yang terkurasi dan tepercaya.",
      "Kesempatan bertanya langsung kepada narasumber.",
      "Perencanaan studi lanjut yang lebih matang.",
    ],
    fasilitas: sharedFasilitas,
  },
  {
    slug: "webinar-pendidikan",
    name: "Webinar Pendidikan",
    icon: "presentation",
    tag: "Wawasan",
    summary:
      "Webinar bersama pakar dan akademisi membahas isu pendidikan, strategi belajar, dan tren PTN untuk perencanaan studi.",
    eyebrow: "Webinar · Wawasan",
    description:
      "Webinar Pendidikan menghadirkan pakar dan akademisi untuk membahas isu pendidikan terkini, strategi belajar, serta tren perguruan tinggi negeri. Peserta memperoleh insight yang berguna untuk merencanakan studi dan kariernya secara lebih terarah.",
    targetPeserta: sharedTarget,
    tujuan: [
      "Memberi wawasan terkini seputar dunia pendidikan dan PTN.",
      "Membekali peserta dengan strategi belajar yang efektif.",
      "Membantu perencanaan studi dan karier jangka panjang.",
    ],
    curriculumAvailable: false,
    curriculumNote:
      "Tema dan narasumber tiap sesi diumumkan menjelang acara. Jadwal menyusul.",
    metode: [
      "Diselenggarakan daring dalam format webinar bertema.",
      "Menghadirkan pakar atau akademisi sesuai topik.",
      "Terbuka bagi mentee sesuai semangat non-profit RUBELA.",
    ],
    benefit: [
      "Perspektif langsung dari pakar dan akademisi.",
      "Strategi belajar yang aplikatif.",
      "Bekal perencanaan studi dan karier.",
    ],
    fasilitas: sharedFasilitas,
  },
  {
    slug: "coaching-mental",
    name: "Coaching Motivasi & Mental Preparation",
    icon: "compass",
    tag: "Pendampingan",
    summary:
      "Pembinaan mental, motivasi, dan kesiapan emosional menjelang UTBK agar mentee mampu mengelola stres dan berpikir positif.",
    eyebrow: "Pendampingan · Mental",
    description:
      "Coaching Motivasi & Mental Preparation adalah pembinaan yang berfokus pada kesiapan mental, motivasi, dan emosional mentee menjelang UTBK. Program ini membantu mentee mengelola stres dan kecemasan serta membangun pola pikir positif agar tetap tangguh sepanjang persiapan.",
    targetPeserta: sharedTarget,
    tujuan: [
      "Membangun motivasi dan pola pikir positif menjelang UTBK.",
      "Membantu mentee mengelola stres dan kecemasan.",
      "Menjaga kesiapan emosional agar tetap fokus dan tangguh.",
    ],
    curriculumAvailable: false,
    curriculumNote:
      "Sesi dirancang sesuai kebutuhan mentee. Rincian rangkaian sesi menyusul.",
    metode: [
      "Diselenggarakan daring dalam sesi pendampingan.",
      "Menekankan pengelolaan stres, motivasi, dan pola pikir positif.",
      "Melengkapi program akademik agar persiapan lebih seimbang.",
    ],
    benefit: [
      "Ketahanan mental menghadapi tekanan ujian.",
      "Motivasi belajar yang lebih terjaga.",
      "Keseimbangan antara persiapan akademik dan emosional.",
    ],
    fasilitas: sharedFasilitas,
  },
  {
    slug: "bimbingan-konseling",
    name: "Layanan Bimbingan Konseling",
    icon: "chat",
    tag: "Konseling",
    summary:
      "Pendampingan bersama psikolog atau konselor untuk mengelola stres, manajemen waktu, dan strategi belajar sesuai gaya belajar.",
    eyebrow: "Pendampingan · Konseling",
    description:
      "Layanan Bimbingan Konseling menghadirkan psikolog atau konselor untuk membantu mentee mengelola stres, mengatur waktu, serta menemukan strategi belajar yang sesuai dengan gaya belajarnya. Layanan ini memastikan mentee tidak berjuang sendirian selama masa persiapan.",
    targetPeserta: sharedTarget,
    tujuan: [
      "Membantu mentee mengelola stres selama persiapan UTBK.",
      "Meningkatkan kemampuan manajemen waktu belajar.",
      "Menyesuaikan strategi belajar dengan gaya belajar mentee.",
    ],
    curriculumAvailable: false,
    curriculumNote:
      "Sesi bersifat personal sesuai kebutuhan mentee. Mekanisme penjadwalan menyusul.",
    metode: [
      "Diselenggarakan daring bersama psikolog atau konselor.",
      "Bersifat personal dan menyesuaikan kebutuhan mentee.",
      "Melengkapi program akademik dan coaching mental.",
    ],
    benefit: [
      "Dukungan profesional untuk kesehatan mental.",
      "Strategi belajar yang lebih personal dan efektif.",
      "Manajemen waktu yang lebih tertata.",
    ],
    fasilitas: sharedFasilitas,
  },
  {
    slug: "bimbingan-beasiswa",
    name: "Bimbingan Beasiswa",
    icon: "award",
    tag: "Beasiswa",
    summary:
      "Sesi khusus membahas syarat dan simulasi wawancara beasiswa, dibimbing tutor yang pernah meraih beasiswa.",
    eyebrow: "Pendampingan · Beasiswa",
    description:
      "Bimbingan Beasiswa adalah sesi khusus yang membahas syarat pendaftaran serta simulasi wawancara beasiswa. Mentee dibimbing langsung oleh tutor yang pernah meraih beasiswa, sehingga persiapan menjadi lebih terarah dan realistis.",
    targetPeserta: sharedTarget,
    tujuan: [
      "Memahami syarat dan proses pendaftaran beasiswa.",
      "Berlatih menghadapi wawancara beasiswa melalui simulasi.",
      "Belajar langsung dari tutor yang pernah meraih beasiswa.",
    ],
    curriculumAvailable: false,
    curriculumNote:
      "Materi disesuaikan dengan jenis beasiswa yang dituju. Rincian sesi menyusul.",
    metode: [
      "Diselenggarakan daring dalam sesi bimbingan.",
      "Mencakup pembahasan syarat dan simulasi wawancara.",
      "Dibimbing tutor yang berpengalaman meraih beasiswa.",
    ],
    benefit: [
      "Persiapan berkas dan wawancara beasiswa yang lebih matang.",
      "Wawasan langsung dari penerima beasiswa.",
      "Peluang beasiswa yang lebih terbuka.",
    ],
    fasilitas: sharedFasilitas,
  },
];

/** Map for O(1) slug lookup by the dynamic detail route. */
export const programsBySlug: Record<string, Program> = Object.fromEntries(
  programs.map((program) => [program.slug, program]),
);

/** All known slugs — used by `generateStaticParams` and the sitemap. */
export const programSlugs: string[] = programs.map((program) => program.slug);

/** Resolve a program by slug, or `undefined` for unknown slugs. */
export function getProgramBySlug(slug: string): Program | undefined {
  return programsBySlug[slug];
}
