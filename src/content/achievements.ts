/**
 * RUBELA — Prestasi / pencapaian (single source of truth).
 *
 * Drives the dedicated `/prestasi` page via the shared `AchievementCard`. To
 * add an achievement, append a new {@link AchievementItem} below — no UI
 * changes required.
 *
 * FACTUAL POLICY (important): the reference document contains NO concrete
 * achievement data (no alumni-admitted numbers, no award records, no
 * statistics). Therefore every {@link AchievementItem} below is a clearly
 * marked PLACEHOLDER (`placeholder: true`, "data menyusul"). Do NOT fabricate
 * statistics or claims.
 *
 * Separately, the document does describe internal RECOGNITION CATEGORIES (forms
 * of appreciation RUBELA gives), which are honestly presented via
 * {@link recognitionCategories} as program features — NOT as earned accolades.
 */

import type { IconName } from "@/content/home";

export interface AchievementItem {
  icon: IconName;
  /** Headline metric or title. Placeholder shows "Data menyusul". */
  value: string;
  /** What the achievement describes. */
  label: string;
  /** Short supporting description. */
  description: string;
  /** Whether this is a clearly-marked placeholder (real data unavailable). */
  placeholder: boolean;
}

/**
 * PLACEHOLDER achievements. Real, verified achievement data is NOT available.
 * TODO: Replace with confirmed statistics / records from the RUBELA team.
 */
export const achievements: AchievementItem[] = [
  {
    icon: "users",
    value: "Data menyusul",
    label: "Mentee terbimbing",
    description:
      "Jumlah mentee yang telah mengikuti bimbingan akan ditampilkan setelah data terkonfirmasi.",
    placeholder: true,
  },
  {
    icon: "target",
    value: "Data menyusul",
    label: "Mentee lolos PTN",
    description:
      "Capaian kelulusan mentee ke perguruan tinggi negeri akan ditampilkan setelah data tersedia.",
    placeholder: true,
  },
  {
    icon: "chart",
    value: "Data menyusul",
    label: "Try out terselenggara",
    description:
      "Rekap penyelenggaraan try out dan evaluasi akan dilengkapi seiring bertambahnya data.",
    placeholder: true,
  },
];

export interface RecognitionCategory {
  icon: IconName;
  title: string;
  description: string;
}

/**
 * Internal recognition categories — bentuk apresiasi yang diberikan RUBELA
 * kepada tutor dan mentee. Disajikan sebagai fitur program (bukan penghargaan
 * yang telah diraih RUBELA secara publik), sesuai dengan dokumen referensi.
 */
export const recognitionCategories: RecognitionCategory[] = [
  {
    icon: "award",
    title: "Tutor Terbaik",
    description:
      "Apresiasi bagi tutor yang menunjukkan dedikasi dan kualitas pengajaran terbaik.",
  },
  {
    icon: "sparkles",
    title: "Mentee Terbaik",
    description:
      "Penghargaan bagi mentee dengan pencapaian belajar menonjol sepanjang program.",
  },
  {
    icon: "heart",
    title: "Mentee Inspiratif",
    description:
      "Apresiasi bagi mentee yang menjadi inspirasi bagi teman-teman belajarnya.",
  },
  {
    icon: "shield",
    title: "Mentee Terdisiplin",
    description:
      "Penghargaan bagi mentee dengan kedisiplinan dan konsistensi belajar tertinggi.",
  },
  {
    icon: "chart",
    title: "Mentee Paling Progresif",
    description:
      "Apresiasi bagi mentee dengan perkembangan belajar paling pesat selama program.",
  },
  {
    icon: "target",
    title: "Special Recognition Award",
    description:
      "Penghargaan khusus untuk kontribusi atau pencapaian istimewa di luar kategori lain.",
  },
];
