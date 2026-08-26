// components/experience/ExperienceList.tsx
import type { Experience } from '@/lib/types';
import { ExperienceItem } from './ExperienceItem';
import { Timeline } from '@/components/ui/Timeline';

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
    <Timeline>
      {experiences.map((exp) => (
        <ExperienceItem key={exp.id} experience={exp} />
      ))}
    </Timeline>
  );
}