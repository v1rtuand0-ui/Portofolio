// components/ui/Badge.tsx
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type BadgeTone = 'neutral' | 'positive' | 'muted';

interface BadgeProps {
  label: ReactNode;
  tone?: BadgeTone;
  className?: string;
}

const toneStyles: Record<BadgeTone, string> = {
  neutral: 'bg-[var(--color-surface-variant)] text-[var(--color-text-secondary)] border border-[var(--color-border)]',
  positive: 'bg-[var(--color-success-bg)] text-[var(--color-success)] border border-[var(--color-success)]/20',
  muted: 'bg-[var(--color-surface-variant)] text-[var(--color-text-muted)] border border-[var(--color-border)]',
};

export function Badge({ label, tone = 'neutral', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-[var(--radius-full)]',
        toneStyles[tone],
        className
      )}
    >
      {label}
    </span>
  );
}