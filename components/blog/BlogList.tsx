'use client';

import { useState } from 'react';
import { BlogMetadata } from '@/lib/blog';
import BlogCard from './BlogCard';
import BlogSearch from './BlogSearch';
import BlogFilters from './BlogFilters';
import BlogPagination from './BlogPagination';

const POSTS_PER_PAGE = 6;

interface BlogListProps {
  initialPosts: BlogMetadata[];
  initialTags: string[];
}

export default function BlogList({ initialPosts, initialTags }: BlogListProps) {
  const [filteredPosts, setFilteredPosts] = useState(initialPosts);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

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
          post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
        )
      );
      setFilteredPosts(filtered);
    }
    setCurrentPage(1);
  };

  const featuredPosts = initialPosts.filter(post => post.featured);

  return (
    <div className="space-y-12">
      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        </div>
      )}

      {/* Search and Filters */}
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start">
          <BlogSearch initialPosts={initialPosts} onSearch={handleSearch} />
          <BlogFilters tags={initialTags} onFilter={handleFilter} />
        </div>
        
        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-lg text-gray-600">No matching posts found.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedPosts.map((post, index) => (
                <BlogCard 
                  key={post.slug} 
                  post={post} 
                  index={startIndex + index} 
                />
              ))}
            </div>

            {totalPages > 1 && (
              <BlogPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
