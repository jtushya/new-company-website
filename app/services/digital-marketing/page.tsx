'use client';

import { 
  TrendingUp, 
  Target, 
  BarChart3, 
  Users, 
  Search, 
  MessageSquare,
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
    icon: Target,
    title: 'Targeted Campaigns',
    description: 'Reach your ideal customers with precision-targeted advertising campaigns.',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Results',
    description: 'Every decision backed by analytics and performance data.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Search,
    title: 'SEO & SEM',
    description: 'Dominate search results with our SEO and paid search strategies.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: MessageSquare,
    title: 'Social Media',
    description: 'Build engaged communities across all major social platforms.',
    color: 'from-purple-500 to-indigo-500'
  }
];

const process = [
  {
    step: '01',
    title: 'Strategy Development',
    description: 'Analyze your market and create a comprehensive marketing strategy',
    icon: Target
  },
  {
    step: '02',
    title: 'Campaign Launch',
    description: 'Execute multi-channel campaigns across digital platforms',
    icon: TrendingUp
  },
  {
    step: '03',
    title: 'Optimize & Scale',
    description: 'Monitor performance and scale successful campaigns',
    icon: BarChart3
  }
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$999',
    duration: 'per month',
    features: [
      'Social media management',
      'Basic SEO optimization',
      'Google Ads setup',
      'Monthly reporting',
      'Email support'
    ],
    popular: false
  },
  {
    name: 'Growth',
    price: '$2,499',
    duration: 'per month',
    features: [
      'Multi-platform campaigns',
      'Advanced SEO strategy',
      'PPC management',
      'Content creation',
      'Weekly reporting',
      'Phone support'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$4,999',
    duration: 'per month',
    features: [
      'Full-service marketing',
      'Custom strategy',
      'Dedicated account manager',
      'Advanced analytics',
      'Daily monitoring',
      '24/7 support'
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: 'Jennifer Walsh',
    role: 'E-commerce CEO',
    content: 'Our online sales increased by 400% in just 3 months. Their digital marketing strategy is incredible.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Robert Kim',
    role: 'SaaS Founder',
    content: 'They helped us scale from 100 to 10,000 users. ROI was 300% in the first quarter.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
  }
];

export default function DigitalMarketingPage() {
  return (
    <div className="pt-20">
      <ServiceHero
        title="Digital Marketing That Drives Results"
        subtitle="Scale your business with data-driven marketing campaigns"
        description="From SEO to social media, we create comprehensive digital marketing strategies that convert prospects into customers and drive sustainable growth."
        icon={TrendingUp}
        stats={[
          { number: '300%', label: 'Avg ROI Increase' },
          { number: '50+', label: 'Campaigns Managed' },
          { number: '2M+', label: 'Leads Generated' }
        ]}
      />

      <ServiceFeatures
        title="Comprehensive Digital Marketing"
        subtitle="All the tools you need to dominate your market"
        features={features}
      />

      <ServiceProcess
        title="Our Marketing Process"
        subtitle="Strategic approach to digital marketing success"
        steps={process}
      />

      <ServicePricing
        title="Marketing Packages"
        subtitle="Scalable solutions for businesses of all sizes"
        plans={pricingPlans}
      />

      <ServiceTestimonials
        title="Client Success Stories"
        subtitle="Real businesses, real growth, real results"
        testimonials={testimonials}
      />

      <ServiceCTA
        title="Ready to Scale Your Business?"
        subtitle="Let's create a digital marketing strategy that drives real results"
        primaryButtonText="Get Strategy Call"
        secondaryButtonText="View Case Studies"
      />
    </div>
  );
}