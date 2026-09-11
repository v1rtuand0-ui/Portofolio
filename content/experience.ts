// content/experience.ts
import type { Experience } from '@/lib/types';

const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Himpunan Mahasiswa Teknik Informatika (HMTI)',
    role: 'Leader Magang: Divisi Penelitian dan Pengembangan (Litbang)',
    employmentType: 'internship',
    title: 'Leader Magang: Divisi Litbang HMTI',
    description:
      'Dipercaya menjabat sebagai Leader Magang untuk Divisi Penelitian dan Pengembangan (Litbang). Bertanggung jawab memimpin tim magang, mengelola pembagian tugas, memonitor progres kerja, serta menjembatani komunikasi strategis antara anggota magang dan pengurus harian.',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    featured: true,
    tags: ['Leadership', 'Research & Development', 'Team Management'],
    achievements: [
      'Memimpin tim magang di Divisi Litbang',
      'Mengelola pembagian tugas & monitoring progres tim',
      'Menjembatani komunikasi antara anggota magang dan pengurus harian',
    ],
  },
  {
    id: 'exp-2',
    company: 'Bootcamp U&IXELENCE 2025 x ADS',
    role: 'Front-End Developer: Best Project Team Awardee',
    employmentType: 'other',
    title: 'Front-End Developer: Best Project Team',
    description:
      'Meraih penghargaan Best Project Team dalam U&IXELENCE. Berperan sebagai Front-End Developer dalam tim beranggotakan 6 orang, berkolaborasi erat dengan UI/UX Designer untuk merealisasikan desain menjadi website yang utuh dan responsif.',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    featured: true,
    tags: ['Front-End Development', 'UI/UX Implementation', 'Award'],
    achievements: [
      'Meraih penghargaan Best Project Team',
      'Mengimplementasikan design ke kode (slicing)',
      'Memastikan website responsif di berbagai device',
    ],
  },
];

export default experiences;