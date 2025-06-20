import { readdir, readFile } from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { cache } from 'react';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  excerpt: string;
  content: string;
  layout?: string;
  metaTitle?: string;
  metaDescription?: string;
  image?: string;
  readTime?: number;
  featured?: boolean;
}

export interface BlogMetadata {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  excerpt: string;
  layout?: string;
  metaTitle?: string;
  metaDescription?: string;
  image?: string;
  readTime?: number;
  featured?: boolean;
}

// Add Tailwind CSS classes to HTML output
function addTailwindClasses(html: string): string {
  return html
    // Headers
    .replace(/<h1/g, '<h1 class="scroll-m-20 text-4xl font-bold mt-12 mb-6 text-gray-900 border-b pb-4"')
    .replace(/<h2/g, '<h2 class="scroll-m-20 text-3xl font-semibold mt-10 mb-4 text-gray-900"')
    .replace(/<h3/g, '<h3 class="scroll-m-20 text-2xl font-semibold mt-8 mb-3 text-gray-900"')
    // Paragraphs
    .replace(/<p>/g, '<p class="text-lg leading-relaxed mb-6 text-gray-700">')
    // Lists
    .replace(/<ul>/g, '<ul class="my-6 ml-6 list-disc text-gray-700 [&>li]:mt-2">')
    .replace(/<ol>/g, '<ol class="my-6 ml-6 list-decimal text-gray-700 [&>li]:mt-2">')
    // Links
    .replace(
      /<a href="([^"]+)"/g,
      (_, href) => `<a href="${href}" class="font-medium text-purple-600 hover:text-purple-800 underline underline-offset-4 decoration-purple-300 hover:decoration-purple-500 transition-colors"${
        href.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : ''
      }`
    )
    // Code blocks
    .replace(
      /<pre><code class="language-([^"]+)">/g,
      (_, lang) => `
        <div class="relative group">
          <div class="absolute right-4 top-2 text-gray-400 text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">
            ${lang}
          </div>
          <pre class="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6 text-sm"><code class="language-${lang}">`
    )
    .replace(/<\/code><\/pre>/g, '</code></pre></div>')
    // Inline code
    .replace(/<code>/g, '<code class="bg-gray-100 text-purple-600 px-2 py-1 rounded text-sm font-mono">')
    // Blockquotes
    .replace(/<blockquote>/g, '<blockquote class="mt-6 border-l-4 border-purple-500 pl-6 py-4 my-8 bg-purple-50 italic text-gray-700">');
}

// Configure marked options
marked.setOptions({
  gfm: true,
  breaks: true
});

// Update the markdown processing to use our enhanced HTML
export function processMarkdown(content: string): string {
  const html = marked.parse(content);
  return addTailwindClasses(html.toString());
}

