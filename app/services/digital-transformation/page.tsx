'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServicePricing from '@/components/services/ServicePricing';
import ServiceTestimonials from '@/components/services/ServiceTestimonials';
import ServiceCTA from '@/components/services/ServiceCTA';
import { 
  Zap, 
  Cloud, 
  BarChart3, 
  Shield,
  Users,
  Cog,
  TrendingUp,
  Database
} from 'lucide-react';

const features = [
  {
    icon: Cloud,
    title: 'Cloud Migration',
    description: 'Seamlessly migrate your infrastructure to modern cloud platforms',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Cog,
    title: 'Process Automation',
    description: 'Automate repetitive tasks and streamline workflows',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Transform data into actionable business insights',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Shield,
    title: 'Security Enhancement',
    description: 'Implement robust security measures and compliance',
    color: 'from-red-500 to-orange-500'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Assessment',
    description: 'Comprehensive analysis of your current digital infrastructure and processes',
    icon: BarChart3
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'Develop a customized digital transformation roadmap',
    icon: TrendingUp
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Execute the transformation with minimal business disruption',
    icon: Cog
  }
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '₹15,000',
    duration: 'one-time',
    features: [
      'Digital readiness assessment',
      'Basic cloud migration',
      'Process documentation',
      '3 months support',
      'Training for 5 users'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '₹25,000',
    duration: 'one-time',
    features: [
      'Complete digital audit',
      'Full cloud migration',
      'Process automation (5 workflows)',
      'Security implementation',
      '6 months support',
      'Training for 10 users',
      'Custom integrations'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '₹50,000',
    duration: 'one-time',
    features: [
      'Enterprise-wide transformation',
      'Multi-cloud strategy',
      'Advanced automation',
      'AI/ML implementation',
      '12 months support',
      'Unlimited training',
      'Dedicated success manager',
      'Custom development'
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'CTO, Tech Solutions Ltd',
    content: 'Planckk transformed our entire digital infrastructure in just 1 month. The ROI was immediate and substantial.',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Rajesh+Sharma&background=random'
  },
  {
    name: 'Priya Patel',
    role: 'Operations Director, Global Manufacturing',
    content: 'The process automation alone saved us 40 hours per week. Outstanding results and professional service.',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Priya+Patel&background=random'
  }
];

export default function DigitalTransformation() {
  return (
    <div className="pt-20">
      <ServiceHero
        title="Digital Transformation"
        subtitle="Modernize your business for the digital age"
        description="Transform your organization with cutting-edge technology, streamlined processes, and data-driven insights that drive growth and efficiency."
        icon={Zap}
        stats={[
          { number: '300%', label: 'Avg ROI Increase' },
          { number: '60%', label: 'Process Efficiency' },
          { number: '24/7', label: 'System Uptime' }
        ]}
      />
      
      <ServiceFeatures
        title="Complete Digital Transformation"
        subtitle="End-to-end modernization of your business processes and technology infrastructure."
        features={features}
      />
      
      <ServiceProcess
        title="Our Transformation Process"
        subtitle="A systematic approach to modernizing your business for the digital age."
        steps={processSteps}
      />
      
      <ServicePricing
        title="Transformation Packages"
        subtitle="Choose the right level of digital transformation for your business needs."
        plans={pricingPlans}
      />
      
      <ServiceTestimonials
        title="Success Stories"
        subtitle="See how we've helped businesses transform and thrive in the digital age."
        testimonials={testimonials}
      />
      
      <ServiceCTA
        title="Ready to Transform Your Business?"
        subtitle="Let's modernize your operations and unlock new growth opportunities."
        primaryButtonText="Start Transformation"
        secondaryButtonText="Schedule Assessment"
      />
    </div>
  );
}