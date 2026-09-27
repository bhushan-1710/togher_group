import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#E3E6DC',
};

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Togher Group | International Construction & Engineering Recruitment',
    template: '%s | Togher Group',
  },
  description:
    'Togher Group connects Tier-1 construction contractors with verified engineering management professionals and skilled trades across Ireland, the UK, Europe, the USA and Australia.',
  keywords: [
    'construction recruitment',
    'engineering recruitment',
    'management professionals',
    'trades and labour recruitment',
    'Ireland construction jobs',
    'UK construction recruitment',
    'posted worker compliance',
    'Togher Group',
  ],
  openGraph: {
    title: 'Togher Group | Construction & Engineering Recruitment',
    description:
      'Specialist recruitment and workforce solutions for construction and engineering across Ireland, the UK, Europe, the USA and Australia.',
    url: 'https://www.toghergroup.com',
    siteName: 'Togher Group',
    locale: 'en_IE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Togher Group | International Construction & Engineering Recruitment',
    description:
      'Connecting Tier-1 construction contractors with verified engineering management professionals and skilled trades across Ireland, the UK, Europe, the USA and Australia.',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://www.toghergroup.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EmploymentAgency',
        '@id': 'https://www.toghergroup.com/#organization',
        name: 'Togher Group',
        url: 'https://www.toghergroup.com',
        logo: 'https://www.toghergroup.com/favicon.ico',
        description:
          'Specialist international recruitment and workforce solutions for construction and engineering across Ireland, the UK, Europe, the USA and Australia.',
        founder: {
          '@type': 'Person',
          name: 'Steve Togher',
          jobTitle: 'Managing Director',
        },
        address: [
          {
            '@type': 'PostalAddress',
            streetAddress: 'Fitzwilliam Square',
            addressLocality: 'Dublin 2',
            addressCountry: 'IE',
          },
          {
            '@type': 'PostalAddress',
            addressLocality: 'Central London',
            addressCountry: 'GB',
          },
        ],
        areaServed: ['IE', 'GB', 'EU', 'US', 'AU'],
        knowsAbout: [
          'Construction Management Recruitment',
          'Trades and Labour Deployment',
          'Quantity Surveying',
          'BIM and MEP Coordination',
          'Civil and Structural Engineering',
          'EU Posted Worker Compliance',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.toghergroup.com/#website',
        url: 'https://www.toghergroup.com',
        name: 'Togher Group',
        publisher: {
          '@id': 'https://www.toghergroup.com/#organization',
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full antialiased bg-[#E3E6DC] text-[#1B1B18] p-0 sm:p-3 md:p-6 lg:p-8 selection:bg-[#C7E36B] selection:text-[#1B1B18]">
        {/* Skip to Content for Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#C7E36B] focus:text-[#1B1B18] focus:rounded-full focus:font-semibold focus:shadow-xl focus:border focus:border-[#1B1B18]/20 focus:outline-none"
        >
          Skip to main content
        </a>
        {/* Floating App Shell Card per design.md Section 2 - full bleed on mobile, rounded card on tablets & desktop */}
        <div className="w-full max-w-[1540px] mx-auto bg-white rounded-none sm:rounded-[28px] md:rounded-[32px] shadow-none sm:shadow-[0_16px_48px_-12px_rgba(27,27,24,0.08)] border-0 sm:border border-[#1B1B18]/6 flex flex-col min-h-screen sm:min-h-[calc(100vh-1.5rem)] md:min-h-[calc(100vh-4rem)] overflow-x-hidden">
          <Header />
          <main id="main-content" className="flex-1 w-full overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

