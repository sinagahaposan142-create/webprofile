import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Card, CardBody } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { ProgramDetailSection } from "@/components/sections/ProgramDetailSection";
import { RegistrationCta } from "@/components/sections";
import {
  aboutHero,
  tentangRubela,
  latarBelakang,
  visi,
  misi,
  coreValueDetails,
  filosofiPendidikan,
  timeline,
} from "@/content/about";
import { advantages } from "@/content/home";
import { siteConfig } from "@/content/site";
import { createMetadata, siteUrl } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Tentang Kami",
  description:
    "Kenali RUBELA — bimbingan belajar UTBK non-profit yang menjembatani kesenjangan akses pendidikan. Pelajari identitas, latar belakang, visi & misi, nilai-nilai, dan filosofi pendidikan kami.",
  path: "/tentang-kami",
});

/**
 * `/tentang-kami` — profil & identitas RUBELA.
 *
 * Storytelling page composed from the shared UI primitives and the
 * `ProgramDetailSection` pattern for consistent section rhythm. Content is
 * sourced from `src/content/about.ts` (single source of truth) and reuses the
 * shared core values (`siteConfig.coreValues`) and keunggulan (`advantages`).
 */
export default function TentangKamiPage() {
  const breadcrumbItems = [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami" },
  ];

  const pageUrl = new URL("/tentang-kami", siteUrl).toString();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tentang Kami",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* 1. Hero */}
      <Section
        spacing="compact"
        className="bg-gradient-to-b from-primary-50 via-background to-background"
        aria-labelledby="tentang-hero-heading"
      >
        <Container className="flex flex-col gap-6">
          <Breadcrumb items={breadcrumbItems} />
          <Reveal as="div" className="flex flex-col gap-5">
            <Badge variant="primary">{aboutHero.eyebrow}</Badge>
            <Heading
              as="h1"
              size="2xl"
              id="tentang-hero-heading"
              className="max-w-3xl"
            >
              {aboutHero.title}{" "}
              <span className="text-primary-700">{aboutHero.titleHighlight}</span>
            </Heading>
            <p className="max-w-2xl text-lg text-neutral-600">
              {aboutHero.description}
            </p>
            <blockquote className="max-w-2xl border-l-4 border-primary-300 pl-4 text-base italic text-neutral-700 sm:text-lg">
              &ldquo;{aboutHero.quote}&rdquo;
            </blockquote>
          </Reveal>
        </Container>
      </Section>

      {/* 2. Tentang RUBELA */}
      <ProgramDetailSection
        id="tentang-rubela"
        eyebrow="Tentang RUBELA"
        title="Siapa kami"
      >
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <Reveal as="div" className="flex flex-col gap-4">
            {tentangRubela.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-base leading-relaxed text-neutral-700"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
          <Reveal as="div" delay={80}>
            <Card elevation="sm" className="h-full">
              <CardBody className="flex flex-col gap-4">
                <Heading as="h3" size="sm">
                  Identitas singkat
                </Heading>
                <dl className="flex flex-col divide-y divide-border">
                  {tentangRubela.facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex flex-col gap-0.5 py-3 first:pt-0 last:pb-0"
                    >
                      <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                        {fact.label}
                      </dt>
                      <dd className="text-sm text-neutral-800">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </CardBody>
            </Card>
          </Reveal>
        </div>
      </ProgramDetailSection>

      {/* 3. Latar belakang */}
      <ProgramDetailSection
        id="latar-belakang"
        eyebrow="Latar belakang"
        title="Mengapa RUBELA hadir"
        muted
      >
        <div className="flex flex-col gap-4">
          {latarBelakang.paragraphs.map((paragraph, index) => (
            <Reveal
              as="p"
              key={paragraph.slice(0, 32)}
              delay={(index % 3) * 60}
              className="text-base leading-relaxed text-neutral-700"
            >
              {paragraph}
            </Reveal>
          ))}
        </div>
      </ProgramDetailSection>

      {/* 4. Visi */}
      <ProgramDetailSection id="visi" eyebrow="Visi" title="Ke mana kami menuju">
        <Reveal as="div">
          <Card elevation="sm" className="border-l-4 border-l-primary-600">
            <CardBody className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-700"
              >
                <Icon name="compass" />
              </span>
              <p className="text-base leading-relaxed text-neutral-800 sm:text-lg">
                {visi}
              </p>
            </CardBody>
          </Card>
        </Reveal>
      </ProgramDetailSection>

      {/* 5. Misi */}
      <ProgramDetailSection
        id="misi"
        eyebrow="Misi"
        title="Bagaimana kami mewujudkannya"
        muted
      >
        <ol className="grid gap-4 sm:grid-cols-2">
          {misi.map((item, index) => (
            <Reveal as="li" key={item} delay={(index % 2) * 60}>
              <Card elevation="sm" className="h-full">
                <CardBody className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 font-display text-sm font-bold text-white"
                  >
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-neutral-700">
                    {item}
                  </p>
                </CardBody>
              </Card>
            </Reveal>
          ))}
        </ol>
      </ProgramDetailSection>

      {/* 6. Nilai-nilai */}
      <ProgramDetailSection
        id="nilai-nilai"
        eyebrow="Nilai-nilai"
        title="Prinsip yang kami pegang"
      >
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.coreValues.map((value, index) => {
            const detail = coreValueDetails[value];
            return (
              <Reveal as="li" key={value} delay={(index % 3) * 80}>
                <Card elevation="sm" className="h-full">
                  <CardBody className="flex h-full flex-col gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-100 text-secondary-700">
                      <Icon name={detail?.icon ?? "sparkles"} />
                    </span>
                    <Heading as="h3" size="sm">
                      {value}
                    </Heading>
                    {detail && (
                      <p className="text-sm text-neutral-600">
                        {detail.description}
                      </p>
                    )}
                  </CardBody>
                </Card>
              </Reveal>
            );
          })}
        </ul>
      </ProgramDetailSection>

      {/* 7. Filosofi pendidikan */}
      <ProgramDetailSection
        id="filosofi"
        eyebrow="Filosofi pendidikan"
        title="Makna di balik identitas kami"
        description="Filosofi logo RUBELA merangkum cara kami memandang proses belajar: pertumbuhan yang berkelanjutan, ditopang kepercayaan dan kedalaman ilmu."
        muted
      >
        <ul className="grid gap-6 md:grid-cols-3">
          {filosofiPendidikan.map((item, index) => (
            <Reveal as="li" key={item.title} delay={(index % 3) * 80}>
              <Card elevation="sm" className="h-full">
                <CardBody className="flex h-full flex-col gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                    <Icon name={item.icon} />
                  </span>
                  <Heading as="h3" size="sm">
                    {item.title}
                  </Heading>
                  <p className="text-sm text-neutral-600">{item.description}</p>
                </CardBody>
              </Card>
            </Reveal>
          ))}
        </ul>
      </ProgramDetailSection>

      {/* 8. Timeline / perjalanan */}
      <ProgramDetailSection
        id="perjalanan"
        eyebrow="Perjalanan"
        title="Tonggak perjalanan RUBELA"
        description="Perjalanan RUBELA baru dimulai. Tonggak berikutnya ditandai sebagai placeholder dan akan diperbarui seiring bertambahnya data."
      >
        <ol className="relative flex flex-col gap-8 border-l-2 border-border pl-6">
          {timeline.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              delay={(index % 4) * 80}
              className="relative"
            >
              <span
                aria-hidden="true"
                className={
                  item.placeholder
                    ? "absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-dashed border-neutral-400 bg-background"
                    : "absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary-600 bg-primary-600"
                }
              />
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold text-primary-700">
                    {item.date}
                  </span>
                  {item.placeholder && (
                    <Badge variant="neutral">Placeholder</Badge>
                  )}
                </div>
                <Heading as="h3" size="sm">
                  {item.title}
                </Heading>
                <p className="text-sm text-neutral-600">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </ProgramDetailSection>

      {/* 9. Keunggulan */}
      <ProgramDetailSection
        id="keunggulan"
        eyebrow="Keunggulan"
        title="Mengapa memilih RUBELA"
        description="Dari materi terstruktur hingga pendampingan mental, setiap layanan dirancang untuk mendukung perjalanan UTBK-mu."
        muted
      >
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, index) => (
            <Reveal as="li" key={item.title} delay={(index % 4) * 70}>
              <Card elevation="sm" className="h-full">
                <CardBody className="flex h-full flex-col gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-100 text-accent-800">
                    <Icon name={item.icon} />
                  </span>
                  <Heading as="h3" size="sm">
                    {item.title}
                  </Heading>
                  <p className="text-sm text-neutral-600">{item.description}</p>
                </CardBody>
              </Card>
            </Reveal>
          ))}
        </ul>
      </ProgramDetailSection>

      {/* 10. CTA */}
      <RegistrationCta />
    </>
  );
}
