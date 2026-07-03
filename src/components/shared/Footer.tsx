'use client'

import Link from 'next/link'
import { useState, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { NAV_LINKS, ADDRESS, WHATSAPP_NUMBER, MAP_LAT, MAP_LNG, WHATSAPP_DISPLAY, EMAIL_ADDRESS, OPERATIONAL_HOURS } from '@/constants'
import Modal from './Modal'

export default function Footer() {
  const [waInput, setWaInput] = useState('')
  const [copied, setCopied] = useState(false)
  const [modalState, setModalState] = useState({ isOpen: false, title: '', message: '' })

  const showModal = (title: string, message: string) => {
    setModalState({ isOpen: true, title, message })
  }
  const pathname = usePathname()

  const copyAddress = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(ADDRESS)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
      const ta = document.createElement('textarea')
      ta.value = ADDRESS
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [])

  const handleWhatsAppClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (waInput.length < 10) {
      return;
    }

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: waInput })
      });

      if (res.ok) {
        showModal('SUKSES', 'Berhasil subscribe! Nomor WA kamu sudah disimpan.');
        setWaInput('');
      } else {
        const data = await res.json().catch(() => ({}));
        if (data.exists) {
          showModal('INFO', 'nomormu sudah kami terima. tunggu pesan terbaru dari kami ya!');
          setWaInput('');
        } else {
          showModal('ERROR', 'Gagal menyimpan nomor WA. Silakan coba lagi.');
        }
      }
    } catch (error) {
      console.error('Error saving lead:', error);
      showModal('ERROR', 'Terjadi kesalahan. Silakan coba lagi.');
    }
  };

  return (
    <footer className="relative bg-[#080b14] border-t-2 border-line">

      {/* ═══ MAP SECTION ═══ */}
      {pathname === '/' && (
        <section className="border-b border-line" aria-label="Lokasi Kami">
          <div className="max-w-[1120px] mx-auto px-6 py-[48px]">
            <div className="mb-[24px]">
              <div className="font-mono text-[12px] text-mana mb-[8px]">
                {'// LOCATION_PING'}
              </div>
              <h2 className="font-pixel text-[16px] leading-[1.6] text-text-main">
                Base Camp Kami
              </h2>
            </div>

            <div className="grid grid-cols-1 min-[860px]:grid-cols-[1fr_340px] gap-[20px]">
              {/* Map embed */}
              <div className="relative border-2 border-line bg-bg-deep overflow-hidden group">
                {/* Scanline overlay for retro feel */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none opacity-[0.03]"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)',
                  }}
                />
                <iframe
                  title="Lokasi Teman Ngoding"
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${MAP_LNG - 0.008}%2C${MAP_LAT - 0.005}%2C${MAP_LNG + 0.008}%2C${MAP_LAT + 0.005}&layer=mapnik&marker=${MAP_LAT}%2C${MAP_LNG}`}
                  className="w-full h-[280px] min-[860px]:h-[240px] border-0 grayscale-30 contrast-[1.1] brightness-[0.85]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                {/* Glow border on hover */}
                <div className="absolute inset-0 pointer-events-none border-2 border-transparent group-hover:border-xp/30 transition-colors duration-500" />
              </div>

              {/* Address card */}
              <div className="bg-bg-panel border-2 border-line p-[20px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-[8px] mb-[14px]">
                    <span className="text-[18px]" aria-hidden="true">📍</span>
                    <span className="font-mono text-[11px] text-gold uppercase tracking-[1.5px] mb-[8px]">
                      HQ Location
                    </span>
                  </div>
                  <p className="text-[14px] text-text-dim leading-[1.7] mb-[16px]">
                    {ADDRESS}
                  </p>
                </div>

                <button
                  onClick={copyAddress}
                  className="group/btn w-full font-mono text-[12px] font-semibold px-[16px] py-[12px] border-2 border-line-bright bg-bg-deep text-text-main shadow-[3px_3px_0_#000] transition-all hover:translate-x-px hover:translate-y-px hover:shadow-[1px_1px_0_#000] hover:border-xp flex items-center justify-center gap-[8px] cursor-pointer"
                >
                  {copied ? (
                    <>
                      <span className="text-xp">✓</span>
                      <span className="text-xp">COPIED!</span>
                    </>
                  ) : (
                    <>
                      <span>📋</span>
                      <span>COPY ADDRESS</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══ MAIN FOOTER GRID ═══ */}
      <div className="max-w-[1120px] mx-auto px-6 py-[48px]">
        <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[860px]:grid-cols-4 gap-[40px] min-[860px]:gap-[32px]">

          {/* ── Col 1: Brand ── */}
          <div className="min-[860px]:col-span-1">
            <Link href="/" className="flex items-center gap-[10px] mb-[20px] group">
              <div className="w-[28px] h-[28px] bg-xp [clip-path:polygon(0%_20%,20%_0%,80%_0%,100%_20%,100%_80%,80%_100%,20%_100%,0%_80%)] shadow-[0_0_0_2px_#000,0_0_14px_rgba(82,224,168,0.6)] transition-shadow group-hover:shadow-[0_0_0_2px_#000,0_0_20px_rgba(82,224,168,0.8)]" />
              <div className="font-pixel text-[11px] text-text-main">
                teman<span className="text-xp">ngoding</span>.id
              </div>
            </Link>
            <p className="text-[13px] text-text-dim leading-[1.7] mb-[20px]">
              Tempat privat &amp; les coding di Rancaekek buat yang serius mau jago IT. Kurikulum seru ala RPG Game.
            </p>

            {/* Social icons */}
            <div className="flex gap-[8px] flex-wrap">
              {/* Sembunyikan social link sementara karena belum siap */}
              {/* {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-[36px] h-[36px] flex items-center justify-center bg-bg-panel border border-line text-[14px] transition-all hover:border-xp hover:bg-bg-panel-2 hover:scale-110"
              >
                {s.icon}
              </a>
            ))} */}
            </div>
          </div>

          {/* ── Col 2: Navigation ── */}
          <div>
            <div className="font-mono text-[11px] text-gold uppercase tracking-[1.5px] mb-[18px]">
              Navigation
            </div>
            <nav className="flex flex-col gap-[10px]" aria-label="Footer Navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group/nav flex items-center gap-[8px] text-[13px] text-text-dim transition-colors hover:text-xp"
                >
                  <span className="font-mono text-[10px] text-xp opacity-0 transition-opacity group-hover/nav:opacity-100">
                    {'▸'}
                  </span>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Col 3: Kontak ── */}
          <div>
            <div className="font-mono text-[11px] text-gold uppercase tracking-[1.5px] mb-[18px]">
              Kontak
            </div>
            <div className="flex flex-col gap-[14px]">
              <div className="flex items-start gap-[10px]">
                <span className="text-[14px] mt-[2px]" aria-hidden="true">📧</span>
                <div>
                  <div className="text-[11px] text-text-dim font-mono mb-[2px]">Email</div>
                  <a href={`mailto:${EMAIL_ADDRESS}`} className="text-[13px] text-text-main hover:text-xp transition-colors">
                    {EMAIL_ADDRESS}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-[10px]">
                <span className="text-[14px] mt-[2px]" aria-hidden="true">📱</span>
                <div>
                  <div className="text-[11px] text-text-dim font-mono mb-[2px]">WhatsApp</div>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-text-main hover:text-xp transition-colors"
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-[10px]">
                <span className="text-[14px] mt-[2px]" aria-hidden="true">🕐</span>
                <div>
                  <div className="text-[11px] text-text-dim font-mono mb-[2px]">Jam Operasional</div>
                  <div className="flex flex-col gap-[2px]">
                    {OPERATIONAL_HOURS.map((hour, idx) => (
                      <span key={idx} className="text-[13px] text-text-main">
                        {hour}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Col 4: Subscribe WA ── */}
          <div>
            <div className="font-mono text-[11px] text-gold uppercase tracking-[1.5px] mb-[18px]">
              Join via WhatsApp
            </div>
            <p className="text-[12px] text-text-dim leading-[1.6] mb-[16px]">
              Masukkan nomor WA-mu untuk subscribe dan dapatkan info kelas serta update terbaru dari kami.
            </p>

            <div className="flex flex-col gap-[8px]">
              <div className="relative">
                <input
                  type="tel"
                  placeholder="08xxxxxxxxxx"
                  value={waInput}
                  onChange={(e) => setWaInput(e.target.value)}
                  className="w-full font-mono text-[13px] px-[14px] py-[12px] bg-bg-deep border-2 border-line text-text-main placeholder-line-bright outline-none transition-colors focus:border-xp focus:shadow-[0_0_8px_rgba(82,224,168,0.15)]"
                />
                <div className="absolute right-[10px] top-1/2 -translate-y-1/2 text-[12px] text-line-bright pointer-events-none font-mono">
                  WA
                </div>
              </div>

              <button
                className={`flex items-center justify-center gap-[8px] font-mono text-[13px] font-semibold px-[16px] py-[12px] border-2 shadow-[3px_3px_0_#000] transition-all ${waInput.length >= 10
                  ? 'bg-[#25D366] border-black text-[#04140d] cursor-pointer hover:translate-x-px hover:translate-y-px hover:shadow-[1px_1px_0_#000]'
                  : 'bg-bg-panel border-line text-line-bright cursor-not-allowed'
                  }`}
                onClick={handleWhatsAppClick}
                disabled={waInput.length < 10}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                SUBSCRIBE
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ═══ BOTTOM BAR ═══ */}
      <div className="border-t border-line">
        <div className="max-w-[1120px] mx-auto px-6 py-[20px] flex flex-col min-[600px]:flex-row items-center justify-between gap-[12px]">
          <div className="font-mono text-[11px] text-line-bright">
            © {new Date().getFullYear()} temanngoding.id — built for coders, by coders.
          </div>
          <div className="flex items-center gap-[6px] font-mono text-[10px] text-line-bright">
            <span className="w-[6px] h-[6px] bg-xp animate-blink" />
            <span>ALL SYSTEMS OPERATIONAL</span>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={modalState.isOpen} 
        onClose={() => setModalState(prev => ({ ...prev, isOpen: false }))} 
        title={modalState.title}
      >
        {modalState.message}
      </Modal>
    </footer>
  )
}
