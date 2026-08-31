/**
 * RUBELA — Pengajar / tutor profiles (single source of truth).
 *
 * Drives BOTH the homepage `Teachers` section and the dedicated `/pengajar`
 * page via the shared `TeacherCard`. To publish a tutor profile, append a new
 * {@link TeacherProfile} entry below — no UI changes are required.
 *
 * FACTUAL POLICY (important): the reference document describes tutor
 * QUALIFICATIONS in general (lulusan PTN favorit / top-10 universities,
 * berpengalaman mengajar, menguasai maksimal 2 dari 7 subtest UTBK, memiliki
 * nilai UTBK, dilatih berkala) but provides NO named public teacher profiles
 * with bios/photos, and internal pengurus names must NOT be published as public
 * marketing without consent. Therefore every profile below is a clearly-marked
 * PLACEHOLDER (`placeholder: true`, generic name, no photo). Do NOT fabricate
 * specific real people. Replace with real, consented profiles when available.
 */

export interface TeacherProfile {
  /** Placeholder name — real named bios need publication consent. */
  name: string;
  /** Role / posisi in the program, e.g. "Tutor UTBK". */
  position: string;
  /** Subtest / bidang the tutor focuses on. */
  subject: string;
  /** Experience blurb (kept general per the reference document). */
  experience: string;
  /** Short bio / deskripsi singkat. */
  bio: string;
  /**
   * Photo source (relative to `/public`) when a consented photo exists. Left
   * `undefined` renders a consistent avatar placeholder instead of a photo.
   * TODO: Add real, consented tutor photos.
   */
  photo?: string;
  /** Whether this is a clearly-marked placeholder profile. */
  placeholder: boolean;
}

/**
 * The honest, document-supported framing shown around the placeholder profiles
 * so the page communicates real tutor qualifications without inventing people.
 */
export const teacherQualifications: string[] = [
  "Lulusan PTN favorit / universitas top di Indonesia",
  "Berpengalaman mengajar dan dilatih secara berkala",
  "Menguasai maksimal dua dari tujuh subtest UTBK agar fokus dan mendalam",
  "Memiliki nilai UTBK sebagai bukti kompetensi di bidangnya",
];

/**
 * PLACEHOLDER teacher profiles. No named public tutor bios exist yet.
 * TODO: Replace with real, consented profiles (name, position, subject, photo).
 */
export const teachers: TeacherProfile[] = [
  {
    name: "Profil menyusul",
    position: "Tutor UTBK",
    subject: "Tes Potensi Skolastik",
    experience: "Lulusan PTN favorit, dilatih berkala",
    bio: "Profil tutor akan ditampilkan setelah data dan persetujuan publikasi tersedia.",
    placeholder: true,
  },
  {
    name: "Profil menyusul",
    position: "Tutor UTBK",
    subject: "Literasi Bahasa Indonesia & Inggris",
    experience: "Lulusan PTN favorit, dilatih berkala",
    bio: "Profil tutor akan ditampilkan setelah data dan persetujuan publikasi tersedia.",
    placeholder: true,
  },
  {
    name: "Profil menyusul",
    position: "Tutor UTBK",
    subject: "Penalaran Matematika",
    experience: "Lulusan PTN favorit, dilatih berkala",
    bio: "Profil tutor akan ditampilkan setelah data dan persetujuan publikasi tersedia.",
    placeholder: true,
  },
];
