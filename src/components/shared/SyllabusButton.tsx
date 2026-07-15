'use client'
import { useState } from 'react'
import { FiFileText } from 'react-icons/fi'
import SyllabusModal from '@/components/shared/SyllabusModal'

interface SyllabusButtonProps {
  syllabusUrl: string
  courseTitle: string
}

export default function SyllabusButton({ syllabusUrl, courseTitle }: SyllabusButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  const hasValidSyllabus = syllabusUrl && syllabusUrl !== '#'

  if (!hasValidSyllabus) {
    return (
      <div className="mb-[40px]">
        <button
          className="inline-flex items-center gap-2 font-mono text-[14px] text-text-dim border border-line px-[20px] py-[10px] cursor-not-allowed"
          title="Silabus sedang dalam penyusunan"
          disabled
        >
          <FiFileText className="text-[18px]" /> SILABUS SEGERA HADIR
        </button>
      </div>
    )
  }

  return (
    <>
      <div className="mb-[40px]">
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 font-mono text-[14px] text-xp border border-xp px-[20px] py-[10px] hover:bg-xp/10 transition-colors cursor-pointer"
        >
          <FiFileText className="text-[18px]" /> LIHAT SILABUS LENGKAP
        </button>
      </div>

      <SyllabusModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        syllabusUrl={syllabusUrl}
        courseTitle={courseTitle}
      />
    </>
  )
}
