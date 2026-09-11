// content/activities.ts
import type { Activity } from '@/lib/types';

const activities: Activity[] = [
  {
    id: 'act-1',
    organization: 'HMTI, Universitas Maritim Raja Ali Haji',
    title: 'Ketua Pelaksana InformatIQ',
    role: 'Ketua Pelaksana',
    type: 'committee',
    description:
      'Memimpin dan mengarahkan seluruh panitia dalam menyelenggarakan kompetisi akademik berbasis teknologi dan logika berskala antar-sekolah dengan empat cabang lomba: Spelling Bee, Matematika, Logika Informatika, dan Debugging or Die.',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    featured: true,
    tags: ['Event Leadership', 'Project Management'],
    achievements: [
      'Memimpin seluruh panitia penyelenggaraan',
      'Mengelola 4 cabang lomba teknis',
      'Kompetisi berskala antar-sekolah',
    ],
  },
  {
    id: 'act-2',
    organization: 'HMTI, Universitas Maritim Raja Ali Haji',
    title: 'Divisi Konsumsi: Malam Keakraban (Makrab)',
    role: 'Divisi Konsumsi',
    type: 'committee',
    description:
      'Mengelola manajemen logistik konsumsi untuk seluruh peserta dan panitia acara Malam Keakraban, mulai dari perencanaan anggaran, pemilihan menu, hingga distribusi makanan dan minuman tepat waktu.',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    featured: false,
    tags: ['Logistics', 'Budget Planning'],
  },
  {
    id: 'act-3',
    organization: 'Penerimaan Tamu Ambalan',
    title: 'Divisi Perlengkapan & Keamanan: Perkemahan',
    role: 'Divisi Perlengkapan & Keamanan',
    type: 'committee',
    description:
      'Mengemban peran ganda (dual role) dengan manajemen waktu efektif. Mengelola inventaris dan distribusi peralatan perkemahan, sekaligus memastikan keamanan area perkemahan selama 24 jam melalui sistem patroli terjadwal.',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    featured: false,
    tags: ['Logistics', 'Security Management', 'Time Management'],
  },
  {
    id: 'act-4',
    organization: 'Event GAYAMU',
    title: 'Bidang Perlengkapan: Panitia Event GAYAMU',
    role: 'Bidang Perlengkapan',
    type: 'committee',
    description:
      'Bertanggung jawab atas manajemen logistik dan infrastruktur dalam event GAYAMU. Memastikan ketersediaan sarana prasarana vital melalui inventarisasi, mobilisasi, hingga instalasi peralatan teknis dan dekorasi.',
    startDate: '2023-01-01',
    endDate: '2024-12-31',
    featured: false,
    tags: ['Logistics', 'Infrastructure Management'],
  },
  {
    id: 'act-5',
    organization: 'Event Smart Expo',
    title: 'Bidang Keamanan: Panitia Event Smart Expo',
    role: 'Bidang Keamanan',
    type: 'committee',
    description:
      'Bertanggung jawab atas sterilisasi area dan ketertiban umum selama acara berlangsung. Melakukan manajemen kerumunan (crowd control) untuk memastikan keamanan pengunjung serta aset acara.',
    startDate: '2023-01-01',
    endDate: '2023-12-31',
    featured: false,
    tags: ['Security Management', 'Crowd Control'],
  },
];

export default activities;