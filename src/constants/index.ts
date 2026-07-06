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
    title: 'Frontend Engineer',
    level: 35,
    image: '/assets/images/mentor/mirza.png',
    bio: 'Fullstack engineer dengan spesialisasi di bidang Frontend Web Development. Pengalaman lebih dari 2 tahun di industri tech dengan berbagai tech stack modern seperti Next.js, Laravel, PostgreSQL, dll.',
    skills: ['React', 'Next.js', 'Laravel', 'Node.js', 'PostgreSQL', 'Vue.js', 'Nuxt.js', 'Redis', 'Pinia', 'Typescript', 'Zustand', 'Redux', 'SQlite', 'MySQL', 'MongoDB', 'Express', 'NestJS', 'Code Igniter', 'Postman', 'Git', 'GitHub', 'GitLab', 'Figma', 'JWT Auth', 'OAuth'],
    stats: [
      { label: 'EXP (Experience)', valueText: '2+ Tahun', percent: 50, color: '#52e0a8' },
      { label: 'MANA (Knowledge)', valueText: '25+ Tech Stack', percent: 95, color: '#7c9bff' },
      { label: 'HP (Style)', valueText: 'Hands-on & Sabar', color: '#ff5d73', isBadge: true },
    ],
  },
  {
    id: 'MENTOR_02',
    name: 'Rio Andrianto S.Kom.',
    title: 'Fullstack Engineer, Embedded Systems Engineer',
    level: 52,
    image: '/assets/images/mentor/rio.png',
    bio: 'Fullstack engineer dengan pengalaman lebih dari 5 tahun di industri tech. Spesialisasi di React, Next.js, Laravel, Arsitektur Backend Modern dan Embedded Systems. Berpengalaman membangun berbagai project nyata, termasuk IoT dan sistem otomasi.',
    skills: ['React', 'Next.js', 'Laravel', 'Node.js', 'PostgreSQL', 'Docker','IOT Stack', 'Arduino', 'ESP32'],
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
    image: '/assets/images/course/basic-web-dev.png',
    packageName: 'Private 1-on-1',
    title: 'Basic Web Dev',
    description: 'Basic Web Dev with HTML, CSS, and JS Project Based. Langsung praktik bikin project personal blog.',
    topics: [
      'HTML5 Semantik', 'CSS Styling', 'JavaScript Basics', 'DOM Manipulation', 'Responsive Web Design', 'Web Dev Basic', 'How to create Website'],
    sessions: 2,
    difficulty: 'EASY',
    difficultyColor: '#52e0a8',
    xp: 150,
    level: 1,
    point: [
      'Total 2 Sesi (120 menit/sesi)',
      'Basic HTML, CSS, JS',
      'Project Personal Blog'
    ]
  },
  {
    icon: '🤖',
    image: '/assets/images/course/arduino.png',
    packageName: 'Private 1-on-1',
    title: 'Robotic & IoT with Arduino & ESP32',
    description: 'Belajar sains, teknologi, elektronika dasar, otomatisasi Arduino, sampai project nyata IoT menggunakan ESP32/Wemos.',
    topics: [
      'Basic Arduino', 
      'Arduino Programming', 
      'Robotics & Science', 
      'Sistem Otomatisasi', 
      'Internet of Things (IoT)', 
      'ESP32/Wemos',
      ''
    ],
    sessions: 2,
    difficulty: 'MEDIUM',
    difficultyColor: '#ffc857',
    xp: 400,
    level: 1,
    point: [
      'Total 2 Sesi (120 menit/sesi)',
      'Elektronika & Sistem Otomatis',
      'ESP32 & Solusi IoT Nyata'
    ]
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
  { href: '/', label: 'Home' },
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
export const WHATSAPP_NUMBER = '6281320478484';
export const WHATSAPP_DISPLAY = '+62 813-2047-8484';
export const EMAIL_ADDRESS = 'temanngoding.id@gmail.com';
export const OPERATIONAL_HOURS = [
  'Weekdays : 15:00 - 18:00 WIB',
  'Weekend : 10:00 - 18:00 WIB'
];
export const MAP_LAT = -6.9617414;
export const MAP_LNG = 107.7675156;
