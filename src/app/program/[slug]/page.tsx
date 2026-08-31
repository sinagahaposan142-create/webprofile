import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Card, CardBody } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { buttonClasses } from "@/components/ui/Button";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import {
  ProgramDetailSection,
  DetailList,
} from "@/components/sections/ProgramDetailSection";
import {
  getProgramBySlug,
  programSlugs,
  alurPembelajaran,
} from "@/content/programs";
import { siteConfig } from "@/content/site";
import { whatsappLink } from "@/lib/links";
import { createMetadata, siteUrl } from "@/lib/metadata";

interface ProgramDetailParams {
  params: Promise<{ slug: string }>;
}

/**
 * Pre-render every known program slug at build time (static generation — ideal
 * for Vercel + SEO). Unknown slugs fall through to `notFound()` below.
 */
export function generateStaticParams(): { slug: string }[] {
  return programSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProgramDetailParams): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    return createMetadata({
      title: "Program tidak ditemukan",
      path: `/program/${slug}`,
    });
  }

  return createMetadata({
    title: program.name,
    description: program.summary,
    path: `/program/${program.slug}`,
  });
}

/**
 * `/program/[slug]` — dynamic program detail page.
 *
 * Composed from the reusable `ProgramDetailSection` so every program renders a
 * consistent set of sections: hero, target peserta, deskripsi, tujuan, materi,
 * metode, benefit, fasilitas, alur pembelajaran, FAQ, dan CTA pendaftaran.
 */
