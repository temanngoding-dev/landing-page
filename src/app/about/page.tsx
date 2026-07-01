import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Kenalan sama tim temanngoding.id — mentor berpengalaman yang siap bantu kamu naik level di dunia IT.',
}

const mentors = [
  {
    id: 'MENTOR_01',
    name: 'MENTOR_01',
    title: 'Fullstack Engineer · Lv. 27',
    image: '/assets/images/mentor/mirza.png',
    bio: 'Fullstack engineer dengan pengalaman lebih dari 5 tahun di industri tech. Spesialisasi di React, Next.js, Laravel, dan arsitektur backend modern.',
    skills: ['React', 'Next.js', 'Laravel', 'Node.js', 'PostgreSQL', 'Docker'],
    stats: [
      { label: 'EXP (Pengalaman Real)', value: 88, color: '#52e0a8' },
      { label: 'MANA (Kesabaran Ngajar)', value: 70, color: '#7c9bff' },
      { label: 'HP (Respon Chat)', value: 95, color: '#ff5d73' },
    ],
  },
  {
    id: 'MENTOR_02',
    name: 'MENTOR_02',
    title: 'Fullstack Engineer · Lv. 27',
    image: '/assets/images/mentor/rio.png',
    bio: 'Fullstack engineer dengan pengalaman lebih dari 5 tahun di industri tech. Spesialisasi di React, Next.js, Laravel, dan arsitektur backend modern.',
    skills: ['React', 'Next.js', 'Laravel', 'Node.js', 'PostgreSQL', 'Docker'],
    stats: [
      { label: 'EXP (Pengalaman Real)', value: 88, color: '#52e0a8' },
      { label: 'MANA (Kesabaran Ngajar)', value: 70, color: '#7c9bff' },
      { label: 'HP (Respon Chat)', value: 95, color: '#ff5d73' },
    ],
  },
]

