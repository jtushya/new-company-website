'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  CheckCircle,
  ArrowRight,
  User,
  Building,
  MessageSquare,
  Globe,
  Palette,
  TrendingUp,
  Smartphone
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { submitToGoogleForm } from '@/lib/forms';
import { toast } from 'sonner';

const services = [
  { value: 'website-creation', label: 'Website Creation', icon: Globe },
  { value: 'video-editing', label: 'Video Editing', icon: Palette },
  { value: 'digital-marketing', label: 'Digital Marketing', icon: TrendingUp },
  { value: 'mobile-app', label: 'Mobile App Development', icon: Smartphone },
  { value: 'social-media', label: 'Social Media Management', icon: MessageSquare },
  { value: 'seo-ads', label: 'SEO & Google Ads', icon: TrendingUp },
  { value: 'digital-transformation', label: 'Digital Transformation', icon: Zap },
  { value: 'custom-software', label: 'Custom Software Development', icon: Building },
];

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'info@planckk.com',
    link: 'mailto:info@planckk.com',
    description: 'Send us an email anytime'
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+91 93841 07679',
    link: 'tel:+919384107679',
    description: 'Available 24/7'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    content: '+91 93841 07679',
    link: 'https://wa.me/919384107679',
    description: 'Chat with us instantly'
  },
  {
    icon: Clock,
    title: 'Response Time',
    content: 'Within 30 minutes',
    description: 'We respond fast to all inquiries'
  }
];

const benefits = [
  'Free consultation and project assessment',
  'Custom solution tailored to your needs',
  'Lightning-fast delivery in just 6 hours',
  'Dedicated project manager assigned',
  '24/7 support and maintenance',
  '100% satisfaction guarantee'
];

export default function GetStarted() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const success = await submitToGoogleForm(formData, 'get-started');
      
      if (success) {
        setIsSubmitted(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error(
        <div>
          <p>Sorry, we couldn't submit your request.</p>
          <p>Please contact us directly:</p>
          <a href="tel:+919384107679" className="block hover:underline">+91 93841 07679</a>
          <a href="mailto:info@planckk.com" className="block hover:underline">info@planckk.com</a>
        </div>
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white flex items-center justify-center">
        <motion.div
          className="text-center max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Thank You!</h1>
          <p className="text-xl text-gray-300 mb-8">
            We've received your request and will get back to you within 30 minutes. 
            Our team is already reviewing your project details.
          </p>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-8">
            <h3 className="text-xl font-semibold mb-4">What happens next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</div>
                <span>We'll review your requirements and prepare a custom proposal</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</div>
                <span>Schedule a 15-minute consultation call to discuss details</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</div>
                <span>Start your project and deliver results in just 6 hours</span>
              </div>
            </div>
          </div>
          <Button 
            onClick={() => window.location.href = '/'}
            className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            Return to Homepage
          </Button>
        </motion.div>
      </div>
    );
  }

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
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-violet-500 rounded-2xl flex items-center justify-center mr-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">Get Started</h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Ready to transform your digital presence? Let's discuss your project and 
              deliver exceptional results in just 6 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Free Consultation
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                6-Hour Delivery
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                100% Satisfaction
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Tell Us About Your Project</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="John Doe"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="john@company.com"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <Input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Your Company"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Needed *
                      </label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              <div className="flex items-center">
                                <service.icon className="w-4 h-4 mr-2" />
                                {service.label}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Budget Range
                        </label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-5l">Under ₹5 Lakhs</SelectItem>
                            <SelectItem value="5l-15l">₹5 Lakhs - ₹15 Lakhs</SelectItem>
                            <SelectItem value="15l-50l">₹15 Lakhs - ₹50 Lakhs</SelectItem>
                            <SelectItem value="50l-plus">₹50 Lakhs+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Timeline
                        </label>
                        <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="When do you need this?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">ASAP (6 hours)</SelectItem>
                            <SelectItem value="this-week">This week</SelectItem>
                            <SelectItem value="this-month">This month</SelectItem>
                            <SelectItem value="flexible">I'm flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        rows={4}
                        className="w-full"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Zap className="w-5 h-5 mr-2" />
                          Start My Project
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info & Benefits */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Contact Information */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                          {info.link ? (
                            <a 
                              href={info.link} 
                              className="text-purple-600 hover:text-purple-700 font-medium mb-1 block"
                              target={info.link.startsWith('http') ? '_blank' : undefined}
                              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-purple-600 font-medium mb-1">{info.content}</p>
                          )}
                          <p className="text-gray-600 text-sm">{info.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Planckk?</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Our Track Record</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">500+</div>
                      <div className="text-purple-100">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">6hrs</div>
                      <div className="text-purple-100">Average Delivery</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">99%</div>
                      <div className="text-purple-100">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">24/7</div>
                      <div className="text-purple-100">Support Available</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}