import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 76,
          background: '#1B1B18',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#C7E36B',
          borderRadius: '40px',
          fontWeight: 800,
          fontFamily: 'sans-serif',
          letterSpacing: '-0.04em',
          border: '6px solid #C7E36B',
        }}
      >
        TG
      </div>
    ),
    {
      ...size,
    }
  );
}
