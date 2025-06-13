'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServicePricing from '@/components/services/ServicePricing';
import ServiceTestimonials from '@/components/services/ServiceTestimonials';
import ServiceCTA from '@/components/services/ServiceCTA';
import { 
  Search, 
  TrendingUp, 
  Target, 
  BarChart3,
  FileText,
  MousePointer,
  Eye,
  DollarSign
} from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Keyword Research',
    description: 'Comprehensive keyword analysis to target high-value search terms',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: TrendingUp,
    title: 'On-Page SEO',
    description: 'Optimize your website content and structure for search engines',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Target,
    title: 'Google Ads Management',
    description: 'Strategic PPC campaigns that maximize ROI and drive conversions',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: BarChart3,
    title: 'Performance Tracking',
    description: 'Detailed analytics and reporting to measure success and optimize',
    color: 'from-orange-500 to-red-500'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'SEO Audit',
    description: 'Comprehensive analysis of your current search performance and opportunities',
    icon: Search
  },
  {
    step: '02',
    title: 'Strategy Development',
    description: 'Create targeted SEO and PPC strategies based on your business goals',
    icon: Target
  },
  {
    step: '03',
    title: 'Implementation & Optimization',
    description: 'Execute campaigns and continuously optimize for maximum performance',
    icon: TrendingUp
  }
];

const pricingPlans = [
  {
    name: 'Local SEO',
    price: '$1,200',
    duration: 'per month',
    features: [
      'Local keyword optimization',
      'Google My Business setup',
      'Citation building',
      'Monthly reporting',
      '10 target keywords'
    ],
    popular: false
  },
  {
    name: 'SEO + Google Ads',
    price: '$2,800',
    duration: 'per month',
    features: [
      'Comprehensive SEO strategy',
      'Google Ads management',
      'Keyword research & optimization',
      'Landing page optimization',
      'Bi-weekly reporting',
      '25 target keywords',
      '$2,000 ad spend included'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$5,500',
    duration: 'per month',
    features: [
      'Full-scale SEO campaign',
      'Multi-platform PPC management',
      'Advanced analytics setup',
      'Conversion rate optimization',
      'Weekly strategy calls',
      'Unlimited keywords',
      '$5,000 ad spend included',
      'Dedicated account manager'
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: 'Robert Chen',
    role: 'E-commerce Director',
    content: 'Our organic traffic increased by 400% and Google Ads ROI improved to 8:1. Exceptional results!',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Maria Gonzalez',
    role: 'Local Business Owner',
    content: 'We went from page 3 to #1 on Google for our main keywords. Phone calls and foot traffic doubled.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
  }
];

export default function SEOGoogleAds() {
  return (
    <div className="pt-20">
      <ServiceHero
        title="SEO & Google Ads"
        subtitle="Dominate search results and drive qualified traffic"
        description="Strategic SEO and targeted Google Ads campaigns that increase visibility, drive qualified traffic, and maximize your return on investment."
        icon={Search}
        stats={[
          { number: '400%', label: 'Avg Traffic Increase' },
          { number: '8:1', label: 'Average ROI' },
          { number: '#1', label: 'Rankings Achieved' }
        ]}
      />
      
      <ServiceFeatures
        title="Complete Search Marketing"
        subtitle="Comprehensive SEO and PPC strategies that drive visibility and conversions."
        features={features}
      />
      
      <ServiceProcess
        title="Our Search Marketing Process"
        subtitle="A data-driven approach to dominating search results and maximizing ROI."
        steps={processSteps}
      />
      
      <ServicePricing
        title="Search Marketing Packages"
        subtitle="Choose the right package to boost your search visibility and drive qualified traffic."
        plans={pricingPlans}
      />
      
      <ServiceTestimonials
        title="Search Success Stories"
        subtitle="See how we've helped businesses achieve top rankings and exceptional ROI."
        testimonials={testimonials}
      />
      
      <ServiceCTA
        title="Ready to Dominate Search Results?"
        subtitle="Let's increase your visibility and drive qualified traffic that converts."
        primaryButtonText="Start Campaign"
        secondaryButtonText="Get SEO Audit"
      />
    </div>
  );
}