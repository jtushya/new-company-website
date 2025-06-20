export async function GET() {
  const baseUrl = 'https://planckk.com';
  
  const services = [
    {
      slug: 'website-creation',
      title: 'Lightning-Fast Website Development',
      description: 'Professional websites delivered in 6 hours',
      priority: '0.9'
    },
    {
      slug: 'video-editing',
      title: 'Professional Video Editing Services',
      description: 'Expert video editing and motion graphics',
      priority: '0.8'
    },
    {
      slug: 'digital-marketing',
      title: 'Digital Marketing & SEO Services',
      description: 'Comprehensive digital marketing solutions',
      priority: '0.8'
    },
    {
      slug: 'mobile-app-development',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps',
      priority: '0.8'
    },
    {
      slug: 'social-media-management',
      title: 'Social Media Management',
      description: 'Professional social media marketing',
      priority: '0.7'
    },
    {
      slug: 'seo-google-ads',
      title: 'SEO & Google Ads Services',
      description: 'Search engine optimization and paid advertising',
      priority: '0.8'
    },
    {
      slug: 'digital-transformation',
      title: 'Digital Transformation Consulting',
      description: 'Complete business digitization solutions',
      priority: '0.8'
    },
    {
      slug: 'custom-software-development',
      title: 'Custom Software Development',
      description: 'Tailored software solutions for businesses',
      priority: '0.7'
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/services</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  ${services
    .map((service) => {
      return `
    <url>
      <loc>${baseUrl}/services/${service.slug}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${service.priority}</priority>
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