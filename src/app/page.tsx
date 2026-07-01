import Navbar from '@/components/shared/Navbar'
import MentorCarousel from '@/components/modules/MentorCarousel'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>

      <header className="pt-[96px] pb-[64px] relative overflow-hidden">
        <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr] min-[860px]:grid-cols-[1.1fr_0.9fr] gap-[56px] items-center">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[12px] text-[#52e0a8] border border-[#52e0a8] px-[12px] py-[6px] mb-[28px] bg-[rgba(82,224,168,0.06)]">
              <span className="w-[6px] h-[6px] bg-[#52e0a8] animate-blink"></span> SERVER ONLINE — SLOT TERSEDIA
            </div>
            <h1 className="font-pixel text-[30px] leading-[1.65] mb-[24px] text-[#dfe3f5]">
              Level up<br />
              skill <span className="text-[#52e0a8]">coding</span>-mu<br />
              bareng <span className="text-[#ffc857]">mentor</span> asli
            </h1>
            <p className="text-[16px] text-[#8891b8] leading-[1.7] max-w-[480px] mb-[36px]">
              Private tutoring & course online buat yang serius mau jago IT. Bukan tonton video doang — lo ngoding, lo dibimbing, lo naik level beneran.
            </p>
            <div className="flex gap-4 flex-wrap mb-10">
              <Link href="#levels" className="font-mono font-semibold text-[14px] px-[24px] py-[14px] border-2 border-black shadow-[4px_4px_0_#000] cursor-pointer transition-all inline-flex items-center gap-2 bg-[#52e0a8] text-[#04140d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000]">
                ▶ MULAI BELAJAR
              </Link>
              <Link href="#quests" className="font-mono font-semibold text-[14px] px-[24px] py-[14px] border-2 border-[#4a5694] shadow-[4px_4px_0_#000] cursor-pointer transition-all inline-flex items-center gap-2 bg-[#12172a] text-[#dfe3f5] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000]">
                LIHAT QUEST LIST
              </Link>
            </div>
            <div className="flex gap-[28px] flex-wrap">
              <div className="font-mono"><div className="text-[22px] font-bold text-[#ffc857]">120+</div><div className="text-[11px] text-[#8891b8] uppercase tracking-[1px]">Player Tamat</div></div>
              <div className="font-mono"><div className="text-[22px] font-bold text-[#ffc857]">4.9</div><div className="text-[11px] text-[#8891b8] uppercase tracking-[1px]">Rating Mentor</div></div>
              <div className="font-mono"><div className="text-[22px] font-bold text-[#ffc857]">6</div><div className="text-[11px] text-[#8891b8] uppercase tracking-[1px]">Skill Tree</div></div>
            </div>
          </div>

          <MentorCarousel />

        </div>
      </header>

      <section className="py-[80px]" id="quests" aria-label="Daftar Course">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="mb-[48px]">
            <div className="font-mono text-[12px] text-[#7c9bff] mb-[10px]">// QUEST_LOG</div>
            <h2 className="font-pixel text-[20px] leading-[1.6]">Pilih Quest Belajarmu</h2>
          </div>
          <div className="flex flex-col gap-[2px]">

            <article className="grid grid-cols-[48px_1fr] max-[860px]:grid-cols-[48px_1fr] min-[860px]:grid-cols-[64px_1fr_auto_auto] gap-y-[8px] min-[860px]:gap-y-0 gap-x-[18px] items-center bg-[#12172a] border border-[#2a3358] px-[20px] py-[18px] transition-colors hover:border-[#52e0a8] hover:bg-[#181f38] group">
              <div className="w-[48px] h-[48px] flex items-center justify-center bg-[#0a0d18] border border-[#4a5694] text-[20px]" aria-hidden="true">🌐</div>
              <div>
                <h3 className="font-semibold text-[15px] mb-[4px]">Web Dev Fundamentals</h3>
                <p className="font-mono text-[11px] text-[#8891b8]">HTML · CSS · JS dasar — 8 sesi</p>
              </div>
              <div className="col-start-2 min-[860px]:col-start-auto font-mono text-[10px] px-[8px] py-[4px] border border-[#52e0a8] text-[#52e0a8] whitespace-nowrap w-fit">EASY</div>
              <div className="col-start-2 min-[860px]:col-start-auto font-mono text-[13px] text-[#ffc857] min-[860px]:text-right whitespace-nowrap">+150 XP</div>
            </article>

            <article className="grid grid-cols-[48px_1fr] max-[860px]:grid-cols-[48px_1fr] min-[860px]:grid-cols-[64px_1fr_auto_auto] gap-y-[8px] min-[860px]:gap-y-0 gap-x-[18px] items-center bg-[#12172a] border border-[#2a3358] px-[20px] py-[18px] transition-colors hover:border-[#52e0a8] hover:bg-[#181f38] group">
              <div className="w-[48px] h-[48px] flex items-center justify-center bg-[#0a0d18] border border-[#4a5694] text-[20px]" aria-hidden="true">⚛️</div>
              <div>
                <h3 className="font-semibold text-[15px] mb-[4px]">React & Next.js Mastery</h3>
                <p className="font-mono text-[11px] text-[#8891b8]">Component, state, routing — 10 sesi</p>
              </div>
              <div className="col-start-2 min-[860px]:col-start-auto font-mono text-[10px] px-[8px] py-[4px] border border-[#ffc857] text-[#ffc857] whitespace-nowrap w-fit">MEDIUM</div>
              <div className="col-start-2 min-[860px]:col-start-auto font-mono text-[13px] text-[#ffc857] min-[860px]:text-right whitespace-nowrap">+300 XP</div>
            </article>

            <article className="grid grid-cols-[48px_1fr] max-[860px]:grid-cols-[48px_1fr] min-[860px]:grid-cols-[64px_1fr_auto_auto] gap-y-[8px] min-[860px]:gap-y-0 gap-x-[18px] items-center bg-[#12172a] border border-[#2a3358] px-[20px] py-[18px] transition-colors hover:border-[#52e0a8] hover:bg-[#181f38] group">
              <div className="w-[48px] h-[48px] flex items-center justify-center bg-[#0a0d18] border border-[#4a5694] text-[20px]" aria-hidden="true">🛠️</div>
              <div>
                <h3 className="font-semibold text-[15px] mb-[4px]">Laravel Backend Engineer</h3>
                <p className="font-mono text-[11px] text-[#8891b8]">REST API, Auth, DB — 12 sesi</p>
              </div>
              <div className="col-start-2 min-[860px]:col-start-auto font-mono text-[10px] px-[8px] py-[4px] border border-[#ffc857] text-[#ffc857] whitespace-nowrap w-fit">MEDIUM</div>
              <div className="col-start-2 min-[860px]:col-start-auto font-mono text-[13px] text-[#ffc857] min-[860px]:text-right whitespace-nowrap">+350 XP</div>
            </article>

            <article className="grid grid-cols-[48px_1fr] max-[860px]:grid-cols-[48px_1fr] min-[860px]:grid-cols-[64px_1fr_auto_auto] gap-y-[8px] min-[860px]:gap-y-0 gap-x-[18px] items-center bg-[#12172a] border border-[#2a3358] px-[20px] py-[18px] transition-colors hover:border-[#52e0a8] hover:bg-[#181f38] group">
              <div className="w-[48px] h-[48px] flex items-center justify-center bg-[#0a0d18] border border-[#4a5694] text-[20px]" aria-hidden="true">🐉</div>
              <div>
                <h3 className="font-semibold text-[15px] mb-[4px]">Bootcamp: Job-Ready Fullstack</h3>
                <p className="font-mono text-[11px] text-[#8891b8]">Project portofolio + interview prep — 16 sesi</p>
              </div>
              <div className="col-start-2 min-[860px]:col-start-auto font-mono text-[10px] px-[8px] py-[4px] border border-[#ff5d73] text-[#ff5d73] whitespace-nowrap w-fit">BOSS FIGHT</div>
              <div className="col-start-2 min-[860px]:col-start-auto font-mono text-[13px] text-[#ffc857] min-[860px]:text-right whitespace-nowrap">+800 XP</div>
            </article>

          </div>
        </div>
      </section>

      <section className="py-[80px]" id="levels" aria-label="Paket Harga">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="mb-[48px]">
            <div className="font-mono text-[12px] text-[#7c9bff] mb-[10px]">// SELECT_YOUR_PLAN</div>
            <h2 className="font-pixel text-[20px] leading-[1.6]">Pilih Paket Belajar</h2>
          </div>
          <div className="grid grid-cols-1 min-[860px]:grid-cols-3 gap-[20px]">

            <article className="bg-[#12172a] border-2 border-[#2a3358] px-[22px] py-[28px] relative transition-transform duration-150 hover:-translate-y-1 hover:border-[#4a5694]">
              <div className="font-pixel text-[11px] text-[#8891b8] mb-[10px]">LV.1</div>
              <h3 className="text-[18px] font-bold mb-[6px]">Solo Run</h3>
              <div className="font-mono text-[24px] text-[#52e0a8] mb-[18px]">Rp150K<span className="text-[12px] text-[#8891b8]">/sesi</span></div>
              <ul className="text-[13px] text-[#8891b8] flex flex-col gap-[10px] mb-[24px]">
                <li className="flex gap-[8px] before:content-['▸'] before:text-[#52e0a8]">1-on-1 private 90 menit</li>
                <li className="flex gap-[8px] before:content-['▸'] before:text-[#52e0a8]">Pilih topik bebas</li>
                <li className="flex gap-[8px] before:content-['▸'] before:text-[#52e0a8]">Rekap chat setelah sesi</li>
              </ul>
              <a href="#" className="flex justify-center font-mono font-semibold text-[14px] px-[24px] py-[14px] border-2 border-[#4a5694] shadow-[4px_4px_0_#000] cursor-pointer transition-all bg-[#12172a] text-[#dfe3f5] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] w-full">PILIH</a>
            </article>

            <article className="bg-[#12172a] border-2 border-[#ffc857] shadow-[0_0_0_1px_#ffc857,4px_4px_0_#000] px-[22px] py-[28px] relative transition-transform duration-150 hover:-translate-y-1">
              <div className="absolute top-[-12px] right-[16px] bg-[#ffc857] text-[#1a1300] font-mono text-[10px] font-bold px-[10px] py-[4px]">PALING LARIS</div>
              <div className="font-pixel text-[11px] text-[#8891b8] mb-[10px]">LV.2</div>
              <h3 className="text-[18px] font-bold mb-[6px]">Party Member</h3>
              <div className="font-mono text-[24px] text-[#52e0a8] mb-[18px]">Rp130K<span className="text-[12px] text-[#8891b8]">/sesi</span></div>
              <ul className="text-[13px] text-[#8891b8] flex flex-col gap-[10px] mb-[24px]">
                <li className="flex gap-[8px] before:content-['▸'] before:text-[#52e0a8]">1-on-1 private, paket 8x</li>
                <li className="flex gap-[8px] before:content-['▸'] before:text-[#52e0a8]">Progress tracker pribadi</li>
                <li className="flex gap-[8px] before:content-['▸'] before:text-[#52e0a8]">Akses grup tanya-jawab</li>
              </ul>
              <a href="#" className="flex justify-center font-mono font-semibold text-[14px] px-[24px] py-[14px] border-2 border-black shadow-[4px_4px_0_#000] cursor-pointer transition-all bg-[#52e0a8] text-[#04140d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] w-full">PILIH</a>
            </article>

            <article className="bg-[#12172a] border-2 border-[#2a3358] px-[22px] py-[28px] relative transition-transform duration-150 hover:-translate-y-1 hover:border-[#4a5694]">
              <div className="font-pixel text-[11px] text-[#8891b8] mb-[10px]">LV.3</div>
              <h3 className="text-[18px] font-bold mb-[6px]">Final Boss</h3>
              <div className="font-mono text-[24px] text-[#52e0a8] mb-[18px]">Rp175K<span className="text-[12px] text-[#8891b8]">/sesi</span></div>
              <ul className="text-[13px] text-[#8891b8] flex flex-col gap-[10px] mb-[24px]">
                <li className="flex gap-[8px] before:content-['▸'] before:text-[#52e0a8]">Bootcamp 16 sesi intensif</li>
                <li className="flex gap-[8px] before:content-['▸'] before:text-[#52e0a8]">Project portofolio nyata</li>
                <li className="flex gap-[8px] before:content-['▸'] before:text-[#52e0a8]">Sesi interview prep</li>
              </ul>
              <a href="#" className="flex justify-center font-mono font-semibold text-[14px] px-[24px] py-[14px] border-2 border-[#4a5694] shadow-[4px_4px_0_#000] cursor-pointer transition-all bg-[#12172a] text-[#dfe3f5] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] w-full">PILIH</a>
            </article>

          </div>
        </div>
      </section>

      <section className="py-[80px]" id="proof" aria-label="Testimoni">
        <div className="max-w-[1120px] mx-auto px-6">
          <figure className="bg-[#181f38] border-2 border-dashed border-[#4a5694] p-[32px] flex flex-col md:flex-row gap-[24px] items-center">
            <div className="w-[56px] h-[56px] shrink-0 bg-[#ffc857] [clip-path:polygon(50%_0%,100%_38%,82%_100%,18%_100%,0%_38%)] flex items-center justify-center text-[24px]" aria-hidden="true">🏆</div>
            <div>
              <div className="font-mono text-[11px] text-[#ffc857] mb-[8px]">ACHIEVEMENT UNLOCKED — &quot;Job Ready&quot;</div>
              <blockquote className="text-[16px] leading-[1.6] text-[#dfe3f5] mb-[8px]">
                Awalnya gatau apa-apa soal backend, sekarang udah keterima kerja jadi web developer. Belajar di sini berasa kayak naik level beneran, jelas progressnya.
              </blockquote>
              <figcaption className="font-mono text-[12px] text-[#8891b8]">— <cite>Alumni Bootcamp Fullstack</cite></figcaption>
            </div>
          </figure>
        </div>
      </section>

      <section className="text-center py-[90px] px-6 bg-[#12172a] border-y-2 border-[#2a3358]" aria-label="Call to Action">
        <h2 className="font-pixel text-[22px] leading-[1.7] mb-[20px] text-[#dfe3f5]">Ready Player One?</h2>
        <p className="font-mono text-[#8891b8] mb-[32px]">Slot belajar terbatas tiap minggunya. Mulai quest pertamamu sekarang.</p>
        <a href="#levels" className="font-mono font-semibold text-[14px] px-[24px] py-[14px] border-2 border-black shadow-[4px_4px_0_#000] cursor-pointer transition-all inline-flex items-center gap-[8px] bg-[#52e0a8] text-[#04140d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000]">
          ▶ DAFTAR SEKARANG
        </a>
      </section>
      </main>

      <footer className="py-[32px] text-center font-mono text-[11px] text-[#8891b8]">
        © 2026 temanngoding.com — built for coders, by coders.
      </footer>
    </>
  );
}
