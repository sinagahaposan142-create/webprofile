import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card, CardBody } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { buttonClasses } from "@/components/ui/Button";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { SectionHeader } from "./SectionHeader";
import { featuredPrograms } from "@/content/home";

/** "Program unggulan" — a curated grid of RUBELA's flagship programs. */
export function Programs() {
  return (
    <Section id="program" muted spacing="default" aria-labelledby="program-heading">
      <Container className="flex flex-col gap-12">
        <SectionHeader
          eyebrow="Program unggulan"
          title="Program yang dirancang untuk membawamu ke PTN impian"
          description="Dari kelas intensif harian hingga try out berskala nasional, setiap program saling melengkapi untuk memaksimalkan persiapan UTBK."
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPrograms.map((program, index) => (
            <Reveal as="li" key={program.name} delay={(index % 3) * 80}>
              <Card elevation="sm" interactive className="relative h-full">
                <CardBody className="flex h-full flex-col gap-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-100 text-secondary-700">
                      <Icon name={program.icon} />
                    </span>
                    <Badge variant="neutral">{program.tag}</Badge>
                  </div>
                  <Heading as="h3" size="sm">
                    {program.slug ? (
                      <Link
                        href={`/program/${program.slug}`}
                        className="transition-colors after:absolute after:inset-0 hover:text-primary-700 focus-visible:outline-none"
                      >
                        {program.name}
                      </Link>
                    ) : (
                      program.name
                    )}
                  </Heading>
                  <p className="text-sm text-neutral-600">
                    {program.description}
                  </p>
                </CardBody>
              </Card>
            </Reveal>
          ))}
        </ul>
        <Reveal as="div" className="flex justify-center">
          <Link
            href="/program"
            className={buttonClasses({ variant: "outline", size: "md" })}
          >
            Lihat semua program
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
