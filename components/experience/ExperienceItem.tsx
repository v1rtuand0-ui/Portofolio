// components/experience/ExperienceItem.tsx
'use client';

import { useState } from 'react';
import type { Experience } from '@/lib/types';
import { Tag } from '@/components/ui/Tag';
import { Badge } from '@/components/ui/Badge';
import { formatDateRange } from '@/lib/utils';

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  const {
    company,
    role,
    description,
    startDate,
    endDate,
    tags,
    achievements,
    employmentType,
    location,
  } = experience;

  const [isExpanded, setIsExpanded] = useState(false);
  const hasAchievements = achievements && achievements.length > 0;

  const toggleExpand = () => {
    if (hasAchievements) setIsExpanded((prev) => !prev);
  };

  return (
    <div className="border-b border-[var(--color-border)] last:border-0 pb-6 last:pb-0">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
              {role}
            </h3>
            <span className="text-[var(--color-text-secondary)]">·</span>
            <span className="text-[var(--color-text-secondary)] font-medium">
              {company}
            </span>
          </div>
          <div className="flex items-center gap-2 flex-wrap mt-0.5">
            <span className="text-sm text-[var(--color-text-muted)]">
              {formatDateRange(startDate, endDate)}
            </span>
            {location && (
              <>
                <span className="text-[var(--color-border-strong)]">·</span>
                <span className="text-sm text-[var(--color-text-muted)]">
                  {location}
                </span>
              </>
            )}
            <Badge label={employmentType} tone="muted" />
          </div>
          <p className="mt-2 text-[var(--color-text-secondary)] text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      )}

      {/* Achievements - expandable */}
      {hasAchievements && (
        <div className="mt-3">
          <button
            onClick={toggleExpand}
            className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors focus:outline-none"
            aria-expanded={isExpanded}
            aria-controls={`achievements-${experience.id}`}
          >
            <span>{isExpanded ? 'Sembunyikan' : 'Lihat'} pencapaian</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                isExpanded ? 'rotate-180' : ''
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          <div
            id={`achievements-${experience.id}`}
            className={`mt-2 overflow-hidden transition-all duration-200 ${
              isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
            role="list"
          >
            <ul className="list-disc list-inside space-y-1 text-sm text-[var(--color-text-secondary)]">
              {achievements.map((item, idx) => (
                <li key={idx} className="pl-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}