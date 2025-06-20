'use client';

import { useMemo } from 'react';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import { MDXComponents } from './MDXComponents';

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  const components = useMemo(() => MDXComponents, []);
  const processedContent = useMemo(() => {
    return source;
  }, [source]);

  return (
    <div className="mdx-content prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-500">
      <div 
        className="markdown-body"
        dangerouslySetInnerHTML={{ 
          __html: processedContent 
        }} 
      />
    </div>
  );
}
