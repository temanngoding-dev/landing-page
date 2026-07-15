'use client'
import { useEffect } from 'react'
import { FiX, FiFileText, FiDownload, FiExternalLink } from 'react-icons/fi'

interface SyllabusModalProps {
  isOpen: boolean
  onClose: () => void
  syllabusUrl: string
  courseTitle: string
}

export default function SyllabusModal({ isOpen, onClose, syllabusUrl, courseTitle }: SyllabusModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="bg-bg-deep border-2 border-line w-full max-w-4xl h-[90vh] shadow-[8px_8px_0_#000] flex flex-col relative">
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-line px-[20px] py-[14px] bg-bg-panel shrink-0">
          <div className="flex items-center gap-[10px]">
            <FiFileText className="text-xp text-[18px]" />
            <div>
              <div className="font-mono text-[10px] text-text-dim uppercase tracking-[1px]">Silabus Quest</div>
              <h3 className="font-pixel text-[13px] text-gold">{courseTitle}</h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={syllabusUrl}
              download
              className="inline-flex items-center gap-1 font-mono text-[11px] text-mana border border-mana/40 px-[10px] py-[6px] hover:bg-mana/10 transition-colors"
              title="Download silabus"
            >
              <FiDownload className="text-[14px]" /> Download
            </a>
            <a
              href={syllabusUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-[11px] text-text-dim border border-line px-[10px] py-[6px] hover:bg-bg-panel transition-colors"
              title="Buka di tab baru"
            >
              <FiExternalLink className="text-[14px]" />
            </a>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center w-[34px] h-[34px] border border-line text-line-bright hover:text-xp hover:border-xp transition-colors"
              title="Tutup"
            >
              <FiX className="text-[18px]" />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-hidden relative">
          <iframe
            src={`${syllabusUrl}#toolbar=1&view=FitH`}
            className="w-full h-full border-0"
            title={`Silabus ${courseTitle}`}
          />
        </div>

        {/* Footer */}
        <div className="border-t-2 border-line px-[20px] py-[10px] bg-bg-panel shrink-0 flex items-center justify-between">
          <p className="font-mono text-[10px] text-text-dim">
            Tekan <kbd className="bg-bg-deep border border-line px-1 py-0.5 text-[9px]">ESC</kbd> atau klik di luar untuk menutup
          </p>
          <button
            onClick={onClose}
            className="font-mono text-[11px] px-[14px] py-[6px] border-2 border-line hover:border-xp hover:text-xp transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  )
}
