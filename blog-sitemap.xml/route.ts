import { getAllPosts } from '@/lib/blog';

export async function GET() {
  const posts = await getAllPosts();
  const baseUrl = 'https://planckk.com';

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${posts
    .map((post) => {
      return `
    <url>
      <loc>${baseUrl}/blog/${post.slug}</loc>
      <lastmod>${new Date(post.date).toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>${post.featured ? '0.8' : '0.6'}</priority>
      ${post.image ? `
      <image:image>
        <image:loc>${post.image}</image:loc>
        <image:title>${post.title}</image:title>
        <image:caption>${post.excerpt}</image:caption>
      </image:image>` : ''}
    </url>`;
    })
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}