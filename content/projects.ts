// content/projects.ts
import type { Project } from '@/lib/types';

const projects: Project[] = [
  {
    id: 'project-1',
    slug: 'build-a-roguelite-in-godot',
    title: 'Build a Roguelite in Godot',
    shortDescription:
      'Proyek pribadi untuk belajar game development dengan Godot Engine — ' +
      'fokus pada procedural generation dan sistem turn-based.',
    fullDescription:
      '[ISI: deskripsi panjang tentang proyek ini, apa yang dipelajari, ' +
      'teknologi yang digunakan, hasil yang dicapai, dll.]',
    description: 'Roguelite game prototype dengan Godot dan GDScript.',
    startDate: '2025-01-01',
    endDate: null,
    status: 'in-progress',
    category: 'personal',
    featured: true,
    tags: ['Godot', 'GDScript', 'Procedural Generation'],
    links: [
      { label: 'GitHub', url: 'https://github.com/vito/roguelite' },
    ],
    highlights: [
      'Procedural dungeon generation dengan BSP',
      'Turn-based combat system',
      'Inventory & item system',
    ],
    image: '/images/projects/roguelite-thumb.jpg',
  },
  // tambahkan project lain...
];

export default projects;