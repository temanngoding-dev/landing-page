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
  icon: string;
  title: string;
  description: string;
}

export interface CourseData {
  icon: string;
  image: string;
  packageName: string;
  title: string;
  description: string;
  topics: string[];
  sessions: number;
  point: string[];
  difficulty: string;
  difficultyColor: string;
  xp: number;
  level: number;
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
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface LeadData {
  phone: string;
  timestamp: string;
}
