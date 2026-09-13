// content/projects.ts
import type { Project } from '@/lib/types';

const projects: Project[] = [
  {
    id: 'project-1',
    slug: 'slime-survivor',
    title: 'Slime Survivor',
    shortDescription:
      'Game 2D top-down endless survival yang terinspirasi dari Vampire Survivors. Pemain bertahan melawan gelombang slime dengan sistem auto-attack, drop item, dan high score.',
    fullDescription:
      `Slime Survivor dikembangkan sebagai project solo game development pertama saya menggunakan Godot 4.7 dan GDScript. Berawal dari Game Design Document (GDD) yang saya susun sendiri, saya membangun game ini dari nol: mulai dari sistem movement Player 8-arah, auto-attack dengan facing direction, AI musuh yang mengejar dan menyerang, spawner dengan difficulty scaling berbasis waktu, hingga sistem pendukung seperti HUD, pause menu, game over, save system, dan audio manager.\n\n` +
      `Selama pengembangan, saya menghadapi beberapa tantangan teknis yang signifikan, terutama bug collision di mana Slime tidak bisa menyerang Player dan Player tidak bisa mengambil Heart. Setelah debugging panjang dengan diagnostik collision shape, layer/mask, dan print debugging, akar masalahnya ditemukan: Layer Player di scene utama belum di-set dengan benar. Saya juga mengimplementasikan fallback menggunakan perhitungan jarak Euclidean (attack_range) agar gameplay tetap berjalan sambil memperbaiki sistem collision.\n\n` +
      `Proyek ini juga menerapkan praktik arsitektur yang rapi: signal-based communication untuk loose coupling antar node, autoload untuk state global (GameManager, SaveManager, AudioManager), reusable component (HealthComponent) yang dipakai Player dan Slime, serta export variables untuk balancing langsung dari Inspector. Hasil akhirnya adalah game yang playable end-to-end, dengan game loop lengkap dari Main Menu -> Gameplay -> Game Over -> High Score.`,
    description: 'Game 2D top-down endless survival dengan Godot Engine.',
    startDate: '2025-01-01',
    endDate: '2026-12-31',
    status: 'completed',
    category: 'personal',
    featured: true,
    tags: ['Godot', 'GDScript', 'Game Development', 'Pixel Art'],
    links: [],
    highlights: [
      'Auto-Attack System dengan facing direction anti-moonwalk',
      'Difficulty Scaling time-based (spawn interval, max enemies, HP Slime)',
      'Reusable HealthComponent untuk Player dan Slime',
      'Centralized Audio System dengan SFX pooling & volume control',
      'Persistent Save System menggunakan ConfigFile (user://savegame.cfg)',
      'Debug collision bug kompleks dengan fallback distance-based detection',
      'Clean Architecture: signal-based, loose coupling, export variables',
      'Complete Game Loop: Main Menu -> Gameplay -> Pause -> Game Over -> Retry -> High Score',
    ],
    image: '/images/projects/slime-survivor-thumb.png',
  },
  {
    id: 'project-2',
    slug: 'catatan-motor',
    title: 'Catatan Motor (Motor Notes)',
    shortDescription:
      'Aplikasi Android offline untuk mencatat data motor dengan kolom yang bisa dikustomisasi. Dirancang untuk pengguna dengan literasi digital rendah (lansia) sebagai pengganti kebiasaan mencatat di WhatsApp.',
    fullDescription:
      `Project ini berawal dari masalah nyata: ibu saya kesulitan mengelola catatan motor yang selama ini ditulis manual di chat WhatsApp. Catatan tersebut tercampur dengan obrolan lain, sulit dicari, formatnya tidak konsisten, dan tidak ada backup. Kalau HP hilang, semua data ikut hilang.\n\n` +
      `Saya membangun aplikasi ini dari nol menggunakan Flutter. Tantangan terbesarnya bukan sekadar coding, tapi memastikan aplikasi ini benar-benar lebih mudah dipakai daripada WhatsApp, mengingat penggunanya adalah orang yang tidak terbiasa dengan aplikasi smartphone pada umumnya.\n\n` +
      `Selama pengembangan, saya menghadapi beberapa kendala teknis yang cukup rumit: error build Android akibat konflik package jni di path_provider (diselesaikan dengan dependency_overrides), masalah sinkronisasi locale tanggal, hingga bug data hilang saat menyimpan motor dengan banyak kolom (diselesaikan dengan parsing JSON manual yang defensif). Semua masalah ini saya atasi sendiri dengan membaca dokumentasi dan eksperimen bertahap.\n\n` +
      `Hasil akhirnya adalah aplikasi ringan (~16 MB), 100% offline, dengan UI yang ramah lansia: font besar, tombol besar, dan kontras tinggi. Sudah di-build menjadi APK release dan siap dipakai oleh ibu saya di HP Samsung A15.`,
    description: 'Aplikasi Android offline untuk catatan motor.',
    startDate: '2025-01-01',
    endDate: '2026-12-31',
    status: 'completed',
    category: 'personal',
    featured: true,
    tags: ['Flutter', 'Dart', 'Android', 'Mobile App', 'Offline'],
    links: [],
    highlights: [
      'Solusi nyata untuk pengguna asli (bukan project tutorial)',
      'Custom field dinamis: pengguna bisa tambah kolom apapun tanpa update aplikasi',
      'Desain accessible: font min. 16sp, tombol 56dp, kontras tinggi untuk lansia',
      'Offline 100%: tanpa internet, tanpa iklan, tanpa tracking',
      'Fitur Copy All to WhatsApp: satu tap langsung format rapi siap paste',
      'Mengatasi error build jni dengan dependency_overrides',
      'APK release kecil (~16 MB, arm64-v8a)',
      'Write atomik: data aman walau aplikasi ditutup paksa',
    ],
    image: '/images/projects/catatan-motor-thumb.png',
  },
  {
    id: 'project-3',
    slug: 'ktp-ocr-verification',
    title: 'KTP OCR Verification with AI',
    shortDescription:
      'Aplikasi web untuk membaca, mengekstrak, dan memverifikasi KTP Indonesia secara otomatis menggunakan OCR dan AI (DeepSeek).',
    fullDescription:
      `Project ini berawal dari kebutuhan untuk mempercepat proses verifikasi KTP yang biasanya dilakukan manual, memakan waktu, rentan human error, dan membosankan. Saya membangun aplikasi berbasis Streamlit yang menerima upload gambar KTP, lalu memprosesnya melalui beberapa tahap: preprocessing gambar dengan OpenCV (CLAHE, denoise, resize), OCR dengan EasyOCR untuk membaca teks mentah, dan terakhir mengirim hasil OCR ke DeepSeek AI untuk diekstrak menjadi data terstruktur (NIK, Nama, Alamat, dll.) sekaligus memverifikasi keaslian KTP dengan verdict ASLI/PALSU.\n\n` +
      `Salah satu tantangan terbesar adalah membuat ekstraksi data yang akurat. Pendekatan regex manual sering gagal karena OCR sering salah baca (misal "NIK" jadi "NTK", atau nama bercampur dengan field lain). Solusinya adalah menggunakan LLM (DeepSeek) sebagai "parser cerdas" yang paham konteks KTP, dengan prompt yang dioptimasi agar hemat token (~500 token/analisis, setara Rp 2-3 per KTP).\n\n` +
      `Aplikasi ini juga dilengkapi deteksi kualitas gambar (blur, gelap, terang, resolusi rendah) dan anotasi visual berupa kotak merah di sekitar teks yang berhasil dibaca, sehingga pengguna bisa langsung melihat apa yang terdeteksi oleh sistem.`,
    description: 'Verifikasi KTP otomatis dengan OCR dan DeepSeek AI.',
    startDate: '2025-01-01',
    endDate: '2026-12-31',
    status: 'completed',
    category: 'personal',
    featured: true,
    tags: ['Python', 'Streamlit', 'EasyOCR', 'DeepSeek', 'OpenCV', 'AI'],
    links: [],
    highlights: [
      'Ekstraksi 15+ field KTP otomatis (NIK, Nama, Alamat, TTL, dll.)',
      'Verifikasi keaslian KTP dengan DeepSeek AI (ASLI/PALSU + alasan)',
      'Deteksi kualitas gambar (blur, gelap, terang, resolusi)',
      'Anotasi visual kotak merah di teks yang terbaca',
      'Efisien token: hanya ~Rp 2-3 per analisis',
      '100% lokal: data tidak dikirim ke server kecuali DeepSeek API',
      'Export hasil ke JSON & CSV',
    ],
    image: '/images/projects/ktp-ocr-thumb.png',
  },
  {
    id: 'project-4',
    slug: 'voltroute',
    title: 'VoltRoute',
    shortDescription:
      'Platform monitoring dan kontrol konsumsi energi dengan arsitektur dua aplikasi terpisah, siap migrasi ke hardware ESP32.',
    fullDescription:
      `VoltRoute lahir dari kebutuhan akan sistem manajemen energi yang tidak hanya menampilkan total konsumsi listrik, tetapi juga mampu memisahkan konsumsi per perangkat secara independen. Prototype ini dikembangkan untuk kompetisi IGJC dengan tujuan membuktikan pengalaman produk end-to-end setara sistem IoT sungguhan, namun tetap fleksibel untuk beralih ke hardware nyata tanpa membangun ulang aplikasi utama.\n\n` +
      `Arsitektur inti memisahkan dua entitas: VoltRoute App (aplikasi web berbasis Next.js yang di-deploy ke Vercel) dan Virtual ESP App (simulator hardware independen berbasis Node.js/Express). Keduanya berkomunikasi melalui kontrak data REST yang identik dengan yang nantinya digunakan oleh ESP32 fisik. Prinsip utama: Main ESP mengukur total energi rumah secara langsung, sedangkan Device ESP mengukur konsumsi per perangkat. Total Energy tidak pernah dihitung dari penjumlahan Device Energy, keduanya independen.\n\n` +
      `Fitur utama meliputi discovery & pairing perangkat, telemetry real-time, remote control (ON/OFF, set suhu), dashboard dengan grafik multi-line per device, serta estimasi biaya listrik (kWh & Rupiah) yang tarifnya dapat diubah. Virtual ESP App dilengkapi UI Device Manager sendiri (port 3001). Keamanan ditopang oleh Row Level Security (RLS) di seluruh tabel, middleware proteksi route, dan shared secret untuk komunikasi machine-to-machine.\n\n` +
      `Tantangan teknis yang dihadapi antara lain migrasi ke Zod v4, penerapan RLS yang konsisten, serta memastikan deployment Vercel berjalan mulus. Prototype kini live di Vercel dan siap diintegrasikan dengan ESP32 + PZEM-004T untuk menggantikan Virtual ESP App tanpa mengubah kode VoltRoute App.`,
    description: 'Platform monitoring & kontrol konsumsi energi berbasis IoT.',
    startDate: '2025-01-01',
    endDate: '2026-12-31',
    status: 'completed',
    category: 'competition',
    featured: true,
    tags: ['Next.js', 'TypeScript', 'Supabase', 'IoT', 'Express', 'Zod'],
    links: [
      { label: 'Live Demo', url: 'https://voltroute-three.vercel.app' },
    ],
    highlights: [
      'Arsitektur dua aplikasi: VoltRoute App (web) & Virtual ESP App (simulator)',
      'Main ESP & Device ESP independen, Total Energy tidak dihitung dari penjumlahan',
      'Fitur discovery, pairing, telemetry, remote control, grafik multi-line',
      'Estimasi biaya listrik (kWh & Rupiah) dengan tarif yang bisa diubah',
      'Virtual ESP App dengan UI Device Manager sendiri (port 3001)',
      'Siap migrasi ke ESP32 fisik tanpa ubah kode VoltRoute App',
      'Keamanan: RLS di semua tabel, middleware, shared secret',
    ],
    image: '/images/projects/voltroute-thumb.png',
  },
  {
    id: 'project-5',
    slug: 'wattas',
    title: 'Wattas: Turning Energy Waste into Green Work',
    shortDescription:
      'Platform digital yang menghubungkan efisiensi energi UMKM dengan green work untuk anak muda. Mengubah pemborosan energi menjadi tugas hijau yang bisa dikerjakan, diverifikasi, dan diukur dampaknya.',
    fullDescription:
      `UMKM sering mengetahui tagihan listriknya mahal, tetapi tidak tahu peralatan mana yang paling boros, tindakan apa yang paling praktis, dan siapa yang bisa membantu. Di sisi lain, banyak anak muda ingin terlibat di green jobs, tetapi sulit mendapatkan pengalaman nyata, portofolio, dan penghasilan hijau.\n\n` +
      `Wattas menjembatani kedua masalah ini melalui satu loop lengkap: UMKM mengisi Energy Profile -> sistem menganalisis peluang efisiensi energi -> peluang diubah menjadi task -> worker mengambil task -> worker mengirim WorkProof -> UMKM memverifikasi -> Impact Engine mencatat estimasi penghematan energi, green income, dan green work hours.\n\n` +
      `MVP ini dibangun dengan pendekatan rule-based, bukan AI, agar rekomendasi transparan, dapat diuji, dan kredibel. Proyek ini dikembangkan untuk kompetisi dan menjadi sarana eksplorasi bagaimana teknologi bisa menjadi katalis perubahan positif di masyarakat, khususnya dalam mendukung transisi menuju ekonomi hijau.`,
    description: 'Platform yang menghubungkan efisiensi energi UMKM dengan green jobs.',
    startDate: '2025-01-01',
    endDate: '2026-12-31',
    status: 'archived',
    category: 'competition',
    featured: false,
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Sustainability', 'Green Jobs'],
    links: [
      { label: 'Live Demo', url: 'https://wattas.vercel.app' },
    ],
    highlights: [
      'Loop lengkap: UMKM -> Energy Profile -> Opportunity -> Task -> Worker -> WorkProof -> Verification -> Impact',
      'Energy Profile dengan manajemen peralatan listrik (AC, lampu, kulkas, dll.)',
      'Analisis konsumsi & potensi penghematan per peralatan (kWh & Rupiah)',
      'Marketplace task untuk worker: claim, kerjakan, submit bukti before/after',
      'Impact Engine: mencatat estimasi penghematan, green income, green work hours',
      'Dashboard UMKM & Worker dengan data real dari impact_records',
      'Admin panel: manajemen users, tasks, rules',
      'UI Modern-Eco Minimalist, responsive',
    ],
    image: '/images/projects/wattas-thumb.png',
  },
];

export default projects;