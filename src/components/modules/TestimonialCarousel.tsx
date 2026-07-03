'use client'

import { useState, useEffect } from 'react'
import { testimonials } from '@/constants'

// Imported testimonials from constants

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden w-full">
      <div 
        className="flex transition-transform duration-500 ease-in-out" 
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {testimonials.map((t) => (
          <div key={t.id} className="w-full shrink-0 px-1">
            <figure className="bg-bg-panel-2 border-2 border-dashed border-line-bright p-[32px] flex flex-col md:flex-row gap-[24px] items-center h-full">
              <div className="w-[56px] h-[56px] shrink-0 bg-gold [clip-path:polygon(50%_0%,100%_38%,82%_100%,18%_100%,0%_38%)] flex items-center justify-center text-[24px]" aria-hidden="true">🏆</div>
              <div className="flex-1">
                <div className="font-mono text-[11px] text-gold mb-[8px]">ACHIEVEMENT UNLOCKED — &quot;{t.achievement}&quot;</div>
                <blockquote className="text-[16px] leading-[1.6] text-text-main mb-[8px]">
                  &quot;{t.text}&quot;
                </blockquote>
                <figcaption className="font-mono text-[12px] text-text-dim">— <cite>{t.author}</cite></figcaption>
              </div>
            </figure>
          </div>
        ))}
      </div>
      
      {/* Indicators */}
      <div className="flex justify-center gap-[8px] mt-[24px]">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-[10px] h-[10px] border border-line-bright transition-all duration-300 cursor-pointer ${
              i === current ? 'bg-gold border-gold shadow-[0_0_6px_rgba(255,200,87,0.5)]' : 'bg-bg-deep hover:bg-line'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
