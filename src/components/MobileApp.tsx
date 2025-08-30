
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Star, Smartphone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const MobileApp: React.FC = () => {
  const { language } = useLanguage();
  const content = {
    EN: {
      title: "Experience Al Fauzan",
      titleHighlight: "on Mobile",
      subtitle: "Download our mobile app for seamless property browsing, virtual tours, and instant communication with our agents.",
      features: [
        "3D Virtual Property Tours",
        "Advanced Search & Filters",
        "Real-time Property Updates",
        "Direct Agent Communication"
      ],
      downloadIOS: "Download for iOS",
      downloadAndroid: "Download for Android",
      rating: "4.8/5 rating from 2,500+ users",
      appTitle: "Al Fauzan Real Estate"
    },
    AR: {
      title: "اختبر الفوزان",
      titleHighlight: "على الهاتف المحمول",
      subtitle: "حمل تطبيقنا المحمول لتصفح العقارات بسلاسة، جولات افتراضية، وتواصل فوري مع وكلائنا.",
      features: [
        "جولات عقارية افتراضية ثلاثية الأبعاد",
        "بحث متقدم ومرشحات",
        "تحديثات عقارية فورية",
        "تواصل مباشر مع الوكيل"
      ],
      downloadIOS: "حمل لنظام iOS",
      downloadAndroid: "حمل لنظام Android",
      rating: "تقييم 4.8/5 من أكثر من 2,500 مستخدم",
      appTitle: "الفوزان العقارية"
    }
  };

  const currentContent = content[language];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,215,0,0.05),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`${language === 'AR' ? 'text-right lg:order-2' : 'lg:order-1'}`}>
            <div className="mb-8">
              <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${language === 'AR' ? 'font-arabic' : ''}`} style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>
                <span className="block">{currentContent.title}</span>
                <span className="block text-yellow-400">{currentContent.titleHighlight}</span>
              </h2>
              <p className={`text-xl text-gray-300 leading-relaxed ${language === 'AR' ? 'font-arabic' : ''}`} style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                {currentContent.subtitle}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {currentContent.features.map((feature, index) => (
                <div key={index} className="flex items-center text-white/90" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4"></div>
                  <span className={language === 'AR' ? 'font-arabic' : ''}>{feature}</span>
                </div>
              ))}
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold hover-scale"
              >
                <Download className="mr-2 h-5 w-5" />
                <span className={language === 'AR' ? 'font-arabic' : ''}>
                  {currentContent.downloadIOS}
                </span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black hover-scale"
              >
                <Download className="mr-2 h-5 w-5" />
                <span className={language === 'AR' ? 'font-arabic' : ''}>
                  {currentContent.downloadAndroid}
                </span>
              </Button>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className={`text-white/80 ${language === 'AR' ? 'font-arabic' : ''}`} style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
                {currentContent.rating}
              </span>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className={`relative flex justify-center ${language === 'AR' ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-64 h-[500px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl hover-scale">
                <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                  {/* Screen Content */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black p-6">
                    <div className="text-center mb-6">
                      <img 
                        src="/lovable-uploads/556bfd57-a7c9-49e3-832a-418374e39898.png" 
                        alt="Al Fauzan App" 
                        className="h-12 w-auto mx-auto mb-4"
                      />
                      <h3 className={`text-white font-bold text-lg ${language === 'AR' ? 'font-arabic' : ''}`}>
                        {currentContent.appTitle}
                      </h3>
                    </div>
                    
                    {/* Mock property cards */}
                    <div className="space-y-3">
                      <div className="bg-gray-700 rounded-lg p-3">
                        <div className="w-full h-16 bg-gray-600 rounded mb-2"></div>
                        <div className="h-2 bg-gray-600 rounded mb-1"></div>
                        <div className="h-2 bg-gray-600 rounded w-3/4"></div>
                      </div>
                      <div className="bg-gray-700 rounded-lg p-3">
                        <div className="w-full h-16 bg-gray-600 rounded mb-2"></div>
                        <div className="h-2 bg-gray-600 rounded mb-1"></div>
                        <div className="h-2 bg-gray-600 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <Smartphone className="h-4 w-4 text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
