import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'All Course',
  description: 'Jelajahi semua quest belajar di temanngoding.id — dari web fundamentals sampai bootcamp fullstack job-ready.',
}

const courses = [
  {
    icon: '🌐',
    title: 'Web Dev Fundamentals',
    description: 'Pondasi wajib buat semua developer. Belajar HTML, CSS, dan JavaScript dari nol sampai bisa bikin website interaktif.',
    topics: ['HTML5 Semantik', 'CSS Flexbox & Grid', 'JavaScript ES6+', 'DOM Manipulation', 'Responsive Design', 'Git Basics'],
    sessions: 8,
    difficulty: 'EASY',
    difficultyColor: '#52e0a8',
    xp: 150,
  },
  {
    icon: '⚛️',
    title: 'React & Next.js Mastery',
    description: 'Level up ke frontend modern. Kuasai React ecosystem dan Next.js buat bikin web app production-grade.',
    topics: ['React Components', 'Hooks & State', 'Next.js App Router', 'Server Components', 'API Routes', 'Deployment'],
    sessions: 10,
    difficulty: 'MEDIUM',
    difficultyColor: '#ffc857',
    xp: 300,
  },
  {
    icon: '🛠️',
    title: 'Laravel Backend Engineer',
    description: 'Jadi backend developer yang solid. Dari REST API sampai authentication, semua dipelajarin secara hands-on.',
    topics: ['Laravel MVC', 'Eloquent ORM', 'REST API Design', 'Authentication & Authorization', 'Database Migration', 'Testing'],
    sessions: 12,
    difficulty: 'MEDIUM',
    difficultyColor: '#ffc857',
    xp: 350,
  },
  {
    icon: '🐉',
    title: 'Bootcamp: Job-Ready Fullstack',
    description: 'Boss fight terakhir. Bangun project portofolio nyata dan persiapan interview buat dapetin kerja pertama.',
    topics: ['Fullstack Project', 'System Design Basics', 'Code Review Practice', 'Portfolio Building', 'Interview Prep', 'Soft Skills'],
    sessions: 16,
    difficulty: 'BOSS FIGHT',
    difficultyColor: '#ff5d73',
    xp: 800,
  },
]

export default function CoursePage() {
  return (
    <>
      <Navbar />
      <main>

      {/* Hero */}
      <header className="pt-[96px] pb-[64px] relative overflow-hidden">
        <div className="max-w-[1120px] mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 font-mono text-[12px] text-[#ffc857] border border-[#ffc857] px-[12px] py-[6px] mb-[28px] bg-[rgba(255,200,87,0.06)]">
            <span className="w-[6px] h-[6px] bg-[#ffc857] animate-blink"></span> QUEST_BOARD — ALL QUESTS
          </div>
          <h1 className="font-pixel text-[24px] md:text-[30px] leading-[1.65] mb-[24px] text-[#dfe3f5]">
            Semua <span className="text-[#52e0a8]">Quest</span><br />
            Belajar <span className="text-[#ffc857]">Tersedia</span>
          </h1>
          <p className="text-[16px] text-[#8891b8] leading-[1.7] max-w-[600px] mx-auto">
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
                className="bg-[#12172a] border-2 border-[#2a3358] p-[24px] transition-all hover:border-[#4a5694] hover:bg-[#181f38] group relative flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start gap-[16px] mb-[16px]">
                  <div className="w-[56px] h-[56px] shrink-0 flex items-center justify-center bg-[#0a0d18] border border-[#4a5694] text-[24px]" aria-hidden="true">
                    {course.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-[10px] flex-wrap mb-[4px]">
                      <h3 className="font-semibold text-[16px] text-[#dfe3f5]">{course.title}</h3>
                      <span
                        className="font-mono text-[10px] px-[8px] py-[3px] border whitespace-nowrap"
                        style={{ borderColor: course.difficultyColor, color: course.difficultyColor }}
                      >
                        {course.difficulty}
                      </span>
                    </div>
                    <p className="font-mono text-[11px] text-[#8891b8]">{course.sessions} sesi · +{course.xp} XP</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[13px] text-[#8891b8] leading-[1.65] mb-[18px]">{course.description}</p>

                {/* Topics */}
                <div className="mb-[20px]">
                  <div className="font-mono text-[10px] text-[#7c9bff] mb-[8px] uppercase tracking-[1px]">Materi yang dipelajari</div>
                  <div className="flex flex-wrap gap-[6px]">
                    {course.topics.map((topic) => (
                      <span
                        key={topic}
                        className="font-mono text-[10px] px-[8px] py-[3px] border border-[#2a3358] text-[#8891b8] bg-[#0a0d18]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* XP Bar */}
                <div className="mt-auto">
                  <div className="flex justify-between font-mono text-[10px] text-[#8891b8] mb-1">
                    <span>Reward</span>
                    <span className="text-[#ffc857]">+{course.xp} XP</span>
                  </div>
                  <div className="h-[8px] bg-[#0a0d18] border border-[#2a3358]">
                    <div
                      className="h-full bg-[#ffc857]"
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
            <div className="font-mono text-[12px] text-[#7c9bff] mb-[10px]">// HOW_IT_WORKS</div>
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
                className="bg-[#12172a] border border-[#2a3358] px-[20px] py-[24px] text-center transition-colors hover:border-[#4a5694] hover:bg-[#181f38]"
              >
                <div className="font-mono text-[10px] text-[#4a5694] mb-[10px]">STEP_{item.step}</div>
                <div className="text-[28px] mb-[10px]" aria-hidden="true">{item.icon}</div>
                <h3 className="font-semibold text-[14px] mb-[6px] text-[#dfe3f5]">{item.title}</h3>
                <p className="font-mono text-[11px] text-[#8891b8] leading-[1.5]">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-[90px] px-6 bg-[#12172a] border-y-2 border-[#2a3358]" aria-label="Call to Action">
        <h2 className="font-pixel text-[22px] leading-[1.7] mb-[20px] text-[#dfe3f5]">Ready Player One?</h2>
        <p className="font-mono text-[#8891b8] mb-[32px]">Slot belajar terbatas tiap minggunya. Mulai quest pertamamu sekarang.</p>
        <Link
          href="/#levels"
          className="font-mono font-semibold text-[14px] px-[24px] py-[14px] border-2 border-black shadow-[4px_4px_0_#000] cursor-pointer transition-all inline-flex items-center gap-[8px] bg-[#52e0a8] text-[#04140d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000]"
        >
          ▶ DAFTAR SEKARANG
        </Link>
      </section>
      </main>

      <footer className="py-[32px] text-center font-mono text-[11px] text-[#8891b8]">
        © 2026 temanngoding.com — built for coders, by coders.
      </footer>
    </>
  )
}
