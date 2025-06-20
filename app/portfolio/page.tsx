'use client';

import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Play, 
  Globe, 
  Smartphone, 
  TrendingUp,
  Filter,
  Search
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const categories = ['All', 'Websites', 'Mobile Apps', 'Video Editing', 'Digital Marketing', 'Branding'];

const projects = [
  {
    id: 1,
    title: 'EA Global',
    category: 'Websites',
    description: 'A complete website for EA Global with modern design and user experience.',
    image: '/images/portfolio/img1.png',
    tags: ['User-Friendly Interface', 'Mobile Responsive', 'Fast Loading'],
    deliveryTime: '24 hours',
    client: 'EA Global',
    link: 'englisharenaglobal.com'
  },
  {
    id: 2,
    title: 'EduPowr Counselling',
    category: 'Websites',
    description: 'A comprehensive counselling website for EduPowr with booking system.',
    image: '/images/portfolio/img2.png',
    tags: ['Online Booking', 'Secure Payments', 'Student Dashboard'],
    deliveryTime: '18 hours',
    client: 'EduPowr Counselling',
    link: 'counselling.englisharenaglobal.com'
  },
  {
    id: 3,
    title: 'LED Lighting Company',
    category: 'Websites',
    description: 'A professional website showcasing LED lighting products and services.',
    image: '/images/portfolio/img5.png',
    tags: ['Product Catalog', 'Custom Quote Builder', 'Energy Savings Calculator'],
    deliveryTime: '12 hours',
    client: 'LED Lighting Company'
  },
  {
    id: 4,
    title: 'Mental Health Chat Bot',
    category: 'Websites',
    description: 'An AI-powered chat bot for emotional well-being and mental health support.',
    image: '/images/portfolio/mental-homepage.png',
    tags: ['24/7 Support', 'Private Conversations', 'Crisis Resources'],
    deliveryTime: '24 hours',
    client: 'Healthcare Industry',
    link: 'mental-welness.vercel.app'
  },
  {
    id: 5,
    title: 'POSH Compliance Website',
    category: 'Websites',
    description: 'Professional website for POSH compliance services and resources.',
    image: '/images/portfolio/posh-compliance.png',
    tags: ['Training Portal', 'Case Management', 'Policy Guidelines'],
    deliveryTime: '10 hours',
    client: 'Secura Compliances',
    link: 'secura-website.vercel.app'
  },
  // {
  //   id: 6,
  //   title: 'Fashion Boutique Mobile App',
  //   category: 'Mobile Apps',
  //   description: 'A sleek mobile app for a fashion boutique with AR try-on features.',
  //   image: '/images/portfolio/fashion-app.jpg',
  //   tags: ['Virtual Try-On', 'Size Recommender', 'Wishlist & Favorites'],
  //   deliveryTime: '24 hours',
  //   client: 'Style Hub',
  //   link: 'stylehub.app'
  // },
  // {
  //   id: 7,
  //   title: 'Corporate Brand Video',
  //   category: 'Video Editing',
  //   description: 'High-impact corporate video showcasing company culture and values.',
  //   image: '/images/portfolio/corporate-video.jpg',
  //   tags: ['Brand Storytelling', 'Employee Testimonials', 'Visual Effects'],
  //   deliveryTime: '18 hours',
  //   client: 'TechCorp Inc.'
  // },
  // {
  //   id: 8,
  //   title: 'Social Media Campaign',
  //   category: 'Digital Marketing',
  //   description: 'Comprehensive social media campaign for product launch.',
  //   image: '/images/portfolio/social-campaign.jpg',
  //   tags: ['Brand Awareness', 'Lead Generation', 'Engagement Strategy'],
  //   deliveryTime: '12 hours',
  //   client: 'Eco Products'
  // },
  // {
  //   id: 9,
  //   title: 'Restaurant Ordering App',
  //   category: 'Mobile Apps',
  //   description: 'Mobile app for seamless restaurant ordering and table reservations.',
  //   image: '/images/portfolio/restaurant-app.jpg',
  //   tags: ['Table Booking', 'Real-time Order Tracking', 'Digital Menu'],
  //   deliveryTime: '24 hours',
  //   client: 'Gourmet Dining',
  //   link: 'gourmetapp.com'
  // },
  // {
  //   id: 10,
  //   title: 'Brand Identity Design',
  //   category: 'Branding',
  //   description: 'Complete brand identity redesign including logo and brand guidelines.',
  //   image: '/images/portfolio/brand-identity.jpg',
  //   tags: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines'],
  //   deliveryTime: '18 hours',
  //   client: 'Green Energy Co.'
  // }
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Background shapes */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-pink-500 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the digital transformations we've created for businesses across industries. 
              Each project showcases our commitment to speed, quality, and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover-lift cursor-pointer group overflow-hidden border-0 shadow-lg">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {project.link && (
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={`https://${project.link}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block"
                        >
                          <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </a>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                     <div className="space-y-2 text-sm text-gray-500">
                      {Object.entries(project).map(([key, value]) => {
                        // Skip standard fields that we don't want to display
                        const skipFields = ['id', 'title', 'category', 'description', 'image', 'tags'];
                        if (skipFields.includes(key)) return null;
                        
                        // Format the key for display (capitalize first letter, add spaces before caps)
                        const displayKey = key
                          .replace(/([A-Z])/g, ' $1')
                          .replace(/^./, str => str.toUpperCase());

                        // Skip if value is undefined or null
                        if (value === undefined || value === null) return null;

                        // Handle different types of values
                        const displayValue = 
                          key === 'deliveryTime' ? (
                            <span className="font-medium text-green-600">{value}</span>
                          ) : key === 'link' ? (
                            <a href={`https://${value}`} target="_blank" rel="noopener noreferrer" className="font-medium text-purple-600 hover:text-purple-800">
                              {value}
                            </a>
                          ) : (
                            <span className="font-medium">{value}</span>
                          );

                        return (
                          <div key={key} className="flex justify-between">
                            <span>{displayKey}:</span>
                            {displayValue}
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-pink-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's create something amazing together. Your project could be our next showcase.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover-target"
            >
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}