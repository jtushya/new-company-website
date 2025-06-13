'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface BlogFiltersProps {
  tags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  onClearFilters: () => void;
}

export default function BlogFilters({ tags, selectedTags, onTagToggle, onClearFilters }: BlogFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="border-2 border-gray-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold text-lg">Filter by Tags</h3>
          </div>
          
          <div className="flex items-center space-x-2">
            {selectedTags.length > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={onClearFilters}
                className="text-red-600 border-red-200 hover:bg-red-50"
              >
                <X className="w-4 h-4 mr-1" />
                Clear ({selectedTags.length})
              </Button>
            )}
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="md:hidden"
            >
              {isExpanded ? 'Hide' : 'Show'} Filters
            </Button>
          </div>
        </div>
        
        <AnimatePresence>
          <motion.div
            className={`${isExpanded ? 'block' : 'hidden'} md:block`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => {
                const isSelected = selectedTags.includes(tag);
                return (
                  <motion.button
                    key={tag}
                    onClick={() => onTagToggle(tag)}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isSelected
                        ? 'bg-purple-600 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Tag className="w-3 h-3 mr-1 inline" />
                    {tag}
                  </motion.button>
                );
              })}
            </div>
            
            {tags.length === 0 && (
              <p className="text-gray-500 text-center py-4">No tags available</p>
            )}
          </motion.div>
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}