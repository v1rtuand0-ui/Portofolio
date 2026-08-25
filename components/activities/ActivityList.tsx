// components/activities/ActivityList.tsx
import type { Activity } from '@/lib/types';
import { ActivityItem } from './ActivityItem';

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
    <div className="space-y-6">
      {activities.map((activity) => (
        <ActivityItem key={activity.id} activity={activity} />
      ))}
    </div>
  );
}