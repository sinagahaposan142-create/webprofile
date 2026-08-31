import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "./SectionHeader";
import { faqs } from "@/content/home";

/**
 * FAQ accordion built on native `<details>`/`<summary>` — accessible and
 * keyboard-operable with no client JS. Content is always in the DOM for SEO.
 */
export function Faq() {
  return (
    <Section spacing="default" aria-labelledby="faq-heading">
      <Container size="narrow" className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="FAQ"
          title="Pertanyaan yang sering diajukan"
          description="Belum menemukan jawabannya? Hubungi tim RUBELA melalui WhatsApp atau Instagram."
        />
        <ul className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
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
      </Container>
    </Section>
  );
}
