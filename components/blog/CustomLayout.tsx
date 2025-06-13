'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface CustomLayoutProps {
  post: BlogPost;
  children: ReactNode;
}

export default function CustomLayout({ post, children }: CustomLayoutProps) {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section with Image */}
      <div className="relative h-96 bg-gradient-to-r from-purple-600 to-pink-600 overflow-hidden">
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            className="text-white max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/blog">
              <Button 
                variant="outline" 
                className="mb-6 border-white/30 text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-200 leading-relaxed">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Article Meta */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            className="flex flex-wrap items-center justify-between gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2 text-purple-600" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-purple-600" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-purple-600" />
                {post.readTime} min read
              </div>
            </div>
            
            <Button variant="outline" className="flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </motion.div>
          
          {post.tags.length > 0 && (
            <motion.div
              className="flex items-center flex-wrap gap-2 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Tag className="w-4 h-4 text-purple-600" />
              {post.tags.map((tag, index) => (
                <Link
                  key={index}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="bg-purple-100 hover:bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-sm transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <article className="prose prose-lg max-w-none prose-purple">
              {children}
            </article>
          </motion.div>
          
          {/* Sidebar */}
          <motion.aside
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Table of Contents</h3>
                <div className="space-y-2 text-sm">
                  <a href="#introduction" className="block text-gray-600 hover:text-purple-600 transition-colors">
                    Introduction
                  </a>
                  <a href="#main-content" className="block text-gray-600 hover:text-purple-600 transition-colors">
                    Main Content
                  </a>
                  <a href="#conclusion" className="block text-gray-600 hover:text-purple-600 transition-colors">
                    Conclusion
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}