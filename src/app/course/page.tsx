import type { Metadata } from 'next'
import Link from 'next/link'
import ImageWithSkeleton from '@/components/shared/ImageWithSkeleton'
import { courses, WHATSAPP_NUMBER } from '@/constants'

export const metadata: Metadata = {
  title: 'All Course',
  description: 'Jelajahi semua quest belajar di temanngoding.id — dari web fundamentals sampai bootcamp fullstack job-ready.',
}

// Imported courses from constants

export default function CoursePage() {
  return (
    <>
      <main>

        {/* Hero */}
        <header className="pt-[96px] pb-[64px] relative overflow-hidden">
          <div className="max-w-[1120px] mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 font-mono text-[12px] text-gold border border-gold px-[12px] py-[6px] mb-[28px] bg-[rgba(255,200,87,0.06)]">
              <span className="w-[6px] h-[6px] bg-gold animate-blink"></span> QUEST_BOARD — ALL QUESTS
            </div>
            <h1 className="font-pixel text-[24px] md:text-[30px] leading-[1.65] mb-[24px] text-text-main">
              Semua <span className="text-xp">Quest</span><br />
              Belajar <span className="text-gold">Tersedia</span>
            </h1>
            <p className="text-[16px] text-text-dim leading-[1.7] max-w-[600px] mx-auto">
              Pilih quest yang sesuai level lo sekarang. Tiap quest punya learning path yang jelas dari awal sampai akhir.
            </p>
          </div>
        </header>

        {/* Course Grid */}
        <section className="pb-[80px]" aria-label="Daftar Semua Course">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
              {courses.map((course) => (
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Halo Teman Ngoding! Saya tertarik untuk mendaftar paket ${course.packageName} materi ${course.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={course.title}
                  className="bg-bg-panel border-2 border-line transition-all hover:border-xp hover:bg-bg-panel-2 group relative flex flex-col cursor-pointer"
                >
                  {/* Course Image */}
                  <div className="w-full aspect-4/3 border-b-2 border-line relative overflow-hidden bg-bg-deep group-hover:border-line-bright transition-colors">
                    <ImageWithSkeleton src={course.image} alt={course.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-[16px] left-[16px] w-[44px] h-[44px] flex items-center justify-center bg-bg-deep/80 backdrop-blur-sm border border-line-bright text-[20px] shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
                      {course.icon}
                    </div>
                  </div>

                  <div className="p-[24px] flex flex-col flex-1">
                    {/* Header */}
                    <div className="flex items-start gap-[16px] mb-[16px]">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-[10px] flex-wrap mb-[2px]">
                          <span className="font-pixel text-[10px] text-text-dim">LV.{course.level}</span>
                          <h3 className="font-semibold text-[16px] text-text-main">{course.title}</h3>
                          <span
                            className="font-mono text-[10px] px-[8px] py-[3px] border whitespace-nowrap"
                            style={{ borderColor: course.difficultyColor, color: course.difficultyColor }}
                          >
                            {course.difficulty}
                          </span>
                        </div>
                        <p className="font-mono text-[11px] text-mana mb-[4px]">{course.packageName}</p>
                        <p className="font-mono text-[11px] text-text-dim">{course.sessions} sesi · +{course.xp} XP</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[13px] text-text-dim leading-[1.65] mb-[14px]">{course.description}</p>

                    {/* Point highlights */}
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

                    {/* Topics */}
                    <div className="mb-[20px]">
                      <div className="font-mono text-[10px] text-mana mb-[8px] uppercase tracking-[1px]">Materi yang dipelajari</div>
                      <div className="flex flex-wrap gap-[6px]">
                        {course.topics.map((topic) => (
                          <span
                            key={topic}
                            className="font-mono text-[10px] px-[8px] py-[3px] border border-line text-text-dim bg-bg-deep"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* XP Bar */}
                    <div className="mt-auto">
                      <div className="flex justify-between font-mono text-[10px] text-text-dim mb-1">
                        <span>Reward</span>
                        <span className="text-gold">+{course.xp} XP</span>
                      </div>
                      <div className="h-[8px] bg-bg-deep border border-line">
                        <div
                          className="h-full bg-gold"
                          style={{ width: `${Math.min((course.xp / 800) * 100, 100)}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-[80px]" aria-label="Cara Belajar">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="mb-[48px]">
              <div className="font-mono text-[12px] text-mana mb-[10px]">// HOW_IT_WORKS</div>
              <h2 className="font-pixel text-[20px] leading-[1.6]">Gimana Cara Belajarnya?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-[2px]">
              {[
                { step: '01', icon: '📋', title: 'Pilih Quest', desc: 'Pilih course sesuai level dan minat lo.' },
                { step: '02', icon: '💬', title: 'Konsul Dulu', desc: 'Chat dulu sama mentor buat nentuin rencana belajar.' },
                { step: '03', icon: '⚔️', title: 'Mulai Ngoding', desc: '1-on-1 private session, langsung praktek bareng mentor.' },
                { step: '04', icon: '🏆', title: 'Level Up!', desc: 'Selesain quest, dapet XP, dan siap naik ke level berikutnya.' },
              ].map((item) => (
                <article
                  key={item.step}
                  className="bg-bg-panel border border-line px-[20px] py-[24px] text-center transition-colors hover:border-line-bright hover:bg-bg-panel-2"
                >
                  <div className="font-mono text-[10px] text-line-bright mb-[10px]">STEP_{item.step}</div>
                  <div className="text-[28px] mb-[10px]" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-semibold text-[14px] mb-[6px] text-text-main">{item.title}</h3>
                  <p className="font-mono text-[11px] text-text-dim leading-normal">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="text-center py-[90px] px-6 bg-bg-panel border-y-2 border-line" aria-label="Call to Action">
          <h2 className="font-pixel text-[22px] leading-[1.7] mb-[20px] text-text-main">Ready Player One?</h2>
          <p className="font-mono text-text-dim mb-[32px]">Slot belajar terbatas tiap minggunya. Mulai quest pertamamu sekarang.</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo Teman Ngoding! Saya ingin daftar dan tanya-tanya soal program belajarnya.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-semibold text-[14px] px-[24px] py-[14px] border-2 border-black shadow-[4px_4px_0_#000] cursor-pointer transition-all inline-flex items-center gap-[8px] bg-xp text-[#04140d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000]"
          >
            ▶ DAFTAR SEKARANG
          </a>
        </section>
      </main>
    </>
  )
}
