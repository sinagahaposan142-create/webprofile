import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Reveal } from "@/components/common/Reveal";
import { FacilityCard, RegistrationCta } from "@/components/sections";
import { facilities } from "@/content/facilities";
import { createMetadata, siteUrl } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Fasilitas",
  description:
    "Fasilitas RUBELA — kelas virtual, materi terstruktur, bank soal & try out, rekaman, e-book, platform pembelajaran, konseling, dashboard nilai, webinar, dan sertifikat untuk mendukung persiapan UTBK.",
  path: "/fasilitas",
});

/**
 * `/fasilitas` — fasilitas RUBELA dalam grid visual.
 *
 * Grid maps over the shared `facilities` data source
 * (`src/content/facilities.ts`) using the reusable `FacilityCard`, so new
 * facilities appear automatically once added. All entries are real,
 * document-supported facilities; the cards are icon-based (no fabricated
 * photos).
 */
export default function FasilitasPage() {
  const breadcrumbItems = [
    { label: "Beranda", href: "/" },
    { label: "Fasilitas" },
  ];

  const pageUrl = new URL("/fasilitas", siteUrl).toString();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Fasilitas", item: pageUrl },
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
        className="bg-gradient-to-b from-accent-50 via-background to-background"
        aria-labelledby="fasilitas-heading"
      >
        <Container className="flex flex-col gap-6">
          <Breadcrumb items={breadcrumbItems} />
          <Reveal as="div" className="flex flex-col gap-4">
            <Badge variant="accent">Fasilitas</Badge>
            <Heading
              as="h1"
              size="2xl"
              id="fasilitas-heading"
              className="max-w-3xl"
            >
              Ekosistem belajar yang lengkap dan mendukung
            </Heading>
            <p className="max-w-2xl text-lg text-neutral-600">
              Dari kelas virtual hingga pendampingan mental, RUBELA menyediakan
              fasilitas belajar daring yang menyeluruh agar mentee dapat belajar
              secara terarah, konsisten, dan nyaman dari mana saja di Indonesia.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Grid fasilitas */}
      <Section muted spacing="default" aria-labelledby="daftar-fasilitas-heading">
        <Container className="flex flex-col gap-10">
          <h2 id="daftar-fasilitas-heading" className="sr-only">
            Daftar fasilitas RUBELA
          </h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {facilities.map((facility, index) => (
              <Reveal as="li" key={facility.title} delay={(index % 4) * 70}>
                <FacilityCard facility={facility} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <RegistrationCta />
    </>
  );
}
