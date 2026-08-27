// components/layout/Container.tsx
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  /** 'wide' = ~1200px, 'reading' = ~720px (PRD Section 18) */
  variant?: 'wide' | 'reading';
  /** Bungkus dalam card putih besar dengan radius XL */
  wrapped?: boolean;
  className?: string;
}

export function Container({
  children,
  variant = 'wide',
  wrapped = false,
  className = '',
}: ContainerProps) {
  const maxWidth =
    variant === 'reading'
      ? 'var(--container-reading)'
      : 'var(--container-wide)';

  const baseStyles = 'mx-auto px-4 md:px-6';
  const wrappedStyles = wrapped
    ? 'bg-[var(--color-background)] rounded-[var(--radius-xl)] shadow-[var(--shadow-card)] my-6 md:my-10 py-8 md:py-12'
    : '';

  return (
    <div
      className={`${baseStyles} ${wrappedStyles} ${className}`}
      style={{ maxWidth }}
    >
      {children}
    </div>
  );
}