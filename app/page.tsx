import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import ServicesSection from '@/components/home/ServicesSection';
import ProcessSection from '@/components/home/ProcessSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import HomeContent from '@/components/home/HomeContent';
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
  return <HomeContent />;
}