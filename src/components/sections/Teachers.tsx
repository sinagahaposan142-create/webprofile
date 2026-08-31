import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card, CardBody } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { SectionHeader } from "./SectionHeader";
import { teachers } from "@/content/home";

/**
 * "Profil pengajar" section.
 *
 * No named public tutor bios exist yet and pengurus names must not be published
 * without consent, so profiles render as consistent placeholders with an
 * avatar glyph instead of photos.
 * TODO: Replace `teachers` in content/home.ts with real, consented profiles.
 */
export function Teachers() {
  return (
    <Section muted spacing="default" aria-labelledby="teachers-heading">
      <Container className="flex flex-col gap-12">
        <SectionHeader
          eyebrow="Profil pengajar"
          title="Dibimbing tutor yang paham perjuanganmu"
          description="Tutor RUBELA adalah lulusan PTN favorit yang dilatih berkala. Profil lengkap akan ditampilkan setelah tersedia dan disetujui untuk dipublikasikan."
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher, index) => (
            <Reveal as="li" key={`${teacher.subject}-${index}`} delay={(index % 3) * 80}>
              <Card elevation="sm" className="h-full">
                <CardBody className="flex h-full flex-col items-center gap-3 text-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary-100 text-secondary-700">
                    <Icon name="users" width={32} height={32} />
                  </span>
                  <div className="flex flex-col items-center gap-1">
                    <Heading as="h3" size="sm" className="text-lg">
                      {teacher.name}
                    </Heading>
                    <Badge variant="primary">{teacher.subject}</Badge>
                  </div>
                  <p className="text-sm text-neutral-600">{teacher.bio}</p>
                </CardBody>
              </Card>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
