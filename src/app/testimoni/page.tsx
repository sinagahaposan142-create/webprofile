import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Reveal } from "@/components/common/Reveal";
import { TestimonialCard, RegistrationCta } from "@/components/sections";
import { testimonials } from "@/content/testimonials";
import { createMetadata, siteUrl } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Testimoni",
  description:
    "Cerita dan pengalaman mentee yang berjuang bersama RUBELA. Testimoni asli akan ditampilkan setelah dikumpulkan dan mendapat persetujuan.",
  path: "/testimoni",
});

/**
 * `/testimoni` — testimoni mentee RUBELA dengan desain modern.
 *
 * Grid maps over the shared `testimonials` data source
 * (`src/content/testimonials.ts`) using the reusable `TestimonialCard`, so new
 * testimonials appear automatically once added. No real testimonials exist yet,
 * so entries render as clearly-marked placeholders.
 */
export default function TestimoniPage() {
  const breadcrumbItems = [
    { label: "Beranda", href: "/" },
    { label: "Testimoni" },
  ];

  const pageUrl = new URL("/testimoni", siteUrl).toString();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Testimoni", item: pageUrl },
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
        className="bg-gradient-to-b from-secondary-50 via-background to-background"
        aria-labelledby="testimoni-heading"
      >
        <Container className="flex flex-col gap-6">
          <Breadcrumb items={breadcrumbItems} />
          <Reveal as="div" className="flex flex-col gap-4">
            <Badge variant="secondary">Testimoni</Badge>
            <Heading
              as="h1"
              size="2xl"
              id="testimoni-heading"
              className="max-w-3xl"
            >
              Cerita mentee yang berjuang bersama kami
            </Heading>
            <p className="max-w-2xl text-lg text-neutral-600">
              Setiap mentee memiliki perjalanan yang unik. Testimoni asli dari
              mentee akan ditampilkan di sini setelah dikumpulkan dan mendapat
              persetujuan untuk dipublikasikan.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Grid testimoni */}
      <Section muted spacing="default" aria-labelledby="daftar-testimoni-heading">
        <Container className="flex flex-col gap-10">
          <h2 id="daftar-testimoni-heading" className="sr-only">
            Daftar testimoni mentee RUBELA
          </h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal
                as="li"
                key={`${testimonial.name}-${index}`}
                delay={(index % 3) * 80}
              >
                <TestimonialCard testimonial={testimonial} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <RegistrationCta />
    </>
  );
}
