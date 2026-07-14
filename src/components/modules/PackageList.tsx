'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { CourseData, LearningPackage } from '@/types';
import { WHATSAPP_NUMBER } from '@/constants';

export default function PackageList({ packages, courses }: { packages: LearningPackage[], courses: CourseData[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredPackages = useMemo(() => {
    return packages.filter((pkg) => {
      const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            pkg.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDifficulty = difficultyFilter === 'ALL' || pkg.difficulty === difficultyFilter;
      return matchesSearch && matchesDifficulty;
    });
  }, [packages, searchQuery, difficultyFilter]);

  const totalPages = Math.ceil(filteredPackages.length / itemsPerPage);
  const currentPackages = filteredPackages.slice(
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
            placeholder="Cari paket..."
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
      {currentPackages.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {currentPackages.map((pkg) => {
            const pkgCourses = pkg.courseSlugs.map(s => courses.find(c => c.slug === s)).filter(Boolean);
            const savings = pkg.originalPrice - pkg.price;
            const savingsPercent = Math.round((savings / pkg.originalPrice) * 100);

            return (
              <article
                key={pkg.slug}
                className={`bg-bg-panel flex flex-col relative transition-all hover:-translate-y-1 ${pkg.isPopular
                  ? 'border-2 border-gold shadow-[0_0_0_1px_#ffc857,4px_4px_0_#000]'
                  : 'border-2 border-line hover:border-line-bright'
                  }`}
              >
                {pkg.isPopular && (
                  <div className="absolute top-[-12px] right-[16px] bg-gold text-[#1a1300] font-mono text-[10px] font-bold px-[10px] py-[4px]">
                    PALING LARIS
                  </div>
                )}
                {savingsPercent >= 30 && (
                  <div className="absolute top-[-12px] left-[16px] bg-hp text-white font-mono text-[10px] font-bold px-[10px] py-[4px]">
                    HEMAT {savingsPercent}%
                  </div>
                )}

                <div className="p-[24px] flex flex-col flex-1">
                  {/* Icon & Level */}
                  <div className="flex items-center justify-between mb-[16px]">
                    <div className="text-[36px]">{pkg.icon}</div>
                    <div className="flex items-center gap-[8px]">
                      <span className="font-pixel text-[9px] text-text-dim">LV.{pkg.level}</span>
                      <span
                        className="font-mono text-[10px] px-[8px] py-[3px] border"
                        style={{ borderColor: pkg.difficultyColor, color: pkg.difficultyColor }}
                      >
                        {pkg.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="font-semibold text-[18px] text-text-main mb-[4px]">{pkg.title}</h2>
                  <p className="font-mono text-[12px] text-mana mb-[12px]">{pkg.tagline}</p>
                  <p className="text-[13px] text-text-dim leading-[1.65] mb-[16px]">{pkg.description}</p>

                  {/* Quest List */}
                  <div className="mb-[16px]">
                    <div className="font-mono text-[10px] text-xp mb-[8px] uppercase tracking-[1px]">Quest dalam Paket ini</div>
                    <div className="flex flex-col gap-[6px]">
                      {pkgCourses.map((c, idx) => c && (
                        <div key={c.slug} className="flex items-center gap-[10px] bg-bg-deep border border-line px-[12px] py-[8px]">
                          <span className="font-pixel text-[9px] text-line-bright">{String(idx + 1).padStart(2, '0')}</span>
                          <span className="text-[14px]">{c.icon}</span>
                          <span className="font-mono text-[11px] text-text-main flex-1">{c.title}</span>
                          <span className="font-mono text-[10px] text-gold">+{c.xp}XP</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex gap-[16px] mb-[20px]">
                    <div className="font-mono text-center">
                      <div className="text-[16px] font-bold text-gold">{pkg.totalSessions}</div>
                      <div className="text-[9px] text-text-dim uppercase">Sesi</div>
                    </div>
                    <div className="font-mono text-center">
                      <div className="text-[16px] font-bold text-xp">+{pkg.totalXP}</div>
                      <div className="text-[9px] text-text-dim uppercase">Total XP</div>
                    </div>
                    <div className="font-mono text-center">
                      <div className="text-[16px] font-bold text-mana">{pkg.courseSlugs.length}</div>
                      <div className="text-[9px] text-text-dim uppercase">Quest</div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="flex flex-col gap-[6px] mb-[20px]">
                    {pkg.highlights.map((h, i) => (
                      <li key={i} className="flex gap-[8px] text-[12px] text-text-dim before:content-['▸'] before:text-xp">
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="mt-auto">
                    <div className="font-mono text-[26px] text-xp font-bold">
                      Rp{pkg.price.toLocaleString('id-ID')}
                      <span className="text-[12px] text-text-dim"> /paket</span>
                    </div>
                    <div className="font-mono text-[12px] text-text-dim line-through mb-[16px]">
                      Rp{pkg.originalPrice.toLocaleString('id-ID')}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col gap-[8px]">
                      <Link
                        href={`/paket/${pkg.slug}`}
                        className={`flex justify-center font-mono font-semibold text-[13px] px-[20px] py-[12px] border-2 border-black shadow-[4px_4px_0_#000] cursor-pointer transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] w-full ${pkg.isPopular
                          ? 'bg-xp text-[#04140d]'
                          : 'bg-bg-panel text-text-main border-line-bright'
                          }`}
                      >
                        LIHAT DETAIL
                      </Link>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Halo Teman Ngoding! Saya tertarik mendaftar ${pkg.title}. Boleh info lebih lanjut?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center font-mono text-[12px] px-[20px] py-[10px] border border-line text-text-dim hover:border-xp hover:text-xp transition-colors w-full"
                      >
                        💬 Daftar via WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 font-mono text-text-dim border-2 border-line bg-bg-deep">
          Tidak ada paket yang cocok dengan filter.
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
