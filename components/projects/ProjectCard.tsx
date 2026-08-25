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
  const { slug, title, shortDescription, tags, status, startDate, endDate, featured, image } = project;

  const statusMap: Record<Project['status'], string> = {
    'in-progress': '🚧 In Progress',
    completed: '✅ Selesai',
    archived: '📦 Arsip',
    experiment: '🧪 Eksperimen',
  };

  return (
    <Link
      href={`/projects/${slug}`}
      className="group block bg-[var(--color-background)] border border-[var(--color-border)] rounded-[var(--radius-md)] p-6 hover:shadow-[var(--shadow-elevation-2)] hover:border-[var(--color-primary)] transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[var(--color-focus-ring)] focus:ring-offset-2"
    >
      {featured && (
        <div className="mb-4">
          <span className="inline-flex items-center gap-1 text-xs font-medium text-[var(--color-primary)] bg-[var(--color-primary-light)] px-3 py-1 rounded-[var(--radius-full)]">
            <span className="text-sm">⭐</span> Featured
          </span>
        </div>
      )}

      {/* Image */}
      <div className="aspect-video bg-[var(--color-surface-variant)] rounded-[var(--radius-sm)] mb-4 flex items-center justify-center text-[var(--color-text-muted)] text-sm border border-[var(--color-border)] overflow-hidden">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="opacity-60">🖼️ {title}</span>
        )}
      </div>

      <h3 className="text-xl font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors duration-200">
        {title}
      </h3>

      <p className="mt-2 text-sm text-[var(--color-text-secondary)] line-clamp-2 leading-relaxed">
        {shortDescription}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-[var(--color-text-muted)]">
        <span>{formatDate(startDate)} {endDate ? `- ${formatDate(endDate)}` : '- Sekarang'}</span>
        <Badge label={statusMap[status] || status} tone={status === 'completed' ? 'positive' : 'neutral'} />
      </div>

      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.slice(0, 4).map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
          {tags.length > 4 && (
            <span className="text-xs text-[var(--color-text-muted)] font-medium">+{tags.length - 4} more</span>
          )}
        </div>
      )}
    </Link>
  );
}