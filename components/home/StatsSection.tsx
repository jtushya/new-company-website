'use client';

import { motion } from 'framer-motion';
import { Clock, Users, Star, CheckCircle } from 'lucide-react';

const stats = [
  { number: '500+', label: 'Happy Clients', icon: Users, color: 'from-blue-500 to-cyan-500' },
  { number: '6hrs', label: 'Avg Delivery', icon: Clock, color: 'from-green-500 to-emerald-500' },
  { number: '99%', label: 'Satisfaction', icon: Star, color: 'from-yellow-500 to-orange-500' },
  { number: '24/7', label: 'Support', icon: CheckCircle, color: 'from-purple-500 to-pink-500' },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}