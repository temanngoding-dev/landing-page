import React from 'react';
import {
  FiCode,
  FiUserCheck,
  FiTarget,
  FiAward,
  FiGlobe,
  FiMonitor,
  FiInstagram,
  FiYoutube,
  FiGithub,
  FiCpu
} from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';

import type {
  MentorData,
  CoreValue,
  CourseData,
  LearningPackage,
  DevService,
  TestimonialData,
  NavLink,
  SocialLink,
  BlogPost
} from '@/types';

const mirzaSkills = ['React', 'Next.js', 'Laravel', 'Node.js', 'PostgreSQL', 'Vue.js', 'Nuxt.js', 'Redis', 'Pinia', 'Typescript', 'Zustand', 'Redux', 'SQlite', 'MySQL', 'MongoDB', 'Express', 'NestJS', 'Code Igniter', 'Postman', 'Git', 'GitHub', 'GitLab', 'Figma', 'JWT Auth', 'OAuth'];

const rioSkills = ['React', 'Next.js', 'Laravel', 'Node.js', 'PostgreSQL', 'Docker', 'IOT Stack', 'Arduino', 'ESP32', 'Appscript', 'PHP', 'MySQL', 'SQLite', 'MongoDB', 'Express', 'Postman', 'Git', 'GitHub', 'GitLab', 'Figma', 'JWT Auth', 'OAuth', 'Proxmox', 'Mikrotik', 'Roblox', 'Web3', 'Expo', 'C#', 'VB.NET', 'Python', 'React Native'];

const totalUniqueSkills = new Set([...mirzaSkills, ...rioSkills]).size;

const mirzaExp = 4;
const rioExp = 15;
const maxExp = Math.max(mirzaExp, rioExp, 10);

const calcLevel = (skills: number, exp: number) => skills + Math.floor(exp * 1.5);

export const mentors: MentorData[] = [
  {
    id: 'MENTOR_01',
    name: 'Mirza Qamaruzzaman',
    title: 'Frontend Engineer',
    level: calcLevel(mirzaSkills.length, mirzaExp),
    image: '/assets/images/mentor/mirza.png',
    bio: `Fullstack engineer dengan spesialisasi di bidang Frontend Web Development. Pengalaman lebih dari ${mirzaExp} tahun di industri tech dengan berbagai tech stack modern seperti Next.js, Laravel, PostgreSQL, dll.`,
    skills: mirzaSkills,
    stats: [
      { label: 'EXP (Experience)', valueText: `${mirzaExp}+ Tahun`, percent: Math.round((mirzaExp / maxExp) * 100), color: '#52e0a8' },
      { label: 'MANA (Knowledge)', valueText: `${mirzaSkills.length}+ Tech Stack`, percent: Math.round((mirzaSkills.length / totalUniqueSkills) * 100), color: '#7c9bff' }
    ],
  },
  {
    id: 'MENTOR_02',
    name: 'Rio Andrianto S.Kom.',
    title: 'Fullstack Engineer, Embedded Systems Engineer',
    level: calcLevel(rioSkills.length, rioExp),
    image: '/assets/images/mentor/rio.png',
    bio: `Fullstack engineer dengan pengalaman lebih dari ${rioExp} tahun di industri tech. Spesialisasi di React, Next.js, Laravel, Arsitektur Backend Modern dan Embedded Systems. Berpengalaman membangun berbagai project nyata, termasuk IoT dan sistem otomasi.`,
    skills: rioSkills,
    stats: [
      { label: 'EXP (Experience)', valueText: `${rioExp}+ Tahun`, percent: Math.round((rioExp / maxExp) * 100), color: '#52e0a8' },
      { label: 'MANA (Knowledge)', valueText: `${rioSkills.length}+ Tech Stack`, percent: Math.round((rioSkills.length / totalUniqueSkills) * 100), color: '#7c9bff' }
    ],
  },
];

export const values: CoreValue[] = [
  {
    icon: <FiCode className="text-[28px] md:text-[32px] text-xp" />,
    title: 'Belajar = Ngoding Langsung',
    description: 'Tidak sekadar menonton video. Kamu coding, kamu dibimbing, kamu naik level beneran.',
  },
  {
    icon: <FiUserCheck className="text-[28px] md:text-[32px] text-xp" />,
    title: 'Mentor Beneran, Bukan Bot',
    description: 'Semua mentor punya pengalaman industri nyata. Bukan yang cuma baca slide presentasi.',
  },
  {
    icon: <FiTarget className="text-[28px] md:text-[32px] text-xp" />,
    title: 'Kurikulum yang Jelas',
    description: 'Setiap quest memiliki learning path yang terstruktur. Kamu tahu persis progress belajarmu di mana.',
  },
  {
    icon: <FiAward className="text-[28px] md:text-[32px] text-xp" />,
    title: 'Goal-nya: Kamu Siap Kerja',
    description: 'Bukan sekadar bisa membuat TODO app. Tapi bisa membangun project nyata dan siap interview.',
  },
];

