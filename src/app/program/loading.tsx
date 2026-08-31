import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

/**
 * Route-level loading UI for `/program` and `/program/[slug]`.
 *
 * Rendered as a Suspense fallback during navigation/streaming. Uses simple
 * skeleton blocks (no motion beyond a subtle pulse) so it stays lightweight and
 * accessible.
 */
export default function ProgramLoading() {
  return (
    <Section spacing="compact" aria-hidden="true">
      <Container className="flex flex-col gap-6">
        <div className="h-4 w-40 animate-pulse rounded bg-neutral-200" />
        <div className="h-6 w-28 animate-pulse rounded-full bg-neutral-200" />
        <div className="h-10 w-3/4 animate-pulse rounded bg-neutral-200" />
        <div className="h-4 w-full max-w-2xl animate-pulse rounded bg-neutral-200" />
        <div className="h-4 w-2/3 max-w-2xl animate-pulse rounded bg-neutral-200" />
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-48 animate-pulse rounded-xl bg-neutral-200"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
