// components/activities/ActivityItem.tsx
'use client';

import { useState } from 'react';
import type { Activity } from '@/lib/types';
import { Tag } from '@/components/ui/Tag';
import { formatDateRange } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { TimelineItem } from '@/components/ui/Timeline';

interface ActivityItemProps {
  activity: Activity;
}

export function ActivityItem({ activity }: ActivityItemProps) {
  const {
    organization,
    role,
    title,
    description,
    startDate,
    endDate,
    tags,
    achievements,
    type,
    location,
  } = activity;

  const [isExpanded, setIsExpanded] = useState(false);
  const hasAchievements = achievements && achievements.length > 0;

  const toggleExpand = () => {
    if (hasAchievements) setIsExpanded((prev) => !prev);
  };

  const displayTitle = role || title || organization;

  return (
    <TimelineItem
      title={displayTitle}
      date={formatDateRange(startDate, endDate)}
    >
      <div className="flex flex-col gap-1">
        {/* Organization & type */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-text-muted)]">
          {organization && displayTitle !== organization && (
            <span className="font-medium text-[var(--color-text-secondary)]">
              {organization}
            </span>
          )}
          <span className="text-xs bg-[var(--color-surface-variant)] text-[var(--color-text-muted)] px-2 py-0.5 rounded-[var(--radius-full)] border border-[var(--color-border)]">
            {type}
          </span>
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
              aria-controls={`activity-achievements-${activity.id}`}
            >
              <span>{isExpanded ? 'Sembunyikan' : 'Lihat'} pencapaian</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>

            <div
              id={`activity-achievements-${activity.id}`}
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