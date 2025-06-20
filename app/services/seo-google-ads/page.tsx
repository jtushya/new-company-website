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
    name: 'Basic SEO',
    price: '₹10,000',
    duration: '/month',
    description: 'Essential SEO services for small businesses',
    features: [
      'Keyword Research',
      'On-Page SEO',
      'Technical SEO Audit',
      'Monthly Reporting',
      'Local SEO Setup'
    ],
    popular: false
  },
  {
    name: 'SEO + Ads',
    price: '₹14,999',
    duration: '/month',
    description: 'Comprehensive search presence management',
    features: [
      'Full SEO Service',
      'Google Ads Management',
      'Content Strategy',
      'Weekly Reporting',
      'Competitor Analysis',
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '₹19,999',
    duration: '/month',
    description: 'Full-scale search marketing solution',
    features: [
      'Advanced SEO & SEM',
      'Custom Strategy',
      'International SEO',
      'Advanced Analytics',
      'Dedicated Manager'
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: "Rahul Gupta",
    role: "Local Business Owner",
    content: "Our organic traffic increased by 300% and Google Ads ROI improved to 7:1. We're now ranking #1 for our main keywords!",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Rahul+Gupta&background=random&size=150"
  },
  {
    name: "Sunita Reddy",
    role: "Restaurant Owner",
    content: "After their SEO work, our store appears on the first page for all relevant searches. Walk-in customers have increased significantly.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Sunita+Reddy&background=random&size=150"
  },
  {
    name: "Karthik Iyer",
    role: "Business Owner",
    content: "Their Google Ads expertise helped us reduce cost per lead by 40%. Now we're getting more qualified leads within the same budget.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Karthik+Iyer&background=random&size=150"
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