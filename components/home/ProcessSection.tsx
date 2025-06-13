'use client';

import { motion } from 'framer-motion';
import { Users, Palette, Zap } from 'lucide-react';

const process = [
  {
    step: '01',
    title: 'Consultation',
    description: 'Quick 15-minute call to understand your vision and requirements',
    icon: Users,
    color: 'from-blue-500 to-purple-500'
  },
  {
    step: '02',
    title: 'Design & Development',
    description: 'Our expert team crafts your solution with precision and creativity',
    icon: Palette,
    color: 'from-purple-500 to-pink-500'
  },
  {
    step: '03',
    title: 'Lightning Delivery',
    description: 'Receive your completed project in record time without compromising quality',
    icon: Zap,
    color: 'from-pink-500 to-orange-500'
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Simple, efficient, and designed to deliver exceptional results in record time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {process.map((item, index) => (
            <motion.div
              key={index}
              className="text-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-8">
                <motion.div 
                  className={`w-24 h-24 bg-gradient-to-r ${item.color} rounded-3xl flex items-center justify-center mx-auto shadow-xl`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon className="w-12 h-12 text-white" />
                </motion.div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full border-2 border-purple-500 shadow-lg">
                  <span className="text-purple-600 font-bold text-lg">{item.step}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}