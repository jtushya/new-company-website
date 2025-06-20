"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { BlogMetadata } from "@/lib/blog";

interface BlogCardProps {
  post: BlogMetadata;
  index?: number;
  featured?: boolean;
}

export default function BlogCard({ post, index = 0, featured = false }: BlogCardProps) {
  // Format date
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1] 
      }}
      viewport={{ once: true }}
      className={featured ? 'h-full' : ''}
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <Card className={`
          group h-full bg-white border-0
          ${featured ? 'lg:flex items-stretch overflow-hidden' : ''}
          hover:shadow-lg transition-all duration-300
        `}>
          {/* Image Section */}
          <div className={`
            relative overflow-hidden
            ${featured ? 'lg:w-2/3' : 'aspect-[16/9]'}
          `}>
            <Image
              src={post.image || "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes={featured ? "(max-width: 1280px) 66vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
              priority={featured}
              onError={(e) => {
                // Fallback to default image on error
                const imgElement = e.target as HTMLImageElement;
                imgElement.src = "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop";
              }}
            />
            
            {/* Tags Overlay */}
            {post.tags && post.tags.length > 0 && (
              <div className="absolute top-4 left-4 flex flex-wrap gap-2 max-w-[calc(100%-2rem)]">
                {post.tags.slice(0, featured ? 3 : 2).map((tag: string, tagIndex: number) => (
                  <span
                    key={tagIndex}
                    className="
                      px-3 py-1.5 rounded-full text-sm font-medium
                      bg-white shadow-sm
                      text-purple-700 hover:bg-purple-50
                      transition-colors duration-300
                    "
                  >
                    {tag}
                  </span>
                ))}
                {post.tags.length > (featured ? 3 : 2) && (
                  <span className="
                    px-3 py-1.5 rounded-full text-sm font-medium
                    bg-white/80 text-gray-600
                  ">
                    +{post.tags.length - (featured ? 3 : 2)}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className={`
            flex flex-col
            ${featured ? 'lg:w-1/3 lg:border-l' : ''}
            p-6
          `}>
            <div className="flex-grow">
              <h3 className={`
                font-bold text-gray-900 mb-3
                group-hover:text-purple-700
                transition-colors duration-300
                ${featured ? 'text-2xl lg:text-3xl' : 'text-xl'}
                line-clamp-2
              `}>
                {post.title}
              </h3>

              <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Author, Date and Read Time */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {formattedDate}
                </div>
                {post.readTime && (
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {post.readTime} min read
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2 text-purple-600 font-medium whitespace-nowrap">
                Read more
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}