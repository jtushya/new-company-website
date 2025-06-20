import { Suspense } from 'react';
import Image from 'next/image';
import { getAllPosts, getAllTags, getFeaturedPosts } from '@/lib/blog';
import BlogListLayout from '@/components/blog/BlogListLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Latest Insights on Digital Transformation & Web Development',
  description: 'Explore the latest articles and insights on technology, design, digital innovation, web development trends, and business transformation strategies.',
  keywords: [
    'digital transformation blog',
    'web development articles',
    'technology insights',
    'design systems',
    'JavaScript tutorials',
    'SEO tips',
    'business digitization',
    'startup advice',
    'tech trends 2024'
  ],
  openGraph: {
    title: 'Planckk Blog - Digital Transformation & Web Development Insights',
    description: 'Stay updated with the latest trends in digital transformation, web development, and technology innovation.',
    type: 'website',
    images: ['/OpenGraph images/og-3.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Planckk Blog - Digital Transformation Insights',
    description: 'Latest articles on web development, digital transformation, and technology trends.',
    images: ['/OpenGraph images/og-3.png'],
  },
  alternates: {
    canonical: 'https://planckk.com/blog',
    types: {
      'application/rss+xml': 'https://planckk.com/blog/rss.xml',
    },
  },
};

interface BlogPageProps {
  searchParams: {
    page?: string;
    tag?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams.page) || 1;
  const currentTag = searchParams.tag;
  
  const posts = await getAllPosts();
  const tags = await getAllTags();
  const featuredPosts = await getFeaturedPosts();
  
  // Filter posts by tag if specified
  const filteredPosts = currentTag 
    ? posts.filter(post => post.tags.includes(currentTag))
    : posts;
    
  // Calculate pagination
  const postsPerPage = 6;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const pageStart = (currentPage - 1) * postsPerPage;
  const pageEnd = pageStart + postsPerPage;
  const currentPosts = filteredPosts.slice(pageStart, pageEnd);
  
  return (
    <>
      {/* Blog-specific schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Planckk Blog",
            "description": "Latest insights on digital transformation, web development, and technology innovation",
            "url": "https://planckk.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Planckk",
              "logo": "https://planckk.com/images/planckk-logo.png"
            },
            "blogPost": posts.slice(0, 10).map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "url": `https://planckk.com/blog/${post.slug}`,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": post.author
              },
              "keywords": post.tags.join(", ")
            }))
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8 flex justify-center">
                <Image
                  src="/images/planckk-logo.png"
                  alt="Planckk Logo"
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
                Explore our thoughts on technology, design, and digital innovation. 
                Stay updated with the latest trends and best practices in web development.
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
    </>
  );
}