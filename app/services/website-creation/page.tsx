'use client';

import { motion } from 'framer-motion';
import { 
  Globe, 
  Zap, 
  Smartphone, 
  Search, 
  Shield, 
  Palette,
  Code,
  Rocket,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Star,
  Monitor,
  Layers,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServicePricing from '@/components/services/ServicePricing';
import ServiceTestimonials from '@/components/services/ServiceTestimonials';
import ServiceCTA from '@/components/services/ServiceCTA';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Websites delivered in just 6 hours without compromising quality',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Responsive designs that look perfect on all devices',
    color: 'from-blue-500 to-purple-500'
  },
  {
    icon: Search,
    title: 'SEO Optimized',
    description: 'Built-in SEO best practices for better search rankings',
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: Shield,
    title: 'Secure & Fast',
    description: 'Enterprise-grade security with blazing fast performance',
    color: 'from-red-500 to-pink-500'
  }
];

const process = [
  {
    step: '01',
    title: 'Discovery Call',
    description: 'We understand your vision, goals, and requirements in a quick 15-minute consultation',
    icon: Users
  },
  {
    step: '02',
    title: 'Design & Build',
    description: 'Our expert team creates your custom website with modern design and functionality',
    icon: Palette
  },
  {
    step: '03',
    title: 'Launch & Support',
    description: 'Your website goes live with ongoing support and maintenance included',
    icon: Rocket
  }
];

const plans = [
  {
    name: 'Starter',
    price: '₹6500',
    duration: 'One-time payment',
    features: [
      '5 pages',
      'Mobile responsive design',
      'SEO optimization',
      'Contact form integration',
      '30 days support',
      'SSL certificate included'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '₹9000',
    duration: 'One-time payment',
    features: [
      '10 pages',
      'Custom design & animations',
      'Enhanced SEO optimization',
      'Blog integration',
      // 'E-commerce functionality',
      '60 days support',
      'Performance optimization',
      'Analytics setup'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '₹12,000',
    duration: 'One-time payment',
    features: [
      'Unlimited pages',
      'Custom design & animations',
      'Enhanced SEO optimization',
      'E-commerce functionality',
      'Analytics setup',
      'Custom integrations',
      'AI powered features',
      'AI chatbot integration',
      'Multi-language support',
      // 'admin panel',
      '6 months priority support',
      'Training included'
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Boutique Owner",
    content: "Planckk transformed our boutique website in just 6 hours. Our customers love the new mobile shopping experience!",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Priya+Sharma&background=random&size=150"
  },
  {
    name: "Rajesh Patel",
    role: "Restaurant Owner",
    content: "Our restaurant website looks fantastic. The online ordering system works smoothly, and we have seen a 50% increase in takeaway orders since launch.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Rajesh+Patel&background=random&size=150"
  },
  {
    name: "Anjali Mehta",
    role: "Wellness Center Director",
    content: "The team delivered exactly what we needed - a professional, fast-loading website that showcases our wellness services beautifully.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Anjali+Mehta&background=random&size=150"
  }
];

const stats = [
  { number: '6hrs', label: 'Average Delivery', icon: Clock },
  { number: '500+', label: 'Websites Built', icon: Globe },
  { number: '99%', label: 'Client Satisfaction', icon: Star },
];

export default function WebsiteCreation() {
  return (
    <div className="pt-20">
      {/* Enhanced Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-pink-500 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full opacity-15"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Floating Code Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {i % 4 === 0 && <Code className="w-8 h-8" />}
            {i % 4 === 1 && <Monitor className="w-8 h-8" />}
            {i % 4 === 2 && <Layers className="w-8 h-8" />}
            {i % 4 === 3 && <Settings className="w-8 h-8" />}
          </motion.div>
        ))}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-violet-500 rounded-2xl flex items-center justify-center mr-4 shadow-xl">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Website Creation</h1>
                  <p className="text-xl text-gray-300">Lightning-Fast Web Development</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Get a stunning, professional website delivered in just 6 hours. Our expert team 
                creates custom, responsive websites that convert visitors into customers and 
                perfectly represent your brand online.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover-target shadow-xl"
                >
                  <Zap className="mr-2 w-5 h-5" />
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm hover:border-white/50 transition-all duration-300"
                >
                  View Portfolio
                </Button>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-sm">6-Hour Delivery</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-sm">Mobile Responsive</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-sm">SEO Optimized</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-sm">Ongoing Support</span>
                </div>
              </div>
            </motion.div>
            
            {/* Stats Cards */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover-target"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-xl flex items-center justify-center mr-4">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-1">{stat.number}</div>
                        <div className="text-gray-300 text-sm">{stat.label}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {/* Feature Highlight Card */}
                <motion.div
                  className="bg-gradient-to-r from-pink-500/20 to-violet-500/20 backdrop-blur-lg rounded-2xl p-6 border border-pink-500/30"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-3">Why Choose Our Websites?</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 text-yellow-400 mr-2" />
                      Lightning-fast loading speeds
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-4 h-4 text-green-400 mr-2" />
                      Enterprise-grade security
                    </li>
                    <li className="flex items-center">
                      <Search className="w-4 h-4 text-blue-400 mr-2" />
                      Built-in SEO optimization
                    </li>
                    <li className="flex items-center">
                      <Smartphone className="w-4 h-4 text-purple-400 mr-2" />
                      Perfect on all devices
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <ServiceFeatures
        title="Why Choose Our Website Creation Service?"
        subtitle="We combine speed, quality, and innovation to deliver websites that drive results for your business."
        features={features}
      />

      {/* Process Section */}
      <ServiceProcess
        title="Our Website Creation Process"
        subtitle="From concept to launch in just 6 hours with our streamlined development process."
        steps={process}
      />

      {/* Pricing Section */}
      <ServicePricing
        title="Website Creation Packages"
        subtitle="Choose the perfect package for your business needs. All packages include mobile-responsive design and basic SEO."
        plans={plans}
      />

      {/* Testimonials Section */}
      <ServiceTestimonials
        title="What Our Clients Say"
        subtitle="Don't just take our word for it. Here's what our satisfied clients have to say about our website creation service."
        testimonials={testimonials}
      />

      {/* CTA Section */}
      <ServiceCTA
        title="Ready to Launch Your Website?"
        subtitle="Get a professional, mobile-responsive website delivered in just 6 hours. Start your project today and watch your online presence transform."
        primaryButtonText="Start Your Website"
        secondaryButtonText="Schedule Consultation"
      />
    </div>
  );
}