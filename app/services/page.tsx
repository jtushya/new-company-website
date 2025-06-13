'use client';

import { motion } from 'framer-motion';
import { 
  Play, 
  Globe, 
  TrendingUp, 
  Smartphone, 
  ArrowRight,
  Zap,
  Users,
  Search,
  Palette,
  Code,
  BarChart3
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    title: 'Video Editing',
    description: 'Professional video editing with stunning visuals, motion graphics, and cinematic storytelling that captivates your audience.',
    icon: Play,
    color: 'from-purple-500 to-pink-500',
    href: '/services/video-editing',
    features: ['Motion Graphics', 'Color Grading', 'Audio Enhancement', 'Social Media Formats']
  },
  {
    title: 'Website Creation',
    description: 'Lightning-fast websites delivered in just 6 hours with modern design, responsive layouts, and optimized performance.',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    href: '/services/website-creation',
    features: ['6-Hour Delivery', 'Responsive Design', 'SEO Optimized', 'Modern UI/UX']
  },
  {
    title: 'Digital Transformation',
    description: 'Complete digital overhaul of your business processes, systems, and customer experiences for the modern age.',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
    href: '/services/digital-transformation',
    features: ['Process Automation', 'Cloud Migration', 'Digital Strategy', 'Technology Integration']
  },
  {
    title: 'Social Media Management',
    description: 'Strategic social media campaigns that build communities, increase engagement, and drive meaningful conversions.',
    icon: Users,
    color: 'from-pink-500 to-rose-500',
    href: '/services/social-media-management',
    features: ['Content Strategy', 'Community Management', 'Analytics & Reporting', 'Influencer Outreach']
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven marketing campaigns across all digital channels that convert visitors into loyal customers.',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500',
    href: '/services/digital-marketing',
    features: ['PPC Campaigns', 'Email Marketing', 'Conversion Optimization', 'Marketing Automation']
  },
  {
    title: 'SEO & Google Ads',
    description: 'Dominate search results with strategic SEO and targeted Google Ads that drive qualified traffic and sales.',
    icon: Search,
    color: 'from-indigo-500 to-purple-500',
    href: '/services/seo-google-ads',
    features: ['Keyword Research', 'On-Page SEO', 'Google Ads Management', 'Performance Tracking']
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences and drive engagement.',
    icon: Smartphone,
    color: 'from-orange-500 to-red-500',
    href: '/services/mobile-app-development',
    features: ['iOS & Android', 'Cross-Platform', 'UI/UX Design', 'App Store Optimization']
  },
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions built from the ground up to solve your unique business challenges and scale with growth.',
    icon: Code,
    color: 'from-teal-500 to-blue-500',
    href: '/services/custom-software-development',
    features: ['Custom Solutions', 'Scalable Architecture', 'API Integration', 'Ongoing Support']
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Background shapes */}
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              From lightning-fast websites to comprehensive digital transformations, 
              we offer the complete suite of services to elevate your digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover-target"
              >
                <Zap className="mr-2 w-5 h-5" />
                Get Started
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
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete <span className="text-gradient">Digital Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every service designed to accelerate your digital transformation and drive measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={service.href}>
                  <Card className="h-full hover-lift cursor-pointer group service-card border-0 shadow-lg relative overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <CardContent className="p-8 relative z-10">
                      <motion.div 
                        className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`} />
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-purple-600 font-semibold group-hover:text-pink-600 transition-colors">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-pink-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss your project and see how we can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover-target"
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
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}