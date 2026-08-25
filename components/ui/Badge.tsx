// components/ui/Badge.tsx

type BadgeTone = 'neutral' | 'positive' | 'muted';

interface BadgeProps {
  label: string;
  tone?: BadgeTone;
}

export function Badge({ label, tone = 'neutral' }: BadgeProps) {
  const baseStyles =
    'inline-block px-2 py-0.5 text-xs font-medium rounded-[var(--radius-sm)]';

  const toneStyles: Record<BadgeTone, string> = {
    neutral: 'bg-[var(--color-surface)] text-[var(--color-text-secondary)] border border-[var(--color-border)]',
    positive: 'bg-[var(--color-success)]/10 text-[var(--color-success)] border border-[var(--color-success)]/20',
    muted: 'bg-[var(--color-text-muted)]/10 text-[var(--color-text-muted)] border border-[var(--color-border)]',
  };

  return <span className={`${baseStyles} ${toneStyles[tone]}`}>{label}</span>;
}