'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, Clock, Users } from 'lucide-react';
import BlogCard from '@/components/blog/BlogCard';
import BlogSearch from '@/components/blog/BlogSearch';
import BlogFilters from '@/components/blog/BlogFilters';
import BlogPagination from '@/components/blog/BlogPagination';
import { getAllPosts, getAllTags, getFeaturedPosts, getPaginatedPosts, BlogMetadata } from '@/lib/blog';
import { Card, CardContent } from '@/components/ui/card';

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [allPosts, setAllPosts] = useState<BlogMetadata[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<BlogMetadata[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<BlogMetadata[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSearching, setIsSearching] = useState(false);

  // Load data on component mount
  useEffect(() => {
    const posts = getAllPosts();
    const tags = getAllTags();
    const featured = getFeaturedPosts();
    
    setAllPosts(posts);
    setAllTags(tags);
    setFeaturedPosts(featured);
  }, []);

  // Handle search results
  const handleSearchResults = (results: BlogMetadata[]) => {
    setSearchResults(results);
    setIsSearching(results.length > 0 || results.length === 0);
    setCurrentPage(1);
  };

  // Handle tag filtering
  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSelectedTags([]);
    setCurrentPage(1);
  };

  // Filter posts based on selected tags and search
  const filteredPosts = useMemo(() => {
    let posts = isSearching ? searchResults : allPosts;
    
    if (selectedTags.length > 0) {
      posts = posts.filter(post =>
        selectedTags.some(tag => post.tags.includes(tag))
      );
    }
    
    return posts;
  }, [allPosts, searchResults, selectedTags, isSearching]);

  // Paginate filtered posts
  const paginatedData = useMemo(() => {
    const totalPosts = filteredPosts.length;
    const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    
    return {
      posts: filteredPosts.slice(startIndex, endIndex),
      pagination: {
        currentPage,
        totalPages,
        totalPosts,
        hasNextPage: currentPage < totalPages,
        hasPrevPage: currentPage > 1,
      }
    };
  }, [filteredPosts, currentPage]);

  const stats = [
    { icon: BookOpen, label: 'Total Articles', value: allPosts.length },
    { icon: TrendingUp, label: 'Featured Posts', value: featuredPosts.length },
    { icon: Clock, label: 'Avg Read Time', value: '5 min' },
    { icon: Users, label: 'Authors', value: new Set(allPosts.map(p => p.author)).size },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Insights, tutorials, and stories from the world of digital transformation, 
              web development, and creative design.
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <BlogSearch onResults={handleSearchResults} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && !isSearching && selectedTags.length === 0 && (
        <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured <span className="text-gradient">Articles</span>
              </h2>
              <p className="text-xl text-gray-600">
                Our most popular and insightful content
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.slice(0, 3).map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <BlogFilters
                  tags={allTags}
                  selectedTags={selectedTags}
                  onTagToggle={handleTagToggle}
                  onClearFilters={handleClearFilters}
                />
              </div>
            </div>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {isSearching ? 'Search Results' : 'All Articles'}
                </h2>
                <p className="text-gray-600">
                  {isSearching 
                    ? `Found ${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''}`
                    : `${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''} available`
                  }
                  {selectedTags.length > 0 && (
                    <span> filtered by: {selectedTags.join(', ')}</span>
                  )}
                </p>
              </motion.div>

              {paginatedData.posts.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {paginatedData.posts.map((post, index) => (
                      <BlogCard key={post.slug} post={post} index={index} />
                    ))}
                  </div>

                  <BlogPagination
                    pagination={paginatedData.pagination}
                    onPageChange={setCurrentPage}
                  />
                </>
              ) : (
                <Card className="text-center py-16">
                  <CardContent>
                    <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      No articles found
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {isSearching 
                        ? 'Try adjusting your search terms or filters'
                        : 'Check back soon for new content!'
                      }
                    </p>
                    {(isSearching || selectedTags.length > 0) && (
                      <button
                        onClick={() => {
                          setSearchResults([]);
                          setSelectedTags([]);
                          setIsSearching(false);
                        }}
                        className="text-purple-600 hover:text-purple-800 font-medium"
                      >
                        Clear all filters
                      </button>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}