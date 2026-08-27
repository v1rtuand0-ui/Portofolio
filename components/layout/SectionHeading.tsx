// components/layout/SectionHeading.tsx
import Link from 'next/link';

interface SectionHeadingProps {
  title: string;
  description?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
}

export function SectionHeading({
  title,
  description,
  viewAllHref,
  viewAllLabel = 'Lihat semua →',
}: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <h2 className="tracking-tight text-[var(--color-text-primary)]">
          {title}
        </h2>
        {viewAllHref && (
          <Link
            href={viewAllHref}
            className="text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors"
          >
            {viewAllLabel}
          </Link>
        )}
      </div>
      {description && (
        <p className="mt-2 text-[var(--color-text-secondary)] max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}