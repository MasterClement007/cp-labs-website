import { ImageResponse } from 'next/og'

export const alt = 'Clement Tettey Padi — IT Consultant & Technology Partner'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: '#1a2133',
          color: '#f4f2ee',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 12,
              background: '#f4f2ee',
              color: '#1a2133',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            CP
          </div>
          <div style={{ fontSize: 28, opacity: 0.7 }}>Webster, Massachusetts</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>
            Clement Tettey Padi
          </div>
          <div style={{ fontSize: 40, marginTop: 16, color: '#9fb4ec' }}>
            IT Consultant & Technology Partner
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16, fontSize: 24, opacity: 0.8 }}>
          {['IT Consulting', 'Project Management', 'AI Agents', 'Hardware & Software Repair'].map((t) => (
            <div
              key={t}
              style={{ border: '1px solid rgba(244,242,238,0.3)', borderRadius: 999, padding: '8px 20px' }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  )
}
