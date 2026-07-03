'use client'

import { useState } from 'react'
import Image, { ImageProps } from 'next/image'

export default function ImageWithSkeleton({ className, alt, ...props }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      {!isLoaded && (
        <div className={`absolute inset-0 bg-bg-panel animate-pulse flex items-center justify-center ${className || ''}`}>
          <div className="w-[30%] h-[30%] opacity-20 border-2 border-line-bright rounded-full animate-spin border-t-xp" />
        </div>
      )}
      <Image
        {...props}
        alt={alt}
        className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className || ''}`}
        onLoad={() => setIsLoaded(true)}
      />
    </>
  )
}
