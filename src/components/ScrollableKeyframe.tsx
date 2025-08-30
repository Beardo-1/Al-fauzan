import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const ScrollableKeyframe: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cutoutRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Our Vision in Motion",
      subtitle: "Experience the transformation of Saudi Arabia's skyline through our innovative developments",
      sections: [
        {
          title: "Quality",
          description: "Ensuring the highest standards in all projects and services, maintaining excellence in every aspect of our work.",
          highlight: "Excellence Standards"
        },
        {
          title: "Sustainability",
          description: "Committing to environmentally friendly practices that support sustainable development and future generations.",
          highlight: "Green Practices"
        },
        {
          title: "Innovation",
          description: "Developing modern solutions that meet future demands and drive industry advancement.",
          highlight: "Future Solutions"
        },
        {
          title: "Transparency",
          description: "Upholding honesty and trust with clients and partners, building lasting relationships.",
          highlight: "Trust & Integrity"
        }
      ]
    },
    AR: {
      title: "رؤيتنا في الحركة",
      subtitle: "اختبر تحول أفق المملكة العربية السعودية من خلال تطويراتنا المبتكرة",
      sections: [
        {
          title: "الجودة",
          description: "ضمان أعلى المعايير في جميع المشاريع والخدمات، والحفاظ على التميز في كل جانب من جوانب عملنا.",
          highlight: "معايير التميز"
        },
        {
          title: "الاستدامة",
          description: "الالتزام بالممارسات الصديقة للبيئة التي تدعم التنمية المستدامة والأجيال القادمة.",
          highlight: "الممارسات الخضراء"
        },
        {
          title: "الابتكار",
          description: "تطوير حلول حديثة تلبي متطلبات المستقبل وتدفع تقدم الصناعة.",
          highlight: "حلول المستقبل"
        },
        {
          title: "الشفافية",
          description: "الحفاظ على الصدق والثقة مع العملاء والشركاء، وبناء علاقات دائمة.",
          highlight: "الثقة والنزاهة"
        }
      ]
    }
  };

  const currentContent = content[language];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!cutoutRef.current || !contentRef.current) return;

      // Animate cutout with diagonal movement
      gsap.to(cutoutRef.current, {
        x: '-50vw',
        y: '30vh',
        rotation: 45,
        scale: 0.8,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        }
      });

      // Animate content sections
      currentContent.sections.forEach((_, index) => {
        const sectionElement = contentRef.current?.querySelector(`.content-section-${index}`);
        if (sectionElement) {
          gsap.fromTo(sectionElement,
            { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              scrollTrigger: {
                trigger: sectionElement,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [currentContent.sections]);

  return (
    <section 
      id="about"
      ref={sectionRef} 
      className="relative py-32 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Header Section */}
        <div className={`text-center mb-20 ${language === 'AR' ? 'text-right' : ''}`}>
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                              <span className={`text-white/90 text-sm font-medium ${
                    language === 'AR' ? 'font-arabic' : ''
                  }`}>
                    {currentContent.title}
                  </span>
          </div>
                      <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 leading-tight ${
              language === 'AR' ? 'font-arabic' : ''
            }`} style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
              {currentContent.subtitle}
            </h2>
        </div>

        {/* Main Content Layout - Similar to competitor */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content - Vision Tiles */}
          <div className={`space-y-6 ${language === 'AR' ? 'lg:order-2 text-right' : 'lg:order-1'}`}>
            {currentContent.sections.map((section, index) => (
              <div
                key={index}
                className={`vision-tile-${index} group cursor-pointer`}
                onClick={() => setActiveSection(index)}
              >
                {/* Individual White Tile for Each Vision */}
                <div className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  activeSection === index ? 'border-yellow-500 shadow-xl' : 'border-gray-100 hover:border-yellow-300'
                } ${language === 'AR' ? 'text-right' : 'text-left'}`}>
                  
                  {/* Header with Number */}
                  <div className={`flex items-center space-x-4 mb-4 ${language === 'AR' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeSection === index ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-700'
                    }`}>
                      <span className="text-lg font-bold">{index + 1}</span>
                    </div>
                    
                    <h3 className={`text-xl font-bold text-gray-900 ${
                      language === 'AR' ? 'font-arabic' : ''
                    }`}>
                      {section.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className={`text-gray-700 leading-relaxed ${
                    language === 'AR' ? 'font-arabic' : ''
                  }`}>
                    {section.description}
                  </p>
                  
                  {/* Active Indicator */}
                  {activeSection === index && (
                    <div className="mt-4 flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                      <span className="text-sm text-yellow-600 font-medium">Active</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Content - 3D Visual */}
          <div className={`relative ${language === 'AR' ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative">
              {/* Professional 3D Building Visual */}
              <div className="bg-gray-900 rounded-2xl p-8 relative overflow-hidden">
                <img
                  ref={cutoutRef}
                  src="/assets/images/cutout.png"
                  alt="Alfauzan Development"
                  className="w-full h-96 object-contain opacity-90 transition-transform duration-700"
                  style={{
                    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))',
                  }}
                />
                
                {/* Floating Stats */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="text-center">
                                           <div className="text-2xl font-bold text-gray-900">720</div>
                       <div className={`text-sm text-gray-600 ${language === 'AR' ? 'font-arabic' : ''}`}>
                         {language === 'EN' ? 'Properties' : 'عقارات متاحة'}
                       </div>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="text-center">
                                           <div className="text-2xl font-bold text-gray-900">2000</div>
                       <div className={`text-sm text-gray-600 ${language === 'AR' ? 'font-arabic' : ''}`}>
                         {language === 'EN' ? 'Happy Clients' : 'عميل سعيد'}
                       </div>
                  </div>
                </div>
              </div>
              
              {/* Progress Indicator */}
              <div className="mt-8 flex justify-center">
                <div className="flex space-x-2">
                  {currentContent.sections.map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                        i === activeSection ? 'bg-yellow-500 w-8' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      onClick={() => setActiveSection(i)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollableKeyframe;
