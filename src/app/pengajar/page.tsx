import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { TeacherCard, RegistrationCta } from "@/components/sections";
import { teachers, teacherQualifications } from "@/content/teachers";
import { createMetadata, siteUrl } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Pengajar",
  description:
    "Kenali tutor RUBELA — lulusan PTN favorit yang berpengalaman dan dilatih berkala untuk mendampingi persiapan UTBK-mu. Profil lengkap ditampilkan setelah tersedia dan disetujui.",
  path: "/pengajar",
});

/**
 * `/pengajar` — profil pengajar / tutor RUBELA.
 *
 * Grid maps over the shared `teachers` data source (`src/content/teachers.ts`)
 * using the reusable `TeacherCard`, so new profiles appear automatically once
 * added. No named public tutor bios exist yet, so profiles render as clearly
 * marked placeholders; the honest, document-supported tutor qualifications are
 * presented as the surrounding copy.
 */
export default function PengajarPage() {
  const breadcrumbItems = [
    { label: "Beranda", href: "/" },
    { label: "Pengajar" },
  ];

  const pageUrl = new URL("/pengajar", siteUrl).toString();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Pengajar", item: pageUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <Section
        spacing="compact"
        className="bg-gradient-to-b from-primary-50 via-background to-background"
        aria-labelledby="pengajar-heading"
      >
        <Container className="flex flex-col gap-6">
          <Breadcrumb items={breadcrumbItems} />
          <Reveal as="div" className="flex flex-col gap-4">
            <Badge variant="primary">Pengajar</Badge>
            <Heading
              as="h1"
              size="2xl"
              id="pengajar-heading"
              className="max-w-3xl"
            >
              Dibimbing tutor yang paham perjuanganmu
            </Heading>
            <p className="max-w-2xl text-lg text-neutral-600">
              Tutor RUBELA dipilih dengan cermat dan dilatih secara berkala agar
              dapat mengajar dengan efektif serta empatik. Profil lengkap setiap
              tutor akan ditampilkan setelah data dan persetujuan publikasi
              tersedia.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Kualifikasi tutor (document-supported framing) */}
      <Section spacing="compact" aria-labelledby="kualifikasi-heading">
        <Container className="flex flex-col gap-6">
          <Reveal as="div" className="flex flex-col gap-2">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary-700">
              Kualifikasi tutor
            </span>
            <Heading as="h2" size="lg" id="kualifikasi-heading">
              Standar yang kami pegang
            </Heading>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {teacherQualifications.map((item, index) => (
              <Reveal
                as="li"
                key={item}
                delay={(index % 2) * 60}
                className="flex items-start gap-3 rounded-2xl border border-border bg-background p-5 shadow-sm"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700"
                >
                  <Icon name="target" width={18} height={18} />
                </span>
                <span className="text-sm text-neutral-700">{item}</span>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Grid profil pengajar */}
      <Section muted spacing="default" aria-labelledby="daftar-pengajar-heading">
        <Container className="flex flex-col gap-10">
          <h2 id="daftar-pengajar-heading" className="sr-only">
            Daftar pengajar RUBELA
          </h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teachers.map((teacher, index) => (
              <Reveal
                as="li"
                key={`${teacher.subject}-${index}`}
                delay={(index % 3) * 80}
              >
                <TeacherCard teacher={teacher} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <RegistrationCta />
    </>
  );
}
