'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import ImageWithSkeleton from '@/components/shared/ImageWithSkeleton';
import { CourseData } from '@/types';

export default function CourseList({ courses }: { courses: CourseData[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            course.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDifficulty = difficultyFilter === 'ALL' || course.difficulty === difficultyFilter;
      return matchesSearch && matchesDifficulty;
    });
  }, [courses, searchQuery, difficultyFilter]);

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const currentCourses = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset to page 1 when filters change
  useMemo(() => setCurrentPage(1), [searchQuery, difficultyFilter]);

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Cari quest..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-bg-deep border-2 border-line text-text-main px-4 py-3 font-mono text-[13px] focus:outline-none focus:border-mana placeholder:text-text-dim"
          />
        </div>
        <div className="w-full md:w-[200px]">
          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            className="w-full bg-bg-deep border-2 border-line text-text-main px-4 py-3 font-mono text-[13px] focus:outline-none focus:border-mana appearance-none"
          >
            <option value="ALL">Semua Level</option>
            <option value="EASY">EASY</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HARD">HARD</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      {currentCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          {currentCourses.map((course) => (
            <Link
              href={`/course/${course.slug}`}
              key={course.slug}
              className="bg-bg-panel border-2 border-line transition-all hover:border-xp hover:bg-bg-panel-2 group relative flex flex-col cursor-pointer"
            >
              <div className="w-full aspect-4/3 border-b-2 border-line relative overflow-hidden bg-bg-deep group-hover:border-line-bright transition-colors">
                <ImageWithSkeleton src={course.image} alt={course.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-[16px] left-[16px] w-[44px] h-[44px] flex items-center justify-center bg-bg-deep/80 backdrop-blur-sm border border-line-bright text-[20px] shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
                  {course.icon}
                </div>
              </div>

              <div className="p-[24px] flex flex-col flex-1">
                <div className="flex items-start gap-[16px] mb-[16px]">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-[10px] flex-wrap mb-[2px]">
                      <span className="font-pixel text-[10px] text-text-dim">LV.{course.level}</span>
                      <h2 className="font-semibold text-[16px] text-text-main">{course.title}</h2>
                      <span
                        className="font-mono text-[10px] px-[8px] py-[3px] border whitespace-nowrap"
                        style={{ borderColor: course.difficultyColor, color: course.difficultyColor }}
                      >
                        {course.difficulty}
                      </span>
                    </div>
                    <p className="font-mono text-[11px] text-mana mb-[4px]">{course.packageName}</p>
                    <p className="font-mono text-[11px] text-text-dim">{course.sessions} sesi</p>
                  </div>
                </div>

                {course.point.length > 0 && (
                  <div className="mb-[18px]">
                    <div className="font-mono text-[10px] text-xp mb-[8px] uppercase tracking-[1px]">Highlight</div>
                    <ul className="text-[12px] text-text-dim flex flex-col gap-[6px]">
                      {course.point.map((pt, i) => (
                        <li key={i} className="flex gap-[8px] before:content-['▸'] before:text-xp">{pt}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mb-[20px]">
                  <div className="font-mono text-[10px] text-mana mb-[8px] uppercase tracking-[1px]">Materi yang dipelajari</div>
                  <div className="flex flex-wrap gap-[6px]">
                    {course.topics.filter(t => t).map((topic) => (
                      <span
                        key={topic}
                        className="font-mono text-[10px] px-[8px] py-[3px] border border-line text-text-dim bg-bg-deep"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="mt-[16px] flex justify-end">
                    <span className="font-mono text-[12px] text-xp group-hover:underline">Lihat Detail →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 font-mono text-text-dim border-2 border-line bg-bg-deep">
          Tidak ada quest yang cocok dengan filter.
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-[40px]">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="font-mono text-[12px] px-[16px] py-[8px] border-2 border-line disabled:opacity-50 disabled:cursor-not-allowed hover:bg-bg-panel-2 transition-colors"
          >
            ← Prev
          </button>
          <span className="font-mono text-[12px] text-text-dim">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="font-mono text-[12px] px-[16px] py-[8px] border-2 border-line disabled:opacity-50 disabled:cursor-not-allowed hover:bg-bg-panel-2 transition-colors"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
