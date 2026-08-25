import type { Project } from '@/lib/types';
import rawProjects from '@/content/projects';

export function getAllProjects(): Project[] {
  return [...rawProjects].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured === true);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return getAllProjects().map((p) => p.slug);
}