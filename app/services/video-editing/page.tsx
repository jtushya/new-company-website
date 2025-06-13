'use client';

import { motion } from 'framer-motion';
import { 
  Play, 
  Film, 
  Scissors, 
  Palette, 
  Music, 
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServicePricing from '@/components/services/ServicePricing';
import ServiceTestimonials from '@/components/services/ServiceTestimonials';
import ServiceCTA from '@/components/services/ServiceCTA';

const features = [
  {
    icon: Film,
    title: 'Professional Editing',
    description: 'Advanced video editing with industry-standard techniques and tools.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Scissors,
    title: 'Precise Cuts',
    description: 'Frame-perfect editing with smooth transitions and seamless flow.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Palette,
    title: 'Color Grading',
    description: 'Professional color correction and grading for cinematic quality.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Music,
    title: 'Audio Enhancement',
    description: 'Crystal clear audio mixing and sound design.',
    color: 'from-orange-500 to-red-500'
  }
];

const process = [
  {
    step: '01',
    title: 'Upload & Brief',
    description: 'Send us your raw footage and editing requirements',
    icon: Play
  },
  {
    step: '02',
    title: 'Professional Edit',
    description: 'Our experts craft your video with precision and creativity',
    icon: Scissors
  },
  {
    step: '03',
    title: 'Review & Deliver',
    description: 'Get your polished video ready for publishing',
    icon: CheckCircle
  }
];

const pricingPlans = [
  {
    name: 'Basic Edit',
    price: '$99',
    duration: '2-3 hours',
    features: [
      'Basic cuts and transitions',
      'Color correction',
      'Audio sync',
      '1 revision included',
      'HD export'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$299',
    duration: '4-6 hours',
    features: [
      'Advanced editing techniques',
      'Color grading',
      'Motion graphics',
      'Audio enhancement',
      '3 revisions included',
      '4K export'
    ],
    popular: true
  },
  {
    name: 'Cinematic',
    price: '$599',
    duration: '6-8 hours',
    features: [
      'Cinematic editing style',
      'Advanced color grading',
      'Custom motion graphics',
      'Sound design',
      'Unlimited revisions',
      '4K + Raw files'
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Content Creator',
    content: 'The video editing quality exceeded my expectations. My YouTube channel growth increased by 300% after using their services.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Mike Chen',
    role: 'Marketing Director',
    content: 'Professional, fast, and creative. They transformed our raw footage into compelling marketing videos.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
  }
];

export default function VideoEditingPage() {
  return (
    <div className="pt-20">
      <ServiceHero
        title="Professional Video Editing"
        subtitle="Transform your raw footage into compelling stories with our expert video editing services"
        description="From YouTube videos to corporate presentations, we deliver high-quality video editing that engages your audience and elevates your brand."
        icon={Play}
        stats={[
          { number: '1000+', label: 'Videos Edited' },
          { number: '4.9/5', label: 'Client Rating' },
          { number: '24hrs', label: 'Avg Turnaround' }
        ]}
      />

      <ServiceFeatures
        title="Why Choose Our Video Editing?"
        subtitle="Professional quality meets lightning-fast delivery"
        features={features}
      />

      <ServiceProcess
        title="Our Video Editing Process"
        subtitle="From raw footage to polished masterpiece in just hours"
        steps={process}
      />

      <ServicePricing
        title="Video Editing Packages"
        subtitle="Choose the perfect package for your video editing needs"
        plans={pricingPlans}
      />

      <ServiceTestimonials
        title="What Our Clients Say"
        subtitle="Real feedback from content creators and businesses"
        testimonials={testimonials}
      />

      <ServiceCTA
        title="Ready to Transform Your Videos?"
        subtitle="Get professional video editing that makes your content stand out"
        primaryButtonText="Start Your Project"
        secondaryButtonText="View Portfolio"
      />
    </div>
  );
}