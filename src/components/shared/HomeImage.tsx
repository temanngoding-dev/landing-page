'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FiImage } from 'react-icons/fi'

interface HomeImageProps {
  src: string
  alt: string
  icon?: string | React.ReactNode
}

export default function HomeImage({ src, alt, icon }: HomeImageProps) {
  const [hasError, setHasError] = useState(false)

  if (!src || hasError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-bg-deep">
        {icon ? (
          <div className="text-[48px] text-line-bright">{icon}</div>
        ) : (
          <FiImage className="text-[48px] text-line-bright" />
        )}
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      onError={() => setHasError(true)}
    />
  )
}