export const courses: CourseData[] = [
  {
    slug: 'basic-web-dev',
    icon: <FiGlobe />,
    image: '/assets/images/course/basic-web-dev.png',
    packageName: 'Private 1-on-1',
    title: 'Basic Web Dev',
    description: 'Basic Web Dev with HTML, CSS, and JS Project Based. Belajar bareng seputar gimana website bekerja',
    longDescription: 'Mulai dari nol sampai bisa membuat website sendiri. Quest ini dirancang untuk kamu yang benar-benar belum pernah ngoding sebelumnya. Setiap sesi kita langsung hands-on ngoding bareng, langsung praktek dan hasilnya langsung terlihat. Di akhir quest, kamu akan memiliki personal blog yang sudah live dan bisa ditunjukkan ke siapapun.',
    syllabusUrl: '/assets/docs/silabus/basic-web-dev.pdf',
    topics: [
      'HTML5', 'CSS Styling', 'JavaScript Basics', 'Web Dev Basic', 'How to create Website'],
    sessions: 4,
    difficulty: 'EASY',
    difficultyColor: '#52e0a8',
    xp: 100,
    level: 1,
    price: 99999,
    originalPrice: 299000,
    point: [
      'Total 4 Sesi (120 menit/sesi)',
      'HTML, CSS, JS',
      'Project Personal Blog'
    ],
    targetAudience: [
      'Pemula yang belum pernah ngoding sama sekali',
      'Pelajar SMA/SMK yang ingin berkenalan dengan dunia web',
      'Siapapun yang penasaran bagaimana cara website dibuat',
    ],
  },
  {
    slug: 'css-mastery',
    icon: <FiGlobe />,
    image: '/assets/images/course/css-mastery.png',
    packageName: 'Private 1-on-1',
    title: 'CSS Mastery',
    description: 'belajar bikin website keren bareng dimulai dari 0 dengan praktisi ahli',
    longDescription: 'Mengenal CSS lebih jauh sampai ke tahap profesional. Kamu akan diajarkan styling website mulai dari dasar sampai dengan pembuatan website yang responsive dan interaktif. Tentu saja dengan pendekatan yang fun dan pastinya bikin kamu jadi lebih pede saat ngoding website nanti.',
    syllabusUrl: '/assets/docs/silabus/css-mastery.pdf',
    topics: [
      'Responsive Design', 'Flexbox', 'CSS Grid', 'Animations & Transitions', 'CSS Best Practices', 'CSS3', 'Tailwind CSS'],
    sessions: 8,
    difficulty: 'MEDIUM',
    difficultyColor: '#feca57',
    xp: 300,
    level: 2,
    price: 399999,
    originalPrice: 799999,
    point: [
      'Total 8 Sesi (120 menit/sesi)',
      'Responsive Design',
      'Flexbox',
      'CSS Grid',
      'Animations & Transitions',
      'CSS Best Practices',
      'CSS3',
      'Tailwind CSS',
      'Project Modern Responsive Website'
    ],
    targetAudience: [
      'Pemula yang sudah menguasai HTML',
      'Pelajar SMA/SMK yang ingin upgrade skill CSS',
      'Siapapun yang ingin membuat website responsive dan interaktif',
    ],
  },
  {
    slug: 'fun-arduino-robotics',
    icon: <FiCpu />,
    image: '/assets/images/course/arduino.png',
    packageName: 'Private 1-on-1',
    title: 'Fun Arduino & Robotics',
    description: 'Belajar dasar robotika lewat simulasi & praktik Arduino yang seru dan interaktif!',
    longDescription: 'Bikin lampu otomatis sendiri? Atau alarm sensor gerak? Di quest ini, kamu bakal belajar dasar robotika dari nol tanpa perlu pusing rumus fisika yang rumit. Kita akan belajar cara kerja sensor, membuat kode logika sederhana, hingga merakit proyek hardware pertama kamu. Seru, penuh praktik, dan bikin kamu makin kreatif!',
    syllabusUrl: '/assets/docs/silabus/fun-arduino-and-robotics.pdf',
    topics: [
      'Arduino Basics',
      'Sensors & Actuators',
      'Basic C++ for Arduino',
      'Tinkercad/Wokwi Simulation',
      'Smart Device Project'
    ],
    sessions: 4,
    difficulty: 'EASY',
    difficultyColor: '#52e0a8',
    xp: 120,
    level: 1,
    price: 199999,
    originalPrice: 299000,
    point: [
      'Total 4 Sesi (120 menit/sesi)',
      'Simulasi Interaktif & Praktik Hardware',
      'Project Keren (Smart Lamp / Alarm System)'
    ],
    targetAudience: [
      'Anak SMP yang penasaran bagaimana robot dan teknologi bekerja',
      'Pemula yang belum pernah menyentuh coding atau komponen elektronik',
      'Anak kreatif yang suka mengulik dan membuat barang baru',
    ],
  },
];

