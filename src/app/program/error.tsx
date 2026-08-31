"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

/**
 * Route-level error boundary for `/program` and `/program/[slug]`.
 *
 * Must be a Client Component (App Router requirement). Offers a recovery action
 * via `reset()` and a fallback link back to the program overview.
 */
export default function ProgramError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface the error for observability without leaking details to the UI.
    console.error(error);
  }, [error]);

  return (
    <Container className="flex flex-1 flex-col items-center justify-center gap-6 py-24 text-center">
      <Heading as="h1" size="lg">
        Terjadi kendala saat memuat program
      </Heading>
      <p className="max-w-md text-base text-neutral-600">
        Maaf, halaman program tidak dapat ditampilkan untuk sementara. Silakan
        coba lagi beberapa saat.
      </p>
      <Button variant="primary" size="md" onClick={reset}>
        Coba lagi
      </Button>
    </Container>
  );
}
