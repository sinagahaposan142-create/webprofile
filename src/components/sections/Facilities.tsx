import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { SectionHeader } from "./SectionHeader";
import { facilities } from "@/content/home";

/** "Fasilitas" — what mentees get access to. */
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
          {facilities.map((facility, index) => (
            <Reveal
              as="li"
              key={facility.title}
              delay={index * 80}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-100 text-accent-700">
                <Icon name={facility.icon} />
              </span>
              <Heading as="h3" size="sm" className="text-lg">
                {facility.title}
              </Heading>
              <p className="text-sm text-neutral-600">{facility.description}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
