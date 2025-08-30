
import React from 'react';
import TransparentNavigation from '@/components/TransparentNavigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <TransparentNavigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Terms of Use
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using Al Fauzan Real Estate website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">2. Description of Service</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Al Fauzan Real Estate provides real estate services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Property development and construction</li>
                <li>Real estate investment advisory</li>
                <li>Property management services</li>
                <li>Real estate brokerage</li>
                <li>Commercial and residential property sales</li>
              </ul>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">3. User Obligations</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Users of our services agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of account information</li>
                <li>Use services in compliance with applicable laws</li>
                <li>Not engage in fraudulent or harmful activities</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">4. Property Information</h2>
              <p className="text-gray-300 leading-relaxed">
                All property information provided on our website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or suitability of the information.
              </p>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">5. Investment Risks</h2>
              <p className="text-gray-300 leading-relaxed">
                Real estate investments carry inherent risks. Past performance does not guarantee future results. Users should conduct their own due diligence and seek professional advice before making investment decisions. Al Fauzan Real Estate is not responsible for investment losses.
              </p>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">6. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                Al Fauzan Real Estate shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid for our services.
              </p>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">7. Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed">
                All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Al Fauzan Real Estate and is protected by copyright and other intellectual property laws.
              </p>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">8. Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices regarding the collection and use of your personal information.
              </p>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">9. Modifications to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated effective date. Your continued use of our services after such changes constitutes acceptance of the new terms.
              </p>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">10. Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia. Any disputes arising from these terms shall be subject to the jurisdiction of Saudi Arabian courts.
              </p>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">11. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about these Terms of Use, please contact us at:
              </p>
              <div className="mt-4 text-gray-300">
                <p>Al Fauzan Real Estate</p>
                <p>King Fahd Road, Al Olaya District</p>
                <p>Riyadh 12211, Saudi Arabia</p>
                <p>Phone: +966 11 123 4567</p>
                <p>Email: it@alfauzan.com</p>
              </div>
            </div>

            <div className="animate-fade-in bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-300 text-center">
                <strong>Last Updated:</strong> January 2024
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfUse;
