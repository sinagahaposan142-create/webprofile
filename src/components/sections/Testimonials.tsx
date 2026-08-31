import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { buttonClasses } from "@/components/ui/Button";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "./SectionHeader";
import { TestimonialCard } from "./TestimonialCard";
import { testimonials } from "@/content/testimonials";

/**
 * "Testimoni" section (homepage).
 *
 * Uses the shared `TestimonialCard` and the shared testimonials data source so
 * the homepage and the dedicated `/testimoni` page stay in sync. No real
 * testimonials exist yet, so entries render as clearly-marked placeholders.
 */
export function Testimonials() {
  const featured = testimonials.slice(0, 3);

  return (
    <Section muted spacing="default" aria-labelledby="testimonials-heading">
      <Container className="flex flex-col gap-12">
        <SectionHeader
          eyebrow="Testimoni"
          title="Cerita mentee yang berjuang bersama kami"
          description="Testimoni asli dari mentee akan ditampilkan di sini setelah dikumpulkan dan mendapat persetujuan."
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((testimonial, index) => (
            <Reveal
              as="li"
              key={`${testimonial.name}-${index}`}
              delay={(index % 3) * 80}
            >
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </ul>
        <Reveal as="div" className="flex justify-center">
          <Link
            href="/testimoni"
            className={buttonClasses({ variant: "outline", size: "md" })}
          >
            Lihat semua testimoni
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
