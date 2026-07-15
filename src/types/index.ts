import { ReactNode } from 'react';

export interface MentorStat {
  label: string;
  valueText: string;
  percent?: number;
  color: string;
  isBadge?: boolean;
}

export type MentorBadge = 'NEWBIE' | 'PROFESSIONAL' | 'MASTER' | 'HEROES' | 'KING' | 'GOD';

export interface MentorData {
  id: string;
  name: string;
  title: string;
  level: number;
  image: string;
  bio?: string;
  skills?: string[];
  stats: MentorStat[];
}

export interface CoreValue {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface CourseData {
  slug: string;
  icon: ReactNode;
  image: string;
  packageName: string;
  title: string;
  description: string;
  longDescription?: string;
  syllabusUrl?: string;
  topics: string[];
  sessions: number;
  point: string[];
  difficulty: string;
  difficultyColor: string;
  xp: number;
  level: number;
  targetAudience?: string[];
  price?: number;
  originalPrice?: number;
}

export interface LearningPackage {
  slug: string;
  title: string;
  tagline: string;
  icon: ReactNode;
  image?: string;
  courseSlugs: string[]; // ordered list of course slugs
  totalSessions: number;
  totalXP: number;
  price: number;
  originalPrice: number;
  isPopular?: boolean;
  level: number;
  difficulty: string;
  difficultyColor: string;
  highlights: string[];
  description: string;
}

export interface DevService {
  slug: string;
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  estimatePrice: string;
  techStack: string[];
  duration: string;
  isPopular?: boolean;
}

export interface TestimonialData {
  id: number;
  text: string;
  author: string;
  achievement: string;
}

export interface NavLink {
  href: string;
  label: string;
  children?: NavLink[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: ReactNode;
}

export interface LeadData {
  phone: string;
  timestamp: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image?: string;
}
