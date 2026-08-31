import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { buttonClasses } from "@/components/ui/Button";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { hero } from "@/content/home";
import { whatsappLink } from "@/lib/links";
import { cn } from "@/lib/utils";

const registrationMessage =
  "Halo RUBELA, saya ingin bertanya tentang pendaftaran dan program bimbingan UTBK.";

/**
 * Homepage hero: strong headline, subheadline, primary + secondary CTA, and a
 * dependency-free educational visual with subtle floating elements. All motion
 * honours `prefers-reduced-motion` via the `Reveal` wrapper and CSS.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-background to-background">
      {/* Decorative ambient blobs (non-interactive, hidden from AT). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="animate-float-slow absolute -left-16 top-10 h-56 w-56 rounded-full bg-primary-200/40 blur-3xl" />
        <div className="animate-float absolute -right-10 top-32 h-64 w-64 rounded-full bg-secondary-200/40 blur-3xl" />
      </div>

      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        {/* Copy */}
        <div className="flex flex-col items-start gap-6">
          <Reveal as="div">
            <Badge variant="primary">{hero.eyebrow}</Badge>
          </Reveal>

          <Reveal as="div" delay={80}>
            <Heading as="h1" size="2xl" className="max-w-xl">
              {hero.headline}{" "}
              <span className="text-primary-700">{hero.headlineHighlight}</span>
            </Heading>
          </Reveal>

          <Reveal as="p" delay={160} className="max-w-xl text-lg text-neutral-600">
            {hero.subheadline}
          </Reveal>

          <Reveal
            as="div"
            delay={240}
            className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          >
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
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className={buttonClasses({
                variant: "outline",
                size: "lg",
                fullWidth: true,
                className: "sm:w-auto",
              })}
            >
              {hero.secondaryCta.label}
            </Link>
          </Reveal>

          <Reveal
            as="ul"
            delay={320}
            className="flex flex-col gap-2 pt-2 sm:flex-row sm:flex-wrap sm:gap-x-6"
          >
            {hero.highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-neutral-700"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                  <Icon name="target" width={12} height={12} />
                </span>
                {item}
              </li>
            ))}
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal as="div" animation="scale" delay={160} className="relative">
          <HeroVisual />
        </Reveal>
      </Container>
    </section>
  );
}

/**
 * Abstract "virtual classroom" visual built from layered cards + icons. Pure
 * CSS/SVG so there is no external image request and no layout shift; a real
 * illustration/photo can replace this later.
 * TODO: Swap for a real brand illustration or photo (via next/image) when ready.
 */
function HeroVisual() {
  const floatingCards: {
    icon: Parameters<typeof Icon>[0]["name"];
    label: string;
    className: string;
    animation: string;
  }[] = [
    {
      icon: "book",
      label: "Materi terstruktur",
      className: "left-2 top-6 sm:left-6",
      animation: "animate-float",
    },
    {
      icon: "target",
      label: "Try out UTBK",
      className: "right-2 top-24 sm:right-6",
      animation: "animate-float-slow",
    },
    {
      icon: "users",
      label: "Komunitas suportif",
      className: "bottom-6 left-8",
      animation: "animate-float-slow",
    },
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* Central panel */}
      <div className="absolute inset-8 flex flex-col items-center justify-center gap-4 rounded-3xl bg-gradient-to-br from-primary-700 to-secondary-800 p-8 text-center text-white shadow-xl">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
          <Icon name="presentation" width={32} height={32} />
        </span>
        <p className="font-display text-xl font-bold">Kelas Virtual RUBELA</p>
        <p className="text-sm text-primary-100">
          Belajar bersama tutor, di mana saja
        </p>
      </div>

      {/* Floating info cards */}
      {floatingCards.map((card) => (
        <div
          key={card.label}
          aria-hidden="true"
          className={cn(
            "absolute flex items-center gap-2 rounded-xl border border-border bg-background/95 px-3 py-2 text-xs font-semibold text-neutral-800 shadow-lg backdrop-blur",
            card.animation,
            card.className,
          )}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
            <Icon name={card.icon} width={16} height={16} />
          </span>
          {card.label}
        </div>
      ))}
    </div>
  );
}
