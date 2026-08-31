import Link from "next/link";
import { Container, Heading, buttonClasses } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="flex flex-1 flex-col items-center justify-center gap-6 py-24 text-center">
      <p className="font-display text-6xl font-extrabold text-primary-700">
        404
      </p>
      <Heading as="h1" size="lg">
        Halaman tidak ditemukan
      </Heading>
      <p className="max-w-md text-base text-neutral-600">
        Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
      </p>
      <Link href="/" className={buttonClasses({ variant: "primary", size: "md" })}>
        Kembali ke Beranda
      </Link>
    </Container>
  );
}
