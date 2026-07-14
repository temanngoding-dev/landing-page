import MentorCarousel from '@/components/modules/MentorCarousel'
import TestimonialCarousel from '@/components/modules/TestimonialCarousel'
import Link from 'next/link'
import ImageWithSkeleton from '@/components/shared/ImageWithSkeleton'
import { courses, learningPackages, WHATSAPP_NUMBER } from '@/constants'

export default function Home() {
  const playerTamat = "120+";
  const ratingMentor = "4.9";
  const skillTree = courses.length;

  return (
    <>
      <main>

        <header className="pt-[96px] pb-[64px] relative overflow-hidden">
          <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr] min-[860px]:grid-cols-[1.1fr_0.9fr] gap-[56px] items-center">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-[12px] text-xp border border-xp px-[12px] py-[6px] mb-[28px] bg-[rgba(82,224,168,0.06)]">
                <span className="w-[6px] h-[6px] bg-xp animate-blink"></span> SERVER ONLINE — SLOT TERSEDIA
              </div>
              <h1 className="font-pixel text-[30px] leading-[1.65] mb-[24px] text-text-main">
                Level up<br />
                skill <span className="text-xp">coding</span>-mu<br />
                bareng <span className="text-gold">mentor</span> asli
              </h1>
              <p className="text-[16px] text-text-dim leading-[1.7] max-w-[480px] mb-[36px]">
                Private tutoring & course online buat yang serius mau jago IT. Bukan sekadar menonton video — kamu coding, kamu dibimbing, kamu naik level beneran.
              </p>
              <div className="flex gap-4 flex-wrap mb-10">
                <Link href="#levels" className="font-mono font-semibold text-[14px] px-[24px] py-[14px] border-2 border-black shadow-[4px_4px_0_#000] cursor-pointer transition-all inline-flex items-center gap-2 bg-xp text-[#04140d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000]">
                  ▶ MULAI BELAJAR
                </Link>
                <Link href="#quests" className="font-mono font-semibold text-[14px] px-[24px] py-[14px] border-2 border-line-bright shadow-[4px_4px_0_#000] cursor-pointer transition-all inline-flex items-center gap-2 bg-bg-panel text-text-main hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000]">
                  LIHAT QUEST LIST
                </Link>
              </div>
              <div className="flex gap-[28px] flex-wrap">
                <div className="font-mono"><div className="text-[22px] font-bold text-gold">{playerTamat}</div><div className="text-[11px] text-text-dim uppercase tracking-[1px]">Player Tamat</div></div>
                <div className="font-mono"><div className="text-[22px] font-bold text-gold">{ratingMentor}</div><div className="text-[11px] text-text-dim uppercase tracking-[1px]">Rating Mentor</div></div>
                <div className="font-mono"><div className="text-[22px] font-bold text-gold">{skillTree}</div><div className="text-[11px] text-text-dim uppercase tracking-[1px]">Skill Tree</div></div>
              </div>
            </div>

            <MentorCarousel />

          </div>
        </header>

        {/* Quest List */}
        <section className="py-[80px]" id="quests" aria-label="Daftar Course">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="mb-[48px]">
              <div className="font-mono text-[12px] text-mana mb-[10px]">{'// QUEST_LOG'}</div>
              <h2 className="font-pixel text-[20px] leading-[1.6]">Pilih Quest Belajarmu</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
              {courses.map((course) => (
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
                  <div className="p-[20px] flex flex-col flex-1">
                    <h3 className="font-semibold text-[16px] text-text-main mb-[2px]">{course.title}</h3>
                    <p className="font-mono text-[11px] text-mana mb-[10px]">{course.packageName}</p>
                    <p className="font-mono text-[12px] text-text-dim mb-[14px]">{course.description.slice(0, 100)}...</p>
                    {course.point.length > 0 && (
                      <ul className="text-[12px] text-text-dim flex flex-col gap-[6px] mb-[16px]">
                        {course.point.map((pt, i) => (
                          <li key={i} className="flex gap-[8px] before:content-['▸'] before:text-xp">{pt}</li>
                        ))}
                      </ul>
                    )}
                    <div className="flex items-center gap-[12px] mt-auto">
                      <span className="font-pixel text-[10px] text-text-dim">LV.{course.level}</span>
                      <span className="font-mono text-[10px] px-[8px] py-[3px] border" style={{ borderColor: course.difficultyColor, color: course.difficultyColor }}>
                        {course.difficulty}
                      </span>
                      <span className="font-mono text-[12px] text-gold">+{course.xp} XP</span>
                      <span className="font-mono text-[12px] text-xp ml-auto group-hover:underline">Detail →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-[32px]">
              <Link
                href="/course"
                className="font-mono text-[13px] text-mana border border-mana/40 px-[20px] py-[10px] hover:bg-[rgba(124,155,255,0.08)] transition-colors inline-flex items-center gap-2"
              >
                Lihat Semua Quest →
              </Link>
            </div>
          </div>
        </section>

        {/* Paket Belajar */}
        <section className="py-[80px]" id="levels" aria-label="Paket Harga">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="mb-[48px]">
              <div className="font-mono text-[12px] text-mana mb-[10px]">{'// SELECT_YOUR_PLAN'}</div>
              <h2 className="font-pixel text-[20px] leading-[1.6]">Pilih Paket Belajar</h2>
              <p className="font-mono text-[13px] text-text-dim mt-[10px]">Bundling quest — lebih hemat, lebih terstruktur.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
              {learningPackages.map((pkg) => (
                <article
                  key={pkg.slug}
                  className={`bg-bg-panel px-[22px] py-[28px] relative transition-transform duration-150 hover:-translate-y-1 flex flex-col ${pkg.isPopular
                    ? 'border-2 border-gold shadow-[0_0_0_1px_#ffc857,4px_4px_0_#000]'
                    : 'border-2 border-line hover:border-line-bright'
                    }`}
                >
                  {pkg.isPopular && (
                    <div className="absolute top-[-12px] right-[16px] bg-gold text-[#1a1300] font-mono text-[10px] font-bold px-[10px] py-[4px]">PALING LARIS</div>
                  )}

                  <div className="text-[32px] mb-[10px]">{pkg.icon}</div>
                  <div className="font-pixel text-[11px] text-text-dim mb-[8px]">LV.{pkg.level}</div>
                  <h3 className="text-[17px] font-bold mb-[2px]">{pkg.title}</h3>
                  <p className="font-mono text-[11px] text-mana mb-[14px]">{pkg.tagline}</p>

                  <div className="font-mono text-[24px] text-xp mb-[2px]">
                    Rp{pkg.price.toLocaleString('id-ID')}
                    <span className="text-[12px] text-text-dim">/paket</span>
                  </div>
                  <div className="font-mono text-[12px] text-text-dim line-through mb-[16px]">
                    Rp{pkg.originalPrice.toLocaleString('id-ID')}
                  </div>

                  <ul className="text-[12px] text-text-dim flex flex-col gap-[8px] mb-[20px]">
                    {pkg.highlights.slice(0, 4).map((h, i) => (
                      <li key={i} className="flex gap-[8px] before:content-['▸'] before:text-xp">{h}</li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-col gap-[8px]">
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
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Halo Teman Ngoding! Saya tertarik mendaftar ${pkg.title}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center font-mono text-[12px] px-[20px] py-[10px] border border-line text-text-dim hover:border-xp hover:text-xp transition-colors w-full"
                    >
                      💬 Daftar via WA
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center mt-[32px]">
              <Link
                href="/paket"
                className="font-mono text-[13px] text-mana border border-mana/40 px-[20px] py-[10px] hover:bg-[rgba(124,155,255,0.08)] transition-colors inline-flex items-center gap-2"
              >
                Lihat Semua Paket →
              </Link>
            </div>
          </div>
        </section>


        {/* Testimonials */}
        <section className="py-[80px]" id="proof" aria-label="Testimoni">
          <div className="max-w-[1120px] mx-auto px-6">
            <TestimonialCarousel />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-[90px] px-6 bg-bg-panel border-y-2 border-line" aria-label="Call to Action">
          <h2 className="font-pixel text-[22px] leading-[1.7] mb-[20px] text-text-main">Ready Player One?</h2>
          <p className="font-mono text-text-dim mb-[32px]">Slot belajar terbatas tiap minggunya. Mulai quest pertamamu sekarang.</p>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo Teman Ngoding! Saya ingin daftar dan tanya-tanya soal program belajarnya.')}`} target="_blank" rel="noopener noreferrer" className="font-mono font-semibold text-[14px] px-[24px] py-[14px] border-2 border-black shadow-[4px_4px_0_#000] cursor-pointer transition-all inline-flex items-center gap-[8px] bg-xp text-[#04140d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000]">
            ▶ DAFTAR SEKARANG
          </a>
        </section>
      </main>
    </>
  );
}
