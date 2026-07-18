import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

// Image metadata
export const alt = 'Teman Ngoding — Belajar IT Lebih Cepat'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  const ogImageData = await readFile(
    join(process.cwd(), 'public/assets/images/web/og-image.png')
  )
  const ogImageBase64 = `data:image/png;base64,${ogImageData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={ogImageBase64}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
