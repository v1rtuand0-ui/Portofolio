import type { Experience } from '@/lib/types';
import rawExperiences from '@/content/experience';

export function getAllExperiences(): Experience[] {
  return [...rawExperiences].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );
}

export function getFeaturedExperiences(limit: number = 5): Experience[] {
  return getAllExperiences().filter((e) => e.featured === true).slice(0, limit);
}