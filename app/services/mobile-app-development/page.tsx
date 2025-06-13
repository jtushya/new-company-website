'use client';

import { 
  Smartphone, 
  Code2, 
  Layers, 
  Zap, 
  Shield, 
  Users,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServicePricing from '@/components/services/ServicePricing';
import ServiceTestimonials from '@/components/services/ServiceTestimonials';
import ServiceCTA from '@/components/services/ServiceCTA';

const features = [
  {
    icon: Code2,
    title: 'Native & Cross-Platform',
    description: 'Build for iOS, Android, or both with optimal performance and user experience.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Layers,
    title: 'Modern UI/UX',
    description: 'Intuitive interfaces that users love, following platform design guidelines.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Optimized apps that load fast and run smoothly on all devices.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Secure & Scalable',
    description: 'Enterprise-grade security with architecture that grows with your business.',
    color: 'from-green-500 to-emerald-500'
  }
];

const process = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'Define app requirements, user flows, and technical specifications',
    icon: Users
  },
  {
    step: '02',
    title: 'Design & Development',
    description: 'Create stunning UI/UX and develop robust, scalable functionality',
    icon: Code2
  },
  {
    step: '03',
    title: 'Testing & Launch',
    description: 'Rigorous testing and smooth deployment to app stores',
    icon: Smartphone
  }
];

const pricingPlans = [
  {
    name: 'MVP App',
    price: '$4,999',
    duration: '4-6 weeks',
    features: [
      'Single platform (iOS or Android)',
      'Core functionality',
      'Basic UI/UX design',
      'App store submission',
      '30 days support'
    ],
    popular: false
  },
  {
    name: 'Business App',
    price: '$12,999',
    duration: '8-12 weeks',
    features: [
      'Cross-platform development',
      'Advanced features',
      'Custom UI/UX design',
      'Backend integration',
      'Analytics integration',
      '90 days support'
    ],
    popular: true
  },
  {
    name: 'Enterprise App',
    price: '$24,999',
    duration: '12-16 weeks',
    features: [
      'Full-featured application',
      'Custom backend development',
      'Advanced security',
      'Third-party integrations',
      'Admin dashboard',
      '6 months support'
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: 'Alex Morgan',
    role: 'Startup Founder',
    content: 'They built our fitness app in 6 weeks. We now have 50K+ downloads and growing fast!',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Maria Santos',
    role: 'Restaurant Chain Owner',
    content: 'Our ordering app increased sales by 200%. The user experience is fantastic.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
  }
];

export default function MobileAppDevelopmentPage() {
  return (
    <div className="pt-20">
      <ServiceHero
        title="Mobile App Development"
        subtitle="Transform your ideas into powerful mobile applications"
        description="From concept to app store, we build native and cross-platform mobile apps that engage users and drive business growth."
        icon={Smartphone}
        stats={[
          { number: '100+', label: 'Apps Developed' },
          { number: '4.8/5', label: 'App Store Rating' },
          { number: '1M+', label: 'Downloads Generated' }
        ]}
      />

      <ServiceFeatures
        title="Why Choose Our App Development?"
        subtitle="Building apps that users love and businesses rely on"
        features={features}
      />

      <ServiceProcess
        title="Our Development Process"
        subtitle="From idea to app store in weeks, not months"
        steps={process}
      />

      <ServicePricing
        title="App Development Packages"
        subtitle="Flexible solutions for every budget and timeline"
        plans={pricingPlans}
      />

      <ServiceTestimonials
        title="App Success Stories"
        subtitle="Real apps, real users, real success"
        testimonials={testimonials}
      />

      <ServiceCTA
        title="Ready to Build Your App?"
        subtitle="Let's turn your app idea into a reality that users will love"
        primaryButtonText="Start Your App"
        secondaryButtonText="View Portfolio"
      />
    </div>
  );
}