export default async function ProgramDetailPage({
  params,
}: ProgramDetailParams) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  const registrationMessage = `Halo RUBELA, saya tentang program ${program.name} dan ingin info pendaftarannya.`;
  const programUrl = new URL(`/program/${program.slug}`, siteUrl).toString();

  const breadcrumbItems = [
    { label: "Beranda", href: "/" },
    { label: "Program", href: "/program" },
    { label: program.name },
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Program",
        item: new URL("/program", siteUrl).toString(),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: program.name,
        item: programUrl,
      },
    ],
  };

  const programFaqs = [
    ...(program.faqs ?? []),
    {
      question: "Bagaimana cara mendaftar program ini?",
      answer:
        "Alur bergabung meliputi pengisian administrasi dan pakta integritas, wawancara daring, lalu simulasi kelas daring. Jadwal pendaftaran diumumkan melalui Instagram @rubelautbk.",
    },
    {
      question: "Apakah program ini berbayar?",
      answer:
        "RUBELA bersifat non-profit: gratis untuk kelompok kurang mampu, sedangkan peserta dari kalangan menengah ke atas berkontribusi. (TODO: konfirmasi rincian biaya.)",
    },
  ];

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
        aria-labelledby="program-detail-heading"
      >
        <Container className="flex flex-col gap-6">
          <Breadcrumb items={breadcrumbItems} />
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <Reveal as="div" className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                  <Icon name={program.icon} />
                </span>
                <Badge variant="primary">{program.eyebrow}</Badge>
              </div>
              <Heading
                as="h1"
                size="2xl"
                id="program-detail-heading"
                className="max-w-2xl"
              >
                {program.name}
              </Heading>
              <p className="max-w-2xl text-lg text-neutral-600">
                {program.summary}
              </p>
              <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row">
                <Link
                  href={whatsappLink(registrationMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClasses({
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: "sm:w-auto",
                  })}
                >
                  Daftar & Info Program
                </Link>
                <Link
                  href="/program"
                  className={buttonClasses({
                    variant: "outline",
                    size: "lg",
                    fullWidth: true,
                    className: "sm:w-auto",
                  })}
                >
                  Program lainnya
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Deskripsi */}
      <ProgramDetailSection id="deskripsi" eyebrow="Deskripsi" title="Tentang program ini">
        <Reveal as="p" className="text-base leading-relaxed text-neutral-700">
          {program.description}
        </Reveal>
      </ProgramDetailSection>

      {/* Target peserta */}
      <ProgramDetailSection
        id="target-peserta"
        eyebrow="Target peserta"
        title="Untuk siapa program ini?"
        muted
      >
        <DetailList items={program.targetPeserta} />
      </ProgramDetailSection>

      {/* Tujuan pembelajaran */}
      <ProgramDetailSection
        id="tujuan"
        eyebrow="Tujuan pembelajaran"
        title="Apa yang akan kamu capai"
      >
        <DetailList items={program.tujuan} />
      </ProgramDetailSection>

      {/* Materi / kurikulum */}
      <ProgramDetailSection
        id="materi"
        eyebrow="Materi & kurikulum"
        title="Materi pembelajaran"
        muted
      >
        {program.curriculumAvailable && program.curriculum ? (
          <DetailList items={program.curriculum} />
        ) : (
          <Reveal as="div" className="flex flex-col gap-4">
            {program.curriculumNote && (
              <p className="text-base leading-relaxed text-neutral-700">
                {program.curriculumNote}
              </p>
            )}
            {/* Detailed silabus per program is not yet available in the
                reference material, so a clear placeholder is shown rather than
                inventing lesson topics. */}
            <Card elevation="sm" className="border-dashed">
              <CardBody className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500"
                >
                  <Icon name="book" width={18} height={18} />
                </span>
                <p className="text-sm text-neutral-600">
                  Kurikulum rinci per pertemuan masih disusun dan akan
                  ditampilkan setelah tersedia. Informasi terbaru diumumkan
                  melalui Instagram {siteConfig.socials.instagram}.
                </p>
              </CardBody>
            </Card>
          </Reveal>
        )}
      </ProgramDetailSection>

      {/* Metode belajar */}
      <ProgramDetailSection
        id="metode"
        eyebrow="Metode belajar"
        title="Bagaimana pembelajaran berlangsung"
      >
        <DetailList items={program.metode} />
      </ProgramDetailSection>

      {/* Benefit */}
      <ProgramDetailSection
        id="benefit"
        eyebrow="Benefit"
        title="Manfaat yang kamu dapatkan"
        muted
      >
        <DetailList items={program.benefit} />
      </ProgramDetailSection>

      {/* Fasilitas */}
      <ProgramDetailSection
        id="fasilitas"
        eyebrow="Fasilitas"
        title="Fasilitas pendukung"
      >
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {program.fasilitas.map((facility, index) => (
            <Reveal as="li" key={facility.title} delay={(index % 3) * 80}>
              <Card elevation="sm" className="h-full">
                <CardBody className="flex h-full flex-col gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-100 text-secondary-700">
                    <Icon name={facility.icon} />
                  </span>
                  <Heading as="h3" size="sm">
                    {facility.title}
                  </Heading>
                  <p className="text-sm text-neutral-600">
                    {facility.description}
                  </p>
                </CardBody>
              </Card>
            </Reveal>
          ))}
        </ul>
      </ProgramDetailSection>

      {/* Alur pembelajaran / bergabung */}
      <ProgramDetailSection
        id="alur"
        eyebrow="Alur pembelajaran"
        title="Langkah untuk bergabung"
        description="Proses seleksi memastikan setiap mentee siap belajar, tumbuh, dan berjuang bersama."
        muted
      >
        <ol className="flex flex-col gap-4">
          {alurPembelajaran.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 80}>
              <Card elevation="sm" className="h-full">
                <CardBody className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 font-display text-sm font-bold text-white"
                  >
                    {index + 1}
                  </span>
                  <div className="flex flex-col gap-1">
                    <Heading as="h3" size="sm">
                      {step.title}
                    </Heading>
                    <p className="text-sm text-neutral-600">
                      {step.description}
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Reveal>
          ))}
        </ol>
      </ProgramDetailSection>

      {/* FAQ */}
      <ProgramDetailSection id="faq" eyebrow="FAQ" title="Pertanyaan yang sering diajukan">
        <ul className="flex flex-col gap-4">
          {programFaqs.map((faq, index) => (
            <Reveal as="li" key={faq.question} delay={index * 60}>
              <details className="group rounded-xl border border-border bg-background p-1 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg px-5 py-4 font-display text-base font-semibold text-foreground transition-colors hover:bg-neutral-50">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700 transition-transform duration-300 group-open:rotate-45"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 pt-1 text-sm text-neutral-600">
                  {faq.answer}
                </div>
              </details>
            </Reveal>
          ))}
        </ul>
      </ProgramDetailSection>

      {/* CTA pendaftaran */}
      <Section spacing="default" aria-labelledby="program-cta-heading">
        <Container>
          <Reveal
            as="div"
            animation="scale"
            className="relative overflow-hidden rounded-3xl bg-primary-800 px-6 py-14 text-center text-white sm:px-12"
          >
            <div
              aria-hidden="true"
              className="animate-float-slow pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary-600/40 blur-3xl"
            />
            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
              <Heading
                as="h2"
                size="lg"
                id="program-cta-heading"
                className="text-white"
              >
                Tertarik dengan {program.name}?
              </Heading>
              <p className="text-base text-primary-100 sm:text-lg">
                &ldquo;{siteConfig.tagline}&rdquo;
              </p>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Link
                  href={whatsappLink(registrationMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClasses({
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className:
                      "bg-white text-primary-800 hover:bg-primary-50 active:bg-primary-100 sm:w-auto",
                  })}
                >
                  Daftar via WhatsApp
                </Link>
                <Link
                  href={siteConfig.socials.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClasses({
                    variant: "outline",
                    size: "lg",
                    fullWidth: true,
                    className:
                      "border-white text-white hover:bg-white/10 active:bg-white/20 sm:w-auto",
                  })}
                >
                  Info di Instagram
                </Link>
              </div>
              <p className="text-sm text-primary-200">
                Jadwal pendaftaran diumumkan melalui Instagram{" "}
                {siteConfig.socials.instagram}
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
