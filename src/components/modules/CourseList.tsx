'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CourseData } from '@/types';
import { FiSearch, FiFilter, FiChevronLeft, FiChevronRight, FiBookOpen, FiImage } from 'react-icons/fi';

function CourseImage({ course }: { course: CourseData }) {
  const [hasError, setHasError] = useState(false);

  if (!course.image || hasError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-bg-deep">
        <FiImage className="text-[48px] text-line-bright" />
      </div>
    );
  }

  return (
    <Image
      src={course.image}
      alt={course.title}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      onError={() => setHasError(true)}
    />
  );
}

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
  useEffect(() => { setCurrentPage(1); }, [searchQuery, difficultyFilter]);

  // No courses at all
  if (courses.length === 0) {
    return (
      <div className="text-center py-24 border-2 border-dashed border-line bg-bg-deep">
        <FiBookOpen className="mx-auto text-[48px] text-line-bright mb-6" />
        <h3 className="font-pixel text-[16px] text-text-main mb-3">Belum Ada Quest</h3>
        <p className="font-mono text-[13px] text-text-dim max-w-[400px] mx-auto">
          Quest belajar sedang dalam persiapan. Stay tuned untuk update terbaru!
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-text-dim text-[16px]" />
          <input
            type="text"
            placeholder="Cari quest..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-bg-deep border-2 border-line text-text-main pl-11 pr-4 py-3 font-mono text-[13px] focus:outline-none focus:border-mana placeholder:text-text-dim transition-colors"
          />
        </div>
        <div className="w-full md:w-[200px] relative">
          <FiFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-text-dim text-[14px]" />
          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            className="w-full bg-bg-deep border-2 border-line text-text-main pl-11 pr-4 py-3 font-mono text-[13px] focus:outline-none focus:border-mana appearance-none cursor-pointer transition-colors"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {currentCourses.map((course) => {
            const savingsPercent = course.originalPrice && course.price && course.originalPrice > course.price 
              ? Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100) 
              : 0;

            return (
            <Link
              href={`/course/${course.slug}`}
              key={course.slug}
              className="bg-bg-panel border-2 border-line transition-all hover:border-xp hover:bg-bg-panel-2 group relative flex flex-col cursor-pointer"
            >
              <div className="w-full aspect-4/3 border-b-2 border-line relative overflow-hidden bg-bg-deep group-hover:border-line-bright transition-colors">
                <CourseImage course={course} />
                <div className="absolute top-[16px] left-[16px] w-[36px] h-[36px] flex items-center justify-center bg-bg-deep/80 backdrop-blur-sm border border-line-bright text-[16px] shadow-[3px_3px_0_rgba(0,0,0,0.5)]">
                  {course.icon}
                </div>
                {savingsPercent > 0 && (
                  <div className="absolute bottom-[16px] left-[16px] bg-hp text-white font-mono text-[10px] font-bold px-[10px] py-[4px]">
                    HEMAT {savingsPercent}%
                  </div>
                )}
              </div>

              <div className="p-[20px] flex flex-col flex-1">
                <div className="flex items-start gap-[12px] mb-[12px]">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-[8px] flex-wrap mb-[4px]">
                      <span className="font-pixel text-[10px] text-text-dim">LV.{course.level}</span>
                      <h2 className="font-semibold text-[15px] text-text-main leading-tight">{course.title}</h2>
                      <span
                        className="font-mono text-[10px] px-[6px] py-[2px] border whitespace-nowrap"
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
                  <div className="mb-[12px]">
                    <div className="font-mono text-[10px] text-xp mb-[6px] uppercase tracking-[1px]">Highlight</div>
                    <ul className="text-[12px] text-text-dim flex flex-col gap-[4px]">
                      {course.point.slice(0, 3).map((pt, i) => (
                        <li key={i} className="flex gap-[6px] before:content-['▸'] before:text-xp line-clamp-1">{pt}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mb-[16px]">
                  <div className="font-mono text-[10px] text-mana mb-[6px] uppercase tracking-[1px]">Harga</div>
                  <div className="flex items-end gap-[8px]">
                    <span className="font-mono text-[18px] text-xp font-bold leading-none">
                      Rp{(course.price || 0).toLocaleString('id-ID')}
                    </span>
                    {course.originalPrice && course.originalPrice > (course.price || 0) && (
                      <span className="font-mono text-[11px] text-text-dim line-through mb-[2px]">
                        Rp{course.originalPrice.toLocaleString('id-ID')}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="mt-[12px] flex justify-end">
                    <span className="font-mono text-[11px] text-xp group-hover:underline">Detail →</span>
                  </div>
                </div>
              </div>
            </Link>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-20 border-2 border-dashed border-line bg-bg-deep">
          <FiSearch className="mx-auto text-[40px] text-line-bright mb-4" />
          <h3 className="font-pixel text-[14px] text-text-main mb-2">Quest Tidak Ditemukan</h3>
          <p className="font-mono text-[12px] text-text-dim">
            Coba ubah kata kunci atau filter level kamu.
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 0 && (
        <div className="flex justify-center items-center gap-2 mt-[40px]">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="font-mono text-[12px] px-[12px] py-[8px] border-2 border-line disabled:opacity-30 disabled:cursor-not-allowed hover:bg-bg-panel-2 hover:border-line-bright transition-colors flex items-center gap-1"
          >
            <FiChevronLeft /> Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`font-mono text-[12px] w-[36px] h-[36px] border-2 transition-colors ${
                currentPage === page
                  ? 'border-xp bg-xp/10 text-xp'
                  : 'border-line hover:border-line-bright hover:bg-bg-panel-2 text-text-dim'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="font-mono text-[12px] px-[12px] py-[8px] border-2 border-line disabled:opacity-30 disabled:cursor-not-allowed hover:bg-bg-panel-2 hover:border-line-bright transition-colors flex items-center gap-1"
          >
            Next <FiChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
