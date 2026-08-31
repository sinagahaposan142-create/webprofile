import Link from "next/link";
import { siteConfig } from "@/content/site";
import {
  Badge,
  Button,
  buttonClasses,
  Card,
  CardBody,
  CardHeader,
  Container,
  CTA,
  Heading,
  Section,
} from "@/components/ui";
import { whatsappLink } from "@/lib/links";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({ path: "/" });

/**
 * Minimal home / placeholder page.
 *
 * This intentionally showcases the design system + base components (hero, a
 * small component demo, and a CTA) rather than the full marketing content.
 * Real page content is built in later stages.
 */
export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section spacing="default">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Badge variant="primary">Bimbingan Belajar UTBK · Non-profit</Badge>
          <Heading as="h1" size="2xl" className="max-w-4xl">
            {siteConfig.fullName}
          </Heading>
          <p className="max-w-2xl text-lg text-neutral-600">
            {siteConfig.tagline}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses({ variant: "primary", size: "lg" })}
            >
              Hubungi via WhatsApp
            </Link>
            <Link
              href="/tentang"
              className={buttonClasses({ variant: "outline", size: "lg" })}
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </Container>
      </Section>

      {/* Core values — small component demo */}
      <Section muted spacing="compact">
        <Container>
          <div className="mb-8 text-center">
            <Heading as="h2" size="lg">
              Nilai Inti Kami
            </Heading>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {siteConfig.coreValues.map((value) => (
              <Card key={value} elevation="sm">
                <CardHeader>
                  <Heading as="h3" size="sm">
                    {value}
                  </Heading>
                </CardHeader>
                <CardBody>
                  <p className="text-sm text-neutral-600">
                    Komitmen RUBELA dalam mendampingi setiap mentee menuju
                    perguruan tinggi impian.
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTA
        title="Siap belajar, tumbuh, dan berjuang bersama?"
        description="Hubungi tim RUBELA untuk informasi pendaftaran dan program bimbingan UTBK."
      />

      {/* Design-system utility note (dev-facing demo) */}
      <Section spacing="compact">
        <Container className="flex flex-wrap items-center justify-center gap-3">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="accent">Accent</Badge>
          <Badge variant="neutral">Neutral</Badge>
          <Button variant="primary" size="sm">
            Primary
          </Button>
          <Button variant="secondary" size="sm">
            Secondary
          </Button>
          <Button variant="outline" size="sm">
            Outline
          </Button>
          <Button variant="ghost" size="sm">
            Ghost
          </Button>
        </Container>
      </Section>
    </>
  );
}
