
import React from 'react';
import TransparentNavigation from '@/components/TransparentNavigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <TransparentNavigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">1. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Personal Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We collect personal information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                    <li>Name, email, and phone number</li>
                    <li>Address and location information</li>
                    <li>Financial information for transactions</li>
                    <li>Property preferences and requirements</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Usage Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We automatically collect information about your use of our services, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Pages visited and time spent</li>
                    <li>Search queries and preferences</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">2. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Provide and improve our real estate services</li>
                <li>Process transactions and manage accounts</li>
                <li>Communicate with you about properties and services</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Analyze usage patterns and improve our website</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">3. Information Sharing and Disclosure</h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  We may share your information in the following circumstances:
                </p>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Service Providers</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We share information with third-party service providers who assist us in operating our business, such as payment processors, marketing platforms, and technical support providers.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Legal Requirements</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We may disclose information when required by law, court order, or government regulation, or to protect our rights and the safety of our users.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Business Transfers</h3>
                  <p className="text-gray-300 leading-relaxed">
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">4. Data Security</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and employee training</li>
                <li>Secure data centers and backup systems</li>
              </ul>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">5. Your Rights and Choices</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Access and review your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Delete your personal information (subject to legal requirements)</li>
                <li>Object to processing of your information</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Request data portability</li>
              </ul>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">6. Cookies and Tracking Technologies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and advertisements</li>
                <li>Enable social media features</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                You can control cookies through your browser settings, but disabling cookies may affect website functionality.
              </p>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">7. Third-Party Links</h2>
              <p className="text-gray-300 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">8. Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information.
              </p>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">9. International Data Transfers</h2>
              <p className="text-gray-300 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information during such transfers.
              </p>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our website and updating the effective date.
              </p>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">11. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="text-gray-300 space-y-2">
                <p><strong>Privacy Officer</strong></p>
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

export default PrivacyPolicy;
