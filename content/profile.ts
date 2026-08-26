// content/profile.ts
import type { Profile } from '@/lib/types';

// TODO: ganti dengan data asli
const profile: Profile = {
  name: 'Vito Pratama',
  positioning: 'Student Builder · AI & Technology Enthusiast',
  introShort:
    'Mahasiswa Informatika di Universitas Maritim Raja Ali Haji, Batam. ' +
    'Fokus membangun produk backend dan sistem yang scalable, dengan ketertarikan ' +
    'pada AI dan teknologi pendidikan.',
  aboutLong:
    `Halo, saya Vito Pratama, mahasiswa Informatika semester 6 di Universitas Maritim Raja Ali Haji (UMRAH), Batam. Perjalanan saya di dunia teknologi dimulai dari rasa penasaran terhadap bagaimana software bekerja di balik layar — dari logika sederhana hingga sistem yang kompleks.\n\n` +
    `Sejak tahun pertama kuliah, saya aktif di Himpunan Mahasiswa Teknik Informatika (HMTI) dan akhirnya dipercaya menjadi Ketua Umum untuk periode 2024-2025. Di sini, saya belajar banyak tentang kepemimpinan, manajemen tim, dan bagaimana mengorganisir kegiatan akademik maupun non-akademik untuk 200+ anggota. Pengalaman ini membentuk saya menjadi pribadi yang lebih disiplin dan terbiasa bekerja di bawah tekanan.\n\n` +
    `Saya memiliki ketertarikan mendalam di bidang backend engineering dan sistem terdistribusi. Saat ini saya sedang mendalami arsitektur microservices, database optimasi, dan cloud computing. Saya juga mulai mengeksplorasi penerapan AI dalam sistem nyata — terutama di bidang pendidikan dan produktivitas.\n\n` +
    `Ke depan, saya bercita-cita menjadi seorang software engineer yang tidak hanya handal secara teknis, tetapi juga mampu membawa dampak positif melalui teknologi, terutama di daerah kepulauan seperti Batam dan sekitarnya. Saya percaya bahwa teknologi yang baik adalah teknologi yang inklusif dan mudah diakses oleh semua orang.`,
  email: 'vito.pratama@gmail.com',
  socialLinks: [
    { label: 'GitHub', url: 'https://github.com/v1rtuand0-ui' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/vitopratama' },
    { label: 'Twitter/X', url: 'https://twitter.com/vitopratama' },
  ],
  resumeUrl: '/resume.pdf',
};

export default profile;