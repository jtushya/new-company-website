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
    price: '₹10,000',
    duration: '/project',
    description: 'Perfect for MVPs and simple applications',
    features: [
      'Native iOS or Android App',
      'Basic User Authentication',
      'Up to 5 Core Features',
      '3 months Support',
      'App Store Submission'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '₹20,000',
    duration: '/project',
    description: 'Ideal for businesses needing a robust mobile presence',
    features: [
      'Native iOS and Android Apps',
      'Advanced Authentication',
      'Up to 10 Core Features',
      'Payment Integration',
      '6 months Support',
      'Analytics Integration'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '₹50,000',
    duration: '/project',
    description: 'Comprehensive solution for complex applications',
    features: [
      'Full Custom Development',
      'Advanced Security Features',
      'Unlimited Features',
      'API Development',
      '1 Year Support',
      'Custom Admin Dashboard'
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: "Deepak Kumar",
    role: "Fitness App Founder",
    content: "Our fitness app was ready in just 2 weeks! The user experience is amazing and we're seeing great download numbers.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Deepak+Kumar&background=random&size=150"
  },
  {
    name: "Shalini Desai",
    role: "Restaurant Chain CEO",
    content: "The food delivery app they built has streamlined our operations completely. Order accuracy has improved by 90%.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Shalini+Desai&background=random&size=150"
  },
  {
    name: "Arjun Nair",
    role: "Fintech Director",
    content: "Their expertise in fintech apps is outstanding. Our payment app got featured on the Play Store for its security features.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Arjun+Nair&background=random&size=150"
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