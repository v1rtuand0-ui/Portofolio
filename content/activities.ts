// content/activities.ts
import type { Activity } from '@/lib/types';

const activities: Activity[] = [
  {
    id: 'act-1',
    organization: 'HMTI — UMRAH',
    title: 'Ketua Umum',
    role: 'Ketua Umum',
    type: 'organization',
    description:
      'Memimpin Himpunan Mahasiswa Teknik Informatika UMRAH periode 2024-2025.',
    startDate: '2024-08-01',
    endDate: null,
    featured: true,
    tags: ['Leadership', 'Organization'],
    achievements: [
      'Menyelenggarakan 5+ workshop',
      'Inisiasi program mentorship internal',
    ],
  },
  // tambahkan aktivitas lain...
];

export default activities;