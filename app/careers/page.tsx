'use client';

import { motion } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Heart, 
  Zap, 
  Coffee,
  Laptop,
  Calendar,
  ArrowRight,
  Upload,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const benefits = [
  {
    icon: Zap,
    title: 'Fast-Paced Environment',
    description: 'Work on exciting projects with quick turnarounds and see immediate impact',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Laptop,
    title: 'Remote-First Culture',
    description: 'Work from anywhere with flexible hours and modern tools',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs',
    color: 'from-pink-500 to-red-500'
  },
  {
    icon: Coffee,
    title: 'Learning Budget',
    description: '₹25,000 annual budget for courses, conferences, and skill development',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: Users,
    title: 'Collaborative Team',
    description: 'Work with talented, passionate people who love what they do',
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: Calendar,
    title: 'Unlimited PTO',
    description: 'Take time off when you need it with our flexible vacation policy',
    color: 'from-indigo-500 to-purple-500'
  },
];

const jobOpenings = [
  {
    id: 1,
    title: 'Frontend Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    salary: '₹10,000 - ₹15,000 per month',
    deadline: '2025-07-15',
    description: 'Join our frontend team to build lightning-fast, beautiful web experiences using React, Next.js, and modern CSS frameworks.',
    requirements: [
      '0-2 years of React/Next.js experience',
      'Familiarity with TypeScript and modern CSS',
      'Basic understanding of performance optimization',
      'Good design sensibility'
    ]
  },
  {
    id: 2,
    title: 'Video Editor & Motion Graphics Designer',
    department: 'Creative',
    type: 'Full-time',
    location: 'Remote',
    salary: '₹5,000 - ₹10,000  per month',
    deadline: '2025-07-15',
    description: 'Create stunning video content and motion graphics for our clients across various industries and platforms.',
    requirements: [
      'Proficiency in After Effects and Premiere Pro',
      'Portfolio of motion graphics work',
      '0-2 years of professional video editing experience',
      'Understanding of social media video formats'
    ]
  },
  {
    id: 3,
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    type: 'Full-time',
    location: 'Remote',
    salary: '₹10,000 - ₹15,000 per month',
    deadline: '2025-07-15',
    description: 'Drive growth through data-driven marketing campaigns across multiple channels and help our clients achieve their digital goals.',
    requirements: [
      'Experience with Google Ads and Facebook Ads',
      'Basic analytical skills and data interpretation',
      'Knowledge of SEO and content marketing',
      'Good communication skills'
    ]
  },
  {
    id: 4,
    title: 'UI/UX Designer',
    department: 'Design',
    type: 'Full-time',
    location: 'Remote',
    salary: '₹10,000 - ₹15,000 per month',
    deadline: '2025-07-15',
    description: 'Design beautiful, intuitive user experiences that delight our clients and their customers.',
    requirements: [
      'Proficiency in Figma and design systems',
      'Portfolio of web and mobile designs',
      'Understanding of user research and testing',
      'Experience with prototyping tools'
    ]
  },
  {
    id: 5,
    title: 'Project Manager',
    department: 'Operations',
    type: 'Full-time',
    location: 'Remote',
    salary: '₹10,000 - ₹15,000 per month',
    deadline: '2025-07-15',
    description: 'Coordinate our fast-paced projects and ensure we deliver exceptional results on time, every time.',
    requirements: [
      'Basic project management certification or training',
      'Experience in digital agency environment',
      'Good organizational and communication skills',
      'Familiarity with agile methodologies'
    ]
  },
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    coverLetter: '',
    resume: null as File | null
  });

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      coverLetter: '',
      resume: null
    });
    setFormStatus('idle');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0]
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      // Here you would typically send the form data to your backend
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setFormStatus('success');
      setTimeout(() => {
        setSelectedJob(null);
        resetForm();
      }, 2000);

    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
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
              Join Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Be part of a dynamic team that's revolutionizing digital services. 
              Work on exciting projects, grow your skills, and make a real impact.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover-target"
              onClick={() => document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Open Positions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Work <span className="text-gradient">With Us?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where talented people can do their best work and grow their careers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover-lift hover-target border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="jobs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Open <span className="text-gradient">Positions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your next opportunity and join our mission to transform digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover-lift cursor-pointer group border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                        <p className="text-purple-600 font-medium">{job.department}</p>
                      </div>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        {job.type}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <DollarSign className="w-4 h-4 mr-2" />
                        {job.salary}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        Apply by {new Date(job.deadline).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.slice(0, 3).map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      className="w-full"
                      onClick={() => setSelectedJob(job.id)}
                    >
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Apply for Position</h3>
                <button
                  onClick={() => {
                    setSelectedJob(null);
                    resetForm();
                  }}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
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
                      Position *
                    </label>
                    <select
                      name="position"
                      required
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select Position</option>
                      {jobOpenings.map((job) => (
                        <option key={job.id} value={job.title}>
                          {job.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter *
                  </label>
                  <textarea
                    name="coverLetter"
                    required
                    rows={4}
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Resume *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-500 transition-colors">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">
                      {formData.resume ? formData.resume.name : 'Click to upload or drag and drop'}
                    </p>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      id="resume-upload"
                    />
                    <label
                      htmlFor="resume-upload"
                      className="cursor-pointer text-purple-600 hover:text-purple-700 font-medium"
                    >
                      Choose File
                    </label>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setSelectedJob(null);
                      resetForm();
                    }}
                    className="flex-1"
                    disabled={formStatus === 'submitting'}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    className="flex-1"
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </div>

                {formStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
                    Application submitted successfully! We'll be in touch soon.
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                    <p className="text-center mb-2">Sorry, we couldn't submit your application at this time.</p>
                    <p className="text-center">Please contact us directly at:</p>
                    <div className="flex flex-col items-center mt-2 space-y-1">
                      <a href="tel:+919384107679" className="text-red-700 hover:text-red-800 font-medium">
                        +91 93841 07679
                      </a>
                      <a href="mailto:info@planckk.com" className="text-red-700 hover:text-red-800 font-medium">
                        info@planckk.com
                      </a>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      )}

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
              Don't See Your Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're always looking for talented people. Send us your resume and tell us how you'd like to contribute.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover-target"
            >
              Send General Application
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}