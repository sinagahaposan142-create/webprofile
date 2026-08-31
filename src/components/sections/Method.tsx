import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "./SectionHeader";
import { methodSteps } from "@/content/home";

/** "Metode pembelajaran" — a numbered, connected step list. */
export function Method() {
  return (
    <Section muted spacing="default" aria-labelledby="method-heading">
      <Container className="flex flex-col gap-12">
        <SectionHeader
          eyebrow="Metode pembelajaran"
          title="Cara belajar yang terarah dan konsisten"
          description="Belajar daring yang fleksibel namun tetap disiplin, dengan pendampingan tutor dan evaluasi berkala di setiap tahap."
        />
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {methodSteps.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              delay={index * 80}
              className="relative flex flex-col gap-3 rounded-2xl border border-border bg-background p-6 shadow-sm"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary-700 font-display text-lg font-bold text-white">
                {index + 1}
              </span>
              <Heading as="h3" size="sm" className="text-lg">
                {step.title}
              </Heading>
              <p className="text-sm text-neutral-600">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
