
import React, { useState } from 'react';
import TransparentNavigation from '@/components/TransparentNavigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Smartphone, Download, Star, Shield, Zap, Users } from 'lucide-react';

const Apps = () => {
  const { language } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  return (
    <div className="min-h-screen bg-black text-white">
      <TransparentNavigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Al Fauzan Mobile Apps
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
            Take your real estate experience on the go with our powerful mobile applications
          </p>
        </div>
      </section>

      {/* App Showcase */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="relative">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-black rounded-2xl p-6 h-96 flex items-center justify-center">
                    <Smartphone className="h-32 w-32 text-yellow-400" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black rounded-full p-4">
                  <Download className="h-8 w-8" />
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">
                Al Fauzan Real Estate App
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Discover, explore, and invest in premium properties with our comprehensive mobile application. 
                Get instant access to our entire property portfolio, virtual tours, and expert advisory services.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="text-gray-300">4.8/5 Rating on App Stores</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Download className="h-5 w-5 text-yellow-400" />
                  <span className="text-gray-300">Over 50,000+ Downloads</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-yellow-400" />
                  <span className="text-gray-300">Trusted by 10,000+ Users</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Download for iOS</span>
                </button>
                <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Download for Android</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-yellow-400">
            Powerful Features at Your Fingertips
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg animate-fade-in hover-scale">
              <div className="bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Property Search</h3>
              <p className="text-gray-300">Advanced search filters to find your perfect property with location-based results and detailed specifications.</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg animate-fade-in hover-scale">
              <div className="bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Virtual Tours</h3>
              <p className="text-gray-300">Immersive 360° virtual tours allowing you to explore properties from anywhere at any time.</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg animate-fade-in hover-scale">
              <div className="bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Transactions</h3>
              <p className="text-gray-300">Bank-level security for all transactions with encrypted data and secure payment processing.</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg animate-fade-in hover-scale">
              <div className="bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Consultation</h3>
              <p className="text-gray-300">Direct access to our real estate experts for personalized advice and investment guidance.</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg animate-fade-in hover-scale">
              <div className="bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Favorites & Alerts</h3>
              <p className="text-gray-300">Save your favorite properties and get instant notifications for new listings matching your criteria.</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg animate-fade-in hover-scale">
              <div className="bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Download className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Offline Access</h3>
              <p className="text-gray-300">Download property information for offline viewing and access your data anywhere, anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-yellow-400">
            App Screenshots
          </h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="animate-fade-in hover-scale">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <Smartphone className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                    <p className="text-gray-400">Screenshot {index}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-yellow-400">
            What Our Users Say
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg animate-fade-in">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "The app made finding my dream home incredibly easy. The virtual tours saved me so much time!"
              </p>
              <p className="text-yellow-400 font-semibold">Sarah Al-Ahmed</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg animate-fade-in">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Excellent app with great features. The expert consultation feature is invaluable for investors."
              </p>
              <p className="text-yellow-400 font-semibold">Mohammed Al-Rashid</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg animate-fade-in">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "User-friendly interface and comprehensive property information. Highly recommended!"
              </p>
              <p className="text-yellow-400 font-semibold">Fatima Al-Zahra</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-black mb-8">
            Download the Al Fauzan Real Estate app today and start your property journey
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center space-x-2">
              <Download className="h-6 w-6" />
              <span>Download for iOS</span>
            </button>
            <button className="bg-black text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center space-x-2">
              <Download className="h-6 w-6" />
              <span>Download for Android</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apps;
