import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Quest Not Found | Teman Ngoding',
  description: 'Halaman yang kamu cari tidak ditemukan.',
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-bg-deep flex items-center justify-center px-6">
      <div className="text-center max-w-[540px] mx-auto">
        {/* Pixel Art Decorative */}
        <div className="font-pixel text-[96px] md:text-[120px] leading-none text-line mb-0 select-none">
          <span className="text-xp">4</span>
          <span className="text-text-dim">0</span>
          <span className="text-hp">4</span>
        </div>

        {/* Scanline Effect Text */}
        <div className="relative mb-[24px]">
          <div className="font-mono text-[11px] text-mana uppercase tracking-[3px] mb-[8px]">
            {'// ERROR: QUEST_NOT_FOUND'}
          </div>
          <h1 className="font-pixel text-[18px] md:text-[22px] leading-[1.6] text-text-main">
            Halaman Tidak Ditemukan
          </h1>
        </div>

        <p className="font-mono text-[13px] text-text-dim leading-[1.8] mb-[40px]">
          Quest yang kamu cari tidak ada di dungeon ini. Mungkin sudah selesai,
          atau kamu salah ketik URL-nya. Kembali ke dunia nyata dan mulai dari Home!
        </p>

        {/* Decorative Error Box */}
        <div className="bg-bg-panel border-2 border-line p-[20px] mb-[40px] font-mono text-[11px] text-left">
          <div className="text-text-dim mb-[6px]">{'>'} player.navigate(<span className="text-mana">&apos;unknown_path&apos;</span>)</div>
          <div className="text-hp">{'>'} TypeError: Route not registered in GameEngine</div>
          <div className="text-text-dim mt-[6px]">{'>'} Suggested fix: <span className="text-xp">return_to_home()</span></div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-[14px]">
          <Link
            href="/"
            className="font-mono font-semibold text-[13px] px-[24px] py-[12px] border-2 border-black shadow-[4px_4px_0_#000] bg-xp text-[#04140d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] transition-all inline-flex items-center gap-2"
          >
            ▶ KEMBALI KE HOME
          </Link>
          <Link
            href="/course"
            className="font-mono text-[13px] px-[24px] py-[12px] border-2 border-line text-text-dim hover:border-mana hover:text-mana transition-colors inline-flex items-center gap-2"
          >
            🗺 Lihat Semua Quest
          </Link>
        </div>
      </div>
    </main>
  )
}
