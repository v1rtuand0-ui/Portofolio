// app/not-found.tsx
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <Section spacing="large" containerVariant="reading">
      <div className="py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight">
          404
        </h1>
        <p className="mt-4 text-xl text-[var(--color-text-secondary)]">
          Halaman tidak ditemukan
        </p>
        <p className="mt-2 text-[var(--color-text-muted)]">
          Mungkin URL-nya salah, atau halaman ini sudah dipindahkan.
        </p>
        <Button variant="filled" size="md" className="mt-8" asChild>
          <a href="/">Kembali ke Beranda</a>
        </Button>
      </div>
    </Section>
  );
}