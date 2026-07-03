import MentorCarousel from '@/components/modules/MentorCarousel'
import TestimonialCarousel from '@/components/modules/TestimonialCarousel'
import Link from 'next/link'

export default function Home() {
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
                Private tutoring & course online buat yang serius mau jago IT. Bukan tonton video doang — lo ngoding, lo dibimbing, lo naik level beneran.
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
                <div className="font-mono"><div className="text-[22px] font-bold text-gold">120+</div><div className="text-[11px] text-text-dim uppercase tracking-[1px]">Player Tamat</div></div>
                <div className="font-mono"><div className="text-[22px] font-bold text-gold">4.9</div><div className="text-[11px] text-text-dim uppercase tracking-[1px]">Rating Mentor</div></div>
                <div className="font-mono"><div className="text-[22px] font-bold text-gold">6</div><div className="text-[11px] text-text-dim uppercase tracking-[1px]">Skill Tree</div></div>
              </div>
            </div>

            <MentorCarousel />

          </div>
        </header>

        <section className="py-[80px]" id="quests" aria-label="Daftar Course">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="mb-[48px]">
              <div className="font-mono text-[12px] text-mana mb-[10px]">// QUEST_LOG</div>
              <h2 className="font-pixel text-[20px] leading-[1.6]">Pilih Quest Belajarmu</h2>
            </div>
            <div className="flex flex-col gap-[2px]">

              <article className="grid grid-cols-[48px_1fr] max-[860px]:grid-cols-[48px_1fr] min-[860px]:grid-cols-[64px_1fr_auto_auto] gap-y-[8px] min-[860px]:gap-y-0 gap-x-[18px] items-center bg-bg-panel border border-line px-[20px] py-[18px] transition-colors hover:border-xp hover:bg-bg-panel-2 group">
                <div className="w-[48px] h-[48px] flex items-center justify-center bg-bg-deep border border-line-bright text-[20px]" aria-hidden="true">🌐</div>
                <div>
                  <h3 className="font-semibold text-[15px] mb-[4px]">Private 1-on-1: Fullstack Web Dev</h3>
                  <p className="font-mono text-[11px] text-text-dim">HTML, CSS, JS Project Based — 2 Sesi (120 Menit)</p>
                </div>
                <div className="col-start-2 min-[860px]:col-start-auto font-mono text-[10px] px-[8px] py-[4px] border border-xp text-xp whitespace-nowrap w-fit">EASY</div>
                <div className="col-start-2 min-[860px]:col-start-auto font-mono text-[13px] text-gold min-[860px]:text-right whitespace-nowrap">+150 XP</div>
              </article>

              <article className="grid grid-cols-[48px_1fr] max-[860px]:grid-cols-[48px_1fr] min-[860px]:grid-cols-[64px_1fr_auto_auto] gap-y-[8px] min-[860px]:gap-y-0 gap-x-[18px] items-center bg-bg-panel border border-line px-[20px] py-[18px] transition-colors hover:border-xp hover:bg-bg-panel-2 group">
                <div className="w-[48px] h-[48px] flex items-center justify-center bg-bg-deep border border-line-bright text-[20px]" aria-hidden="true">🤖</div>
                <div>
                  <h3 className="font-semibold text-[15px] mb-[4px]">Private 1-on-1: Arduino Engineering</h3>
                  <p className="font-mono text-[11px] text-text-dim">Sains, Elektronika, Sistem Otomatis & IoT — 8 Sesi (120 Menit)</p>
                </div>
                <div className="col-start-2 min-[860px]:col-start-auto font-mono text-[10px] px-[8px] py-[4px] border border-gold text-gold whitespace-nowrap w-fit">MEDIUM</div>
                <div className="col-start-2 min-[860px]:col-start-auto font-mono text-[13px] text-gold min-[860px]:text-right whitespace-nowrap">+400 XP</div>
              </article>

              <article className="grid grid-cols-[48px_1fr] max-[860px]:grid-cols-[48px_1fr] min-[860px]:grid-cols-[64px_1fr_auto_auto] gap-y-[8px] min-[860px]:gap-y-0 gap-x-[18px] items-center bg-bg-panel border border-line px-[20px] py-[18px] transition-colors hover:border-xp hover:bg-bg-panel-2 group">
                <div className="w-[48px] h-[48px] flex items-center justify-center bg-bg-deep border border-line-bright text-[20px]" aria-hidden="true">🐉</div>
                <div>
                  <h3 className="font-semibold text-[15px] mb-[4px]">Bootcamp: Intensive Project</h3>
                  <p className="font-mono text-[11px] text-text-dim">Bimbingan Project Akhir / Mahasiswa & SMK — 8 Sesi (120 Menit)</p>
                </div>
                <div className="col-start-2 min-[860px]:col-start-auto font-mono text-[10px] px-[8px] py-[4px] border border-hp text-hp whitespace-nowrap w-fit">BOSS FIGHT</div>
                <div className="col-start-2 min-[860px]:col-start-auto font-mono text-[13px] text-gold min-[860px]:text-right whitespace-nowrap">+800 XP</div>
              </article>

            </div>
          </div>
        </section>

        <section className="py-[80px]" id="levels" aria-label="Paket Harga">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="mb-[48px]">
              <div className="font-mono text-[12px] text-mana mb-[10px]">// SELECT_YOUR_PLAN</div>
              <h2 className="font-pixel text-[20px] leading-[1.6]">Pilih Paket Belajar</h2>
            </div>
            <div className="grid grid-cols-1 min-[860px]:grid-cols-3 gap-[20px]">

              <article className="bg-bg-panel border-2 border-line px-[22px] py-[28px] relative transition-transform duration-150 hover:-translate-y-1 hover:border-line-bright">
                <div className="font-pixel text-[11px] text-text-dim mb-[10px]">LV.1</div>
                <h3 className="text-[18px] font-bold mb-[6px]">Fullstack Web Dev</h3>
                <div className="font-mono text-[24px] text-xp mb-[6px]">Rp150.000<span className="text-[12px] text-text-dim">/paket</span></div>
                <div className="font-mono text-[12px] text-text-dim line-through mb-[18px]">Rp350.000</div>
                <ul className="text-[13px] text-text-dim flex flex-col gap-[10px] mb-[24px]">
                  <li className="flex gap-[8px] before:content-['▸'] before:text-xp">Total 2 Sesi (120 Menit/sesi)</li>
                  <li className="flex gap-[8px] before:content-['▸'] before:text-xp">Basic HTML, CSS, JS</li>
                  <li className="flex gap-[8px] before:content-['▸'] before:text-xp">Project Personal Blog</li>
                </ul>
                <a href="#quests" className="flex justify-center font-mono font-semibold text-[14px] px-[24px] py-[14px] border-2 border-line-bright shadow-[4px_4px_0_#000] cursor-pointer transition-all bg-bg-panel text-text-main hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] w-full">PILIH</a>
              </article>

              <article className="bg-bg-panel border-2 border-gold shadow-[0_0_0_1px_#ffc857,4px_4px_0_#000] px-[22px] py-[28px] relative transition-transform duration-150 hover:-translate-y-1">
                <div className="absolute top-[-12px] right-[16px] bg-gold text-[#1a1300] font-mono text-[10px] font-bold px-[10px] py-[4px]">PALING LARIS</div>
                <div className="font-pixel text-[11px] text-text-dim mb-[10px]">LV.2</div>
                <h3 className="text-[18px] font-bold mb-[6px]">Arduino Engineering</h3>
                <div className="font-mono text-[24px] text-xp mb-[6px]">Rp600.000<span className="text-[12px] text-text-dim">/paket</span></div>
                <div className="font-mono text-[12px] text-text-dim line-through mb-[18px]">Rp950.000</div>
                <ul className="text-[13px] text-text-dim flex flex-col gap-[10px] mb-[24px]">
                  <li className="flex gap-[8px] before:content-['▸'] before:text-xp">Total 8 Sesi (120 Menit/sesi)</li>
                  <li className="flex gap-[8px] before:content-['▸'] before:text-xp">Elektronika & Sistem Otomatis</li>
                  <li className="flex gap-[8px] before:content-['▸'] before:text-xp">ESP32 & Solusi IoT Nyata</li>
                </ul>
                <a href="#quests" className="flex justify-center font-mono font-semibold text-[14px] px-[24px] py-[14px] border-2 border-black shadow-[4px_4px_0_#000] cursor-pointer transition-all bg-xp text-[#04140d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] w-full">PILIH</a>
              </article>

              <article className="bg-bg-panel border-2 border-line px-[22px] py-[28px] relative transition-transform duration-150 hover:-translate-y-1 hover:border-line-bright">
                <div className="font-pixel text-[11px] text-text-dim mb-[10px]">LV.3</div>
                <h3 className="text-[18px] font-bold mb-[6px]">Intensive Project</h3>
                <div className="font-mono text-[24px] text-xp mb-[6px]">Rp800.000<span className="text-[12px] text-text-dim">/paket</span></div>
                <div className="font-mono text-[12px] text-text-dim line-through mb-[18px]">Rp1.200.000</div>
                <ul className="text-[13px] text-text-dim flex flex-col gap-[10px] mb-[24px]">
                  <li className="flex gap-[8px] before:content-['▸'] before:text-xp">Total 8 Sesi (120 Menit/sesi)</li>
                  <li className="flex gap-[8px] before:content-['▸'] before:text-xp">Bimbingan Project Akhir</li>
                  <li className="flex gap-[8px] before:content-['▸'] before:text-xp">Tech Stack Sesuai Kebutuhan</li>
                </ul>
                <a href="#quests" className="flex justify-center font-mono font-semibold text-[14px] px-[24px] py-[14px] border-2 border-line-bright shadow-[4px_4px_0_#000] cursor-pointer transition-all bg-bg-panel text-text-main hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] w-full">PILIH</a>
              </article>

            </div>
          </div>
        </section>

        <section className="py-[80px]" id="proof" aria-label="Testimoni">
          <div className="max-w-[1120px] mx-auto px-6">
            <TestimonialCarousel />
          </div>
        </section>

        <section className="text-center py-[90px] px-6 bg-bg-panel border-y-2 border-line" aria-label="Call to Action">
          <h2 className="font-pixel text-[22px] leading-[1.7] mb-[20px] text-text-main">Ready Player One?</h2>
          <p className="font-mono text-text-dim mb-[32px]">Slot belajar terbatas tiap minggunya. Mulai quest pertamamu sekarang.</p>
          <a href="#levels" className="font-mono font-semibold text-[14px] px-[24px] py-[14px] border-2 border-black shadow-[4px_4px_0_#000] cursor-pointer transition-all inline-flex items-center gap-[8px] bg-xp text-[#04140d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000]">
            ▶ DAFTAR SEKARANG
          </a>
        </section>
      </main>
    </>
  );
}
