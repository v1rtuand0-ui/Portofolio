// content/experience.ts
import type { Experience } from '@/lib/types';

// TODO: ganti dengan data asli
const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'HMTI — Universitas Maritim Raja Ali Haji',
    role: 'Ketua Umum',
    employmentType: 'organization',
    title: 'Ketua Umum HMTI',
    description:
      'Memimpin organisasi mahasiswa Informatika UMRAH, mengkoordinasikan kegiatan akademik dan non-akademik untuk 200+ anggota.',
    startDate: '2024-08-01',
    endDate: null,
    featured: true,
    tags: ['Leadership', 'Organization', 'Event Management'],
    achievements: [
      'Menyelenggarakan 5+ workshop dan seminar teknologi',
      'Meningkatkan partisipasi anggota dalam kegiatan akademik 30%',
      'Membangun sistem manajemen internal berbasis web',
      'Menjalin kerjasama dengan 3 perusahaan teknologi lokal',
    ],
  },
  {
    id: 'exp-2',
    company: 'TechStart Studio',
    role: 'Backend Intern',
    employmentType: 'internship',
    title: 'Backend Intern',
    description:
      'Magang sebagai backend developer di startup edutech, fokus pada pengembangan API dan optimasi database.',
    startDate: '2024-06-01',
    endDate: '2024-08-30',
    featured: true,
    tags: ['Node.js', 'PostgreSQL', 'REST API', 'Docker'],
    achievements: [
      'Membangun 10+ REST API endpoints untuk modul pembelajaran',
      'Mengoptimalkan query database sehingga response time turun 40%',
      'Membantu migrasi server dari monolith ke microservices',
    ],
  },
  {
    id: 'exp-3',
    company: 'Google Developer Student Club — UMRAH',
    role: 'Core Team Member',
    employmentType: 'organization',
    title: 'Core Team Member GDSC',
    description:
      'Bergabung dalam tim inti GDSC UMRAH, mengorganisir event dan workshop terkait teknologi Google.',
    startDate: '2023-09-01',
    endDate: '2024-05-31',
    featured: false,
    tags: ['Community', 'Event Organization', 'Public Speaking'],
    achievements: [
      'Mengorganisir 4 workshop tentang Android dan Cloud',
      'Menjadi mentor untuk 20+ peserta dalam program belajar bersama',
    ],
  },
];

export default experiences;