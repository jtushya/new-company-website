'use client';

import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import ServicesSection from '@/components/home/ServicesSection';
import ProcessSection from '@/components/home/ProcessSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Schema markup for homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Planckk - Transform Your Digital Presence in 6 Hours",
            "description": "Fast, professional, and high-quality web and media services. Get your website delivered in just 6 hours.",
            "url": "https://planckk.com",
            "mainEntity": {
              "@type": "Organization",
              "name": "Planckk",
              "offers": [
                {
                  "@type": "Service",
                  "name": "Website Development",
                  "description": "Professional website creation delivered in 6 hours"
                },
                {
                  "@type": "Service", 
                  "name": "Digital Transformation",
                  "description": "Complete digital transformation solutions for businesses"
                },
                {
                  "@type": "Service",
                  "name": "Video Editing",
                  "description": "Professional video editing and motion graphics"
                }
              ]
            }
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