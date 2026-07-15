import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ImageWithSkeleton from '@/components/shared/ImageWithSkeleton'
import { learningPackages, courses, WHATSAPP_NUMBER } from '@/constants'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return learningPackages.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const pkg = learningPackages.find((p) => p.slug === slug)
  if (!pkg) return { title: 'Paket Not Found' }
  return {
    title: `Paket ${pkg.title}`,
    description: pkg.description,
  }
}

export default async function PaketDetailPage({ params }: Props) {
  const { slug } = await params
  const pkg = learningPackages.find((p) => p.slug === slug)
  if (!pkg) notFound()

  const pkgCourses = pkg.courseSlugs.map(s => courses.find(c => c.slug === s)).filter(Boolean)
  
  // Calculate total original price from courses
  const totalOriginalPrice = pkgCourses.reduce((sum, c) => sum + (c?.originalPrice || c?.price || 0), 0) || pkg.originalPrice
  const savings = totalOriginalPrice > pkg.price ? totalOriginalPrice - pkg.price : 0
  const savingsPercent = totalOriginalPrice > 0 ? Math.round((savings / totalOriginalPrice) * 100) : 0

  const waText = encodeURIComponent(
    `Halo Teman Ngoding! Saya tertarik untuk mendaftar ${pkg.title}. Boleh info lebih lanjut?`
  )

  return (
    <>
      <main>

        {/* Breadcrumb */}
        <div className="pt-[96px] pb-0">
          <div className="max-w-[1120px] mx-auto px-6">
            <nav className="flex items-center gap-2 font-mono text-[11px] text-text-dim mb-[32px]">
              <Link href="/" className="hover:text-xp transition-colors">Home</Link>
              <span className="text-line-bright">›</span>
              <Link href="/paket" className="hover:text-xp transition-colors">Paket Belajar</Link>
              <span className="text-line-bright">›</span>
              <span className="text-text-main">{pkg.title}</span>
            </nav>
          </div>
        </div>

        {/* Image Header Banner */}
        <header className="pt-[40px] pb-[40px]">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] border-2 border-line relative overflow-hidden bg-bg-deep rounded-sm">
              <ImageWithSkeleton src={pkg.image || ''} alt={pkg.title} fill className="object-cover" fallbackIcon={pkg.icon} />
              <div className="absolute top-[20px] left-[20px] w-[56px] h-[56px] flex items-center justify-center bg-bg-deep/90 backdrop-blur-sm border border-line-bright text-[28px] shadow-[4px_4px_0_rgba(0,0,0,0.6)]">
                {pkg.icon}
              </div>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="pb-[40px]">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-[40px] items-start">

              {/* Left — Info */}
              <div>
                {/* Badges */}
                <div className="flex items-center gap-[10px] flex-wrap mb-[16px]">
                  <span className="font-pixel text-[10px] text-text-dim border border-line px-[8px] py-[4px]">LV.{pkg.level}</span>
                  <span
                    className="font-mono text-[11px] px-[10px] py-[4px] border"
                    style={{ borderColor: pkg.difficultyColor, color: pkg.difficultyColor }}
                  >
                    {pkg.difficulty}
                  </span>
                  {pkg.isPopular && (
                    <span className="font-mono text-[11px] px-[10px] py-[4px] bg-gold text-[#1a1300] font-bold">
                      PALING LARIS
                    </span>
                  )}
                  {savingsPercent >= 30 && (
                    <span className="font-mono text-[11px] px-[10px] py-[4px] bg-hp text-white font-bold">
                      HEMAT {savingsPercent}%
                    </span>
                  )}
                </div>

                <div className="text-[40px] mb-[12px]">{pkg.icon}</div>
                <h1 className="font-pixel text-[20px] md:text-[26px] leading-[1.6] mb-[10px] text-text-main">
                  {pkg.title}
                </h1>
                <p className="font-mono text-[14px] text-mana mb-[20px]">{pkg.tagline}</p>
                <p className="text-[15px] text-text-dim leading-[1.75] mb-[32px]">{pkg.description}</p>

                {/* Stats Row */}
                <div className="flex gap-[28px] flex-wrap mb-[32px]">
                  <div className="font-mono">
                    <div className="text-[20px] font-bold text-gold">{pkg.courseSlugs.length}</div>
                    <div className="text-[10px] text-text-dim uppercase tracking-[1px]">Quest</div>
                  </div>
                  <div className="font-mono">
                    <div className="text-[20px] font-bold text-gold">{pkg.totalSessions}</div>
                    <div className="text-[10px] text-text-dim uppercase tracking-[1px]">Total Sesi</div>
                  </div>
                  <div className="font-mono">
                    <div className="text-[20px] font-bold text-xp">+{pkg.totalXP}</div>
                    <div className="text-[10px] text-text-dim uppercase tracking-[1px]">Total XP</div>
                  </div>
                  <div className="font-mono">
                    <div className="text-[20px] font-bold text-hp">Rp{savings.toLocaleString('id-ID')}</div>
                    <div className="text-[10px] text-text-dim uppercase tracking-[1px]">Hemat</div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-[32px]">
                  <div className="font-mono text-[11px] text-xp mb-[12px] uppercase tracking-[1px]">// Yang Kamu Dapatkan</div>
                  <ul className="flex flex-col gap-[10px]">
                    {pkg.highlights.map((h, i) => (
                      <li key={i} className="flex gap-[10px] text-[14px] text-text-dim">
                        <span className="text-xp mt-[2px]">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right — Price Card */}
              <div className={`bg-bg-panel p-[24px] ${pkg.isPopular ? 'border-2 border-gold shadow-[0_0_0_1px_#ffc857,4px_4px_0_#000]' : 'border-2 border-line'}`}>
                <div className="font-mono text-[11px] text-text-dim mb-[4px]">Harga Bundling</div>
                <div className="font-mono text-[32px] text-xp font-bold mb-[2px]">
                  Rp{pkg.price.toLocaleString('id-ID')}
                </div>
                <div className="font-mono text-[12px] text-text-dim line-through mb-[4px]">
                  Rp{totalOriginalPrice.toLocaleString('id-ID')} (harga satuan)
                </div>
                <div className="font-mono text-[12px] text-hp mb-[20px]">
                  Hemat Rp{savings.toLocaleString('id-ID')} ({savingsPercent}%)
                </div>

                <ul className="flex flex-col gap-[8px] mb-[20px]">
                  {pkg.highlights.map((h, i) => (
                    <li key={i} className="flex gap-[8px] text-[12px] text-text-dim before:content-['▸'] before:text-xp">
                      {h}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center font-mono font-semibold text-[14px] px-[24px] py-[14px] border-2 border-black shadow-[4px_4px_0_#000] cursor-pointer transition-all bg-xp text-[#04140d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] w-full mb-[10px]"
                >
                  ▶ AMBIL PAKET INI
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo Teman Ngoding! Saya ingin konsultasi dulu soal paket belajar.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center font-mono text-[13px] px-[24px] py-[12px] border-2 border-line-bright text-text-dim hover:border-xp hover:text-xp transition-colors w-full"
                >
                  💬 Konsultasi Dulu
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className="py-[80px]" aria-label="Learning Path">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="mb-[48px]">
              <div className="font-mono text-[12px] text-mana mb-[10px]">{'// LEARNING_PATH'}</div>
              <h2 className="font-pixel text-[18px] leading-[1.6]">Quest yang Akan Kamu Jalani</h2>
              <p className="font-mono text-[13px] text-text-dim mt-[10px]">Urutan belajar sudah dioptimalkan dari yang paling fundamental.</p>
            </div>

            <div className="flex flex-col gap-0">
              {pkgCourses.map((course, idx) => course && (
                <div key={course.slug} className="flex gap-[24px] items-start">
                  {/* Timeline line */}
                  <div className="flex flex-col items-center">
                    <div className="w-[40px] h-[40px] flex items-center justify-center border-2 border-xp bg-bg-panel font-pixel text-[10px] text-xp shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    {idx < pkgCourses.length - 1 && (
                      <div className="w-[2px] h-[40px] bg-gradient-to-b from-xp/60 to-line" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pb-[40px]`}>
                    <Link
                      href={`/course/${course.slug}`}
                      className="bg-bg-panel border-2 border-line p-[20px] flex flex-col md:flex-row md:items-center gap-[16px] hover:border-xp hover:bg-bg-panel-2 transition-all group block"
                    >
                      {/* Image */}
                      <div className="w-full md:w-[120px] md:h-[80px] aspect-4/3 md:aspect-auto relative border border-line overflow-hidden bg-bg-deep shrink-0">
                        <ImageWithSkeleton src={course.image} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" fallbackIcon={course.icon} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-[8px] flex-wrap mb-[4px]">
                          <span className="text-[16px]">{course.icon}</span>
                          <h3 className="font-semibold text-[15px] text-text-main">{course.title}</h3>
                          <span
                            className="font-mono text-[10px] px-[6px] py-[2px] border"
                            style={{ borderColor: course.difficultyColor, color: course.difficultyColor }}
                          >
                            {course.difficulty}
                          </span>
                        </div>
                        <p className="font-mono text-[11px] text-text-dim mb-[8px]">{course.sessions} sesi · +{course.xp} XP</p>
                        <p className="text-[12px] text-text-dim leading-[1.6]">{course.description}</p>
                      </div>

                      <div className="shrink-0">
                        <span className="font-mono text-[12px] text-xp group-hover:underline whitespace-nowrap">Detail →</span>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Packages */}
        <section className="py-[80px] bg-bg-panel border-y-2 border-line" aria-label="Paket Lainnya">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="mb-[40px]">
              <div className="font-mono text-[12px] text-mana mb-[10px]">{'// OTHER_PACKAGES'}</div>
              <h2 className="font-pixel text-[18px] leading-[1.6]">Paket Lainnya</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
              {learningPackages.filter(p => p.slug !== pkg.slug).map((p) => (
                <Link
                  key={p.slug}
                  href={`/paket/${p.slug}`}
                  className="bg-bg-deep border-2 border-line p-[20px] hover:border-mana hover:bg-bg-panel-2 transition-all group"
                >
                  <div className="text-[28px] mb-[10px]">{p.icon}</div>
                  <h3 className="font-semibold text-[15px] text-text-main mb-[4px] group-hover:text-mana transition-colors">{p.title}</h3>
                  <p className="font-mono text-[11px] text-text-dim mb-[12px]">{p.tagline}</p>
                  <div className="font-mono text-[16px] text-xp font-bold">
                    Rp{p.price.toLocaleString('id-ID')}
                    <span className="text-[11px] text-text-dim"> / paket</span>
                  </div>
                  <div className="mt-[10px] font-mono text-[12px] text-mana group-hover:underline">Lihat Paket →</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-[90px] px-6" aria-label="Call to Action">
          <h2 className="font-pixel text-[20px] leading-[1.7] mb-[16px] text-text-main">Siap Ambil Paket ini?</h2>
          <p className="font-mono text-text-dim mb-[32px]">Hemat lebih banyak, belajar lebih terstruktur. Chat mentor sekarang!</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-semibold text-[14px] px-[24px] py-[14px] border-2 border-black shadow-[4px_4px_0_#000] cursor-pointer transition-all inline-flex items-center gap-[8px] bg-xp text-[#04140d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000]"
          >
            ▶ AMBIL PAKET — Rp{pkg.price.toLocaleString('id-ID')}
          </a>
        </section>

      </main>
    </>
  )
}