export const learningPackages: LearningPackage[] = [
  // {
  //   slug: 'traditional-frontend-package',
  //   title: 'Traditional Frontend Package',
  //   tagline: 'Dari nol sampai punya website sendiri',
  //   icon: '🚀',
  //   image: '/assets/images/package/frontend-package.png',
  //   courseSlugs: ['basic-web-dev', 'css-mastery', 'js-mastery'],
  //   totalSessions: 6,
  //   totalXP: 150,
  //   price: 450000,
  //   originalPrice: 900000,
  //   level: 1,
  //   difficulty: 'EASY',
  //   difficultyColor: '#52e0a8',
  //   description: 'Paket entry-level untuk kamu yang baru mau memulai perjalanan di dunia web. Fokus pada satu course yang solid agar fondasi kamu kuat sebelum naik ke level berikutnya.',
  //   highlights: [
  //     'Cocok buat pemula total',
  //     '2 sesi private 1-on-1',
  //     'Hasil: personal blog live',
  //     'Bisa lanjut ke paket berikutnya',
  //   ],
  // }
];

export const devServices: DevService[] = [
  {
    slug: 'web-development',
    icon: <FiMonitor />,
    title: 'Web Development',
    description: 'Pembuatan website dari nol sesuai kebutuhan. Dari landing page sampai web app kompleks.',
    features: [
      'Custom Design (bukan template)',
      'Responsive Mobile-first',
      'SEO Friendly',
      'Maintenance Support'
    ],
    estimatePrice: 'Mulai Rp 500.000',
    techStack: ['Next.js', 'React', 'Tailwind CSS'],
    duration: '3–14 hari kerja',
  },
  {
    slug: 'web-freelance',
    icon: <FiCode />,
    title: 'Web Freelance / Jockey',
    description: 'Bantuan pengerjaan tugas kuliah, skripsi, atau project deadline mepet.',
    features: [
      'Pengerjaan Super Cepat',
      'Bebas Revisi Error',
      'Bimbingan Penjelasan Code',
      'Privasi Terjamin'
    ],
    estimatePrice: 'Mulai Rp 300.000',
    techStack: ['Next.js', 'Laravel', 'PHP', 'React'],
    duration: '1-3 hari kerja',
    isPopular: true,
  },
  {
    slug: 'hire-programmer',
    icon: <FiUserCheck />,
    title: 'Hire a Programmer',
    description: 'Sewa programmer part-time atau full-time untuk kembangkan project tim/bisnis kamu.',
    features: [
      'Skill Terjamin & Siap Kerja',
      'Bisa Remote (Fleksibel)',
      'Laporan Progress Harian',
      'Komunikasi Lancar'
    ],
    estimatePrice: 'Mulai Rp 2.500.000',
    techStack: ['Fullstack', 'Frontend', 'Backend'],
    duration: 'Per Bulan',
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
  { href: '/course', label: 'Courses' },
  { href: '/paket', label: 'Packages' },
  {
    href: '#',
    label: 'Services',
    children: [
      { href: '/jasa-dev', label: 'Web Development' },
      { href: '/jasa-dev#web-freelance', label: 'Web Freelance' },
      { href: '/jasa-dev#hire-programmer', label: 'Hire a Programmer' },
    ],
  },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Instagram', href: 'https://instagram.com/temanngoding', icon: <FiInstagram /> },
  { label: 'YouTube', href: 'https://youtube.com/@temanngoding', icon: <FiYoutube /> },
  { label: 'GitHub', href: 'https://github.com/temanngoding', icon: <FiGithub /> },
  { label: 'TikTok', href: 'https://tiktok.com/@temanngoding', icon: <FaTiktok /> },
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

export const blogs: BlogPost[] = [
  // {
  //   slug: 'cara-belajar-coding',
  //   title: 'Cara Belajar Coding dari Nol untuk Pemula',
  //   excerpt: 'Panduan lengkap langkah demi langkah untuk memulai karir sebagai programmer dari nol.',
  //   date: '2026-07-15',
  //   author: 'Mirza',
  //   category: 'Tutorial',
  //   image: '/assets/images/blog/cara-belajar-coding.png'
  // }
];
