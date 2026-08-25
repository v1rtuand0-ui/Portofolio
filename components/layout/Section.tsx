// components/layout/Section.tsx
import { ReactNode } from 'react';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
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
    spacing === 'large' ? 'py-20 md:py-28' : 'py-14 md:py-20';

  return (
    <section className={`${paddingY} ${className}`}>
      <Container variant={containerVariant}>{children}</Container>
    </section>
  );
}