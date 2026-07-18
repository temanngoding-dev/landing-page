import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'Teman Ngoding'
  const description = searchParams.get('desc') || 'Belajar IT Lebih Cepat'

  // Load the existing OG image as background
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
        {/* Background: existing OG image */}
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

        {/* Gradient overlay for text readability */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: 'linear-gradient(to top, rgba(10,13,24,0.95), rgba(10,13,24,0.6), transparent)',
            display: 'flex',
          }}
        />

        {/* Text overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50px',
            right: '50px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: '#dfe3f5',
              lineHeight: 1.2,
              display: 'flex',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#8891b8',
              lineHeight: 1.4,
              display: 'flex',
            }}
          >
            {description}
          </div>

          {/* Accent bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: '8px',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '4px',
                background: '#52e0a8',
                display: 'flex',
              }}
            />
            <div
              style={{
                fontSize: 14,
                color: '#52e0a8',
                letterSpacing: '2px',
                display: 'flex',
              }}
            >
              temanngoding.id
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
