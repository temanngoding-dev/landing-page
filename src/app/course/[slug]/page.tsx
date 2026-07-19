import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ImageWithSkeleton from '@/components/shared/ImageWithSkeleton'
import SyllabusButton from '@/components/shared/SyllabusButton'
import { courses, learningPackages, WHATSAPP_NUMBER } from '@/constants'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const course = courses.find((c) => c.slug === slug)
  if (!course) return { title: 'Course Not Found' }
  return {
    title: course.title,
    description: course.description,
  }
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params
  const course = courses.find((c) => c.slug === slug)
  if (!course) notFound()

  // Find packages that include this course
  const relatedPackages = learningPackages.filter((p) =>
    p.courseSlugs.includes(course.slug)
  )

  const waText = encodeURIComponent(
    `Halo Teman Ngoding! Saya tertarik untuk mendaftar quest ${course.title}. Boleh info lebih lanjut?`
  )

  return (
    <>
      <main>

        {/* Breadcrumb & Back */}
        <div className="pt-[96px] pb-0">
          <div className="max-w-[1120px] mx-auto px-6">
            <nav className="flex items-center gap-2 font-mono text-[11px] text-text-dim mb-[32px]">
              <Link href="/" className="hover:text-xp transition-colors">Home</Link>
              <span className="text-line-bright">›</span>
              <Link href="/course" className="hover:text-xp transition-colors">Course</Link>
              <span className="text-line-bright">›</span>
              <span className="text-text-main">{course.title}</span>
            </nav>
          </div>
        </div>

        {/* Image Header Banner */}
        <header className="pt-[40px] pb-[40px]">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] border-2 border-line relative overflow-hidden bg-bg-deep rounded-sm">
              <ImageWithSkeleton src={course.image} alt={course.title} fill className="object-cover" fallbackIcon={course.icon} />
              <div className="absolute top-[20px] left-[20px] w-[56px] h-[56px] flex items-center justify-center bg-bg-deep/90 backdrop-blur-sm border border-line-bright text-[28px] shadow-[4px_4px_0_rgba(0,0,0,0.6)]">
                {course.icon}
              </div>
            </div>
          </div>
        </header>

        {/* Content Section */}
        <section className="pb-[80px]">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-[40px] lg:gap-[60px] items-start">
              
              {/* Left — Info */}
              <div>
                <div className="flex items-center gap-[12px] flex-wrap mb-[20px]">
                  <span className="font-pixel text-[12px] text-text-dim border border-line px-[10px] py-[6px]">LV.{course.level}</span>
                  <span
                    className="font-mono text-[12px] font-bold px-[12px] py-[6px] border"
                    style={{ borderColor: course.difficultyColor, color: course.difficultyColor }}
                  >
                    {course.difficulty}
                  </span>
                  <span className="font-mono text-[12px] text-mana border border-mana/40 px-[10px] py-[6px] bg-[rgba(124,155,255,0.06)]">
                    {course.packageName}
                  </span>
                </div>

                <h1 className="font-pixel text-[22px] md:text-[32px] leading-[1.5] mb-[20px] text-text-main">
                  {course.title}
                </h1>

                <p className="text-[15px] md:text-[18px] text-text-dim leading-[1.8] mb-[32px] font-medium">
                  {course.longDescription || course.description}
                </p>

                {/* Syllabus Button */}
                <SyllabusButton
                  syllabusUrl={course.syllabusUrl || ''}
                  courseTitle={course.title}
                />

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-[16px] md:gap-[24px] mb-[40px] p-[20px] md:p-[24px] bg-bg-panel border border-line">
                  <div className="font-mono">
                    <div className="text-[22px] md:text-[24px] font-bold text-gold">{course.sessions}</div>
                    <div className="text-[10px] text-text-dim uppercase tracking-[1px] mt-1">Total Sesi</div>
                  </div>
                  <div className="font-mono">
                    <div className="text-[22px] md:text-[24px] font-bold text-xp">+{course.xp}</div>
                    <div className="text-[10px] text-text-dim uppercase tracking-[1px] mt-1">XP Reward</div>
                  </div>
                  <div className="font-mono">
                    <div className="text-[22px] md:text-[24px] font-bold text-mana">120'</div>
                    <div className="text-[10px] text-text-dim uppercase tracking-[1px] mt-1">Per Sesi</div>
                  </div>
                  <div className="font-mono">
                    <div className="text-[22px] md:text-[24px] font-bold text-hp">1-on-1</div>
                    <div className="text-[10px] text-text-dim uppercase tracking-[1px] mt-1">Format</div>
                  </div>
                </div>

                {/* Topics */}
                <div className="mb-[40px]">
                  <div className="font-mono text-[13px] text-mana mb-[16px] uppercase tracking-[1.5px]">// Materi yang Dipelajari</div>
                  <div className="flex flex-wrap gap-[8px] md:gap-[10px]">
                    {course.topics.filter(t => t).map((topic) => (
                      <span
                        key={topic}
                        className="font-mono text-[12px] md:text-[13px] px-[12px] md:px-[14px] py-[6px] md:py-[8px] border border-line text-text-dim bg-bg-deep hover:border-mana hover:text-mana transition-colors"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Target Audience */}
                {course.targetAudience && course.targetAudience.length > 0 && (
                  <div className="mb-[32px]">
                    <div className="font-mono text-[13px] text-xp mb-[16px] uppercase tracking-[1.5px]">// Quest Ini Cocok Untuk Kamu Yang...</div>
                    <ul className="flex flex-col gap-[12px]">
                      {course.targetAudience.map((item, i) => (
                        <li key={i} className="flex gap-[12px] text-[14px] md:text-[15px] text-text-dim leading-[1.6]">
                          <span className="text-xp mt-[2px] shrink-0">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right — CTA Card (sticky on desktop, normal on mobile) */}
              <div className="lg:sticky lg:top-[120px]">
                <div className="bg-bg-panel border-2 border-line p-[24px] md:p-[32px]">
                  <div className="font-mono text-[12px] text-text-dim mb-[8px] uppercase tracking-[1px]">Harga per Paket</div>
                  {course.price && (
                    <>
                      <div className="font-mono text-[32px] md:text-[36px] text-xp font-bold mb-[4px]">
                        Rp{course.price.toLocaleString('id-ID')}
                      </div>
                      {course.originalPrice && course.originalPrice > course.price && (
                        <div className="font-mono text-[13px] text-text-dim line-through mb-[24px]">
                          Rp{course.originalPrice.toLocaleString('id-ID')}
                        </div>
                      )}
                    </>
                  )}

                  <ul className="flex flex-col gap-[10px] md:gap-[12px] mb-[28px] md:mb-[32px]">
                    {course.point.map((pt, i) => (
                      <li key={i} className="flex gap-[12px] text-[13px] md:text-[14px] text-text-dim before:content-['▸'] before:text-xp leading-[1.5] before:shrink-0">
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center font-mono font-semibold text-[14px] md:text-[15px] px-[24px] py-[14px] md:py-[16px] border-2 border-black shadow-[4px_4px_0_#000] cursor-pointer transition-all bg-xp text-[#04140d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] w-full mb-[14px] md:mb-[16px]"
                  >
                    ▶ DAFTAR QUEST INI
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo Teman Ngoding! Saya ingin konsultasi dulu sebelum daftar.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center font-mono text-[13px] md:text-[14px] px-[24px] py-[12px] md:py-[14px] border-2 border-line-bright text-text-main hover:border-xp hover:text-xp transition-colors w-full bg-bg-deep"
                  >
                    💬 Konsultasi Dulu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlight Points */}
        <section className="py-[80px]" aria-label="Quest Highlights">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="mb-[40px]">
              <div className="font-mono text-[12px] text-mana mb-[10px]">{'// QUEST_DETAILS'}</div>
              <h2 className="font-pixel text-[18px] leading-[1.6]">Yang Kamu Dapatkan</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
              {course.point.map((pt, i) => (
                <div key={i} className="bg-bg-panel border border-line px-[20px] py-[24px] hover:border-xp hover:bg-bg-panel-2 transition-colors">
                  <div className="font-pixel text-[10px] text-xp mb-[10px]">ITEM_{String(i + 1).padStart(2, '0')}</div>
                  <p className="text-[14px] text-text-main">{pt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Packages */}
        {relatedPackages.length > 0 && (
          <section className="py-[80px] bg-bg-panel border-y-2 border-line" aria-label="Paket Terkait">
            <div className="max-w-[1120px] mx-auto px-6">
              <div className="mb-[40px]">
                <div className="font-mono text-[12px] text-gold mb-[10px]">{'// BUNDLE_OFFER'}</div>
                <h2 className="font-pixel text-[18px] leading-[1.6]">Quest ini Tersedia di Paket</h2>
                <p className="font-mono text-[13px] text-text-dim mt-[10px]">Beli paket bundling, lebih hemat!</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                {relatedPackages.map((pkg) => (
                  <Link
                    key={pkg.slug}
                    href={`/package/${pkg.slug}`}
                    className="bg-bg-deep border-2 border-line p-[20px] hover:border-gold hover:bg-bg-panel-2 transition-all group"
                  >
                    <div className="text-[28px] mb-[10px]">{pkg.icon}</div>
                    <h3 className="font-semibold text-[15px] text-text-main mb-[4px] group-hover:text-gold transition-colors">{pkg.title}</h3>
                    <p className="font-mono text-[11px] text-text-dim mb-[12px]">{pkg.tagline}</p>
                    <div className="font-mono text-[18px] text-xp font-bold">
                      Rp{pkg.price.toLocaleString('id-ID')}
                      <span className="text-[11px] text-text-dim"> / paket</span>
                    </div>
                    <div className="font-mono text-[11px] text-text-dim line-through">
                      Rp{pkg.originalPrice.toLocaleString('id-ID')}
                    </div>
                    <div className="mt-[12px] font-mono text-[12px] text-gold group-hover:underline">Lihat Paket →</div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="text-center py-[90px] px-6" aria-label="Call to Action">
          <h2 className="font-pixel text-[20px] leading-[1.7] mb-[16px] text-text-main">Siap Mulai Quest?</h2>
          <p className="font-mono text-text-dim mb-[32px] max-w-[500px] mx-auto">Slot belajar terbatas. Chat mentor sekarang dan mulai perjalananmu.</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`}
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
