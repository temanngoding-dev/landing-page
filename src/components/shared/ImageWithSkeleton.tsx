'use client'

import { useState } from 'react'
import Image, { ImageProps } from 'next/image'
import { FiImage } from 'react-icons/fi'

interface ImageWithSkeletonProps extends Omit<ImageProps, 'src'> {
  src?: string | null
  fallbackIcon?: React.ReactNode
}

export default function ImageWithSkeleton({ className, alt, fallbackIcon, src, ...props }: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  if (!src || hasError) {
    return (
      <div className={`absolute inset-0 flex items-center justify-center bg-bg-deep ${className || ''}`}>
        {fallbackIcon ? (
          <div className="text-[48px] text-line-bright">{fallbackIcon}</div>
        ) : (
          <FiImage className="text-[48px] text-line-bright" />
        )}
      </div>
    )
  }

  return (
    <>
      {!isLoaded && (
        <div className={`absolute inset-0 bg-bg-panel animate-pulse flex items-center justify-center ${className || ''}`}>
          <div className="w-[30%] h-[30%] opacity-20 border-2 border-line-bright rounded-full animate-spin border-t-xp" />
        </div>
      )}
      <Image
        {...props}
        src={src}
        alt={alt}
        className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className || ''}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </>
  )
}
