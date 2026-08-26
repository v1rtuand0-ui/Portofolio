// components/experience/ExperienceItem.tsx
'use client';

import { useState } from 'react';
import type { Experience } from '@/lib/types';
import { Tag } from '@/components/ui/Tag';
import { Badge } from '@/components/ui/Badge';
import { formatDateRange } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { TimelineItem } from '@/components/ui/Timeline';

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
    <TimelineItem
      title={`${role} · ${company}`}
      date={formatDateRange(startDate, endDate)}
    >
      <div className="flex flex-col gap-1">
        {/* Employment type & location */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-text-muted)]">
          <Badge label={employmentType} tone="muted" />
          {location && (
            <>
              <span>·</span>
              <span>{location}</span>
            </>
          )}
        </div>

        {/* Description */}
        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        )}

        {/* Achievements - expandable */}
        {hasAchievements && (
          <div className="mt-2">
            <button
              onClick={toggleExpand}
              className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors focus:outline-none"
              aria-expanded={isExpanded}
              aria-controls={`achievements-${experience.id}`}
            >
              <span>{isExpanded ? 'Sembunyikan' : 'Lihat'} pencapaian</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
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
    </TimelineItem>
  );
}