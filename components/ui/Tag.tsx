// components/ui/Tag.tsx

interface TagProps {
  label: string;
  variant?: 'neutral' | 'accent';
}

export function Tag({ label, variant = 'neutral' }: TagProps) {
  const baseStyles =
    'inline-block px-2.5 py-0.5 text-xs font-medium rounded-[var(--radius-sm)]';
  const variantStyles =
    variant === 'accent'
      ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]'
      : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)] border border-[var(--color-border)]';

  return <span className={`${baseStyles} ${variantStyles}`}>{label}</span>;
}