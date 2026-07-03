import type { Metadata } from 'next'
import Link from 'next/link'
import { courses } from '@/constants'

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
              <article
                key={course.title}
                className="bg-bg-panel border-2 border-line p-[24px] transition-all hover:border-line-bright hover:bg-bg-panel-2 group relative flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start gap-[16px] mb-[16px]">
                  <div className="w-[56px] h-[56px] shrink-0 flex items-center justify-center bg-bg-deep border border-line-bright text-[24px]" aria-hidden="true">
                    {course.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-[10px] flex-wrap mb-[4px]">
                      <h3 className="font-semibold text-[16px] text-text-main">{course.title}</h3>
                      <span
                        className="font-mono text-[10px] px-[8px] py-[3px] border whitespace-nowrap"
                        style={{ borderColor: course.difficultyColor, color: course.difficultyColor }}
                      >
                        {course.difficulty}
                      </span>
                    </div>
                    <p className="font-mono text-[11px] text-text-dim">{course.sessions} sesi · +{course.xp} XP</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[13px] text-text-dim leading-[1.65] mb-[18px]">{course.description}</p>

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
              </article>
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
                <p className="font-mono text-[11px] text-text-dim leading-[1.5]">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-[90px] px-6 bg-bg-panel border-y-2 border-line" aria-label="Call to Action">
        <h2 className="font-pixel text-[22px] leading-[1.7] mb-[20px] text-text-main">Ready Player One?</h2>
        <p className="font-mono text-text-dim mb-[32px]">Slot belajar terbatas tiap minggunya. Mulai quest pertamamu sekarang.</p>
        <Link
          href="/#levels"
          className="font-mono font-semibold text-[14px] px-[24px] py-[14px] border-2 border-black shadow-[4px_4px_0_#000] cursor-pointer transition-all inline-flex items-center gap-[8px] bg-xp text-[#04140d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000]"
        >
          ▶ DAFTAR SEKARANG
        </Link>
      </section>
      </main>
    </>
  )
}
