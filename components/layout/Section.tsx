// components/layout/Section.tsx
import { ReactNode } from 'react';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
  /** Spacing variant: 'large' (space-7/8) or 'normal' (space-6) */
  spacing?: 'normal' | 'large';
  className?: string;
  containerVariant?: 'wide' | 'reading';
}

export function Section({
  children,
  spacing = 'large',
  className = '',
  containerVariant = 'wide',
}: SectionProps) {
  const paddingY =
    spacing === 'large' ? 'py-16 md:py-20' : 'py-12 md:py-16';

  return (
    <section className={`${paddingY} ${className}`}>
      <Container variant={containerVariant}>{children}</Container>
    </section>
  );
}