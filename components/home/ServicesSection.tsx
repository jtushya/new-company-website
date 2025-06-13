'use client';

import { motion } from 'framer-motion';
import { 
  Play, 
  Globe, 
  TrendingUp, 
  Smartphone, 
  ArrowRight
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    title: 'Video Editing',
    description: 'Professional video editing with stunning visuals and motion graphics',
    icon: Play,
    color: 'from-purple-500 to-pink-500',
    href: '/services/video-editing'
  },
  {
    title: 'Website Creation',
    description: 'Lightning-fast websites delivered in just 6 hours',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    href: '/services/website-creation'
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven campaigns that convert visitors into customers',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500',
    href: '/services/digital-marketing'
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile solutions that engage users',
    icon: Smartphone,
    color: 'from-orange-500 to-red-500',
    href: '/services/mobile-app-development'
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background shapes */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 opacity-10"
        style={{ 
          background: 'linear-gradient(45deg, #667eea, #764ba2)',
          borderRadius: '50% 20% 80% 40%'
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            From concept to completion, we offer comprehensive digital solutions 
            tailored to your unique needs and delivered at lightning speed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={service.href}>
                <Card className="h-full hover-lift cursor-pointer group service-card border-0 shadow-lg">
                  <CardContent className="p-8">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
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

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/services">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-1">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}