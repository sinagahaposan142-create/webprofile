import Link from "next/link";
import { Container } from "./Container";
import { Heading } from "./Heading";
import { buttonClasses, type ButtonVariant } from "./Button";
import { Section } from "./Section";
import { whatsappLink } from "@/lib/links";
import { cn } from "@/lib/utils";

interface CTAAction {
  label: string;
  href: string;
  variant?: ButtonVariant;
  /** Open in a new tab (e.g. WhatsApp). */
  external?: boolean;
}

export interface CTAProps {
  title: string;
  description?: string;
  /**
   * Primary action. Defaults to a WhatsApp contact link built from
   * `siteConfig.contact.whatsappIntl`.
   */
  primaryAction?: CTAAction;
  secondaryAction?: CTAAction;
  className?: string;
}

const defaultPrimaryAction: CTAAction = {
  label: "Hubungi via WhatsApp",
  href: whatsappLink(),
  variant: "primary",
  external: true,
};

function ActionLink({ action }: { action: CTAAction }) {
  const externalProps = action.external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <Link
      href={action.href}
      className={buttonClasses({ variant: action.variant ?? "primary", size: "lg" })}
      {...externalProps}
    >
      {action.label}
    </Link>
  );
}

/**
 * Call-to-action banner composed from `Section` + `Container` + `Heading` +
 * button-styled links. Defaults its primary action to the WhatsApp contact so
 * any page can drop in a conversion prompt.
 */
export function CTA({
  title,
  description,
  primaryAction = defaultPrimaryAction,
  secondaryAction,
  className,
}: CTAProps) {
  return (
    <Section spacing="compact" className={cn(className)}>
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-primary-800 px-6 py-12 text-center text-white sm:px-12">
          <Heading as="h2" size="lg" className="max-w-2xl text-white">
            {title}
          </Heading>
          {description && (
            <p className="max-w-2xl text-base text-primary-100">{description}</p>
          )}
          <div className="flex flex-col gap-3 sm:flex-row">
            <ActionLink action={primaryAction} />
            {secondaryAction && <ActionLink action={secondaryAction} />}
          </div>
        </div>
      </Container>
    </Section>
  );
}
