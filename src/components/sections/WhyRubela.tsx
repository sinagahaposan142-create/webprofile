import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { SectionHeader } from "./SectionHeader";
import { advantages } from "@/content/home";

/** "Mengapa memilih RUBELA" — condensed keunggulan grid. */
export function WhyRubela() {
  return (
    <Section spacing="default" aria-labelledby="why-heading">
      <Container className="flex flex-col gap-12">
        <SectionHeader
          eyebrow="Mengapa RUBELA"
          title="Lebih dari sekadar bimbingan belajar"
          description="Kami menggabungkan kualitas akademik dengan dukungan mental dan komunitas, supaya perjalanan menuju UTBK terasa lebih ringan."
        />
        <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {advantages.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              delay={(index % 2) * 80}
              className="flex gap-4"
            >
              <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                <Icon name={item.icon} width={20} height={20} />
              </span>
              <div className="flex flex-col gap-1">
                <Heading as="h3" size="sm" className="text-lg">
                  {item.title}
                </Heading>
                <p className="text-sm text-neutral-600">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
