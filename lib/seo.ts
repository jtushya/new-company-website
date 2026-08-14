import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export function generateSEO({
  title,
  description,
  keywords = [],
  image = '/OpenGraph images/og-3.png',
  url = 'https://planckk.com',
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags = []
}: SEOProps): Metadata {
  const baseTitle = 'Planckk - Lightning-Fast Digital Transformation';
  const baseDescription = 'Transform your business with Planckk\'s lightning-fast digital services. Professional websites in 12 hours, SEO optimization, and AI-powered marketing solutions.';
  
  const seoTitle = title ? `${title} | ${baseTitle}` : baseTitle;
  const seoDescription = description || baseDescription;
  
  // Enhanced keywords with semantic variations
  const enhancedKeywords = [
    ...keywords,
    'digital transformation services',
    'lightning fast website development',
    'professional web design',
    'SEO optimization',
    'digital marketing agency',
    'mobile app development',
    'business digitization',
    'startup services',
    'modern web technologies',
    'responsive design',
    'user experience design',
    'conversion optimization',
    'brand identity design',
    'e-commerce development',
    'content management systems',
    'API development',
    'cloud solutions',
    'performance optimization'
  ];

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: enhancedKeywords,
    authors: author ? [{ name: author }] : [{ name: 'Planckk Team' }],
    creator: 'Planckk',
    publisher: 'Planckk Digital Services',
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: type as any,
      locale: 'en_US',
      url,
      siteName: 'Planckk',
      title: seoTitle,
      description: seoDescription,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title || 'Planckk - Digital Transformation Services',
          type: 'image/png'
        }
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      site: '@planckk',
      creator: '@planckk',
      title: seoTitle,
      description: seoDescription,
      images: [image],
    },
    alternates: {
      canonical: url,
      languages: {
        'en-US': url,
        'en-GB': url,
        'en-IN': url,
      },
    },
    other: {
      'article:author': author || 'Planckk Team',
      'article:section': section || 'Technology',
      'article:tag': tags.join(','),
      'og:site_name': 'Planckk',
      'twitter:domain': 'planckk.com',
      'twitter:url': url,
    },
  };
}

// Service-specific SEO configurations
export const servicesSEO = {
  'website-creation': {
    title: 'Lightning-Fast Website Development | 12-Hour Delivery',
    description: 'Get professional websites delivered in just 12 hours. Modern design, responsive layout, SEO optimization, and CMS integration. 500+ successful projects.',
    keywords: [
      'website development 12 hours',
      'fast website creation',
      'lightning fast web design',
      'same day website delivery',
      'professional web development',
      'responsive website design',
      'modern website development',
      'startup website services',
      'business website creation',
      'e-commerce website development',
      'CMS website development',
      'custom website design',
      'mobile-friendly websites',
      'SEO optimized websites',
      'conversion-focused design'
    ]
  },
  'seo': {
    title: 'Search Engine Optimization (SEO) Services | Rank #1 on Google',
    description: 'Data-driven search engine optimization services to boost your organic rankings, increase search visibility, and drive qualified organic leads.',
    keywords: [
      'SEO optimization services',
      'search engine marketing',
      'technical SEO audit',
      'on-page SEO optimization',
      'keyword research services',
      'local SEO services',
      'organic traffic growth',
      'search ranking improvement',
      'SEO consulting'
    ]
  },
  'digital-marketing': {
    title: 'Digital Marketing & SEO Services | AI-Powered Growth Solutions',
    description: 'Comprehensive digital marketing services including SEO, social media marketing, PPC advertising, and content marketing. Drive growth with data-driven strategies.',
    keywords: [
      'digital marketing services',
      'SEO optimization',
      'social media marketing',
      'PPC advertising',
      'content marketing',
      'search engine marketing',
      'online marketing strategy',
      'digital advertising',
      'marketing automation',
      'conversion optimization',
      'email marketing',
      'influencer marketing',
      'brand marketing',
      'performance marketing',
      'growth marketing'
    ]
  }
};

// Generate structured data for services
export function generateServiceStructuredData(service: string, serviceData: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceData.title,
    "description": serviceData.description,
    "provider": {
      "@type": "Organization",
      "name": "Planckk",
      "url": "https://planckk.com"
    },
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `https://planckk.com/services/${service}`,
      "servicePhone": "+91-93841-07679"
    },
    "category": "Digital Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": serviceData.title,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": serviceData.title,
            "description": serviceData.description
          }
        }
      ]
    }
  };
}

// Generate breadcrumb structured data
export function generateBreadcrumbStructuredData(items: Array<{name: string, url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// Generate FAQ structured data
export function generateFAQStructuredData(faqs: Array<{question: string, answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}