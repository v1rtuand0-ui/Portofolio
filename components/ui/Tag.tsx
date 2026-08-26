// components/ui/Tag.tsx
import { cn } from '@/lib/utils';

interface TagProps {
  label: string;
  variant?: 'neutral' | 'accent';
  className?: string;
}

export function Tag({ label, variant = 'neutral', className }: TagProps) {
  const baseStyles =
    'inline-flex items-center px-3 py-1 text-xs font-medium rounded-[var(--radius-full)] transition-colors duration-200';
  
  const variantStyles =
    variant === 'accent'
      ? 'bg-[var(--color-primary-light)] text-[var(--color-primary)] border border-[var(--color-primary-container)]'
      : 'bg-[var(--color-surface-variant)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)]';

  return <span className={cn(baseStyles, variantStyles, className)}>{label}</span>;
}