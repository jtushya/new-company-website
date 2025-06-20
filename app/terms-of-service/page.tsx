import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Terms of Service',
  description: 'Read Planckk\'s terms of service to understand the rules and regulations governing the use of our digital transformation services.',
  keywords: ['terms of service', 'terms and conditions', 'service agreement', 'legal terms', 'user agreement'],
  url: 'https://planckk.com/terms-of-service'
});

export default function TermsOfService() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using Planckk's services, you accept and agree to be bound by the 
              terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Description</h2>
            <p className="text-gray-700 mb-4">
              Planckk provides digital transformation services including website development, 
              video editing, digital marketing, and related services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700">
              For questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:legal@planckk.com" className="text-purple-600 hover:text-purple-800">
                legal@planckk.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}