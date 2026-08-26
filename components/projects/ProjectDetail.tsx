// components/projects/ProjectDetail.tsx
import type { Project } from '@/lib/types';
import { Tag } from '@/components/ui/Tag';
import { Badge } from '@/components/ui/Badge';
import { Image } from '@/components/ui/Image';
import { formatDateRange } from '@/lib/utils';
import { Construction, CheckCircle2, Archive, FlaskConical, Link2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import Link from 'next/link';

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const {
    title,
    shortDescription,
    fullDescription,
    image,
    status,
    tags,
    links,
    highlights,
    startDate,
    endDate,
    role,
    category,
  } = project;

  const statusMap: Record<Project['status'], { icon: React.ElementType; label: string; tone: 'neutral' | 'positive' | 'muted' }> = {
    'in-progress': { icon: Construction, label: 'In Progress', tone: 'neutral' },
    completed: { icon: CheckCircle2, label: 'Selesai', tone: 'positive' },
    archived: { icon: Archive, label: 'Arsip', tone: 'muted' },
    experiment: { icon: FlaskConical, label: 'Eksperimen', tone: 'neutral' },
  };

  const statusInfo = statusMap[status];
  const StatusIcon = statusInfo.icon;

  return (
    <article className="max-w-3xl mx-auto">
      {/* Gambar besar */}
      <div className="mb-8 rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-surface-variant)] border border-[var(--color-border)]">
        <Image
          src={image}
          alt={title}
          aspectRatio="video"
          containerClassName="w-full h-auto"
        />
      </div>

      {/* Judul & metadata */}
      <h1 className="text-4xl md:text-5xl font-light tracking-tight">
        {title}
      </h1>
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--color-text-secondary)]">
        <span>{formatDateRange(startDate, endDate)}</span>
        {role && <span>· {role}</span>}
        {category && <span>· {category}</span>}
        <Badge
          label={
            <span className="flex items-center gap-1">
              <StatusIcon className="w-3.5 h-3.5" />
              {statusInfo.label}
            </span>
          }
          tone={statusInfo.tone}
        />
      </div>

      {/* Short description */}
      <p className="mt-6 text-lg text-[var(--color-text-secondary)] leading-relaxed">
        {shortDescription}
      </p>

      {/* Full description */}
      <div className="mt-8 prose prose-neutral max-w-none">
        <div className="text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line">
          {fullDescription}
        </div>
      </div>

      {/* Highlights */}
      {highlights && highlights.length > 0 && (
        <div className="mt-10">
          <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-3">Highlights</h3>
          <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
            {highlights.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} variant="accent" />
          ))}
        </div>
      )}

      {/* Links */}
      {links && links.length > 0 && (
        <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-wrap gap-3">
          {links.map((link) => {
            const isGithub = link.label === 'GitHub';
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-[var(--radius-full)] border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-200"
              >
                {isGithub ? <FaGithub className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
                {link.label}
              </a>
            );
          })}
        </div>
      )}

      {/* Back link */}
      <div className="mt-12 pt-6 border-t border-[var(--color-border)]">
        <Link
          href="/projects"
          className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] font-medium transition-colors"
        >
          ← Kembali ke semua proyek
        </Link>
      </div>
    </article>
  );
}