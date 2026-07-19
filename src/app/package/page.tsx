import type { Metadata } from 'next'
import Link from 'next/link'
import { learningPackages, courses, WHATSAPP_NUMBER } from '@/constants'
import PackageList from '@/components/modules/PackageList'

export const metadata: Metadata = {
  title: 'Paket Belajar',
  description: 'Pilih paket belajar bundling di temanngoding.id — kumpulan quest yang terurut dengan harga lebih hemat.',
}

export default function PaketPage() {
  return (
    <>
      <main>

        {/* Hero */}
        <header className="pt-[96px] pb-[64px] relative overflow-hidden">
          <div className="max-w-[1120px] mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 font-mono text-[12px] text-mana border border-mana px-[12px] py-[6px] mb-[28px] bg-[rgba(124,155,255,0.06)]">
              <span className="w-[6px] h-[6px] bg-mana animate-blink"></span> BUNDLE_STORE — LEARNING PACKAGES
            </div>
            <h1 className="font-pixel text-[24px] md:text-[30px] leading-[1.65] mb-[24px] text-text-main">
              Pilih <span className="text-mana">Paket</span><br />
              Belajarmu <span className="text-gold">Sekarang</span>
            </h1>
            <p className="text-[16px] text-text-dim leading-[1.7] max-w-[600px] mx-auto">
              Paket belajar adalah kumpulan quest yang udah diurutkan dari dasar. Beli bundling, jauh lebih hemat dari beli satuan!
            </p>
          </div>
        </header>

        {/* Comparison Banner */}
        <div className="max-w-[1120px] mx-auto px-6 pb-[20px]">
          <div className="bg-bg-panel border-2 border-gold/40 px-[24px] py-[16px] flex flex-col md:flex-row items-start md:items-center gap-[12px] justify-between">
            <div className="flex items-center gap-[12px]">
              <span className="text-[24px]">💡</span>
              <div>
                <div className="font-mono text-[12px] text-gold font-bold mb-[2px]">PRO TIP</div>
                <p className="font-mono text-[12px] text-text-dim">Paket bundling bisa hemat hingga <span className="text-xp font-bold">64%</span> dibanding beli per quest satuan!</p>
              </div>
            </div>
            <Link
              href="/course"
              className="font-mono text-[12px] text-mana border border-mana/40 px-[14px] py-[8px] hover:bg-[rgba(124,155,255,0.08)] transition-colors whitespace-nowrap"
            >
              Lihat Quest Satuan →
            </Link>
          </div>
        </div>

        {/* Package Grid */}
        <section className="pb-[80px]" aria-label="Daftar Paket Belajar">
          <div className="max-w-[1120px] mx-auto px-6">
            <PackageList packages={learningPackages} courses={courses} />
          </div>
        </section>

        {/* FAQ / Info */}
        <section className="py-[80px] bg-bg-panel border-y-2 border-line" aria-label="Info Paket">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="mb-[48px] text-center">
              <div className="font-mono text-[12px] text-mana mb-[10px]">{'// FAQ'}</div>
              <h2 className="font-pixel text-[18px] leading-[1.6]">Yang Sering Ditanya</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] max-w-[800px] mx-auto">
              {[
                {
                  q: 'Apa bedanya paket vs beli satuan?',
                  a: 'Paket berisi beberapa quest yang sudah diurutkan dan harganya jauh lebih murah dari beli satuan. Cocok kalau kamu mau belajar lebih dari satu topik.'
                },
                {
                  q: 'Bisa pilih urutan quest sendiri?',
                  a: 'Quest dalam paket sudah diurutkan yang paling optimal untuk belajar. Tapi bisa diskusi sama mentor kalau mau custom path.'
                },
                {
                  q: 'Apakah ada masa berlaku?',
                  a: 'Sesi bisa dijadwal fleksibel sesuai kesepakatan dengan mentor. Tidak ada deadline ketat selama masih aktif.'
                },
                {
                  q: 'Bisa cicil atau bayar per sesi?',
                  a: 'Saat ini pembayaran per paket. Untuk opsi lain bisa langsung diskusi sama tim kita via WhatsApp.'
                },
              ].map((faq, i) => (
                <div key={i} className="bg-bg-deep border border-line px-[20px] py-[20px]">
                  <div className="font-mono text-[11px] text-xp mb-[6px]">Q_{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="font-semibold text-[14px] text-text-main mb-[8px]">{faq.q}</h3>
                  <p className="font-mono text-[12px] text-text-dim leading-[1.65]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-[90px] px-6" aria-label="Call to Action">
          <h2 className="font-pixel text-[20px] leading-[1.7] mb-[16px] text-text-main">Masih bingung pilih paket?</h2>
          <p className="font-mono text-text-dim mb-[32px]">Chat mentor, gratis konsultasi sebelum daftar!</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo Teman Ngoding! Saya ingin konsultasi paket belajar yang cocok buat saya.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-semibold text-[14px] px-[24px] py-[14px] border-2 border-black shadow-[4px_4px_0_#000] cursor-pointer transition-all inline-flex items-center gap-[8px] bg-xp text-[#04140d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000]"
          >
            💬 KONSULTASI GRATIS
          </a>
        </section>

      </main>
    </>
  )
}
