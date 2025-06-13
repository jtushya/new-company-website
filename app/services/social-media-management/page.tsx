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
    price: '$1,500',
    duration: 'per month',
    features: [
      '3 social media platforms',
      '12 posts per month',
      'Basic graphics design',
      'Community management',
      'Monthly analytics report'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$3,500',
    duration: 'per month',
    features: [
      '5 social media platforms',
      '20 posts per month',
      'Custom graphics & videos',
      'Stories & reels creation',
      'Advanced community management',
      'Bi-weekly strategy calls',
      'Detailed analytics dashboard'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$6,500',
    duration: 'per month',
    features: [
      'All social media platforms',
      'Unlimited posts',
      'Professional video production',
      'Influencer collaborations',
      '24/7 community management',
      'Weekly strategy sessions',
      'Custom reporting',
      'Dedicated account manager'
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: 'Emma Rodriguez',
    role: 'Influencer & Content Creator',
    content: 'My follower count grew from 10K to 100K in just 6 months. The content strategy was spot-on!',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'James Wilson',
    role: 'Restaurant Owner',
    content: 'Our social media presence transformed our business. We see 40% more customers from social media now.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
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