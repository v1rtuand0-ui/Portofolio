// content/profile.ts
import type { Profile } from '@/lib/types';

const profile: Profile = {
  name: 'Vito',
  positioning: 'Student Builder · AI & Technology Enthusiast',
  introShort:
    'Mahasiswa Informatika di Universitas Maritim Raja Ali Haji, Batam. ' +
    'Fokus membangun produk backend dan sistem yang scalable, dengan ketertarikan ' +
    'pada AI dan teknologi pendidikan.',
  aboutLong:
    '[ISI: cerita panjang tentang latar belakang, perjalanan dari mahasiswa ' +
    'kost ke ketua umum HMTI, ketertarikan ke backend engineering, ' +
    'pengalaman memimpin, dan aspirasi ke depannya sebagai engineer.]',
  email: 'vito@example.com', // ganti dengan email asli
  socialLinks: [
    { label: 'GitHub', url: 'https://github.com/vito' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/vito' },
    { label: 'Twitter / X', url: 'https://x.com/vito' },
  ],
  resumeUrl: '/resume.pdf', // nanti kalau ada
};

export default profile;