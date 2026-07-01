'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

interface MentorStat {
  label: string
  value: number
  color: string
}

interface MentorData {
  id: string
  name: string
  title: string
  image: string
  stats: MentorStat[]
}

const mentors: MentorData[] = [
  {
    id: 'MENTOR_01',
    name: 'MENTOR_01',
    title: '// Fullstack Engineer · Lv. 27',
    image: '/assets/images/mentor/mirza.png',
    stats: [
      { label: 'EXP (Pengalaman Real)', value: 88, color: '#52e0a8' },
      { label: 'MANA (Kesabaran Ngajar)', value: 70, color: '#7c9bff' },
      { label: 'HP (Respon Chat)', value: 95, color: '#ff5d73' },
    ],
  },
  {
    id: 'MENTOR_02',
    name: 'MENTOR_02',
    title: '// Fullstack Engineer · Lv. 27',
    image: '/assets/images/mentor/rio.png',
    stats: [
      { label: 'EXP (Pengalaman Real)', value: 88, color: '#52e0a8' },
      { label: 'MANA (Kesabaran Ngajar)', value: 70, color: '#7c9bff' },
      { label: 'HP (Respon Chat)', value: 95, color: '#ff5d73' },
    ],
  },
]

const INTERVAL_MS = 4500

export default function MentorCarousel() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % mentors.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, INTERVAL_MS)
    return () => clearInterval(timer)
  }, [isPaused, next])

  return (
    <section
      aria-label="Mentor Carousel"
      aria-roledescription="carousel"
      className="bg-[#12172a] border-2 border-[#4a5694] shadow-[4px_4px_0_#000] p-[22px] relative before:content-['MENTOR.DAT'] before:absolute before:-top-3 before:left-[16px] before:bg-[#0a0d18] before:px-2 before:font-mono before:text-[10px] before:text-[#8891b8] before:tracking-[1px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel viewport */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {mentors.map((mentor) => (
            <div key={mentor.id} className="w-full shrink-0">
              {/* Image */}
              <div className="w-full aspect-square border-2 border-[#2a3358] relative overflow-hidden mb-[16px]">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>

              {/* Name & title */}
              <div className="font-pixel text-[13px] mb-[6px]">{mentor.name}</div>
              <div className="font-mono text-[12px] text-[#8891b8] mb-[18px]">{mentor.title}</div>

              {/* Stats */}
              {mentor.stats.map((stat) => (
                <div key={stat.label} className="mb-3">
                  <div className="flex justify-between font-mono text-[10px] text-[#8891b8] mb-1">
                    <span>{stat.label}</span>
                    <span>{stat.value}%</span>
                  </div>
                  <div className="h-[10px] bg-[#0a0d18] border border-[#2a3358]">
                    <div
                      className="h-full transition-all duration-700"
                      style={{ width: `${stat.value}%`, backgroundColor: stat.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-[8px] mt-[16px]">
        {mentors.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to mentor ${i + 1}`}
            className={`w-[10px] h-[10px] border border-[#4a5694] transition-all duration-300 cursor-pointer ${i === current
                ? 'bg-[#52e0a8] border-[#52e0a8] shadow-[0_0_6px_rgba(82,224,168,0.5)]'
                : 'bg-[#0a0d18] hover:bg-[#2a3358]'
              }`}
          />
        ))}
      </div>
    </section>
  )
}
