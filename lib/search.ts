import lunr from 'lunr';
import { getAllPosts, BlogMetadata } from './blog';

let searchIndex: lunr.Index | null = null;
let posts: BlogMetadata[] = [];

// Initialize search index
export async function initializeSearchIndex() {
  posts = await getAllPosts();
  
  searchIndex = lunr(function () {
    this.ref('slug');
    this.field('title', { boost: 10 });
    this.field('excerpt', { boost: 5 });
    this.field('tags', { boost: 3 });
    this.field('author');
    
    posts.forEach(post => {
      this.add({
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        tags: post.tags.join(' '),
        author: post.author,
      });
    });
  });
}

// Search posts
export async function searchPosts(query: string): Promise<BlogMetadata[]> {
  if (!searchIndex) {
    await initializeSearchIndex();
  }
  
  if (!query.trim()) {
    return posts;
  }
  
  try {
    const results = searchIndex!.search(query);
    return results.map(result => 
      posts.find(post => post.slug === result.ref)!
    ).filter(Boolean);
  } catch (error) {
    // Fallback to simple text search
    const lowercaseQuery = query.toLowerCase();
    return posts.filter(post => 
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  }
}
