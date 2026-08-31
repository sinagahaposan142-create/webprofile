/**
 * RUBELA — Fasilitas (single source of truth).
 *
 * Drives BOTH the homepage `Facilities` section (curated subset) and the
 * dedicated `/fasilitas` page (full list) via the shared `FacilityCard`. To add
 * a facility, append a new {@link FacilityItem} below — no UI changes required.
 *
 * FACTUAL POLICY: every entry here is a real facility/feature RUBELA offers, as
 * supported by the reference document (online classes, structured materials,
 * bank soal & try out, recordings, e-book, learning platform + login access,
 * counseling, dashboard nilai & evaluation, attendance system, webinars,
 * certificates/recognition). Facility PHOTOS do not exist, so the UI uses icons
 * + text (no fabricated photos).
 */

import type { IconName } from "@/content/home";

export interface FacilityItem {
  icon: IconName;
  title: string;
  description: string;
}

/**
 * Full list of document-supported facilities. Icon-based (no photos), grouped
 * loosely from learning delivery → materials → support → recognition.
 */
export const facilities: FacilityItem[] = [
  {
    icon: "presentation",
    title: "Kelas & ruang belajar virtual",
    description:
      "Kelas daring interaktif via Zoom Meetings atau Google Meet, dapat diikuti dari mana saja di Indonesia.",
  },
  {
    icon: "book",
    title: "Materi & modul terstruktur",
    description:
      "Materi dan modul belajar disusun mengikuti silabus resmi UTBK, terarah dari dasar hingga siap ujian.",
  },
  {
    icon: "target",
    title: "Bank soal & try out rutin",
    description:
      "Kumpulan latihan dan try out bergaya UTBK yang diselenggarakan rutin, lengkap dengan analisis hasil.",
  },
  {
    icon: "calendar",
    title: "Rekaman materi & kelas",
    description:
      "Rekaman sesi belajar dapat diputar ulang sehingga mentee bisa mengejar atau mengulang materi.",
  },
  {
    icon: "book",
    title: "E-book & bahan belajar",
    description:
      "Akses e-book dan bahan belajar pendukung untuk memperdalam pemahaman di luar jam kelas.",
  },
  {
    icon: "compass",
    title: "Platform pembelajaran & akun akses",
    description:
      "Platform pembelajaran online dengan akun login pribadi untuk mengakses seluruh layanan RUBELA.",
  },
  {
    icon: "chat",
    title: "Bimbingan & konseling",
    description:
      "Layanan bimbingan konseling bersama psikolog/konselor untuk menjaga kesehatan mental selama persiapan.",
  },
  {
    icon: "chart",
    title: "Dashboard nilai & evaluasi",
    description:
      "Dashboard nilai dan sistem evaluasi untuk memantau perkembangan belajar mentee secara berkala.",
  },
  {
    icon: "shield",
    title: "Sistem kehadiran",
    description:
      "Sistem kehadiran yang membantu menjaga konsistensi dan kedisiplinan mengikuti kelas.",
  },
  {
    icon: "award",
    title: "Webinar pendidikan & beasiswa",
    description:
      "Webinar pendidikan dan bimbingan beasiswa terbuka untuk mendukung rencana studi lanjut mentee.",
  },
  {
    icon: "sparkles",
    title: "Sertifikat & penghargaan",
    description:
      "Sertifikat serta bentuk penghargaan sebagai apresiasi atas partisipasi dan pencapaian mentee.",
  },
];

/**
 * Curated subset for the homepage `Facilities` section, so the homepage and the
 * `/fasilitas` page share a single source of truth without drifting.
 */
export const featuredFacilities: FacilityItem[] = facilities.slice(0, 4);
