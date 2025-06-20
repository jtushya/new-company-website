import { Suspense } from 'react';
import Image from 'next/image';
import { getAllPosts, getAllTags, getFeaturedPosts } from '@/lib/blog';
import BlogListLayout from '@/components/blog/BlogListLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Planckk',
  description: 'Explore the latest articles and insights on technology, design, and digital innovation.',
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const tags = await getAllTags();
  const featuredPosts = await getFeaturedPosts();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <Image
                src="/images/planckk-logo.png"
                alt="Planckk"
                width={80}
                height={80}
                className="rounded-full shadow-lg"
                priority
              />
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
              Our Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our thoughts on technology, design, and digital innovation
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <Suspense 
          fallback={
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="animate-pulse text-gray-600">Loading blog posts...</div>
            </div>
          }
        >
          <BlogListLayout 
            initialPosts={posts} 
            initialTags={tags} 
            featuredPosts={featuredPosts}
          />
        </Suspense>
      </div>
    </div>
  );
}