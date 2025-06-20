import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Navigation from '@/components/Navigation';
import CustomCursor from '@/components/CustomCursor';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://planckk.com'),
  title: {
    default: 'Planckk - Lightning-Fast Digital Transformation | 6-Hour Website Delivery',
    template: '%s | Planckk - Digital Innovation Experts'
  },
  description: 'Transform your business with Planckk\'s lightning-fast digital services. Get professional websites in 6 hours, expert video editing, AI-powered marketing, and complete digital transformation solutions. 500+ satisfied clients, 99% satisfaction rate.',
  keywords: [
    // Primary keywords
    'digital transformation services',
    'website development 6 hours',
    'fast website creation',
    'professional web design',
    'video editing services',
    'digital marketing agency',
    'mobile app development',
    'SEO optimization services',
    'social media management',
    'custom software development',
    
    // Long-tail keywords
    'lightning fast website delivery',
    'same day website development',
    'professional video editing company',
    'digital transformation consultant',
    'startup website development',
    'business digitization services',
    'AI-powered marketing solutions',
    'responsive web design agency',
    'e-commerce website development',
    'brand identity design services',
    
    // Location-based
    'web development company India',
    'digital agency Chennai',
    'website design services India',
    
    // Industry-specific
    'startup digital services',
    'small business website development',
    'enterprise digital transformation',
    'SaaS website development',
    'fintech web solutions',
    'healthcare website development',
    'education platform development',
    
    // Technology keywords
    'React website development',
    'Next.js web applications',
    'modern web technologies',
    'progressive web apps',
    'headless CMS development',
    'API development services',
    'cloud-native applications',
    'microservices architecture'
  ],
  authors: [{ name: 'Planckk Digital Innovation Team', url: 'https://planckk.com/about' }],
  creator: 'Planckk',
  publisher: 'Planckk Digital Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION ? {
      google: process.env.GOOGLE_SITE_VERIFICATION
    } : {}),
    ...(process.env.YANDEX_SITE_VERIFICATION ? {
      yandex: process.env.YANDEX_SITE_VERIFICATION
    } : {}),
    ...(process.env.YAHOO_SITE_VERIFICATION ? {
      yahoo: process.env.YAHOO_SITE_VERIFICATION
    } : {}),
    other: {
      ...(process.env.BING_SITE_VERIFICATION ? {
        'msvalidate.01': process.env.BING_SITE_VERIFICATION
      } : {}),
      ...(process.env.FACEBOOK_DOMAIN_VERIFICATION ? {
        'facebook-domain-verification': process.env.FACEBOOK_DOMAIN_VERIFICATION
      } : {})
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
    siteName: 'Planckk - Digital Transformation Experts',
    title: 'Planckk - Lightning-Fast Digital Transformation | 6-Hour Website Delivery',
    description: 'Transform your business with Planckk\'s lightning-fast digital services. Professional websites in 6 hours, expert video editing, AI-powered marketing. 500+ satisfied clients worldwide.',
    images: [
      {
        url: '/OpenGraph images/og-3.png',
        width: 1200,
        height: 630,
        alt: 'Planckk - Digital Transformation Services | Fast Website Development',
        type: 'image/png'
      },
      {
        url: '/OpenGraph images/og-1.png',
        width: 1200,
        height: 630,
        alt: 'Professional Web Development in 6 Hours',
        type: 'image/png'
      },
      {
        url: '/OpenGraph images/og-2.png',
        width: 1200,
        height: 630,
        alt: 'Digital Marketing & Video Editing Services',
        type: 'image/png'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@planckk',
    creator: '@planckk',
    title: 'Planckk - Lightning-Fast Digital Transformation | 6-Hour Website Delivery',
    description: 'Transform your business with professional websites in 6 hours, expert video editing, and AI-powered marketing solutions. Join 500+ satisfied clients.',
    images: ['/OpenGraph images/og-3.png'],
  },
  alternates: {
    canonical: 'https://planckk.com',
    languages: {
      'en-US': 'https://planckk.com',
      'en-GB': 'https://planckk.com',
      'en-IN': 'https://planckk.com',
    },
  },
  category: 'Digital Services',
  classification: 'Business Technology Services',
  other: {
    'google-site-verification': 'your-google-verification-code',
    'msvalidate.01': 'your-bing-verification-code',
    'yandex-verification': 'your-yandex-verification-code',
    'p:domain_verify': 'your-pinterest-verification-code',
    'fb:app_id': 'your-facebook-app-id',
    'apple-mobile-web-app-title': 'Planckk',
    'application-name': 'Planckk Digital Services',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'theme-color': '#7c3aed',
    'color-scheme': 'light',
    'supported-color-schemes': 'light',
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
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/images/planckk-logo.png" as="image" type="image/png" />
        
        {/* Additional meta tags for better SEO */}
        <meta name="theme-color" content="#7c3aed" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Planckk" />
        <meta name="application-name" content="Planckk Digital Services" />
        
        {/* Geo tags */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai" />
        <meta name="geo.position" content="13.0827;80.2707" />
        <meta name="ICBM" content="13.0827, 80.2707" />
        
        {/* Business information */}
        <meta name="rating" content="5" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="1 days" />
        <meta name="expires" content="never" />
        <meta name="language" content="English" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="subject" content="Digital Transformation Services" />
        <meta name="copyright" content="Planckk Digital Services" />
        <meta name="abstract" content="Professional digital transformation services including lightning-fast website development, video editing, and marketing solutions." />
        <meta name="topic" content="Digital Services, Web Development, Video Editing, Digital Marketing" />
        <meta name="summary" content="Planckk delivers professional digital transformation services with lightning-fast turnaround times. Specializing in 6-hour website delivery, expert video editing, and comprehensive digital marketing solutions." />
        <meta name="Classification" content="Business" />
        <meta name="designer" content="Planckk Design Team" />
        <meta name="reply-to" content="info@planckk.com" />
        <meta name="owner" content="Planckk Digital Services" />
        <meta name="url" content="https://planckk.com" />
        <meta name="identifier-URL" content="https://planckk.com" />
        <meta name="directory" content="submission" />
        <meta name="pagename" content="Planckk - Digital Transformation Services" />
        <meta name="category" content="Digital Services" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="subtitle" content="Lightning-Fast Digital Solutions" />
        
        {/* Enhanced structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://planckk.com/#organization",
                  "name": "Planckk",
                  "url": "https://planckk.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://planckk.com/images/planckk-logo.png",
                    "width": 512,
                    "height": 512
                  },
                  "description": "Professional digital transformation services with lightning-fast delivery. Specializing in 6-hour website development, video editing, and comprehensive digital marketing solutions.",
                  "foundingDate": "2023",
                  "founders": [
                    {
                      "@type": "Person",
                      "name": "Arjun Patel",
                      "jobTitle": "Founder & CEO"
                    }
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Chennai",
                    "addressRegion": "Tamil Nadu",
                    "addressCountry": "IN",
                    "postalCode": "600001"
                  },
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "telephone": "+91-93841-07679",
                      "contactType": "customer service",
                      "email": "info@planckk.com",
                      "availableLanguage": ["English", "Hindi"],
                      "areaServed": "Worldwide"
                    },
                    {
                      "@type": "ContactPoint",
                      "telephone": "+91-93841-07679",
                      "contactType": "sales",
                      "email": "sales@planckk.com",
                      "availableLanguage": ["English"],
                      "areaServed": "Worldwide"
                    }
                  ],                  "sameAs": [
                    process.env.NEXT_PUBLIC_TWITTER_URL,
                    process.env.NEXT_PUBLIC_LINKEDIN_URL,
                    process.env.NEXT_PUBLIC_FACEBOOK_URL,
                    process.env.NEXT_PUBLIC_INSTAGRAM_URL
                  ].filter(Boolean),
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "500",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Digital Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Website Development",
                          "description": "Professional website creation delivered in 6 hours"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Video Editing",
                          "description": "Professional video editing and motion graphics services"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Digital Marketing",
                          "description": "Comprehensive digital marketing and SEO services"
                        }
                      }
                    ]
                  },
                  "knowsAbout": [
                    "Web Development",
                    "Digital Marketing",
                    "Video Editing",
                    "Mobile App Development",
                    "SEO Optimization",
                    "Social Media Management",
                    "Digital Transformation",
                    "UI/UX Design",
                    "E-commerce Development",
                    "Brand Identity Design"
                  ],
                  "areaServed": {
                    "@type": "Place",
                    "name": "Worldwide"
                  },
                  "serviceArea": {
                    "@type": "Place",
                    "name": "Worldwide"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://planckk.com/#website",
                  "url": "https://planckk.com",
                  "name": "Planckk - Digital Transformation Services",
                  "description": "Professional digital transformation services with lightning-fast delivery",
                  "publisher": {
                    "@id": "https://planckk.com/#organization"
                  },
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://planckk.com/search?q={search_term_string}"
                      },
                      "query-input": "required name=search_term_string"
                    }
                  ],
                  "inLanguage": "en-US"
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://planckk.com/#localbusiness",
                  "name": "Planckk",
                  "image": "https://planckk.com/images/planckk-logo.png",
                  "telephone": "+91-93841-07679",
                  "email": "info@planckk.com",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Chennai",
                    "addressRegion": "Tamil Nadu",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 13.0827,
                    "longitude": 80.2707
                  },
                  "url": "https://planckk.com",
                  "priceRange": "$$",
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday"
                      ],
                      "opens": "00:00",
                      "closes": "23:59"
                    }
                  ],
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "500"
                  }
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://planckk.com/#service",
                  "name": "Planckk Digital Services",
                  "provider": {
                    "@id": "https://planckk.com/#organization"
                  },
                  "areaServed": "Worldwide",
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Digital Transformation Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Lightning-Fast Website Development",
                          "description": "Professional websites delivered in just 6 hours with modern design and functionality"
                        },
                        "priceSpecification": {
                          "@type": "PriceSpecification",
                          "priceCurrency": "INR",
                          "price": "Starting from ₹25,000"
                        }
                      }
                    ]
                  }
                }
              ]
            })
          }}
        />
          {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} ${poppins.variable} ${isCursorEnabled ? 'custom-cursor-enabled' : ''}`}>
        <CustomCursor />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}