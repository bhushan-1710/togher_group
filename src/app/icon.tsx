import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: '#1B1B18',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#C7E36B',
          borderRadius: '8px',
          fontWeight: 800,
          fontFamily: 'sans-serif',
          letterSpacing: '-0.04em',
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
