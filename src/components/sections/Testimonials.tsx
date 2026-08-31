import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card, CardBody } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { SectionHeader } from "./SectionHeader";
import { testimonials } from "@/content/home";

/**
 * "Testimoni" section.
 *
 * No real testimonials have been collected yet, so entries render as clearly
 * marked placeholders.
 * TODO: Replace `testimonials` in content/home.ts with real, consented quotes.
 */
export function Testimonials() {
  return (
    <Section muted spacing="default" aria-labelledby="testimonials-heading">
      <Container className="flex flex-col gap-12">
        <SectionHeader
          eyebrow="Testimoni"
          title="Cerita mentee yang berjuang bersama kami"
          description="Testimoni asli dari mentee akan ditampilkan di sini setelah dikumpulkan dan mendapat persetujuan."
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal as="li" key={`${testimonial.name}-${index}`} delay={(index % 3) * 80}>
              <Card elevation="sm" className="h-full">
                <CardBody className="flex h-full flex-col gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <Icon name="chat" width={20} height={20} />
                  </span>
                  <blockquote className="flex-1 text-sm text-neutral-700">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <footer className="flex flex-col">
                    <Heading as="h3" size="sm" className="text-base">
                      {testimonial.name}
                    </Heading>
                    <span className="text-xs text-neutral-500">
                      {testimonial.role}
                    </span>
                  </footer>
                </CardBody>
              </Card>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
