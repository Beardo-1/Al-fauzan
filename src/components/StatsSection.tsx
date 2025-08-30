
import React, { useState, useEffect, useRef } from 'react';
import { Building, Users, Award, TrendingUp, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedCounter from './AnimatedCounter';

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Our Track Record Speaks",
      subtitle: "Three decades of excellence in real estate development and investment",
      stats: [
        { 
          icon: Building, 
          number: 6, 
          label: 'Projects in the main regions of the Kingdom',
          suffix: '+'
        },
        { 
          icon: Users, 
          number: 500, 
          label: 'Commercial and industrial partners benefiting from the company\'s services',
          suffix: '+'
        },
        { 
          icon: Award, 
          number: 80, 
          label: 'Customer satisfaction driven by the quality of projects and services provided',
          suffix: '%'
        },
        { 
          icon: TrendingUp, 
          number: 24, 
          label: 'Operation and maintenance services ensuring efficiency and continuity',
          suffix: '/7'
        },
        { 
          icon: Building, 
          number: 20, 
          label: 'Industrial Cities and Real Estate Master Plans',
          suffix: '+'
        },
        { 
          icon: Award, 
          number: 35, 
          label: 'Years of experience in real estate and industrial development',
          suffix: '+'
        },
        { 
          icon: Users, 
          number: 70, 
          label: 'Support for CSR programs and initiatives',
          suffix: '+'
        },
        { 
          icon: TrendingUp, 
          number: 10000, 
          label: 'Direct and indirect job opportunities created through the company\'s projects',
          suffix: '+'
        },
        { 
          icon: Building, 
          number: 15, 
          label: 'Future projects currently in planning and construction stages',
          suffix: '+'
        },
        { 
          icon: Users, 
          number: 2000, 
          label: 'Leased industrial, commercial and residential units',
          suffix: '+'
        },
        { 
          icon: TrendingUp, 
          number: 85, 
          label: 'Occupancy rate in existing projects',
          suffix: '%'
        },
        { 
          icon: Award, 
          number: 7, 
          label: 'Awards and recognitions for excellence in real estate development',
          suffix: '+'
        }
      ]
    },
    AR: {
      title: "سجلنا يتحدث عن نفسه",
      subtitle: "ثلاثة عقود من التميز في التطوير العقاري والاستثمار",
      stats: [
        { 
          icon: Building, 
          number: 6, 
          label: 'المشاريع في المناطق الرئيسية في المملكة',
          suffix: '+'
        },
        { 
          icon: Users, 
          number: 500, 
          label: 'شريك تجاري وصناعي مستفيد من خدمات الشركة',
          suffix: '+'
        },
        { 
          icon: Award, 
          number: 80, 
          label: 'رضا العملاء بفضل نوعية المشاريع والخدمات المقدمة',
          suffix: '%'
        },
        { 
          icon: TrendingUp, 
          number: 24, 
          label: 'خدمات تشغيل وصيانة لضمان كفاءة العمليات واستمراريتها',
          suffix: '/7'
        },
        { 
          icon: Building, 
          number: 20, 
          label: 'مشاريع صناعية ومخططات عقارية',
          suffix: '+'
        },
        { 
          icon: Award, 
          number: 35, 
          label: 'سنة من الخبرة في التطوير العقاري والصناعي',
          suffix: '+'
        },
        { 
          icon: Users, 
          number: 70, 
          label: 'دعم برامج ومبادرات المسؤولية المجتمعية',
          suffix: '+'
        },
        { 
          icon: TrendingUp, 
          number: 10000, 
          label: 'فرصة عمل مباشرة وغير مباشرة تم توفيرها من خلال مشاريع الشركة',
          suffix: '+'
        },
        { 
          icon: Building, 
          number: 15, 
          label: 'مشاريع نوعية قيد التخطيط والإنشاء',
          suffix: '+'
        },
        { 
          icon: Users, 
          number: 2000, 
          label: 'وحدة صناعية وتجارية وسكنية مؤجرة',
          suffix: '+'
        },
        { 
          icon: TrendingUp, 
          number: 85, 
          label: 'نسبة الإشغال في المشاريع القائمة',
          suffix: '%'
        },
        { 
          icon: Award, 
          number: 7, 
          label: 'جائزة وتكريم في مجالات التطوير العقاري والصناعي',
          suffix: '+'
        }
      ]
    }
  };

  const currentContent = content[language];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Remove the old AnimatedCounter implementation since we're using the new component

  return (
    <section id="stats" ref={sectionRef} className="py-20 z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${language === 'AR' ? 'text-right' : ''}`}>
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 ${language === 'AR' ? 'font-arabic' : ''}`} style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            {currentContent.title}
          </h2>
          <p className={`text-xl text-white/90 max-w-2xl mx-auto ${language === 'AR' ? 'font-arabic' : ''}`} style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentContent.stats.map((stat, index) => {
            return (
              <div 
                key={index}
                className="relative group hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Circular Tile Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                {/* Main Tile */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-500 text-center group-hover:bg-white/15">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-400/30 transition-all duration-500">
                    <stat.icon className="h-8 w-8 text-yellow-400" />
                  </div>
                  
                  {/* Number */}
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                    <AnimatedCounter 
                      end={stat.number} 
                      suffix={stat.suffix} 
                      duration={2000 + (index * 200)}
                      delay={index * 100}
                    />
                  </div>
                  
                  {/* Label */}
                  <p className={`text-white/90 text-lg ${language === 'AR' ? 'font-arabic' : ''}`} style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional stats are now included in the main grid above */}
      </div>
    </section>
  );
};

export default StatsSection;
