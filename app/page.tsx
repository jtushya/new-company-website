'use client';

import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import ServicesSection from '@/components/home/ServicesSection';
import ProcessSection from '@/components/home/ProcessSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import { Metadata } from 'next';

// Enhanced metadata for homepage
export const metadata: Metadata = {
  title: 'Planckk - Lightning-Fast Digital Transformation | 6-Hour Website Delivery',
  description: 'Transform your business with Planckk\'s lightning-fast digital services. Get professional websites in 6 hours, expert video editing, AI-powered marketing, and complete digital transformation solutions. 500+ satisfied clients, 99% satisfaction rate.',
  keywords: [
    'digital transformation services',
    'website development 6 hours',
    'fast website creation',
    'professional web design',
    'video editing services',
    'digital marketing agency',
    'mobile app development',
    'lightning fast website delivery',
    'same day website development',
    'startup digital services',
    'business digitization',
    'AI-powered marketing',
    'responsive web design',
    'e-commerce development',
    'SEO optimization services'
  ],
  openGraph: {
    title: 'Planckk - Lightning-Fast Digital Transformation | 6-Hour Website Delivery',
    description: 'Transform your business with professional websites in 6 hours, expert video editing, and AI-powered marketing solutions. Join 500+ satisfied clients worldwide.',
    url: 'https://planckk.com',
    siteName: 'Planckk',
    images: [
      {
        url: '/OpenGraph images/og-3.png',
        width: 1200,
        height: 630,
        alt: 'Planckk - Digital Transformation Services',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Planckk - Lightning-Fast Digital Transformation',
    description: 'Professional websites in 6 hours, expert video editing, AI-powered marketing. Join 500+ satisfied clients.',
    images: ['/OpenGraph images/og-3.png'],
  },
  alternates: {
    canonical: 'https://planckk.com',
  },
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Enhanced schema markup for homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://planckk.com/#webpage",
            "url": "https://planckk.com",
            "name": "Planckk - Lightning-Fast Digital Transformation | 6-Hour Website Delivery",
            "description": "Transform your business with Planckk's lightning-fast digital services. Professional websites in 6 hours, expert video editing, AI-powered marketing solutions.",
            "isPartOf": {
              "@id": "https://planckk.com/#website"
            },
            "about": {
              "@id": "https://planckk.com/#organization"
            },
            "mainEntity": {
              "@type": "Organization",
              "@id": "https://planckk.com/#organization",
              "name": "Planckk",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Digital Transformation Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Lightning-Fast Website Development",
                      "description": "Professional website creation delivered in just 6 hours with modern design, responsive layout, and SEO optimization",
                      "provider": {
                        "@id": "https://planckk.com/#organization"
                      },
                      "areaServed": "Worldwide",
                      "availableChannel": {
                        "@type": "ServiceChannel",
                        "serviceUrl": "https://planckk.com/services/website-creation",
                        "servicePhone": "+91-93841-07679"
                      }
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "INR",
                      "price": "Starting from ₹25,000"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Professional Video Editing",
                      "description": "Expert video editing services with motion graphics, color grading, and professional post-production",
                      "provider": {
                        "@id": "https://planckk.com/#organization"
                      },
                      "areaServed": "Worldwide"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Digital Marketing & SEO",
                      "description": "Comprehensive digital marketing services including SEO, social media management, and paid advertising",
                      "provider": {
                        "@id": "https://planckk.com/#organization"
                      },
                      "areaServed": "Worldwide"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mobile App Development",
                      "description": "Native and cross-platform mobile application development for iOS and Android",
                      "provider": {
                        "@id": "https://planckk.com/#organization"
                      },
                      "areaServed": "Worldwide"
                    }
                  }
                ]
              }
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://planckk.com"
                }
              ]
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", ".hero-description", ".stats-section"]
            }
          })
        }}
      />
      
      {/* FAQ Schema for common questions */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How fast can Planckk deliver a website?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Planckk can deliver a professional, fully-functional website in just 6 hours. Our lightning-fast development process includes modern design, responsive layout, SEO optimization, and content management system setup."
                }
              },
              {
                "@type": "Question",
                "name": "What services does Planckk offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Planckk offers comprehensive digital transformation services including lightning-fast website development, professional video editing, digital marketing, mobile app development, SEO optimization, social media management, and custom software development."
                }
              },
              {
                "@type": "Question",
                "name": "What makes Planckk different from other digital agencies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Planckk stands out with our lightning-fast 6-hour website delivery, 99% client satisfaction rate, 24/7 support, and comprehensive digital transformation approach. We've successfully completed 500+ projects with a focus on quality and speed."
                }
              },
              {
                "@type": "Question",
                "name": "Does Planckk work with startups and small businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Planckk specializes in helping startups and small businesses with their digital transformation journey. We offer scalable solutions, competitive pricing, and fast turnaround times perfect for growing businesses."
                }
              },
              {
                "@type": "Question",
                "name": "What technologies does Planckk use for web development?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Planckk uses modern web technologies including React, Next.js, Node.js, TypeScript, Tailwind CSS, and cloud-native solutions. We focus on performance, scalability, and SEO optimization in all our projects."
                }
              }
            ]
          })
        }}
      />
      
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}