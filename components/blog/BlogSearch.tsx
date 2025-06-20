'use client';

import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BlogMetadata } from '@/lib/blog';

interface BlogSearchProps {
  initialPosts: BlogMetadata[];
  onSearch?: (results: BlogMetadata[]) => void;
}

export default function BlogSearch({ initialPosts, onSearch }: BlogSearchProps) {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Client-side search implementation
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query.trim()) {
        setIsSearching(true);
        const searchTerms = query.toLowerCase().split(' ').filter(Boolean);
        
        const results = initialPosts.filter(post => {
          const searchableText = [
            post.title,
            post.excerpt,
            post.author,
            ...post.tags
          ].join(' ').toLowerCase();
          
          return searchTerms.every(term => searchableText.includes(term));
        });

        onSearch?.(results);
        setIsSearching(false);
      } else {
        onSearch?.(initialPosts);
        setIsSearching(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, initialPosts, onSearch]);

  const handleClear = () => {
    setQuery('');
    onSearch?.(initialPosts);
  };

  return (
    <div className="relative w-full md:w-96">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        <Input
          type="text"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-10"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
            onClick={handleClear}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}