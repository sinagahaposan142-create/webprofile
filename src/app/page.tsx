import {
  Hero,
  ValueProps,
  Programs,
  WhyRubela,
  Method,
  Stats,
  Teachers,
  Facilities,
  Testimonials,
  RegistrationCta,
  Faq,
} from "@/components/sections";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({ path: "/" });

/**
 * RUBELA homepage.
 *
 * Composed entirely from reusable UI/layout primitives and section components.
 * The global layout provides the announcement bar, navbar, and footer, so this
 * page focuses on the marketing sections in reading order.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <Programs />
      <WhyRubela />
      <Method />
      <Stats />
      <Teachers />
      <Facilities />
      <Testimonials />
      <RegistrationCta />
      <Faq />
    </>
  );
}
