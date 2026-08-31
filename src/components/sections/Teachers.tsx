import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { buttonClasses } from "@/components/ui/Button";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "./SectionHeader";
import { TeacherCard } from "./TeacherCard";
import { teachers } from "@/content/teachers";

/**
 * "Profil pengajar" section (homepage).
 *
 * Uses the shared `TeacherCard` and the shared `teachers` data source so the
 * homepage and the dedicated `/pengajar` page never drift out of sync. No named
 * public tutor bios exist yet, so profiles render as clearly-marked
 * placeholders. Shows a curated subset with a link to the full page.
 */
export function Teachers() {
  const featured = teachers.slice(0, 3);

  return (
    <Section muted spacing="default" aria-labelledby="teachers-heading">
      <Container className="flex flex-col gap-12">
        <SectionHeader
          eyebrow="Profil pengajar"
          title="Dibimbing tutor yang paham perjuanganmu"
          description="Tutor RUBELA adalah lulusan PTN favorit yang dilatih berkala. Profil lengkap akan ditampilkan setelah tersedia dan disetujui untuk dipublikasikan."
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((teacher, index) => (
            <Reveal
              as="li"
              key={`${teacher.subject}-${index}`}
              delay={(index % 3) * 80}
            >
              <TeacherCard teacher={teacher} />
            </Reveal>
          ))}
        </ul>
        <Reveal as="div" className="flex justify-center">
          <Link
            href="/pengajar"
            className={buttonClasses({ variant: "outline", size: "md" })}
          >
            Lihat semua pengajar
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
