'use client'

import { useState, useEffect, useCallback } from 'react'
import ImageWithSkeleton from '@/components/shared/ImageWithSkeleton'
import { mentors } from '@/constants'
import type { MentorBadge } from '@/types'

// Badge color & icon config
const BADGE_CONFIG: Record<MentorBadge, { color: string; glow: string; icon: string }> = {
  NEWBIE:       { color: '#8a8a8a', glow: 'rgba(138,138,138,0.3)', icon: '🌱' },
  PROFESSIONAL: { color: '#52e0a8', glow: 'rgba(82,224,168,0.3)',  icon: '⚡' },
  MASTER:       { color: '#7c9bff', glow: 'rgba(124,155,255,0.3)', icon: '🔷' },
  HEROES:       { color: '#ffc857', glow: 'rgba(255,200,87,0.3)',  icon: '🛡️' },
  KING:         { color: '#ff5d73', glow: 'rgba(255,93,115,0.3)',  icon: '👑' },
  GOD:          { color: '#c084fc', glow: 'rgba(192,132,252,0.4)', icon: '✦' },
}

const INTERVAL_MS = 4500

function getBadgeFromLevel(level: number): MentorBadge {
  if (level <= 16) return 'NEWBIE'
  if (level <= 33) return 'PROFESSIONAL'
  if (level <= 50) return 'MASTER'
  if (level <= 66) return 'HEROES'
  if (level <= 83) return 'KING'
  return 'GOD'
}

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
          {mentors.map((mentor) => {
            const badgeName = getBadgeFromLevel(mentor.level)
            const badgeCfg = BADGE_CONFIG[badgeName]
            return (
              <div key={mentor.id} className="w-full shrink-0">
                {/* Image */}
                <div className="w-full aspect-square border-2 border-line relative overflow-hidden mb-[16px]">
                  <ImageWithSkeleton
                    src={mentor.image}
                    alt={mentor.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  {/* Badge overlay */}
                  <div
                    className="absolute top-[12px] right-[12px] flex items-center gap-[6px] px-[10px] py-[5px] border backdrop-blur-sm font-mono text-[10px] font-bold tracking-[1px]"
                    style={{
                      borderColor: badgeCfg.color,
                      color: badgeCfg.color,
                      backgroundColor: 'rgba(10,15,28,0.75)',
                      boxShadow: `0 0 12px ${badgeCfg.glow}`,
                    }}
                  >
                    <span>{badgeCfg.icon}</span>
                    <span>{badgeName}</span>
                  </div>
                </div>

                {/* Name & title */}
                <div className="flex items-center gap-[10px] mb-[4px]">
                  <span className="font-pixel text-[13px] text-text-main">{mentor.name}</span>
                </div>
                <div className="flex items-center gap-[10px] mb-[14px]">
                  <span className="font-mono text-[12px] text-text-dim">{mentor.title}</span>
                  <span className="font-mono text-[11px] font-bold" style={{ color: badgeCfg.color }}>
                    Lv.{mentor.level}
                  </span>
                </div>

                {/* Level Progress Bar */}
                <div className="mb-[16px]">
                  <div className="flex justify-between font-mono text-[10px] text-text-dim mb-[4px]">
                    <span>LEVEL PROGRESS</span>
                    <span style={{ color: badgeCfg.color }}>Lv.{mentor.level} / 99</span>
                  </div>
                  <div className="h-[8px] bg-bg-deep border border-line relative overflow-hidden">
                    <div
                      className="h-full transition-all duration-1000"
                      style={{
                        width: `${(mentor.level / 99) * 100}%`,
                        background: `linear-gradient(90deg, ${badgeCfg.color}cc, ${badgeCfg.color})`,
                        boxShadow: `0 0 8px ${badgeCfg.glow}`,
                      }}
                    />
                  </div>
                </div>

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
            )
          })}
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
