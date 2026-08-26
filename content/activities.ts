// content/activities.ts
import type { Activity } from '@/lib/types';

// TODO: ganti dengan data asli
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
      'Mengadakan kompetisi coding tingkat kampus',
    ],
  },
  {
    id: 'act-2',
    organization: 'Competition',
    title: 'Juara 2 Hackathon Kampus',
    role: 'Team Lead',
    type: 'competition',
    description:
      'Meraih juara 2 dalam hackathon internal kampus dengan proyek TaskFlow (collaborative task manager).',
    startDate: '2024-11-15',
    endDate: '2024-11-17',
    featured: false,
    tags: ['Competition', 'Teamwork', 'Presentation'],
    achievements: [
      'Membangun prototype aplikasi dalam 48 jam',
      'Presentasi di hadapan 5 juri dari industri teknologi',
    ],
  },
  {
    id: 'act-3',
    organization: 'Google Developer Student Club',
    title: 'Workshop Facilitator',
    role: 'Facilitator',
    type: 'workshop',
    description:
      'Menjadi fasilitator workshop "Introduction to Cloud Computing with Google Cloud" untuk 50+ peserta.',
    startDate: '2024-03-10',
    endDate: '2024-03-10',
    featured: false,
    tags: ['Public Speaking', 'Cloud Computing', 'Mentoring'],
    achievements: [
      'Memberikan materi tentang compute, storage, dan networking di GCP',
      'Membantu peserta menyelesaikan lab praktikum',
    ],
  },
  {
    id: 'act-4',
    organization: 'Tech Community Batam',
    title: 'Volunteer',
    role: 'Volunteer',
    type: 'volunteering',
    description:
      'Relawan dalam acara Tech Meetup Batam yang mempertemukan developer lokal dengan pembicara dari perusahaan teknologi besar.',
    startDate: '2024-07-20',
    endDate: '2024-07-21',
    featured: false,
    tags: ['Volunteering', 'Networking', 'Event'],
    achievements: [
      'Membantu koordinasi 300+ peserta',
      'Menjadi liaison untuk 3 pembicara dari luar kota',
    ],
  },
  {
    id: 'act-5',
    organization: 'UMRAH Informatics Department',
    title: 'Asisten Praktikum',
    role: 'Teaching Assistant',
    type: 'campus',
    description:
      'Menjadi asisten praktikum mata kuliah Pemrograman Berbasis Web dan Algoritma & Struktur Data.',
    startDate: '2024-02-01',
    endDate: '2024-06-30',
    featured: false,
    tags: ['Teaching', 'Algorithms', 'Web Development'],
    achievements: [
      'Mengajar 3 kelas praktikum dengan total 90+ mahasiswa',
      'Membantu mahasiswa memahami konsep dasar programming',
    ],
  },
];

export default activities;