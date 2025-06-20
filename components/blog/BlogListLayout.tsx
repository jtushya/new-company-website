'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BlogMetadata } from '@/lib/blog';
import BlogCard from '@/components/blog/BlogCard';
import BlogSearch from '@/components/blog/BlogSearch';
import BlogFilters from '@/components/blog/BlogFilters';
import BlogPagination from '@/components/blog/BlogPagination';

interface BlogListLayoutProps {
  initialPosts: BlogMetadata[];
  initialTags: string[];
  featuredPosts: BlogMetadata[];
}

const POSTS_PER_PAGE = 6;

export default function BlogListLayout({ 
  initialPosts, 
  initialTags, 
  featuredPosts 
}: BlogListLayoutProps) {
  // Initialize posts state
  const [filteredPosts, setFilteredPosts] = useState<BlogMetadata[]>(initialPosts);
  const [currentPage, setCurrentPage] = useState(1);
  // Calculate pagination
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = Math.min(startIndex + POSTS_PER_PAGE, filteredPosts.length);
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
  
  // Ensure current page is valid
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [filteredPosts.length, currentPage, totalPages]);

  // Handle search results
  const handleSearch = (results: BlogMetadata[]) => {
    setFilteredPosts(results);
    setCurrentPage(1);
  };

  // Handle tag filtering
  const handleFilter = (selectedTags: string[]) => {
    if (selectedTags.length === 0) {
      setFilteredPosts(initialPosts);
    } else {
      const filtered = initialPosts.filter(post =>
        selectedTags.every(tag =>
          post.tags.some(postTag => 
            postTag.toLowerCase() === tag.toLowerCase()
          )
        )
      );
      setFilteredPosts(filtered);
    }
    setCurrentPage(1);
  };

  // Initialize page from URL after mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const page = Number(params.get('page')) || 1;
    const validPage = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(validPage);
  }, [totalPages]);
  // Handle page changes
  const handlePageChange = (newPage: number) => {
    // Ensure the page number is valid
    const validPage = Math.max(1, Math.min(newPage, totalPages));
    
    // Only update if it's actually a different page
    if (validPage !== currentPage) {
      setCurrentPage(validPage);
      
      // Update URL
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        if (validPage === 1) {
          params.delete('page'); // Remove page parameter for page 1
        } else {
          params.set('page', validPage.toString());
        }
        const newUrl = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
        window.history.pushState({}, '', newUrl);
      }
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto space-y-16">      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-8 px-4">
            Featured Articles
          </h2>
          
          {/* Main Featured Post */}
          <div className="mb-8">
            <BlogCard 
              post={featuredPosts[0]} 
              featured={true}
            />
          </div>

          {/* Secondary Featured Posts */}
          {featuredPosts.length > 1 && (
            <div className="grid md:grid-cols-2 gap-6 px-4">
              {featuredPosts.slice(1, 3).map((post: BlogMetadata, index: number) => (
                <BlogCard 
                  key={post.slug} 
                  post={post} 
                  index={index + 1}
                />
              ))}
            </div>
          )}
        </motion.section>
      )}

      {/* Search and Filters Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="px-4 space-y-8"
      >
        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <BlogSearch initialPosts={initialPosts} onSearch={handleSearch} />
        </div>

        {/* Tags Filter */}
        <BlogFilters tags={initialTags} onFilter={handleFilter} />

        {/* Results Summary */}
        <div className="flex justify-between items-center">
          <p className="text-gray-600 font-medium">
            {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white rounded-xl border border-gray-100"
          >
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        ) : (          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {paginatedPosts.map((post: BlogMetadata, index: number) => (
              <BlogCard 
                key={post.slug} 
                post={post} 
                index={startIndex + index} 
              />
            ))}
          </motion.div>
        )}        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <BlogPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </motion.section>
    </div>
  );
}
