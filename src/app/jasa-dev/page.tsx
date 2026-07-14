import type { Metadata } from 'next'
import Link from 'next/link'
import { devServices, WHATSAPP_NUMBER } from '@/constants'

export const metadata: Metadata = {
  title: 'Jasa Development Website',
  description: 'Jasa pembuatan website profesional di temanngoding.id — landing page, company profile, web app custom, hingga dashboard IoT.',
}

const processSteps = [
  { step: '01', icon: '💬', title: 'Konsultasi', desc: 'Ceritain kebutuhan lo — kita analisis dan kasih rekomendasi solusi terbaik.' },
  { step: '02', icon: '📐', title: 'Desain & Wireframe', desc: 'Kita bikin sketsa tampilan dulu. Lo approve baru kita mulai development.' },
  { step: '03', icon: '⚙️', title: 'Development', desc: 'Proses coding berlangsung dengan update progress reguler ke lo.' },
  { step: '04', icon: '✅', title: 'Revisi & Launch', desc: 'Testing, revisi sesuai feedback, lalu deploy ke server/hosting.' },
]

export default function JasaDevPage() {
  return (
    <>
      <main className="min-h-[80vh] flex items-center justify-center pt-[96px] pb-[80px]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 font-mono text-[12px] text-hp border border-hp px-[12px] py-[6px] mb-[32px] bg-[rgba(255,93,115,0.06)]">
            <span className="w-[6px] h-[6px] bg-hp animate-blink"></span> UNDER_CONSTRUCTION
          </div>
          
          <h1 className="font-pixel text-[32px] md:text-[48px] leading-[1.4] mb-[24px] text-text-main">
            Services <br className="md:hidden" />
            <span className="text-hp">Coming Soon</span>
          </h1>
          
          <p className="text-[16px] md:text-[18px] text-text-dim leading-[1.7] max-w-[600px] mx-auto mb-[48px]">
            Layanan Jasa Development Website, Joki Web, dan Pinjam Programmer sedang dalam tahap persiapan. Kami sedang menyiapkan sistem terbaik untuk mendukung project kamu.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/course"
              className="font-mono font-semibold text-[14px] px-[24px] py-[14px] border-2 border-line-bright shadow-[4px_4px_0_#000] cursor-pointer transition-all inline-flex items-center gap-2 bg-bg-panel text-text-main hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] hover:border-xp hover:text-xp"
            >
              🎮 CEK COURSE DULU
            </Link>
            <Link
              href="/"
              className="font-mono text-[14px] px-[24px] py-[14px] border-2 border-line-bright text-text-dim hover:text-text-main transition-colors"
            >
              Kembali ke Home
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
