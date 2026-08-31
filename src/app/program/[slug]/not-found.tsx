import Link from "next/link";
import { Container, Heading, buttonClasses } from "@/components/ui";

/**
 * Shown when `/program/[slug]` receives an unknown slug (via `notFound()`).
 * Guides the visitor back to the program overview.
 */
export default function ProgramNotFound() {
  return (
    <Container className="flex flex-1 flex-col items-center justify-center gap-6 py-24 text-center">
      <p className="font-display text-6xl font-extrabold text-primary-700">
        404
      </p>
      <Heading as="h1" size="lg">
        Program tidak ditemukan
      </Heading>
      <p className="max-w-md text-base text-neutral-600">
        Program yang Anda cari tidak tersedia atau namanya telah berubah. Lihat
        seluruh program yang tersedia di halaman program.
      </p>
      <Link
        href="/program"
        className={buttonClasses({ variant: "primary", size: "md" })}
      >
        Lihat semua program
      </Link>
    </Container>
  );
}
