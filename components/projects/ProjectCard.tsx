// components/projects/ProjectCard.tsx
import Link from 'next/link';
import type { Project } from '@/lib/types';
import { Tag } from '@/components/ui/Tag';
import { Badge } from '@/components/ui/Badge';
import { formatDate } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const {
    slug,
    title,
    shortDescription,
    image,
    tags,
    status,
    startDate,
    endDate,
    featured,
  } = project;

  const statusMap: Record<Project['status'], string> = {
    'in-progress': '🚧 In Progress',
    completed: '✅ Selesai',
    archived: '📦 Arsip',
    experiment: '🧪 Eksperimen',
  };

  return (
    <Link
      href={`/projects/${slug}`}
      className="group block border border-[var(--color-border)] rounded-[var(--radius-md)] p-5 hover:border-[var(--color-border-strong)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-focus-ring)] focus:ring-offset-2"
    >
      {/* Featured badge */}
      {featured && (
        <div className="mb-3">
          <span className="inline-block text-xs font-medium text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2.5 py-0.5 rounded-[var(--radius-sm)]">
            ⭐ Featured
          </span>
        </div>
      )}

      {/* Image placeholder / thumbnail */}
      {image ? (
        <div className="aspect-video bg-[var(--color-surface)] rounded-[var(--radius-sm)] mb-4 overflow-hidden border border-[var(--color-border)]">
          {/* Next.js Image nanti di sini, untuk sekarang placeholder dulu */}
          <div className="w-full h-full flex items-center justify-center text-[var(--color-text-muted)] text-sm bg-[var(--color-surface)]">
            🖼️ {title}
          </div>
        </div>
      ) : (
        <div className="aspect-video bg-[var(--color-surface)] rounded-[var(--radius-sm)] mb-4 flex items-center justify-center text-[var(--color-text-muted)] text-sm border border-[var(--color-border)]">
          📷 No image
        </div>
      )}

      <h3 className="text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
        {title}
      </h3>

      <p className="mt-1.5 text-sm text-[var(--color-text-secondary)] line-clamp-2 leading-relaxed">
        {shortDescription}
      </p>

      {/* Metadata row: date + status */}
      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-[var(--color-text-muted)]">
        <span>{formatDate(startDate)} {endDate ? `- ${formatDate(endDate)}` : '- Sekarang'}</span>
        <Badge label={statusMap[status] || status} tone={status === 'completed' ? 'positive' : 'neutral'} />
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.slice(0, 3).map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
          {tags.length > 3 && (
            <span className="text-xs text-[var(--color-text-muted)]">
              +{tags.length - 3} more
            </span>
          )}
        </div>
      )}
    </Link>
  );
}