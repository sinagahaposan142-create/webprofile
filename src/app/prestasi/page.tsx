import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Card, CardBody } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { AchievementCard, RegistrationCta } from "@/components/sections";
import { achievements, recognitionCategories } from "@/content/achievements";
import { createMetadata, siteUrl } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Prestasi",
  description:
    "Pencapaian RUBELA dan bentuk apresiasi bagi tutor serta mentee. Data prestasi terverifikasi akan ditampilkan seiring bertambahnya informasi.",
  path: "/prestasi",
});

/**
 * `/prestasi` — pencapaian RUBELA.
 *
 * The achievements grid maps over the shared `achievements` data source
 * (`src/content/achievements.ts`) using the reusable `AchievementCard`. Real,
 * verified achievement data is NOT available, so entries render as clearly
 * marked placeholders. The recognition categories are honestly presented as
 * forms of appreciation RUBELA offers (program features, not earned accolades).
 */
export default function PrestasiPage() {
  const breadcrumbItems = [
    { label: "Beranda", href: "/" },
    { label: "Prestasi" },
  ];

  const pageUrl = new URL("/prestasi", siteUrl).toString();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Prestasi", item: pageUrl },
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
        aria-labelledby="prestasi-heading"
      >
        <Container className="flex flex-col gap-6">
          <Breadcrumb items={breadcrumbItems} />
          <Reveal as="div" className="flex flex-col gap-4">
            <Badge variant="primary">Prestasi</Badge>
            <Heading
              as="h1"
              size="2xl"
              id="prestasi-heading"
              className="max-w-3xl"
            >
              Pencapaian yang kami bangun bersama
            </Heading>
            <p className="max-w-2xl text-lg text-neutral-600">
              RUBELA berkomitmen mendampingi mentee menuju perguruan tinggi
              impian. Data pencapaian yang terverifikasi akan ditampilkan secara
              jujur seiring bertambahnya informasi — kami tidak menampilkan angka
              yang belum dapat dipertanggungjawabkan.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Grid pencapaian */}
      <Section muted spacing="default" aria-labelledby="pencapaian-heading">
        <Container className="flex flex-col gap-10">
          <Reveal as="div" className="flex flex-col gap-2">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary-700">
              Pencapaian
            </span>
            <Heading as="h2" size="lg" id="pencapaian-heading">
              Dampak yang terus kami ukur
            </Heading>
          </Reveal>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => (
              <Reveal
                as="li"
                key={achievement.label}
                delay={(index % 3) * 80}
              >
                <AchievementCard achievement={achievement} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Kategori apresiasi / recognition */}
      <Section spacing="default" aria-labelledby="apresiasi-heading">
        <Container className="flex flex-col gap-10">
          <Reveal as="div" className="flex flex-col gap-2">
            <span className="text-sm font-semibold uppercase tracking-wide text-secondary-700">
              Bentuk apresiasi
            </span>
            <Heading as="h2" size="lg" id="apresiasi-heading">
              Penghargaan bagi tutor & mentee
            </Heading>
            <p className="max-w-2xl text-base text-neutral-600">
              RUBELA memberikan berbagai bentuk apresiasi untuk mendorong
              semangat, kedisiplinan, dan pertumbuhan tutor serta mentee selama
              program berlangsung.
            </p>
          </Reveal>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recognitionCategories.map((category, index) => (
              <Reveal
                as="li"
                key={category.title}
                delay={(index % 3) * 80}
              >
                <Card
                  elevation="sm"
                  className="group h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <CardBody className="flex h-full flex-col gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-100 text-secondary-700 transition-transform duration-300 group-hover:scale-110">
                      <Icon name={category.icon} />
                    </span>
                    <Heading as="h3" size="sm">
                      {category.title}
                    </Heading>
                    <p className="text-sm text-neutral-600">
                      {category.description}
                    </p>
                  </CardBody>
                </Card>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <RegistrationCta />
    </>
  );
}
