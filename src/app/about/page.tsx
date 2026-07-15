import type { Metadata } from 'next'
import Link from 'next/link'
import ImageWithSkeleton from '@/components/shared/ImageWithSkeleton'
import { mentors, values } from '@/constants'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Kenalan sama tim temanngoding.id — mentor berpengalaman yang siap bantu kamu naik level di dunia IT.',
}

// Imported mentors and values from constants

export default function AboutPage() {
  return (
    <>
      <main>

        {/* Hero */}
        <header className="pt-[96px] pb-[64px] relative overflow-hidden">
          <div className="max-w-[1120px] mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 font-mono text-[12px] text-mana border border-mana px-[12px] py-[6px] mb-[28px] bg-[rgba(124,155,255,0.06)]">
              <span className="w-[6px] h-[6px] bg-mana animate-blink"></span> ABOUT_US.README
            </div>
            <h1 className="font-pixel text-[24px] md:text-[30px] leading-[1.65] mb-[24px] text-text-main">
              The <span className="text-xp">Team</span> Behind<br />
              Your <span className="text-gold">Level Up</span>
            </h1>
            <p className="text-[16px] text-text-dim leading-[1.7] max-w-[600px] mx-auto">
              Kami bukan platform course biasa. Kami adalah tim mentor yang beneran ngoding tiap hari dan passionate untuk mengajari kamu menjadi developer handal.
            </p>
          </div>
        </header>

        {/* Our Values / Why Us */}
        <section className="py-[80px]" aria-label="Keunggulan Kami">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="mb-[48px]">
              <div className="font-mono text-[12px] text-mana mb-[10px]">{'// CORE_VALUES'}</div>
              <h2 className="font-pixel text-[20px] leading-[1.6]">Kenapa Belajar di Sini?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
              {values.map((v) => (
                <article
                  key={v.title}
                  className="bg-bg-panel border border-line px-[24px] py-[22px] transition-colors hover:border-line-bright hover:bg-bg-panel-2 group"
                >
                  <div className="flex items-start gap-[16px]">
                    <div className="w-[48px] h-[48px] shrink-0 flex items-center justify-center bg-bg-deep border border-line-bright text-[22px]" aria-hidden="true">
                      {v.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[15px] mb-[6px] text-text-main">{v.title}</h3>
                      <p className="text-[13px] text-text-dim leading-[1.6]">{v.description}</p>
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
              <div className="font-mono text-[12px] text-mana mb-[10px]">{'// PARTY_MEMBERS'}</div>
              <h2 className="font-pixel text-[20px] leading-[1.6]">Meet the Mentors</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              {mentors.map((mentor) => (
                <article
                  key={mentor.id}
                  className="bg-bg-panel border-2 border-line-bright shadow-[4px_4px_0_#000] p-[22px] relative before:absolute before:-top-3 before:left-[16px] before:bg-bg-deep before:px-2 before:font-mono before:text-[10px] before:text-text-dim before:tracking-[1px]"
                >
                  {/* Avatar */}
                  <div className="w-full aspect-4/3 border-2 border-line relative overflow-hidden mb-[16px]">
                    <ImageWithSkeleton
                      src={mentor.image}
                      alt={mentor.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                  </div>

                  {/* Info */}
                  <h3 className="font-pixel text-[13px] mb-[4px]">{mentor.name}</h3>
                  <div className="font-mono text-[12px] text-text-dim mb-[14px]">{'// '}{mentor.title}</div>
                  <p className="text-[13px] text-text-dim leading-[1.65] mb-[16px]">{mentor.bio}</p>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-[6px] mb-[18px]">
                    {mentor.skills?.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[10px] px-[8px] py-[3px] border border-line text-mana bg-bg-deep"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Stat bars */}
                  {mentor.stats.map((stat) => (
                    <div key={stat.label} className="mb-3">
                      <div className="flex justify-between font-mono text-[10px] text-text-dim mb-1">
                        <span>{stat.label}</span>
                        <span style={{ color: stat.isBadge ? stat.color : '' }}>{stat.valueText}</span>
                      </div>
                      {!stat.isBadge && (
                        <div className="h-[10px] bg-bg-deep border border-line">
                          <div
                            className="h-full"
                            style={{ width: `${stat.percent}%`, backgroundColor: stat.color }}
                          />
                        </div>
                      )}
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
            <div className="bg-bg-panel-2 border-2 border-dashed border-line-bright p-[32px] md:p-[48px]">
              <div className="font-mono text-[12px] text-gold mb-[16px]">{'// OUR_STORY.log'}</div>
              <h2 className="font-pixel text-[18px] leading-[1.6] mb-[20px]">Cerita Singkat</h2>
              <div className="text-[15px] text-text-dim leading-[1.8] max-w-[720px] space-y-4">
                <p>
                  temanngoding.id lahir dari satu frustrasi sederhana: kebanyakan course online di luar sana cuma membuat kamu menonton, bukan ngoding.
                </p>
                <p>
                  Kami percaya cara terbaik belajar coding itu seperti main game — ada quest yang jelas, ada mentor yang membimbing, ada progress yang terlihat, dan ada boss fight yang membuat kamu grow.
                </p>
                <p>
                  Makanya kami membuat sistem belajar yang terstruktur tapi seru, dengan mentor yang benar-benar punya jam terbang di industri. Bukan sekadar platform, tapi teman belajar yang menemani kamu dari level 1 sampai job-ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-[90px] px-6 bg-bg-panel border-y-2 border-line" aria-label="Call to Action">
          <h2 className="font-pixel text-[22px] leading-[1.7] mb-[20px] text-text-main">Mau Gabung Party?</h2>
          <p className="font-mono text-text-dim mb-[32px]">Mulai quest pertamamu sekarang dan level up bareng kami.</p>
          <Link
            href="/course"
            className="font-mono font-semibold text-[14px] px-[24px] py-[14px] border-2 border-black shadow-[4px_4px_0_#000] cursor-pointer transition-all inline-flex items-center gap-[8px] bg-xp text-[#04140d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000]"
          >
            ▶ LIHAT SEMUA COURSE
          </Link>
        </section>
      </main>
    </>
  )
}
