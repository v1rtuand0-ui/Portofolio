// components/activities/ActivityList.tsx
import type { Activity } from '@/lib/types';
import { ActivityItem } from './ActivityItem';
import { Timeline } from '@/components/ui/Timeline';

interface ActivityListProps {
  activities: Activity[];
}

export function ActivityList({ activities }: ActivityListProps) {
  if (activities.length === 0) {
    return (
      <p className="text-[var(--color-text-muted)] text-sm">
        Belum ada aktivitas yang ditampilkan.
      </p>
    );
  }

  return (
    <Timeline>
      {activities.map((activity) => (
        <ActivityItem key={activity.id} activity={activity} />
      ))}
    </Timeline>
  );
}