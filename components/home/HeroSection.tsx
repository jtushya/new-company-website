'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Much darker blue gradient background */}
      <div className="absolute inset-0">
        {/* Main gradient background - very dark blue to deep indigo */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(30, 27, 75, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(49, 46, 129, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(67, 56, 202, 0.12) 0%, transparent 50%),
              linear-gradient(135deg, 
                rgba(15, 23, 42, 0.98) 0%, 
                rgba(30, 27, 75, 0.95) 25%, 
                rgba(49, 46, 129, 0.9) 50%, 
                rgba(67, 56, 202, 0.92) 75%, 
                rgba(79, 70, 229, 0.95) 100%
              )
            `,
          }}
        />

        {/* Purple to pink animated shapes */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-96 h-96 opacity-15"
          style={{
            background: 'linear-gradient(45deg, rgba(147, 51, 234, 0.3), rgba(236, 72, 153, 0.25))',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        {/* Pink to violet animated shapes */}
        <motion.div
          className="absolute top-1/3 right-1/6 w-80 h-80 opacity-12"
          style={{
            background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.25), rgba(139, 92, 246, 0.2))',
            borderRadius: '50% 60% 30% 60% / 60% 40% 60% 40%',
            filter: 'blur(35px)',
          }}
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

        {/* Cyan & teal accent shape */}
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 opacity-15"
          style={{
            background: 'linear-gradient(225deg, rgba(6, 182, 212, 0.18), rgba(16, 185, 129, 0.12))',
            borderRadius: '40% 60% 60% 40% / 60% 30% 70% 40%',
            filter: 'blur(30px)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Colorful floating particles with reduced opacity for darker theme */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 6 === 0 ? '#8b5cf6' : // violet
                         i % 6 === 1 ? '#ec4899' : // pink
                         i % 6 === 2 ? '#06b6d4' : // cyan
                         i % 6 === 3 ? '#10b981' : // emerald
                         i % 6 === 4 ? '#f59e0b' : // amber
                         '#ef4444', // red
            }}
            animate={{
              y: [0, -120, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Subtle grid overlay with darker purple tint */}
        <div 
          className="absolute inset-0 opacity-6"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Enhanced badge with darker background */}
          <motion.div
            className="flex items-center justify-center mb-8"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center bg-gradient-to-r from-slate-800/40 via-violet-900/30 to-purple-900/40 backdrop-blur-lg rounded-full px-6 py-3 border border-violet-400/30 shadow-xl shadow-violet-500/20">
              <Star className="w-5 h-5 text-yellow-400 mr-2 fill-current" />
              <span className="text-sm md:text-base text-white font-semibold">
                #1 Fastest Digital Transformation
              </span>
              <Sparkles className="w-5 h-5 text-yellow-400 ml-2" />
            </div>
          </motion.div>
          
          {/* Main heading with enhanced gradient text */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-white">Transform Your</span>
            <br />
            <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Digital Presence
            </span>
            <br />
            <motion.span 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              in Just 6 Hours
            </motion.span>
          </motion.h1>
          
          {/* Description with excellent contrast on dark background */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-100 max-w-4xl mx-auto px-4 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Fast, professional, and high-quality web and media services for startups, 
            creators, and businesses ready to make their mark in the digital world.
          </motion.p>
          
          {/* Enhanced CTA Buttons with brighter gradients for contrast */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/get-started">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-400 hover:to-purple-400 text-white px-8 py-4 text-lg font-semibold shadow-2xl shadow-violet-500/40 hover:shadow-violet-400/60 hover:-translate-y-1 transition-all duration-300 border-0"
                >
                  <Zap className="mr-2 w-5 h-5" />
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/portfolio">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-pink-300/70 text-pink-100 hover:bg-pink-400/15 px-8 py-4 text-lg backdrop-blur-sm hover:border-pink-300 transition-all duration-300 bg-white/5 shadow-lg shadow-pink-500/25 font-semibold"
                >
                  <Play className="mr-2 w-5 h-5" />
                  View Portfolio
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Enhanced trust indicators with brighter colors for dark background */}
          <motion.div
            className="mt-16 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="text-gray-200 text-sm mb-4 font-medium">Trusted by 500+ businesses worldwide</p>
            <div className="flex items-center space-x-8 opacity-80">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-10 h-10 rounded-xl shadow-lg"
                  style={{
                    background: i % 5 === 0 ? 'linear-gradient(45deg, #a855f7, #c084fc)' : // brighter violet
                               i % 5 === 1 ? 'linear-gradient(45deg, #f472b6, #fb7185)' : // brighter pink
                               i % 5 === 2 ? 'linear-gradient(45deg, #22d3ee, #06b6d4)' : // brighter cyan
                               i % 5 === 3 ? 'linear-gradient(45deg, #34d399, #10b981)' : // brighter emerald
                               'linear-gradient(45deg, #fbbf24, #f59e0b)', // brighter amber
                  }}
                  animate={{
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Much darker bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/80 to-transparent opacity-90" />
    </section>
  );
}