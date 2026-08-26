// components/projects/ProjectCard.tsx
import Link from 'next/link';
import type { Project } from '@/lib/types';
import { Tag } from '@/components/ui/Tag';
import { Badge } from '@/components/ui/Badge';
import { formatDate } from '@/lib/utils';
import { Star, Construction, CheckCircle2, Archive, FlaskConical, ImageOff } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { slug, title, shortDescription, tags, status, startDate, endDate, featured, image } = project;

  const statusConfig: Record<Project['status'], { icon: React.ElementType; label: string }> = {
    'in-progress': { icon: Construction, label: 'In Progress' },
    completed: { icon: CheckCircle2, label: 'Selesai' },
    archived: { icon: Archive, label: 'Arsip' },
    experiment: { icon: FlaskConical, label: 'Eksperimen' },
  };

  const StatusIcon = statusConfig[status]?.icon || Construction;
  const statusLabel = statusConfig[status]?.label || status;

  return (
    <Link
      href={`/projects/${slug}`}
      className="group block bg-[var(--color-surface)] rounded-[var(--radius-lg)] p-6 transition-all duration-300 hover:bg-[var(--color-surface-variant)] focus:outline-none focus:ring-2 focus:ring-[var(--color-focus-ring)] focus:ring-offset-2"
    >
      {featured && (
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-primary)] bg-[var(--color-primary-light)] px-3 py-1 rounded-[var(--radius-full)]">
            <Star className="w-3.5 h-3.5" />
            Featured
          </span>
        </div>
      )}

      {/* Image */}
      <div className="aspect-video bg-[var(--color-surface-variant)] rounded-[var(--radius-sm)] mb-4 flex items-center justify-center text-[var(--color-text-muted)] text-sm border border-[var(--color-border)] overflow-hidden">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-1 opacity-60">
            <ImageOff className="w-8 h-8" />
            <span>{title}</span>
          </div>
        )}
      </div>

      <h3 className="text-xl font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors duration-200">
        {title}
      </h3>

      <p className="mt-2 text-sm text-[var(--color-text-secondary)] line-clamp-2 leading-relaxed">
        {shortDescription}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-[var(--color-text-muted)]">
        <span>{formatDate(startDate)} {endDate ? `- ${formatDate(endDate)}` : '- Sekarang'}</span>
        <Badge
          label={
            <span className="flex items-center gap-1">
              <StatusIcon className="w-3 h-3" />
              {statusLabel}
            </span>
          }
          tone={status === 'completed' ? 'positive' : 'neutral'}
        />
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