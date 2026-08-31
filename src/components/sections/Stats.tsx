import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/common/Reveal";
import { stats } from "@/content/home";

/**
 * Statistik / achievement band.
 *
 * Real achievement numbers are NOT available yet, so values render as a tasteful
 * "data menyusul" treatment rather than fabricated figures.
 * TODO: Replace `stats` in content/home.ts with verified numbers before launch.
 */
export function Stats() {
  return (
    <Section spacing="compact" aria-label="Statistik RUBELA">
      <Container>
        <Reveal
          as="div"
          animation="scale"
          className="rounded-3xl bg-gradient-to-br from-primary-700 to-secondary-800 px-6 py-10 text-white sm:px-10"
        >
          <p className="mb-8 text-center text-sm font-medium text-primary-100">
            Dampak yang terus kami bangun bersama mentee di seluruh Indonesia
          </p>
          <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 text-center"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-bold sm:text-3xl">
                  {stat.value}
                </dd>
                <p aria-hidden="true" className="text-sm text-primary-100">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </Section>
  );
}
