import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';
import { MDXComponents } from '@/components/blog/MDXComponents';
import BlogLayout from '@/components/blog/BlogLayout';
import CustomLayout from '@/components/blog/CustomLayout';
import { Metadata } from 'next';
import { MDXContent } from '@/components/blog/MDXContent';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const publishedTime = new Date(post.date).toISOString();
  const modifiedTime = new Date().toISOString();

  return {
    title: post.metaTitle || `${post.title} | Planckk Blog`,
    description: post.metaDescription || post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      type: 'article',
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url: `https://planckk.com/blog/${post.slug}`,
      siteName: 'Planckk Blog',
      publishedTime,
      modifiedTime,
      authors: [post.author],
      tags: post.tags,
      images: post.image ? [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : ['/OpenGraph images/og-3.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: post.image ? [post.image] : ['/OpenGraph images/og-3.png'],
      creator: '@planckk',
    },
    alternates: {
      canonical: `https://planckk.com/blog/${post.slug}`,
    },
    other: {
      'article:author': post.author,
      'article:published_time': publishedTime,
      'article:modified_time': modifiedTime,
      'article:section': 'Technology',
      'article:tag': post.tags.join(','),
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const Layout = post.layout === 'custom' ? CustomLayout : BlogLayout;
  const publishedTime = new Date(post.date).toISOString();

  return (
    <>
      {/* Article schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.image || "https://planckk.com/OpenGraph images/og-3.png",
            "author": {
              "@type": "Person",
              "name": post.author,
              "url": "https://planckk.com/about"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Planckk",
              "logo": {
                "@type": "ImageObject",
                "url": "https://planckk.com/images/planckk-logo.png"
              }
            },
            "datePublished": publishedTime,
            "dateModified": publishedTime,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://planckk.com/blog/${post.slug}`
            },
            "keywords": post.tags.join(", "),
            "articleSection": "Technology",
            "wordCount": post.content.split(' ').length,
            "timeRequired": `PT${post.readTime || 5}M`,
            "url": `https://planckk.com/blog/${post.slug}`,
            "isPartOf": {
              "@type": "Blog",
              "name": "Planckk Blog",
              "url": "https://planckk.com/blog"
            }
          })
        }}
      />

      <Layout post={post}>
        <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-500">
          <MDXContent source={post.content} />
        </article>
      </Layout>
    </>
  );
}