// Get all blog post slugs
export async function getAllPostSlugs() {
  try {
    const fileNames = await readdir(postsDirectory);
    return fileNames
      .filter(name => name.endsWith('.md') || name.endsWith('.mdx'))
      .map(name => name.replace(/\.(md|mdx)$/, ''));
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

// Get blog post metadata by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    // Try .md extension first, then .mdx if .md doesn't exist
    let fullPath = path.join(postsDirectory, `${slug}.md`);
    let fileContent: string;
    
    try {
      fileContent = await readFile(fullPath, 'utf8');
    } catch (error) {
      // If .md file doesn't exist, try .mdx
      fullPath = path.join(postsDirectory, `${slug}.mdx`);
      fileContent = await readFile(fullPath, 'utf8');
    }
    
    const { data, content } = matter(fileContent);
    
    // Convert markdown to HTML with enhanced styling
    const contentHtml = processMarkdown(content);

    return {
      slug,
      content: contentHtml,
      title: data.title,
      date: data.date,
      author: data.author,
      tags: data.tags || [],
      excerpt: data.excerpt || '',
      layout: data.layout,
      metaTitle: data.metaTitle,
      metaDescription: data.metaDescription,
      image: data.image,
      readTime: data.readTime,
      featured: data.featured || false,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

// Cache the getAllPosts function to avoid repeated file system reads
export const getAllPosts = cache(async (): Promise<BlogMetadata[]> => {
  try {
    const slugs = await getAllPostSlugs();
    const postsData = await Promise.all(
      slugs.map(async (slug) => {
        try {
          // Try .md extension first
          let fullPath = path.join(postsDirectory, `${slug}.md`);
          let fileContent;
          
          try {
            fileContent = await readFile(fullPath, 'utf8');
          } catch (error) {
            // If .md file doesn't exist, try .mdx
            fullPath = path.join(postsDirectory, `${slug}.mdx`);
            fileContent = await readFile(fullPath, 'utf8');
          }
          
          const { data } = matter(fileContent);
          
          return {
            slug,
            title: data.title,
            date: data.date,
            author: data.author,
            tags: data.tags || [],
            excerpt: data.excerpt || '',
            layout: data.layout,
            metaTitle: data.metaTitle,
            metaDescription: data.metaDescription,
            image: data.image,
            readTime: data.readTime,
            featured: data.featured || false,
          } as BlogMetadata;
        } catch (error) {
          console.error(`Error processing post ${slug}:`, error);
          return null;
        }
      })
    );
    
    // Filter out any null entries and sort posts by date
    return postsData
      .filter((post): post is BlogMetadata => post !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error getting all posts:', error);
    return [];
  }
});

// Cache the getAllTags function
export const getAllTags = cache(async (): Promise<string[]> => {
  try {
    const posts = await getAllPosts();
    const tags = new Set<string>();
    
    posts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    
    return Array.from(tags).sort();
  } catch (error) {
    console.error('Error getting tags:', error);
    return [];
  }
});

// Get featured posts
export const getFeaturedPosts = cache(async (): Promise<BlogMetadata[]> => {
  try {
    const posts = await getAllPosts();
    return posts.filter(post => post.featured);
  } catch (error) {
    console.error('Error getting featured posts:', error);
    return [];
  }
});

// Pagination helper
export async function getPaginatedPosts(page: number = 1, postsPerPage: number = 6): Promise<{
  posts: BlogMetadata[];
  totalPages: number;
  currentPage: number;
}> {
  const allPosts = await getAllPosts();
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const currentPage = Math.max(1, Math.min(page, totalPages));
  
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const posts = allPosts.slice(startIndex, endIndex);
  
  return {
    posts,
    totalPages,
    currentPage
  };
}

// Search posts
export async function searchPosts(query: string): Promise<BlogMetadata[]> {
  const allPosts = await getAllPosts();
  const searchTerms = query.toLowerCase().split(' ').filter(Boolean);
  
  return allPosts.filter(post => {
    const searchableText = [
      post.title,
      post.excerpt,
      post.author,
      ...post.tags
    ].join(' ').toLowerCase();
    
    return searchTerms.every(term => searchableText.includes(term));
  });
}

// Filter posts by multiple tags
export async function filterPostsByTags(tags: string[]): Promise<BlogMetadata[]> {
  if (!tags.length) {
    return getAllPosts();
  }
  
  const allPosts = await getAllPosts();
  return allPosts.filter(post =>
    tags.every(tag =>
      post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
    )
  );
}

// Get related posts
export async function getRelatedPosts(slug: string, limit: number = 3): Promise<BlogMetadata[]> {
  const allPosts = await getAllPosts();
  const currentPost = allPosts.find(post => post.slug === slug);
  
  if (!currentPost) {
    return [];
  }
  
  return allPosts
    .filter(post => post.slug !== slug) // Exclude current post
    .map(post => ({
      post,
      score: post.tags.filter(tag => currentPost.tags.includes(tag)).length
    } as { post: BlogMetadata; score: number }))
    .sort((a, b) => b.score - a.score)
    .map(({ post }) => post)
    .slice(0, limit);
}