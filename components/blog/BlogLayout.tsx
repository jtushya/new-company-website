'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog';
import { Button } from '@/components/ui/button';

interface BlogLayoutProps {
  post: BlogPost;
  children: ReactNode;
}

export default function BlogLayout({ post, children }: BlogLayoutProps) {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/blog">
              <Button 
                variant="outline" 
                className="mb-8 border-white/30 text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime} min read
              </div>
            </div>
            
            {post.tags.length > 0 && (
              <div className="flex items-center flex-wrap gap-2 mt-6">
                <Tag className="w-4 h-4" />
                {post.tags.map((tag, index) => (
                  <Link
                    key={index}
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-sm transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <motion.article
            className="prose prose-lg max-w-4xl lg:min-w-0 lg:flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {children}
          </motion.article>

          {/* Table of Contents Sidebar */}
          <aside className="lg:w-64 xl:w-72">
            <div className="sticky top-24">
              <nav className="space-y-6">
                {/* ToC will be automatically generated from headings */}
                <div className="hidden lg:block">
                  <h4 className="text-sm font-semibold mb-4 text-gray-900">
                    On this page
                  </h4>
                  <div className="text-sm space-y-2">
                    {/* ToC items will be dynamically inserted here */}
                  </div>
                </div>

                {/* Share Buttons */}
                <div>
                  <h4 className="text-sm font-semibold mb-4 text-gray-900">
                    Share this post
                  </h4>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const url = window.location.href;
                        const text = `Check out "${post.title}" on Planckk`;
                        window.open(
                          `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
                          '_blank'
                        );
                      }}
                    >
                      Twitter
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const url = window.location.href;
                        window.open(
                          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
                          '_blank'
                        );
                      }}
                    >
                      LinkedIn
                    </Button>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h4 className="text-sm font-semibold mb-4 text-gray-900">
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Link
                        key={index}
                        href={`/blog?tag=${encodeURIComponent(tag)}`}
                        className="text-sm px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}