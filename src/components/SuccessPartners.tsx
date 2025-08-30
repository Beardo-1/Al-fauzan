
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const SuccessPartners = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Success Partners",
      subtitle: "Trusted by leading organizations across the Kingdom",
      cta: "Join over 1500+ companies who trust Al Fauzan Real Estate"
    },
    AR: {
      title: "شركاء النجاح",
      subtitle: "موثوق به من قبل المؤسسات الرائدة في المملكة",
      cta: "انضم إلى أكثر من 1500+ شركة تثق بالفوزان العقارية"
    }
  };

  const currentContent = content[language];

  const partners = [
    { 
      name: language === 'AR' ? 'شركة الشريك 1' : 'Partner Company 1', 
      logo: '/assets/images/partner-1.webp' 
    },
    { 
      name: language === 'AR' ? 'شركة الشريك 2' : 'Partner Company 2', 
      logo: '/assets/images/partner-2.webp' 
    },
    { 
      name: language === 'AR' ? 'شركة الشريك 3' : 'Partner Company 3', 
      logo: '/assets/images/partner-3.webp' 
    },
    { 
      name: language === 'AR' ? 'شركة الشريك 4' : 'Partner Company 4', 
      logo: '/assets/images/partner-4.webp' 
    },
    { 
      name: language === 'AR' ? 'شركة الشريك 5' : 'Partner Company 5', 
      logo: '/assets/images/partner-5.webp' 
    }
  ];

  return (
    <section className="py-20 z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${language === 'AR' ? 'font-arabic' : ''}`}>
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 text-center ${
            language === 'AR' ? 'font-arabic' : ''
          }`} style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            {currentContent.title}
          </h2>
          <p className={`text-xl text-white/90 max-w-2xl mx-auto text-center ${
            language === 'AR' ? 'font-arabic' : ''
          }`} style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group flex items-center justify-center p-8 rounded-xl bg-white/90 backdrop-blur-sm hover:bg-white/95 border border-white/20 transition-all duration-300 hover-scale shadow-lg hover:shadow-xl"
            >
              <img 
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-auto transition-all duration-300 opacity-90 group-hover:opacity-100 max-w-full"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className={`text-white/80 text-lg ${
            language === 'AR' ? 'font-arabic' : ''
          }`} style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
            {currentContent.cta}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuccessPartners;
