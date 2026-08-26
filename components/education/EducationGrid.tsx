// components/education/EducationGrid.tsx
import type { Education } from '@/lib/types';
import { Image } from '@/components/ui/Image';
import { formatDateRange } from '@/lib/utils';
import { GraduationCap } from 'lucide-react';
import Link from 'next/link';

interface EducationGridProps {
  education: Education[];
}

export function EducationGrid({ education }: EducationGridProps) {
  if (education.length === 0) {
    return (
      <p className="text-[var(--color-text-muted)] text-sm">
        Belum ada data pendidikan.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {education.map((edu) => (
        <Link
          key={edu.id}
          href={edu.link || '#'}
          target={edu.link ? '_blank' : undefined}
          rel={edu.link ? 'noopener noreferrer' : undefined}
          className={`group block bg-[var(--color-surface)] rounded-[var(--radius-lg)] p-4 border border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-elevation-1)] transition-all duration-300 ${
            !edu.link ? 'cursor-default' : ''
          }`}
        >
          <div className="flex flex-col items-center text-center">
            {/* Logo — pakai Image wrapper */}
            {edu.logo ? (
              <div className="w-16 h-16 relative mb-3 flex-shrink-0">
                <Image
                  src={edu.logo}
                  alt={edu.school}
                  aspectRatio="square"
                  containerClassName="w-full h-full"
                />
              </div>
            ) : (
              <div className="w-16 h-16 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center mb-3 flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
            )}

            {/* Nama Sekolah/Institusi */}
            <h3 className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors duration-300 line-clamp-2">
              {edu.school}
            </h3>

            {/* Degree */}
            <p className="text-xs text-[var(--color-text-muted)] mt-0.5 line-clamp-1">
              {edu.degree}
            </p>

            {/* Tahun */}
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              {formatDateRange(edu.startDate, edu.endDate)}
            </p>

            {/* IPK (kalau ada) */}
            {edu.gpa && (
              <p className="text-xs font-medium text-[var(--color-primary)] mt-1">
                IPK: {edu.gpa}
              </p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}