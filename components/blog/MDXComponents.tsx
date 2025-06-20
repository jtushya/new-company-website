'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

// Custom components for MDX
export const MDXComponents = {
  h1: ({ children, ...props }: any) => (
    <h1 className="scroll-m-20 text-4xl font-bold mt-12 mb-6 text-gray-900 border-b pb-4" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: any) => (
    <h2 className="scroll-m-20 text-3xl font-semibold mt-10 mb-4 text-gray-900" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3 className="scroll-m-20 text-2xl font-semibold mt-8 mb-3 text-gray-900" {...props}>
      {children}
    </h3>
  ),
  
  p: ({ children, ...props }: any) => (
    <p className="text-lg leading-relaxed mb-6 text-gray-700" {...props}>
      {children}
    </p>
  ),
  
  ul: ({ children, ...props }: any) => (
    <ul className="my-6 ml-6 list-disc text-gray-700 [&>li]:mt-2" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: any) => (
    <ol className="my-6 ml-6 list-decimal text-gray-700 [&>li]:mt-2" {...props}>
      {children}
    </ol>
  ),
  
  li: ({ children, ...props }: any) => (
    <li className="text-lg" {...props}>
      {children}
    </li>
  ),
  
  a: ({ children, href, ...props }: any) => (
    <a
      href={href}
      className="font-medium text-purple-600 hover:text-purple-800 underline underline-offset-4 decoration-purple-300 hover:decoration-purple-500 transition-colors"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  ),
  
  blockquote: ({ children, ...props }: any) => (
    <blockquote 
      className="mt-6 border-l-4 border-purple-500 pl-6 py-4 my-8 bg-purple-50 italic text-gray-700" 
      {...props}
    >
      {children}
    </blockquote>
  ),
  
  pre: ({ children, className, ...props }: any) => {
    const language = className?.replace('language-', '');
    return (
      <div className="relative group">
        {language && (
          <div className="absolute right-4 top-2 text-gray-400 text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">
            {language}
          </div>
        )}
        <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6 text-sm" {...props}>
          {children}
        </pre>
      </div>
    );
  },
  
  code: ({ children, className, ...props }: any) => {
    const isInline = !className;
    return (
      <code 
        className={isInline 
          ? "bg-gray-100 text-purple-600 px-2 py-1 rounded text-sm font-mono"
          : className
        } 
        {...props}
      >
        {children}
      </code>
    );
  },
  
  Image: ({ src, alt, ...props }: any) => (
    <div className="my-8">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={400}
        className="rounded-lg shadow-lg"
        {...props}
      />
      {alt && (
        <p className="text-center text-gray-500 text-sm mt-2 italic">{alt}</p>
      )}
    </div>
  ),
  
  Card: ({ title, children }: { title: string; children: ReactNode }) => (
    <Card className="my-8 border-purple-200">
      <CardContent className="p-6">
        <h4 className="text-xl font-semibold mb-4 text-purple-700">{title}</h4>
        {children}
      </CardContent>
    </Card>
  ),

  Tip: ({ children }: { children: ReactNode }) => (
    <Alert className="my-6 border-l-4 border-blue-500">
      <Info className="h-5 w-5 text-blue-500" />
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  ),

  Warning: ({ children }: { children: ReactNode }) => (
    <Alert className="my-6 border-l-4 border-yellow-500">
      <AlertTriangle className="h-5 w-5 text-yellow-500" />
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  ),

  Success: ({ children }: { children: ReactNode }) => (
    <Alert className="my-6 border-l-4 border-green-500">
      <CheckCircle className="h-5 w-5 text-green-500" />
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  ),

  Error: ({ children }: { children: ReactNode }) => (
    <Alert className="my-6 border-l-4 border-red-500">
      <XCircle className="h-5 w-5 text-red-500" />
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  ),

  CodeBlock: ({ children, language }: { children: string; language: string }) => (
    <div className="relative group">
      {language && (
        <div className="absolute right-4 top-2 text-gray-400 text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">
          {language}
        </div>
      )}
      <pre className={`language-${language} bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6 text-sm`}>
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </div>
  ),

  CallToAction: ({ href, children }: { href: string; children: ReactNode }) => (
    <div className="my-8 p-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white text-center">
      <div className="mb-4">{children}</div>
      <Button asChild variant="secondary" size="lg">
        <a href={href} target={href.startsWith('http') ? '_blank' : undefined}>
          Learn More →
        </a>
      </Button>
    </div>
  ),
}