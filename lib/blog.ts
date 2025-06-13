import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

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
export function getAllPostSlugs() {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter(name => name.endsWith('.md') || name.endsWith('.mdx'))
      .map(name => name.replace(/\.(md|mdx)$/, ''));
  } catch (error) {
    return [];
  }
}

// Get all blog posts metadata
export function getAllPosts(): BlogMetadata[] {
  try {
    const slugs = getAllPostSlugs();
    const posts = slugs
      .map(slug => getPostBySlug(slug))
      .filter(post => post !== null) as BlogPost[];
    
    return posts
      .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))
      .map(({ content, ...metadata }) => metadata);
  } catch (error) {
    return [];
  }
}

// Get a single blog post by slug
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
    
    let filePath = '';
    if (fs.existsSync(fullPath)) {
      filePath = fullPath;
    } else if (fs.existsSync(mdxPath)) {
      filePath = mdxPath;
    } else {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    // Calculate read time (average 200 words per minute)
    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      author: data.author || '',
      tags: data.tags || [],
      excerpt: data.excerpt || '',
      content,
      layout: data.layout,
      metaTitle: data.metaTitle,
      metaDescription: data.metaDescription,
      image: data.image,
      readTime,
      featured: data.featured || false,
    };
  } catch (error) {
    return null;
  }
}

// Get posts by tag
export function getPostsByTag(tag: string): BlogMetadata[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => 
    post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  );
}

// Get all unique tags
export function getAllTags(): string[] {
  const allPosts = getAllPosts();
  const tags = new Set<string>();
  
  allPosts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  
  return Array.from(tags).sort();
}

// Get featured posts
export function getFeaturedPosts(): BlogMetadata[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => post.featured);
}

// Convert markdown to HTML
export async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(markdown);
  return result.toString();
}

// Pagination helper
export function getPaginatedPosts(page: number = 1, postsPerPage: number = 6) {
  const allPosts = getAllPosts();
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  
  return {
    posts: allPosts.slice(startIndex, endIndex),
    pagination: {
      currentPage: page,
      totalPages,
      totalPosts,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
    }
  };
}