import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Navigation from '@/components/Navigation';
import CustomCursor from '@/components/CustomCursor';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://planckk.com'),
  title: {
    default: 'Planckk - Transform Your Digital Presence in 6 Hours',
    template: '%s | Planckk'
  },
  description: 'Fast, professional, and high-quality web and media services. Get your website delivered in just 6 hours. Expert digital transformation, video editing, and marketing solutions.',
  keywords: [
    'web development',
    'digital transformation', 
    'video editing',
    'social media management',
    'SEO services',
    'website creation',
    'mobile app development',
    'digital marketing',
    'fast website delivery',
    '6 hour website',
    'professional web design',
    'startup services',
    'business digitization'
  ],
  authors: [{ name: 'Planckk Team' }],
  creator: 'Planckk',
  publisher: 'Planckk',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/planckk-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/planckk-logo.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/images/planckk-logo.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/images/planckk-logo.png'
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://planckk.com',
    siteName: 'Planckk',
    title: 'Planckk - Transform Your Digital Presence in 6 Hours',
    description: 'Fast, professional, and high-quality web and media services. Get your website delivered in just 6 hours.',
    images: [
      {
        url: '/OpenGraph images/og-3.png',
        width: 1200,
        height: 630,
        alt: 'Planckk - Digital Transformation Services',
        type: 'image/png'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@planckk',
    creator: '@planckk',
    title: 'Planckk - Transform Your Digital Presence in 6 Hours',
    description: 'Fast, professional, and high-quality web and media services. Get your website delivered in just 6 hours.',
    images: ['/OpenGraph images/og-3.png'],
  },
  alternates: {
    canonical: 'https://planckk.com',
  },
  category: 'technology',
  classification: 'Business Services',
  other: {
    'google-site-verification': 'your-google-verification-code',
    'msvalidate.01': 'your-bing-verification-code',
    'yandex-verification': 'your-yandex-verification-code',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Read environment variable to control custom cursor
  const isCursorEnabled = process.env.NEXT_PUBLIC_CUSTOM_CURSOR === 'true';

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://ik.imagekit.io" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Planckk",
              "url": "https://planckk.com",
              "logo": "https://planckk.com/images/planckk-logo.png",
              "description": "Fast, professional, and high-quality web and media services. Get your website delivered in just 6 hours.",
              "foundingDate": "2023",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Arjun Patel"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chennai",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-93841-07679",
                "contactType": "customer service",
                "email": "info@planckk.com"
              },
              "sameAs": [
                "https://twitter.com/planckk",
                "https://linkedin.com/company/planckk"
              ],
              "services": [
                "Website Development",
                "Digital Transformation",
                "Video Editing",
                "Social Media Management",
                "SEO Services",
                "Mobile App Development",
                "Digital Marketing"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} ${poppins.variable} ${isCursorEnabled ? 'custom-cursor-enabled' : ''}`}>
        <CustomCursor />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}