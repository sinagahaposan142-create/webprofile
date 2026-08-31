import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Reveal } from "@/components/common/Reveal";
import { ProgramCard } from "@/components/sections/ProgramCard";
import { RegistrationCta } from "@/components/sections";
import { programs } from "@/content/programs";
import { siteConfig } from "@/content/site";
import { createMetadata, siteUrl } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Program Pembelajaran",
  description:
    "Jelajahi seluruh program RUBELA — dari kelas intensif harian, try out UTBK, hingga webinar beasiswa dan pendampingan mental — semuanya untuk persiapan UTBK.",
  path: "/program",
});

/**
 * `/program` overview page.
 *
 * Lists every program from the shared catalogue (`src/content/programs.ts`)
 * using the reusable `ProgramCard`. Because the grid maps over `programs`, new
 * programs appear here automatically once added to the content module.
 */
export default function ProgramPage() {
  const breadcrumbItems = [
    { label: "Beranda", href: "/" },
    { label: "Program" },
  ];

  // BreadcrumbList structured data for richer search results.
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Program",
        item: new URL("/program", siteUrl).toString(),
      },
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
        aria-labelledby="program-overview-heading"
      >
        <Container className="flex flex-col gap-6">
          <Breadcrumb items={breadcrumbItems} />
          <Reveal as="div" className="flex flex-col gap-4">
            <Badge variant="primary">Program Pembelajaran</Badge>
            <Heading as="h1" size="2xl" id="program-overview-heading" className="max-w-3xl">
              Program RUBELA untuk perjalanan UTBK-mu
            </Heading>
            <p className="max-w-2xl text-lg text-neutral-600">
              Setiap program saling melengkapi: dari kelas intensif harian dan
              try out realistis hingga pendampingan mental dan webinar beasiswa.
              Semuanya dirancang untuk membantumu belajar, tumbuh, dan berjuang
              bersama menuju PTN impian.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Program grid */}
      <Section muted spacing="default" aria-labelledby="program-list-heading">
        <Container className="flex flex-col gap-10">
          <h2 id="program-list-heading" className="sr-only">
            Daftar program RUBELA
          </h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <Reveal as="li" key={program.slug} delay={(index % 3) * 80}>
                <ProgramCard program={program} />
              </Reveal>
            ))}
          </ul>
          <Reveal as="p" className="text-center text-sm text-neutral-500">
            Program baru diumumkan secara berkala melalui Instagram{" "}
            <Link
              href={siteConfig.socials.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary-700 hover:underline"
            >
              {siteConfig.socials.instagram}
            </Link>
            .
          </Reveal>
        </Container>
      </Section>

      <RegistrationCta />
    </>
  );
}
