'use client';

import { useState, useEffect, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { searchPosts, initializeSearchIndex } from '@/lib/search';
import { BlogMetadata } from '@/lib/blog';

interface BlogSearchProps {
  onResults: (results: BlogMetadata[]) => void;
  placeholder?: string;
}

export default function BlogSearch({ onResults, placeholder = "Search articles..." }: BlogSearchProps) {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Initialize search index on component mount
  useEffect(() => {
    initializeSearchIndex();
  }, []);

  // Debounced search
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query.trim()) {
        setIsSearching(true);
        const results = searchPosts(query);
        onResults(results);
        setIsSearching(false);
      } else {
        onResults([]);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, onResults]);

  const handleClear = () => {
    setQuery('');
    onResults([]);
  };

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-10 h-12 text-lg border-2 border-gray-200 focus:border-purple-500 rounded-xl"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-gray-100"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>
      
      {isSearching && (
        <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-white border border-gray-200 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600"></div>
            <span className="text-sm text-gray-600">Searching...</span>
          </div>
        </div>
      )}
    </div>
  );
}