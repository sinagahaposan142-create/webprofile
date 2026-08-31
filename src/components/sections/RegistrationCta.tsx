import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { buttonClasses } from "@/components/ui/Button";
import { Reveal } from "@/components/common/Reveal";
import { siteConfig } from "@/content/site";
import { whatsappLink } from "@/lib/links";

const registrationMessage =
  "Halo RUBELA, saya tertarik bergabung sebagai mentee. Boleh info pendaftarannya?";

/**
 * "CTA pendaftaran" — conversion section leading to WhatsApp and Instagram.
 *
 * Uses the RUBELA selection philosophy as emotive copy. Registration details
 * are announced on Instagram, and the official form URL is not yet confirmed.
 * TODO: Add the official registration form link once available.
 */
export function RegistrationCta() {
  return (
    <Section id="daftar" spacing="default" aria-labelledby="daftar-heading">
      <Container>
        <Reveal
          as="div"
          animation="scale"
          className="relative overflow-hidden rounded-3xl bg-primary-800 px-6 py-14 text-center text-white sm:px-12"
        >
          <div
            aria-hidden="true"
            className="animate-float-slow pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary-600/40 blur-3xl"
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <Heading
              as="h2"
              size="lg"
              id="daftar-heading"
              className="text-white"
            >
              Siap belajar, tumbuh, dan berjuang bersama?
            </Heading>
            <p className="text-base text-primary-100 sm:text-lg">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href={whatsappLink(registrationMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses({
                  variant: "primary",
                  size: "lg",
                  fullWidth: true,
                  className:
                    "bg-white text-primary-800 hover:bg-primary-50 active:bg-primary-100 sm:w-auto",
                })}
              >
                Daftar via WhatsApp
              </Link>
              <Link
                href={siteConfig.socials.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses({
                  variant: "outline",
                  size: "lg",
                  fullWidth: true,
                  className:
                    "border-white text-white hover:bg-white/10 active:bg-white/20 sm:w-auto",
                })}
              >
                Info di Instagram
              </Link>
            </div>
            <p className="text-sm text-primary-200">
              Jadwal pendaftaran diumumkan melalui Instagram{" "}
              {siteConfig.socials.instagram}
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
