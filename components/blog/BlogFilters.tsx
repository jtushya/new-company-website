'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tag as TagIcon, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface BlogFiltersProps {
  tags: string[];
  onFilter?: (tags: string[]) => void;
}

export default function BlogFilters({ tags, onFilter }: BlogFiltersProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagToggle = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    
    setSelectedTags(newTags);
    onFilter?.(newTags);
  };

  const handleClearFilters = () => {
    setSelectedTags([]);
    onFilter?.([]);
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-700">Filter by topic:</h3>
        {selectedTags.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearFilters}
            className="text-gray-500 hover:text-gray-700 h-8 px-2"
          >
            <X className="w-4 h-4 mr-1" />
            Clear filters
          </Button>
        )}
      </div>

      <ScrollArea className="w-full whitespace-nowrap rounded-lg pb-2">
        <div className="flex gap-2">
          {tags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTags.includes(tag) ? 'default' : 'secondary'}
              size="sm"
              onClick={() => handleTagToggle(tag)}
              className={`
                flex items-center gap-1.5 whitespace-nowrap h-8
                ${selectedTags.includes(tag)
                  ? 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              <TagIcon className="w-3 h-3" />
              {tag}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
    </div>
  );
}