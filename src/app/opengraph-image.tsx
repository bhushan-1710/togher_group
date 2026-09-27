import { ImageResponse } from 'next/og';

export const alt = 'Togher Group — Construction & Engineering Recruitment';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#E3E6DC',
          padding: '40px',
        }}
      >
        {/* Floating App Shell card inside */}
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#FFFFFF',
            borderRadius: '28px',
            padding: '45px 55px',
            border: '1px solid rgba(27,27,24,0.08)',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '999px',
                  backgroundColor: '#1B1B18',
                  color: '#C7E36B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: 800,
                }}
              >
                TG
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontSize: '24px',
                    fontWeight: 900,
                    color: '#1B1B18',
                    letterSpacing: '-0.03em',
                  }}
                >
                  TOGHER GROUP
                </span>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#8A8E82',
                    letterSpacing: '0.15em',
                  }}
                >
                  INTERNATIONAL RECRUITMENT NETWORK
                </span>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: '999px',
                backgroundColor: '#DEEBC9',
                color: '#2F4500',
                fontSize: '14px',
                fontWeight: 700,
              }}
            >
              DUBLIN · LONDON · FRANKFURT · SYDNEY
            </div>
          </div>

          {/* Headline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div
              style={{
                display: 'flex',
                fontSize: '48px',
                fontWeight: 800,
                color: '#1B1B18',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                maxWidth: '960px',
              }}
            >
              Supplying expert leaders and specialist trades for global infrastructure.
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: '20px',
                color: '#8A8E82',
                maxWidth: '820px',
                lineHeight: 1.4,
              }}
            >
              Tier-1 Construction & Engineering Recruitment · Rapid 48h Dispatch · 100% Vetted Compliance
            </div>
          </div>

          {/* Footer metrics strip */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              paddingTop: '24px',
              borderTop: '1px solid rgba(27,27,24,0.08)',
            }}
          >
            <div style={{ display: 'flex', gap: '48px' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '24px', fontWeight: 800, color: '#1B1B18' }}>
                  48-Hour
                </span>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#8A8E82', textTransform: 'uppercase' }}>
                  Rapid Dispatch
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '24px', fontWeight: 800, color: '#1B1B18' }}>
                  100%
                </span>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#8A8E82', textTransform: 'uppercase' }}>
                  Vetted Compliance
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '24px', fontWeight: 800, color: '#1B1B18' }}>
                  5 Regions
                </span>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#8A8E82', textTransform: 'uppercase' }}>
                  IE · UK · EU · US · AU
                </span>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                padding: '10px 24px',
                borderRadius: '999px',
                backgroundColor: '#1B1B18',
                color: '#FFFFFF',
                fontSize: '15px',
                fontWeight: 700,
              }}
            >
              toghergroup.com
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
