import { readdir, readFile } from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
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
    
    const processedContent = await remark()
      .use(html)
      .use(remarkGfm)
      .process(content);
    const contentHtml = processedContent.toString();

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

// Convert markdown to HTML
export async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(markdown);
  return result.toString();
}

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