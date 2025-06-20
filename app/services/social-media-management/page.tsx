'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServicePricing from '@/components/services/ServicePricing';
import ServiceTestimonials from '@/components/services/ServiceTestimonials';
import ServiceCTA from '@/components/services/ServiceCTA';
import { 
  Users, 
  TrendingUp, 
  MessageCircle, 
  Camera,
  Calendar,
  BarChart3,
  Heart,
  Share2
} from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Content Planning',
    description: 'Strategic content calendar with engaging posts tailored to your audience',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: MessageCircle,
    title: 'Community Management',
    description: 'Active engagement with your audience and timely response to comments',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Detailed insights and performance metrics to optimize your strategy',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Camera,
    title: 'Visual Content Creation',
    description: 'Eye-catching graphics, videos, and stories that capture attention',
    color: 'from-orange-500 to-red-500'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Strategy Development',
    description: 'Create a comprehensive social media strategy aligned with your brand goals',
    icon: TrendingUp
  },
  {
    step: '02',
    title: 'Content Creation',
    description: 'Develop engaging content that resonates with your target audience',
    icon: Camera
  },
  {
    step: '03',
    title: 'Community Building',
    description: 'Grow and engage your community through consistent, valuable interactions',
    icon: Users
  }
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '₹7500',
    duration: '/month',
    description: 'Perfect for small businesses and personal brands',
    features: [
      '2 Social Platforms',
      '12 Posts per Month',
      'Basic Content Strategy',
      'Monthly Reports',
      'Community Management'
    ],
    popular: false
  },
  {
    name: 'Growth',
    price: '₹15,000',
    duration: '/month',
    description: 'Ideal for growing businesses and influencers',
    features: [
      '4 Social Platforms',
      '24 Posts per Month',
      'Advanced Strategy',
      'Weekly Reports',
      'Paid Ads Management',
      'Influencer Outreach'
    ],
    popular: true
  },
  {
    name: 'Premium',
    price: '₹15,000',
    duration: '/month',
    description: 'Complete social media presence management',
    features: [
      'All Social Platforms',
      'Daily Content',
      'Custom Strategy',
      'Real-time Analytics',
      'Crisis Management',
      'Brand Monitoring'
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: "Neha Sharma",
    role: "Fashion Influencer",
    content: "Their Instagram management helped me grow from 15K to 100K followers in 4 months. The engagement on my posts has tripled!",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Neha+Sharma&background=random&size=150"
  },
  {
    name: "Ravi Malhotra",
    role: "Restaurant Owner",
    content: "Our social media presence has transformed our business. Now 50% of our new customers discover us through Instagram and Facebook.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Ravi+Malhotra&background=random&size=150"
  },
  {
    name: "Pooja Singhania",
    role: "Handicrafts Entrepreneur",
    content: "Their social media strategy helped us showcase our handcrafted products beautifully. Our online sales have grown by 200%.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Pooja+Singhania&background=random&size=150"
  }
];

export default function SocialMediaManagement() {
  return (
    <div className="pt-20">
      <ServiceHero
        title="Social Media Management"
        subtitle="Build communities that convert"
        description="Strategic social media campaigns that build engaged communities, increase brand awareness, and drive meaningful conversions across all major platforms."
        icon={Users}
        stats={[
          { number: '300%', label: 'Avg Engagement' },
          { number: '150K+', label: 'Followers Gained' },
          { number: '24/7', label: 'Community Support' }
        ]}
      />
      
      <ServiceFeatures
        title="Complete Social Media Solutions"
        subtitle="Everything you need to build a powerful social media presence that drives results."
        features={features}
      />
      
      <ServiceProcess
        title="Our Social Media Process"
        subtitle="A proven approach to building engaged communities and driving social media success."
        steps={processSteps}
      />
      
      <ServicePricing
        title="Social Media Packages"
        subtitle="Choose the perfect package to grow your social media presence and engagement."
        plans={pricingPlans}
      />
      
      <ServiceTestimonials
        title="Client Success Stories"
        subtitle="See how we've helped businesses and creators grow their social media presence."
        testimonials={testimonials}
      />
      
      <ServiceCTA
        title="Ready to Grow Your Social Media?"
        subtitle="Let's build an engaged community that drives real business results."
        primaryButtonText="Start Growing"
        secondaryButtonText="View Portfolio"
      />
    </div>
  );
}