'use client';

import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Zap,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { submitToGoogleForm } from '@/lib/forms';
import { toast } from 'sonner';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Get in touch via email',
    contact: 'info@planckk.com',
    link: 'mailto:info@planckk.com',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak with our team',
    contact: '+91 93841 07679',
    link: 'tel:+919384107679',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Chat with us on WhatsApp',
    contact: '+91 93841 07679',
    link: 'https://wa.me/919384107679',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Calendar,
    title: 'Schedule Meeting',
    description: 'Book a consultation',
    contact: 'Response within 30 mins',
    link: '#contact-form',
    color: 'from-orange-500 to-red-500'
  },
];

const officeHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 8:00 PM' },
  { day: 'Saturday', hours: '10:00 AM - 6:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const success = await submitToGoogleForm(formData, 'contact');
      
      if (success) {
        toast.success("Message sent successfully! We'll get back to you within 30 minutes.");
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          timeline: '',
          message: ''
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error(
        <div>
          <p>Sorry, we couldn't submit your message.</p>
          <p>Please contact us directly:</p>
          <a href="tel:+919384107679" className="block hover:underline">+91 93841 07679</a>
          <a href="mailto:info@planckk.com" className="block hover:underline">info@planckk.com</a>
        </div>
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Ready to transform your digital presence? Let's discuss your project and see how we can help you achieve your goals in record time.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover-target"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Zap className="mr-2 w-5 h-5" />
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Multiple Ways to <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the communication method that works best for you. We're here to help however you prefer to connect.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover-lift hover-target border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{method.title}</h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <a 
                      href={method.link} 
                      className="text-purple-600 font-medium hover:text-purple-700"
                      target={method.link.startsWith('http') ? '_blank' : undefined}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {method.contact}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Service Needed
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          <option value="website-creation">Website Creation</option>
                          <option value="video-editing">Video Editing</option>
                          <option value="digital-marketing">Digital Marketing</option>
                          <option value="mobile-app">Mobile App Development</option>
                          <option value="digital-transformation">Digital Transformation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-5l">Under ₹5000</option>
                          <option value="5l-15l">₹5000 - ₹25,000</option>
                          <option value="15l-50l">₹25,000 - ₹50,000</option>
                          <option value="50l-plus">₹50,000+</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP (6-24 hours)</option>
                        <option value="1-week">Within 1 week</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <Send className="mr-2 w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Info */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-purple-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <a href="mailto:info@planckk.com" className="text-gray-600 hover:text-purple-600">
                          info@planckk.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-purple-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <a href="tel:+919384107679" className="text-gray-600 hover:text-purple-600">
                          +91 93841 07679
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MessageCircle className="w-5 h-5 text-purple-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">WhatsApp</p>
                        <a 
                          href="https://wa.me/919384107679" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-gray-600 hover:text-purple-600"
                        >
                          +91 93841 07679
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-purple-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Response Time</p>
                        <p className="text-gray-600">Within 30 minutes</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Office Hours</h3>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600">{schedule.day}</span>
                        <span className="font-medium text-gray-900">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Follow Us</h3>
                  <div className="flex space-x-4">
                    {[
                      { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
                      { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
                      { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
                      { icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 ${social.color} transition-colors hover-target`}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quick <span className="text-gradient">Answers</span>
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our services and process.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can you deliver a website?",
                answer: "Our signature service delivers professional websites in just 6 hours. For more complex projects, we provide realistic timelines during our initial consultation."
              },
              {
                question: "What's included in your website packages?",
                answer: "All packages include responsive design, SEO optimization, content management system, hosting setup, and 30 days of support. Specific features vary by package."
              },
              {
                question: "Do you work with businesses of all sizes?",
                answer: "Yes! We work with startups, small businesses, and large enterprises. Our services are scalable to meet your specific needs and budget."
              },
              {
                question: "What if I need revisions?",
                answer: "We include up to 3 rounds of revisions in all our packages. Additional revisions can be accommodated for a small fee."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}