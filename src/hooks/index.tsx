import type { CourseData } from '@/types';

export const calcLevel = (skills: number, exp: number) => skills + Math.floor(exp * 1.5);

export const calculatePackageStats = (slugs: string[], courses: CourseData[]) => {
  const packageCourses = courses.filter(c => slugs.includes(c.slug));
  const originalPrice = packageCourses.reduce((sum, c) => sum + (c.originalPrice ?? 0), 0);
  const basePrice = packageCourses.reduce((sum, c) => sum + (c.price ?? 0), 0);
  const price = Math.round(basePrice * 0.7); // Diskon 30%
  const totalXP = packageCourses.reduce((sum, c) => sum + (c.xp ?? 0), 0);
  const totalSessions = packageCourses.reduce((sum, c) => sum + (c.sessions ?? 0), 0);
  
  return { originalPrice, price, totalXP, totalSessions };
};
