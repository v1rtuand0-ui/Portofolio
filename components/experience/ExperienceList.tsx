// components/experience/ExperienceList.tsx
import type { Experience } from '@/lib/types';
import { ExperienceItem } from './ExperienceItem';

interface ExperienceListProps {
  experiences: Experience[];
}

export function ExperienceList({ experiences }: ExperienceListProps) {
  if (experiences.length === 0) {
    return (
      <p className="text-[var(--color-text-muted)] text-sm">
        Belum ada pengalaman yang ditampilkan.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {experiences.map((exp) => (
        <ExperienceItem key={exp.id} experience={exp} />
      ))}
    </div>
  );
}