import type { Metadata } from 'next'
import Link from 'next/link'
import { courses } from '@/constants'
import CourseList from '@/components/modules/CourseList'
import { FiClipboard, FiMessageCircle, FiCode, FiAward, FiPackage } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'All Courses',
  description: 'Jelajahi semua quest belajar di temanngoding.id — dari web fundamentals sampai bootcamp fullstack job-ready.',
}

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
            <p className="text-[16px] text-text-dim leading-[1.7] max-w-[600px] mx-auto mb-[28px]">
              Pilih quest yang sesuai level kamu sekarang. Tiap quest punya learning path yang jelas dari awal sampai akhir.
            </p>
            <Link
              href="/package"
              className="inline-flex items-center gap-2 font-mono text-[13px] text-mana border border-mana px-[16px] py-[8px] bg-[rgba(124,155,255,0.06)] hover:bg-[rgba(124,155,255,0.12)] transition-colors"
            >
              <FiPackage className="inline-block mr-2" /> Lihat Paket Bundling — lebih hemat!
            </Link>
          </div>
        </header>

        {/* Course Grid with Filter */}
        <section className="pb-[80px]" aria-label="Daftar Semua Course">
          <div className="max-w-[1120px] mx-auto px-6">
            <CourseList courses={courses} />
          </div>
        </section>

        {/* How it works */}
        <section className="py-[80px]" aria-label="Cara Belajar">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="mb-[48px]">
              <div className="font-mono text-[12px] text-mana mb-[10px]">{'// HOW_IT_WORKS'}</div>
              <h2 className="font-pixel text-[20px] leading-[1.6]">Gimana Cara Belajarnya?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-[2px]">
              {[
                { step: '01', icon: <FiClipboard className="text-[28px] text-xp" />, title: 'Pilih Quest', desc: 'Pilih course sesuai level dan minat kamu.' },
                { step: '02', icon: <FiMessageCircle className="text-[28px] text-mana" />, title: 'Konsul Dulu', desc: 'Chat dulu dengan mentor untuk menentukan rencana belajar.' },
                { step: '03', icon: <FiCode className="text-[28px] text-hp" />, title: 'Mulai Coding', desc: '1-on-1 private session, langsung praktik bersama mentor.' },
                { step: '04', icon: <FiAward className="text-[28px] text-gold" />, title: 'Level Up!', desc: 'Selesaikan quest, dapatkan XP, dan siap naik ke level berikutnya.' },
              ].map((item) => (
                <article
                  key={item.step}
                  className="bg-bg-panel border border-line px-[20px] py-[24px] text-center transition-colors hover:border-line-bright hover:bg-bg-panel-2"
                >
                  <div className="font-mono text-[10px] text-line-bright mb-[10px]">STEP_{item.step}</div>
                  <div className="text-[28px] mb-[10px] flex justify-center" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-semibold text-[14px] mb-[6px] text-text-main">{item.title}</h3>
                  <p className="font-mono text-[11px] text-text-dim leading-normal">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-[90px] px-6 bg-bg-panel border-y-2 border-line" aria-label="Call to Action">
          <h2 className="font-pixel text-[22px] leading-[1.7] mb-[20px] text-text-main">Ready Player One?</h2>
          <p className="font-mono text-text-dim mb-[32px]">Slot belajar terbatas tiap minggunya. Mulai quest pertamamu sekarang.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/package"
              className="font-mono font-semibold text-[14px] px-[24px] py-[14px] border-2 border-black shadow-[4px_4px_0_#000] cursor-pointer transition-all inline-flex items-center gap-[8px] bg-xp text-[#04140d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000]"
            >
              <FiPackage className="inline-block mr-1" /> LIHAT PAKET BUNDLING
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
