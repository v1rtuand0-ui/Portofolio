// components/ui/Badge.tsx
type BadgeTone = 'neutral' | 'positive' | 'muted';

interface BadgeProps {
  label: string;
  tone?: BadgeTone;
}

export function Badge({ label, tone = 'neutral' }: BadgeProps) {
  const baseStyles =
    'inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-[var(--radius-full)]';

  const toneStyles: Record<BadgeTone, string> = {
    neutral: 'bg-[var(--color-surface-variant)] text-[var(--color-text-secondary)] border border-[var(--color-border)]',
    positive: 'bg-[#E6F4EA] text-[var(--color-success)] border border-[#B7E1CD]',
    muted: 'bg-[#F1F3F4] text-[var(--color-text-muted)] border border-[var(--color-border)]',
  };

  return <span className={`${baseStyles} ${toneStyles[tone]}`}>{label}</span>;
}