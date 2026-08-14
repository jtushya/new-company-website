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
    description: 'Optimize your website content, meta tags, and structure for search engines',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Target,
    title: 'Technical SEO Audit',
    description: 'Fix crawl issues, improve site speed, and enhance indexability',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: BarChart3,
    title: 'Performance Tracking',
    description: 'Detailed search ranking reports and analytics to measure organic growth',
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
    description: 'Create targeted SEO optimization strategies based on your business goals',
    icon: Target
  },
  {
    step: '03',
    title: 'Implementation & Optimization',
    description: 'Execute on-page, technical, and content improvements for search dominance',
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
    name: 'Pro SEO',
    price: '₹14,999',
    duration: '/month',
    description: 'Comprehensive search presence and ranking management',
    features: [
      'Full SEO Service',
      'Content Strategy & Optimization',
      'Backlink Strategy',
      'Weekly Reporting',
      'Competitor Analysis',
    ],
    popular: true
  },
  {
    name: 'Enterprise SEO',
    price: '₹19,999',
    duration: '/month',
    description: 'Full-scale organic search optimization for large brands',
    features: [
      'Advanced Technical SEO',
      'Custom Content Architecture',
      'International SEO',
      'Advanced Analytics & Tracking',
      'Dedicated SEO Manager'
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: "Rahul Gupta",
    role: "Local Business Owner",
    content: "Our organic traffic increased by 300% and we're now ranking #1 on Google for all our main target keywords!",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Rahul+Gupta&background=random&size=150"
  },
  {
    name: "Sunita Reddy",
    role: "Restaurant Owner",
    content: "After their SEO work, our store appears on the first page for all relevant local searches. Walk-in customers have increased significantly.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Sunita+Reddy&background=random&size=150"
  },
  {
    name: "Karthik Iyer",
    role: "Business Owner",
    content: "Their technical SEO expertise helped fix all indexing issues and boosted our search rankings across major search engines dramatically.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Karthik+Iyer&background=random&size=150"
  }
];

export default function SEOService() {
  return (
    <div className="pt-20">
      <ServiceHero
        title="Search Engine Optimization (SEO)"
        subtitle="Dominate search results and drive high-intent organic traffic"
        description="Strategic SEO services that increase search visibility, drive high-intent organic traffic, and build sustainable long-term business growth."
        icon={Search}
        stats={[
          { number: '400%', label: 'Avg Traffic Increase' },
          { number: '95%', label: 'Top 10 Rankings' },
          { number: '#1', label: 'Rankings Achieved' }
        ]}
      />
      
      <ServiceFeatures
        title="Comprehensive SEO Services"
        subtitle="Data-driven search engine optimization strategies that drive visibility and organic conversions."
        features={features}
      />
      
      <ServiceProcess
        title="Our SEO Process"
        subtitle="A proven, systematic approach to dominating search engine rankings."
        steps={processSteps}
      />
      
      <ServicePricing
        title="SEO Packages"
        subtitle="Choose the right package to boost your search visibility and capture qualified organic leads."
        plans={pricingPlans}
      />
      
      <ServiceTestimonials
        title="SEO Success Stories"
        subtitle="See how we've helped businesses achieve top organic rankings and consistent traffic growth."
        testimonials={testimonials}
      />
      
      <ServiceCTA
        title="Ready to Dominate Search Results?"
        subtitle="Let's increase your search visibility and drive qualified organic traffic that converts."
        primaryButtonText="Start SEO Project"
        secondaryButtonText="Get Free SEO Audit"
      />
    </div>
  );
}