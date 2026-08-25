// components/layout/Container.tsx
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  /** 'wide' = ~1200px, 'reading' = ~720px (PRD Section 18) */
  variant?: 'wide' | 'reading';
  className?: string;
}

export function Container({
  children,
  variant = 'wide',
  className = '',
}: ContainerProps) {
  const maxWidth =
    variant === 'reading'
      ? 'var(--container-reading)'
      : 'var(--container-wide)';

  return (
    <div
      className={`mx-auto px-4 md:px-6 ${className}`}
      style={{ maxWidth }}
    >
      {children}
    </div>
  );
}