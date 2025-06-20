'use client';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServicePricing from '@/components/services/ServicePricing';
import ServiceTestimonials from '@/components/services/ServiceTestimonials';
import ServiceCTA from '@/components/services/ServiceCTA';
import { 
  Code, 
  Database, 
  Cloud, 
  Shield,
  Cog,
  Zap,
  Users,
  BarChart3
} from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Tailored software solutions built specifically for your business needs',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Scalable database architecture optimized for performance and growth',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Cloud,
    title: 'Cloud Integration',
    description: 'Modern cloud-native solutions with seamless third-party integrations',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security measures and industry compliance standards',
    color: 'from-red-500 to-orange-500'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Requirements Analysis',
    description: 'Deep dive into your business needs and technical requirements',
    icon: BarChart3
  },
  {
    step: '02',
    title: 'Architecture & Design',
    description: 'Create scalable system architecture and user experience design',
    icon: Cog
  },
  {
    step: '03',
    title: 'Development & Deployment',
    description: 'Agile development process with continuous testing and deployment',
    icon: Code
  }
];

const pricingPlans = [
  {
    name: 'MVP Development',
    price: '₹30,000',
    duration: 'one-time',
    features: [
      'Core functionality development',
      'Basic user interface',
      'Database setup',
      'Testing & deployment',
      '3 months support'
    ],
    popular: false
  },
  {
    name: 'Full Application',
    price: '₹50,000',
    duration: 'one-time',
    features: [
      'Complete custom application',
      'Advanced user interface',
      'Complex integrations',
      'Admin dashboard',
      'Security implementation',
      '6 months support',
      'Training & documentation'
    ],
    popular: true
  },
  {
    name: 'Enterprise Solution',
    price: '₹75,000',
    duration: 'one-time',
    features: [
      'Enterprise-scale application',
      'Multi-platform deployment',
      'Advanced analytics',
      'Custom integrations',
      'High availability setup',
      '12 months support',
      'Dedicated development team',
      'Ongoing maintenance'
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: 'Rahul Shah',
    role: 'Founder, EduTech Startup',
    content: 'They helped us build our MVP within budget. The team was responsive and delivered exactly what we needed to launch.',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Rahul+Shah&background=random'
  },
  {
    name: 'Priya Patel',
    role: 'Small Business Owner',
    content: 'Great experience working with them on our inventory management system. Very professional and understanding of our requirements.',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Priya+Patel&background=random'
  }
];

export default function CustomSoftwareDevelopment() {
  return (
    <div className="pt-20">
      <ServiceHero
        title="Custom Software Development"
        subtitle="Tailored solutions for unique business challenges"
        description="Build powerful, scalable software solutions designed specifically for your business needs. From concept to deployment, we create applications that drive growth and efficiency."
        icon={Code}
        stats={[
          { number: '500+', label: 'Applications Built' },
          { number: '99.9%', label: 'Uptime Achieved' },
          { number: '24/7', label: 'Support Available' }
        ]}
      />
      
      <ServiceFeatures
        title="Enterprise-Grade Development"
        subtitle="Comprehensive software development services that scale with your business."
        features={features}
      />
      
      <ServiceProcess
        title="Our Development Process"
        subtitle="Agile methodology ensuring quality, scalability, and timely delivery."
        steps={processSteps}
      />
      
      <ServicePricing
        title="Development Packages"
        subtitle="Flexible pricing options for projects of any size and complexity."
        plans={pricingPlans}
      />
      
      <ServiceTestimonials
        title="Development Success Stories"
        subtitle="See how our custom solutions have transformed businesses across industries."
        testimonials={testimonials}
      />
      
      <ServiceCTA
        title="Ready to Build Your Custom Solution?"
        subtitle="Let's create software that perfectly fits your business needs and drives growth."
        primaryButtonText="Start Development"
        secondaryButtonText="Schedule Consultation"
      />
    </div>
  );
}