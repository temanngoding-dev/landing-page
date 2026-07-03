import type { 
  MentorData, 
  CoreValue, 
  CourseData, 
  TestimonialData, 
  NavLink, 
  SocialLink 
} from '@/types';

export const mentors: MentorData[] = [
  {
    id: 'MENTOR_01',
    name: 'Mirza Qamaruzzaman',
    title: 'Fullstack Engineer · Lv. 30',
    image: '/assets/images/mentor/mirza.png',
    bio: 'Fullstack engineer dengan pengalaman lebih dari 2 tahun di industri tech. Spesialisasi di React, Next.js, Laravel, dan arsitektur backend modern.',
    skills: ['React', 'Next.js', 'Laravel', 'Node.js', 'PostgreSQL', 'Vue.js', 'Nuxt.js', 'Redis', 'Pinia', 'Typescript', 'Zustand', 'Redux', 'SQlite', 'MySQL', 'MongoDB', 'Express', 'NestJS', 'Code Igniter', 'Postman', 'Git', 'GitHub', 'GitLab', 'Figma', 'JWT Auth', 'OAuth'],
    stats: [
      { label: 'EXP (Experience)', valueText: '2+ Tahun', percent: 50, color: '#52e0a8' },
      { label: 'MANA (Knowledge)', valueText: '25+ Tech Stack', percent: 95, color: '#7c9bff' },
      { label: 'HP (Style)', valueText: 'Hands-on & Sabar', color: '#ff5d73', isBadge: true },
    ],
  },
  {
    id: 'MENTOR_02',
    name: 'MENTOR_02',
    title: 'Fullstack Engineer · Lv. 27',
    image: '/assets/images/mentor/rio.png',
    bio: 'Fullstack engineer dengan pengalaman lebih dari 5 tahun di industri tech. Spesialisasi di React, Next.js, Laravel, dan arsitektur backend modern.',
    skills: ['React', 'Next.js', 'Laravel', 'Node.js', 'PostgreSQL', 'Docker'],
    stats: [
      { label: 'EXP (Experience)', valueText: '5+ Tahun', percent: 85, color: '#52e0a8' },
      { label: 'MANA (Knowledge)', valueText: '12+ Tech Stack', percent: 90, color: '#7c9bff' },
      { label: 'HP (Style)', valueText: 'Hands-on & Sabar', color: '#ff5d73', isBadge: true },
    ],
  },
];

export const values: CoreValue[] = [
  {
    icon: '⚔️',
    title: 'Belajar = Ngoding Langsung',
    description: 'Gak ada tonton video doang. Lo ngoding, lo dibimbing, lo naik level beneran.',
  },
  {
    icon: '🛡️',
    title: 'Mentor Beneran, Bukan Bot',
    description: 'Semua mentor punya pengalaman industri nyata. Bukan yang cuma baca slide presentasi.',
  },
  {
    icon: '🎯',
    title: 'Kurikulum yang Jelas',
    description: 'Tiap quest punya learning path yang terstruktur. Lo tau persis progress lo di mana.',
  },
  {
    icon: '🏆',
    title: 'Goal-nya: Lo Siap Kerja',
    description: 'Bukan cuma bisa bikin TODO app. Tapi bisa bikin project nyata dan siap interview.',
  },
];

export const courses: CourseData[] = [
  {
    icon: '🌐',
    title: 'Private 1-on-1: Fullstack Web Dev',
    description: 'Basic Web Dev with HTML, CSS, and JS Project Based. Langsung praktik bikin project personal blog.',
    topics: ['HTML5 Semantik', 'CSS Styling', 'JavaScript Basics', 'DOM Manipulation', 'Responsive Web Design', 'Project Deployment'],
    sessions: 2,
    difficulty: 'EASY',
    difficultyColor: '#52e0a8',
    xp: 150,
  },
  {
    icon: '🤖',
    title: 'Private 1-on-1: Arduino Engineering',
    description: 'Belajar sains, teknologi, elektronika dasar, otomatisasi Arduino, sampai project nyata IoT menggunakan ESP32/Wemos.',
    topics: ['Dasar Elektronika', 'Arduino Programming', 'Sensor & Aktuator', 'Sistem Otomatisasi', 'Internet of Things (IoT)', 'ESP32/Wemos'],
    sessions: 8,
    difficulty: 'MEDIUM',
    difficultyColor: '#ffc857',
    xp: 400,
  },
  {
    icon: '🐉',
    title: 'Bootcamp: Intensive Project',
    description: 'Bimbingan intensif dan penyelesaian development project akhir mahasiswa atau siswa SMK berbasis website.',
    topics: ['Project Planning', 'System Design', 'Tech Stack Custom (Sesuai Kebutuhan)', 'Code Review', 'Debugging', 'Final Delivery'],
    sessions: 8,
    difficulty: 'BOSS FIGHT',
    difficultyColor: '#ff5d73',
    xp: 800,
  },
];

export const testimonials: TestimonialData[] = [
  {
    id: 1,
    text: "Awalnya gatau apa-apa soal backend, sekarang udah keterima kerja jadi web developer. Belajar di sini berasa kayak naik level beneran, jelas progressnya.",
    author: "Alumni Bootcamp Fullstack",
    achievement: "Job Ready",
  },
  {
    id: 2,
    text: "Materi Arduino-nya gampang dipahami. Dari yang awalnya bingung pasang kabel, sekarang bisa bikin project IoT sendiri buat nyalain lampu kamar dari HP!",
    author: "Siswa SMK",
    achievement: "IoT Maker",
  },
  {
    id: 3,
    text: "Bimbingan project akhirnya ngebantu banget. Mentornya sabar dan solutif, akhirnya skripsi web app saya selesai tepat waktu.",
    author: "Mahasiswa IT",
    achievement: "Project Completed",
  }
];

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Beranda' },
  { href: '/course', label: 'Course' },
  { href: '/about', label: 'About' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Instagram', href: 'https://instagram.com/temanngoding', icon: '📸' },
  { label: 'YouTube', href: 'https://youtube.com/@temanngoding', icon: '🎬' },
  { label: 'GitHub', href: 'https://github.com/temanngoding', icon: '💻' },
  { label: 'TikTok', href: 'https://tiktok.com/@temanngoding', icon: '🎵' },
];

export const ADDRESS = 'Mutiara Venue Estate Blok MR No 10 Jl. Rancakihiang, Bojongloa, Kec. Rancaekek, Kab. Bandung, Jawa Barat 40394';
export const WHATSAPP_NUMBER = '6281234567890';
export const MAP_LAT = -6.9617414;
export const MAP_LNG = 107.7675156;
