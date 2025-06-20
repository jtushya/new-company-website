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

const plans = [
  {
    name: 'Starter',
    price: '₹9,999',
    duration: '/month',
    description: 'Perfect for small businesses just starting with digital marketing',
    features: [
      'Social Media Management (2 platforms)',
      'Basic SEO Setup',
      'Monthly Performance Reports',
      'Email Marketing Setup',
      'Basic Content Strategy'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '₹14,999',
    duration: '/month',
    description: 'Ideal for growing businesses looking to scale their online presence',
    features: [
      'Social Media Management (4 platforms)',
      'Advanced SEO & Content Strategy',
      'PPC Campaign Management',
      'Weekly Performance Reports',
      'Email Marketing Automation',
      'Lead Generation Setup'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '₹18,999',
    duration: '/month',
    description: 'Comprehensive solution for established businesses',
    features: [
      'Full-Service Digital Marketing',
      'Custom Strategy Development',
      'All Social Media Platforms',
      'Advanced Analytics & Reporting',
      'Marketing Automation',
      'Dedicated Account Manager'
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: "Vikram Singh",
    role: "E-commerce CEO",
    content: "Our online sales grew by 300% in just 3 months. Their digital marketing strategy helped us reach the right audience effectively.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Vikram+Singh&background=random&size=150"
  },
  {
    name: "Meera Kapoor",
    role: "Marketing Director",
    content: "Fantastic ROI on our digital campaigns. We saw a 200% increase in qualified leads within the first quarter.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Meera+Kapoor&background=random&size=150"
  },
  {
    name: "Arun Verma",
    role: "Food Industry Entrepreneur",
    content: "Their social media management and PPC campaigns helped us become a trusted name in our niche. Our customer base has doubled!",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Arun+Verma&background=random&size=150"
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
        plans={plans}
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