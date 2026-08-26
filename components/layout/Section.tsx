// components/layout/Section.tsx
import { ReactNode } from 'react';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
  spacing?: 'normal' | 'large';
  className?: string;
  containerVariant?: 'wide' | 'reading';
  /** Bungkus section dalam card besar dengan radius XL & shadow (gaya video) */
  wrapped?: boolean;
}

export function Section({
  children,
  spacing = 'large',
  className = '',
  containerVariant = 'wide',
  wrapped = false,
}: SectionProps) {
  // Spacing lebih kecil kalau wrapped (karena card sudah punya padding internal)
  const paddingY =
    spacing === 'large'
      ? wrapped
        ? 'py-6 md:py-8'
        : 'py-12 md:py-16'
      : wrapped
      ? 'py-4 md:py-6'
      : 'py-8 md:py-12';

  return (
    <section className={`${paddingY} ${className}`}>
      <Container variant={containerVariant} wrapped={wrapped}>
        {children}
      </Container>
    </section>
  );
}