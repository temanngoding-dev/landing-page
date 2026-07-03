'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { mentors } from '@/constants'

// Imported mentors from constants

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
      className="bg-bg-panel border-2 border-line-bright shadow-[4px_4px_0_#000] p-[22px] relative before:content-['MENTOR.DAT'] before:absolute before:-top-3 before:left-[16px] before:bg-bg-deep before:px-2 before:font-mono before:text-[10px] before:text-text-dim before:tracking-[1px]"
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
              <div className="w-full aspect-square border-2 border-line relative overflow-hidden mb-[16px]">
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
              <div className="font-mono text-[12px] text-text-dim mb-[18px]">{mentor.title}</div>

              {/* Stats */}
              {mentor.stats.map((stat) => (
                <div key={stat.label} className="mb-3">
                  <div className="flex justify-between font-mono text-[10px] text-text-dim mb-1">
                    <span>{stat.label}</span>
                    <span style={{ color: stat.isBadge ? stat.color : '' }}>{stat.valueText}</span>
                  </div>
                  {!stat.isBadge && (
                    <div className="h-[10px] bg-bg-deep border border-line">
                      <div
                        className="h-full transition-all duration-700"
                        style={{ width: `${stat.percent}%`, backgroundColor: stat.color }}
                      />
                    </div>
                  )}
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
            className={`w-[10px] h-[10px] border border-line-bright transition-all duration-300 cursor-pointer ${i === current
                ? 'bg-xp border-xp shadow-[0_0_6px_rgba(82,224,168,0.5)]'
                : 'bg-bg-deep hover:bg-line'
              }`}
          />
        ))}
      </div>
    </section>
  )
}
