// content/experience.ts
import type { Experience } from '@/lib/types';

const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'HMTI — Universitas Maritim Raja Ali Haji',
    role: 'Ketua Umum',
    employmentType: 'organization',
    title: 'Ketua Umum HMTI',
    description:
      'Memimpin organisasi mahasiswa Informatika UMRAH, mengkoordinasikan ' +
      'kegiatan akademik dan non-akademik untuk 200+ anggota.',
    startDate: '2024-08-01',
    endDate: null,
    featured: true,
    tags: ['Leadership', 'Organization', 'Event Management'],
    achievements: [
      'Menyelenggarakan 5+ workshop dan seminar teknologi',
      'Meningkatkan partisipasi anggota dalam kegiatan akademik',
      'Membangun sistem manajemen internal berbasis web',
    ],
  },
  // tambahkan experience lain...
];

export default experiences;