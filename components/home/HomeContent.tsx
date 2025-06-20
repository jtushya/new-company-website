'use client';

import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import ServicesSection from '@/components/home/ServicesSection';
import ProcessSection from '@/components/home/ProcessSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

export default function HomeContent() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
