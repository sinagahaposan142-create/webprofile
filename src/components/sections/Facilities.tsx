import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { buttonClasses } from "@/components/ui/Button";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "./SectionHeader";
import { FacilityCard } from "./FacilityCard";
import { featuredFacilities } from "@/content/facilities";

/**
 * "Fasilitas" section (homepage).
 *
 * Uses the shared `FacilityCard` and the shared facilities data source (curated
 * subset) so the homepage and the dedicated `/fasilitas` page stay in sync.
 */
export function Facilities() {
  return (
    <Section spacing="default" aria-labelledby="facilities-heading">
      <Container className="flex flex-col gap-12">
        <SectionHeader
          eyebrow="Fasilitas"
          title="Semua yang kamu butuhkan untuk siap UTBK"
          description="Dari kelas virtual hingga pendampingan mental, RUBELA menyediakan ekosistem belajar yang lengkap dan mendukung."
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredFacilities.map((facility, index) => (
            <Reveal as="li" key={facility.title} delay={index * 80}>
              <FacilityCard facility={facility} />
            </Reveal>
          ))}
        </ul>
        <Reveal as="div" className="flex justify-center">
          <Link
            href="/fasilitas"
            className={buttonClasses({ variant: "outline", size: "md" })}
          >
            Lihat semua fasilitas
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
