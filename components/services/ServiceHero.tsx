'use client';

import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  stats: Array<{
    number: string;
    label: string;
  }>;
}

export default function ServiceHero({ title, subtitle, description, icon: Icon, stats }: ServiceHeroProps) {
  return (
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-violet-500 rounded-2xl flex items-center justify-center mr-4">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
            </div>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6">{subtitle}</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-started">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover-target"
                >
                  Get Started Now
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm hover:border-white/50 transition-all duration-300"
                >
                  View Examples
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center hover-target"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}