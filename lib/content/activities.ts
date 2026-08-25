import type { Activity } from '@/lib/types';
import rawActivities from '@/content/activities';

export function getAllActivities(): Activity[] {
  return [...rawActivities].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );
}

export function getFeaturedActivities(limit: number = 4): Activity[] {
  return getAllActivities().filter((a) => a.featured === true).slice(0, limit);
}