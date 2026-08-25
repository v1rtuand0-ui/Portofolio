// app/not-found.tsx
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

export default function NotFound() {
  return (
    <Section spacing="large" containerVariant="reading">
      <div className="py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          404
        </h1>
        <p className="mt-4 text-xl text-[var(--color-text-secondary)]">
          Halaman tidak ditemukan
        </p>
        <p className="mt-2 text-[var(--color-text-muted)]">
          Mungkin URL-nya salah, atau halaman ini sudah dipindahkan.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 text-sm font-medium rounded-[var(--radius-sm)] bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </Section>
  );
}