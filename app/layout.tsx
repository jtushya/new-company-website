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
  title: 'Planckk - Transform Your Digital Presence',
  description: 'Fast, professional, and high-quality web and media services. Get your website delivered in just 6 hours.',
  keywords: 'web development, digital transformation, social media management, SEO, video editing',
  icons: {
    icon: '/images/planckk-logo.png',
    apple: '/images/planckk-logo.png',
  },
  openGraph: {
    title: 'Planckk - Transform Your Digital Presence',
    description: 'Fast, professional, and high-quality web and media services. Get your website delivered in just 6 hours.',
    url: 'https://planckk.com',
    siteName: 'Planckk',
    type: 'website',    images: ['/OpenGraph images/og-3.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Planckk - Transform Your Digital Presence',
    description: 'Fast, professional, and high-quality web and media services. Get your website delivered in just 6 hours.',
    images: ['/OpenGraph images/og-3.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Read environment variable to control custom cursor
  const isCursorEnabled = process.env.NEXT_PUBLIC_CUSTOM_CURSOR === 'true';

  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable} ${isCursorEnabled ? 'custom-cursor-enabled' : ''}`}>
        <CustomCursor />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
