'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

// Custom components for MDX
export const MDXComponents = {
  // Enhanced headings with anchor links
  h1: ({ children, ...props }: any) => (
    <h1 className="text-4xl font-bold mt-12 mb-6 text-gray-900 border-b pb-4" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: any) => (
    <h2 className="text-3xl font-semibold mt-10 mb-4 text-gray-900" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-900" {...props}>
      {children}
    </h3>
  ),
  
  // Enhanced paragraphs
  p: ({ children, ...props }: any) => (
    <p className="text-lg leading-relaxed mb-6 text-gray-700" {...props}>
      {children}
    </p>
  ),
  
  // Enhanced lists
  ul: ({ children, ...props }: any) => (
    <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: any) => (
    <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-700" {...props}>
      {children}
    </ol>
  ),
  
  // Enhanced links
  a: ({ children, href, ...props }: any) => (
    <a
      href={href}
      className="text-purple-600 hover:text-purple-800 underline decoration-purple-300 hover:decoration-purple-500 transition-colors"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  ),
  
  // Enhanced blockquotes
  blockquote: ({ children, ...props }: any) => (
    <blockquote className="border-l-4 border-purple-500 pl-6 py-4 my-8 bg-purple-50 italic text-gray-700" {...props}>
      {children}
    </blockquote>
  ),
  
  // Enhanced code blocks
  pre: ({ children, ...props }: any) => (
    <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6 text-sm" {...props}>
      {children}
    </pre>
  ),
  code: ({ children, ...props }: any) => (
    <code className="bg-gray-100 text-purple-600 px-2 py-1 rounded text-sm font-mono" {...props}>
      {children}
    </code>
  ),
  
  // Enhanced images
  img: ({ src, alt, ...props }: any) => (
    <div className="my-8">
      <img
        src={src}
        alt={alt}
        className="w-full rounded-lg shadow-lg"
        {...props}
      />
      {alt && (
        <p className="text-center text-gray-500 text-sm mt-2 italic">{alt}</p>
      )}
    </div>
  ),
  
  // Custom components
  CustomCard: ({ title, children }: { title: string; children: ReactNode }) => (
    <Card className="my-8 border-purple-200">
      <CardContent className="p-6">
        <h4 className="text-xl font-semibold mb-4 text-purple-700">{title}</h4>
        {children}
      </CardContent>
    </Card>
  ),
  
  CallToAction: ({ title, description, buttonText, href }: {
    title: string;
    description: string;
    buttonText: string;
    href: string;
  }) => (
    <Card className="my-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <CardContent className="p-8 text-center">
        <h4 className="text-2xl font-bold mb-4">{title}</h4>
        <p className="text-lg mb-6 opacity-90">{description}</p>
        <Button asChild className="bg-white text-purple-600 hover:bg-gray-100">
          <a href={href}>{buttonText}</a>
        </Button>
      </CardContent>
    </Card>
  ),
  
  // Alert components
  InfoAlert: ({ children }: { children: ReactNode }) => (
    <Alert className="my-6 border-blue-200 bg-blue-50">
      <Info className="h-4 w-4 text-blue-600" />
      <AlertDescription className="text-blue-800">
        {children}
      </AlertDescription>
    </Alert>
  ),
  
  WarningAlert: ({ children }: { children: ReactNode }) => (
    <Alert className="my-6 border-yellow-200 bg-yellow-50">
      <AlertTriangle className="h-4 w-4 text-yellow-600" />
      <AlertDescription className="text-yellow-800">
        {children}
      </AlertDescription>
    </Alert>
  ),
  
  SuccessAlert: ({ children }: { children: ReactNode }) => (
    <Alert className="my-6 border-green-200 bg-green-50">
      <CheckCircle className="h-4 w-4 text-green-600" />
      <AlertDescription className="text-green-800">
        {children}
      </AlertDescription>
    </Alert>
  ),
  
  ErrorAlert: ({ children }: { children: ReactNode }) => (
    <Alert className="my-6 border-red-200 bg-red-50">
      <XCircle className="h-4 w-4 text-red-600" />
      <AlertDescription className="text-red-800">
        {children}
      </AlertDescription>
    </Alert>
  ),
  
  // YouTube embed
  YouTube: ({ id, title }: { id: string; title?: string }) => (
    <div className="my-8">
      <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${id}`}
          title={title || 'YouTube video'}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  ),
  
  // Vimeo embed
  Vimeo: ({ id, title }: { id: string; title?: string }) => (
    <div className="my-8">
      <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://player.vimeo.com/video/${id}`}
          title={title || 'Vimeo video'}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  ),
  
  // CodePen embed
  CodePen: ({ id, title, height = 400 }: { id: string; title?: string; height?: number }) => (
    <div className="my-8">
      <iframe
        height={height}
        style={{ width: '100%' }}
        scrolling="no"
        title={title || 'CodePen'}
        src={`https://codepen.io/pen/embed/${id}?default-tab=result`}
        frameBorder="no"
        loading="lazy"
        allowTransparency
        allowFullScreen
        className="rounded-lg shadow-lg"
      />
    </div>
  ),
  
  // Twitter embed
  Tweet: ({ id }: { id: string }) => (
    <div className="my-8 flex justify-center">
      <blockquote className="twitter-tweet">
        <a href={`https://twitter.com/x/status/${id}`}>Loading tweet...</a>
      </blockquote>
    </div>
  ),
};