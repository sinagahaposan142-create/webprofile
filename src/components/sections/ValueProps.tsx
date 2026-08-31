import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card, CardBody } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { SectionHeader } from "./SectionHeader";
import { valueProps } from "@/content/home";

/** Value proposition — the core promise distilled into a few pillars. */
export function ValueProps() {
  return (
    <Section spacing="default" aria-labelledby="value-heading">
      <Container className="flex flex-col gap-12">
        <SectionHeader
          eyebrow="Kenapa ini penting"
          title="Bimbingan UTBK yang menyeluruh dan berpihak"
          description="RUBELA memadukan materi berkualitas, tutor profesional, dan komunitas yang inklusif agar setiap mentee punya kesempatan yang setara."
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((item, index) => (
            <Reveal as="li" key={item.title} delay={index * 80}>
              <Card elevation="sm" interactive className="h-full">
                <CardBody className="flex h-full flex-col gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
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
      </Container>
    </Section>
  );
}