const values = [
  {
    icon: '⚔️',
    title: 'Belajar = Ngoding Langsung',
    description: 'Gak ada tonton video doang. Lo ngoding, lo dibimbing, lo naik level beneran.',
  },
  {
    icon: '🛡️',
    title: 'Mentor Beneran, Bukan Bot',
    description: 'Semua mentor punya pengalaman industri nyata. Bukan yang cuma baca slide presentasi.',
  },
  {
    icon: '🎯',
    title: 'Kurikulum yang Jelas',
    description: 'Tiap quest punya learning path yang terstruktur. Lo tau persis progress lo di mana.',
  },
  {
    icon: '🏆',
    title: 'Goal-nya: Lo Siap Kerja',
    description: 'Bukan cuma bisa bikin TODO app. Tapi bisa bikin project nyata dan siap interview.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>

      {/* Hero */}
      <header className="pt-[96px] pb-[64px] relative overflow-hidden">
        <div className="max-w-[1120px] mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 font-mono text-[12px] text-[#7c9bff] border border-[#7c9bff] px-[12px] py-[6px] mb-[28px] bg-[rgba(124,155,255,0.06)]">
            <span className="w-[6px] h-[6px] bg-[#7c9bff] animate-blink"></span> ABOUT_US.README
          </div>
          <h1 className="font-pixel text-[24px] md:text-[30px] leading-[1.65] mb-[24px] text-[#dfe3f5]">
            The <span className="text-[#52e0a8]">Team</span> Behind<br />
            Your <span className="text-[#ffc857]">Level Up</span>
          </h1>
          <p className="text-[16px] text-[#8891b8] leading-[1.7] max-w-[600px] mx-auto">
            Kami bukan platform course biasa. Kami adalah tim mentor yang beneran ngoding tiap hari dan passionate buat ngajarin lo jadi developer handal.
          </p>
        </div>
      </header>

      {/* Our Values / Why Us */}
      <section className="py-[80px]" aria-label="Keunggulan Kami">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="mb-[48px]">
            <div className="font-mono text-[12px] text-[#7c9bff] mb-[10px]">// CORE_VALUES</div>
            <h2 className="font-pixel text-[20px] leading-[1.6]">Kenapa Belajar di Sini?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            {values.map((v) => (
              <article
                key={v.title}
                className="bg-[#12172a] border border-[#2a3358] px-[24px] py-[22px] transition-colors hover:border-[#4a5694] hover:bg-[#181f38] group"
              >
                <div className="flex items-start gap-[16px]">
                  <div className="w-[48px] h-[48px] shrink-0 flex items-center justify-center bg-[#0a0d18] border border-[#4a5694] text-[22px]" aria-hidden="true">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[15px] mb-[6px] text-[#dfe3f5]">{v.title}</h3>
                    <p className="text-[13px] text-[#8891b8] leading-[1.6]">{v.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Mentors */}
      <section className="py-[80px]" aria-label="Profil Mentor">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="mb-[48px]">
            <div className="font-mono text-[12px] text-[#7c9bff] mb-[10px]">// PARTY_MEMBERS</div>
            <h2 className="font-pixel text-[20px] leading-[1.6]">Meet the Mentors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            {mentors.map((mentor) => (
              <article
                key={mentor.id}
                className="bg-[#12172a] border-2 border-[#4a5694] shadow-[4px_4px_0_#000] p-[22px] relative before:absolute before:-top-3 before:left-[16px] before:bg-[#0a0d18] before:px-2 before:font-mono before:text-[10px] before:text-[#8891b8] before:tracking-[1px]"
              >
                {/* Avatar */}
                <div className="w-full aspect-[4/3] border-2 border-[#2a3358] relative overflow-hidden mb-[16px]">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>

                {/* Info */}
                <h3 className="font-pixel text-[13px] mb-[4px]">{mentor.name}</h3>
                <div className="font-mono text-[12px] text-[#8891b8] mb-[14px]">// {mentor.title}</div>
                <p className="text-[13px] text-[#8891b8] leading-[1.65] mb-[16px]">{mentor.bio}</p>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-[6px] mb-[18px]">
                  {mentor.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[10px] px-[8px] py-[3px] border border-[#2a3358] text-[#7c9bff] bg-[#0a0d18]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Stat bars */}
                {mentor.stats.map((stat) => (
                  <div key={stat.label} className="mb-3">
                    <div className="flex justify-between font-mono text-[10px] text-[#8891b8] mb-1">
                      <span>{stat.label}</span>
                      <span>{stat.value}%</span>
                    </div>
                    <div className="h-[10px] bg-[#0a0d18] border border-[#2a3358]">
                      <div
                        className="h-full"
                        style={{ width: `${stat.value}%`, backgroundColor: stat.color }}
                      />
                    </div>
                  </div>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Story / Mission */}
      <section className="py-[80px]" aria-label="Cerita Kami">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="bg-[#181f38] border-2 border-dashed border-[#4a5694] p-[32px] md:p-[48px]">
            <div className="font-mono text-[12px] text-[#ffc857] mb-[16px]">// OUR_STORY.log</div>
            <h2 className="font-pixel text-[18px] leading-[1.6] mb-[20px]">Cerita Singkat</h2>
            <div className="text-[15px] text-[#8891b8] leading-[1.8] max-w-[720px] space-y-4">
              <p>
                temanngoding.id lahir dari satu frustrasi sederhana: kebanyakan course online di luar sana cuma bikin lo nonton, bukan ngoding.
              </p>
              <p>
                Kami percaya cara terbaik belajar coding itu kayak main game — ada quest yang jelas, ada mentor yang ngebimbing, ada progress yang keliatan, dan ada boss fight yang bikin lo grow.
              </p>
              <p>
                Makanya kami bikin sistem belajar yang terstruktur tapi seru, dengan mentor yang beneran punya jam terbang di industri. Bukan sekadar platform, tapi teman belajar yang nemenin lo dari level 1 sampai job-ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-[90px] px-6 bg-[#12172a] border-y-2 border-[#2a3358]" aria-label="Call to Action">
        <h2 className="font-pixel text-[22px] leading-[1.7] mb-[20px] text-[#dfe3f5]">Mau Gabung Party?</h2>
        <p className="font-mono text-[#8891b8] mb-[32px]">Mulai quest pertamamu sekarang dan level up bareng kami.</p>
        <Link
          href="/course"
          className="font-mono font-semibold text-[14px] px-[24px] py-[14px] border-2 border-black shadow-[4px_4px_0_#000] cursor-pointer transition-all inline-flex items-center gap-[8px] bg-[#52e0a8] text-[#04140d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000]"
        >
          ▶ LIHAT SEMUA COURSE
        </Link>
      </section>
      </main>

      <footer className="py-[32px] text-center font-mono text-[11px] text-[#8891b8]">
        © 2026 temanngoding.com — built for coders, by coders.
      </footer>
    </>
  )
}
