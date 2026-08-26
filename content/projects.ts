// content/projects.ts
import type { Project } from '@/lib/types';

// TODO: ganti dengan data asli
const projects: Project[] = [
  {
    id: 'project-1',
    slug: 'build-a-roguelite-in-godot',
    title: 'Build a Roguelite in Godot',
    shortDescription:
      'Game roguelite berbasis turn-based dengan procedural generation menggunakan Godot Engine.',
    fullDescription:
      `Proyek ini adalah game roguelite yang saya bangun dari nol menggunakan Godot Engine dan GDScript. Tujuannya adalah untuk belajar game development sambil menerapkan konsep-konsep seperti procedural generation, state machine, dan turn-based combat.\n\n` +
      `Saya mulai proyek ini pada Januari 2025 dan masih terus dikembangkan. Salah satu tantangan terbesar adalah membuat dungeon generator yang terasa natural dan tidak repetitif, serta sistem combat yang seimbang dan menyenangkan. Saya juga menambahkan sistem inventory dan item crafting untuk menambah kedalaman gameplay.\n\n` +
      `Proyek ini mengajarkan saya banyak tentang optimasi performa di game loop, manajemen state, dan bagaimana merancang gameplay yang engaging. Ke depan, saya berencana menambahkan sistem skill tree dan enemy AI yang lebih kompleks.`,
    description: 'Roguelite game prototype dengan Godot dan GDScript.',
    startDate: '2025-01-01',
    endDate: null,
    status: 'in-progress',
    category: 'personal',
    featured: true,
    tags: ['Godot', 'GDScript', 'Procedural Generation', 'Turn-based'],
    links: [
      { label: 'GitHub', url: 'https://github.com/v1rtuand0-ui/roguelite' },
    ],
    highlights: [
      'Procedural dungeon generation dengan BSP',
      'Turn-based combat system',
      'Inventory & item system',
    ],
    image: '/images/projects/roguelite-thumb.jpg',
  },
  {
    id: 'project-2',
    slug: 'e-library-backend',
    title: 'E-Library Backend Service',
    shortDescription:
      'Backend service untuk sistem perpustakaan digital dengan REST API dan JWT authentication.',
    fullDescription:
      `Saya membangun backend untuk sistem perpustakaan digital sebagai bagian dari proyek akhir mata kuliah Pemrograman Web. Layanan ini menangani manajemen buku, peminjaman, pengembalian, dan autentikasi user.\n\n` +
      `Arsitektur yang digunakan adalah REST API dengan Express.js, database PostgreSQL, dan JWT untuk security. Saya juga menerapkan pagination, filtering, dan sorting untuk endpoint pencarian buku.\n\n` +
      `Proyek ini memberi saya pemahaman mendalam tentang desain API yang clean, error handling, dan bagaimana mengelola koneksi database secara efisien. Saya juga belajar tentang environment variables dan deployment di Vercel.`,
    description: 'REST API perpustakaan dengan Express dan PostgreSQL.',
    startDate: '2024-09-01',
    endDate: '2024-12-15',
    status: 'completed',
    category: 'academic',
    featured: true,
    tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'REST API'],
    links: [
      { label: 'GitHub', url: 'https://github.com/v1rtuand0-ui/e-library' },
      { label: 'Live Demo', url: 'https://e-library-demo.vercel.app' },
    ],
    highlights: [
      'JWT authentication dengan role-based access',
      'Pagination, filtering, sorting',
      'Dokumentasi API dengan Swagger',
    ],
    image: '/images/projects/e-library-thumb.jpg',
  },
  {
    id: 'project-3',
    slug: 'weather-dashboard',
    title: 'Weather Dashboard dengan AI Forecast',
    shortDescription:
      'Dashboard cuaca interaktif dengan prediksi 7 hari menggunakan machine learning.',
    fullDescription:
      `Proyek ini adalah dashboard cuaca yang menampilkan kondisi cuaca saat ini dan prediksi 7 hari ke depan menggunakan model machine learning sederhana (Linear Regression) yang dilatih dengan data historis.\n\n` +
      `Frontend dibangun dengan React dan Tailwind CSS, sementara backend menggunakan FastAPI untuk menyajikan prediksi. Data cuaca diambil dari OpenWeatherMap API dan disimpan di Redis untuk caching.\n\n` +
      `Tantangan utama adalah membuat model prediksi yang cukup akurat dengan dataset terbatas, serta mengintegrasikan real-time data dengan prediksi. Proyek ini memperkenalkan saya pada MLOps dasar dan bagaimana menyajikan hasil AI ke pengguna melalui antarmuka yang intuitif.`,
    description: 'Dashboard cuaca dengan prediksi AI 7 hari.',
    startDate: '2025-02-01',
    endDate: null,
    status: 'in-progress',
    category: 'personal',
    featured: false,
    tags: ['React', 'FastAPI', 'Python', 'Machine Learning', 'Redis'],
    links: [
      { label: 'GitHub', url: 'https://github.com/v1rtuand0-ui/weather-ai' },
    ],
    highlights: [
      'Prediksi cuaca dengan Linear Regression',
      'Caching dengan Redis',
      'Responsive dashboard',
    ],
    image: '/images/projects/weather-thumb.jpg',
  },
  {
    id: 'project-4',
    slug: 'taskflow',
    title: 'TaskFlow — Collaborative Task Manager',
    shortDescription:
      'Aplikasi manajemen tugas kolaboratif dengan real-time updates menggunakan WebSocket.',
    fullDescription:
      `TaskFlow adalah aplikasi manajemen tugas yang mendukung kolaborasi tim secara real-time. Dibangun dengan Next.js (frontend) dan Socket.io untuk komunikasi real-time.\n\n` +
      `Fitur utama: membuat task, assign ke member, memberikan komentar, dan melihat progress secara real-time. Database menggunakan MongoDB, dan autentikasi menggunakan NextAuth.js.\n\n` +
      `Proyek ini adalah hasil dari hackathon internal kampus dan berhasil meraih juara 2. Saya belajar banyak tentang state management di aplikasi real-time, serta bagaimana menangani concurrent updates secara aman.`,
    description: 'Task manager kolaboratif real-time.',
    startDate: '2024-11-01',
    endDate: '2025-01-20',
    status: 'completed',
    category: 'side-project',
    featured: false,
    tags: ['Next.js', 'Socket.io', 'MongoDB', 'NextAuth.js', 'Tailwind'],
    links: [
      { label: 'GitHub', url: 'https://github.com/v1rtuand0-ui/taskflow' },
    ],
    highlights: [
      'Real-time updates dengan WebSocket',
      'Autentikasi dengan NextAuth.js',
      'Fitur drag-and-drop untuk task',
    ],
    image: '/images/projects/taskflow-thumb.jpg',
  },
];

export default projects;