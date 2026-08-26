// components/projects/ProjectCard.tsx
import Link from 'next/link';
import type { Project } from '@/lib/types';
import { Tag } from '@/components/ui/Tag';
import { Badge } from '@/components/ui/Badge';
import { Image } from '@/components/ui/Image';
import { formatDate } from '@/lib/utils';
import { Star, Construction, CheckCircle2, Archive, FlaskConical } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { slug, title, shortDescription, tags, status, startDate, endDate, featured, image } = project;

  const statusConfig: Record<Project['status'], { icon: React.ElementType; label: string; color: string; tone: 'neutral' | 'positive' | 'muted' | 'info' }> = {
    'in-progress': { icon: Construction, label: 'In Progress', color: 'text-[var(--color-primary)]', tone: 'info' },
    completed: { icon: CheckCircle2, label: 'Selesai', color: 'text-[var(--color-success)]', tone: 'positive' },
    archived: { icon: Archive, label: 'Arsip', color: 'text-[var(--color-text-muted)]', tone: 'muted' },
    experiment: { icon: FlaskConical, label: 'Eksperimen', color: 'text-[var(--color-primary)]', tone: 'info' },
  };

  const statusInfo = statusConfig[status] || statusConfig['in-progress'];
  const StatusIcon = statusInfo.icon;
  const statusLabel = statusInfo.label;
  const statusColor = statusInfo.color;
  const statusTone = statusInfo.tone;

  return (
    <Link
      href={`/projects/${slug}`}
      className="group block bg-[var(--color-background)] rounded-[var(--radius-xl)] overflow-hidden border border-[var(--color-border)] transition-all duration-300 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
    >
      {/* Gambar — lebih besar & dominan */}
      <div className="relative overflow-hidden bg-[var(--color-surface-variant)]">
        <div className="aspect-[4/3]">
          <Image
            src={image}
            alt={title}
            aspectRatio="video"
            containerClassName="w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        {featured && (
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-primary)] bg-[var(--color-primary-light)] px-3 py-1 rounded-[var(--radius-full)]">
              <Star className="w-3.5 h-3.5" />
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Konten di bawah gambar */}
      <div className="p-5 md:p-6">
        <h3 className="text-xl font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors duration-200">
          {title}
        </h3>

        <p className="mt-2 text-sm text-[var(--color-text-secondary)] line-clamp-2 leading-relaxed">
          {shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-[var(--color-text-muted)]">
          <span>{formatDate(startDate)} {endDate ? `- ${formatDate(endDate)}` : '- Sekarang'}</span>
          <Badge
            label={
              <span className={`flex items-center gap-1 ${statusColor}`}>
                <StatusIcon className="w-3 h-3" />
                {statusLabel}
              </span>
            }
            tone={statusTone}
          />
        </div>

        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.slice(0, 4).map((tag, index) => (
              <Tag
                key={tag}
                label={tag}
                variant={index === 0 ? 'accent' : 'neutral'}
              />
            ))}
            {tags.length > 4 && (
              <span className="text-xs text-[var(--color-text-muted)] font-medium">+{tags.length - 4} more</span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}