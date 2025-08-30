
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building, TrendingUp, Shield, Heart, Factory, Home, Warehouse, Building2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  icon: any;
  title: string;
  description: string;
  features?: string[];
}

interface Services3DProps {
  services: Service[];
  title: string;
  subtitle?: string;
  language: 'EN' | 'AR';
}

const Services3D: React.FC<Services3DProps> = ({ services, title, subtitle, language }) => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!servicesRef.current) return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        // Initial animation
        gsap.fromTo(card,
          {
            rotationY: index % 2 === 0 ? -30 : 30,
            rotationX: 10,
            z: -100,
            opacity: 0,
            y: 50
          },
          {
            rotationY: 0,
            rotationX: 0,
            z: 0,
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'back.out(1.7)',
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        // Hover animations
        const icon = card.querySelector('.service-icon');
        const content = card.querySelector('.service-content');

        if (icon && content) {
          card.addEventListener('mouseenter', () => {
            gsap.to(icon, { rotationY: 360, scale: 1.2, duration: 0.6, ease: 'back.out(1.7)' });
            gsap.to(content, { y: -5, duration: 0.3 });
            gsap.to(card, { rotationY: 5, rotationX: -2, z: 20, duration: 0.3 });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(icon, { rotationY: 0, scale: 1, duration: 0.3 });
            gsap.to(content, { y: 0, duration: 0.3 });
            gsap.to(card, { rotationY: 0, rotationX: 0, z: 0, duration: 0.3 });
          });
        }
      });
    }, servicesRef);

    return () => ctx.revert();
  }, [services]);

  return (
    <section ref={servicesRef} className="py-20 bg-gray-900/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-gradient ${language === 'AR' ? 'font-arabic' : ''}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${language === 'AR' ? 'font-arabic' : ''}`}>
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el!}
              className="card-3d p-8 group cursor-pointer transform-3d"
              style={{ perspective: '1000px' }}
            >
              <div className="service-icon mb-6">
                <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto transform transition-transform duration-300">
                  <service.icon className="h-10 w-10 text-black" />
                </div>
              </div>
              
              <div className="service-content text-center">
                <h3 className={`text-2xl font-bold mb-4 text-white ${language === 'AR' ? 'font-arabic' : ''}`}>
                  {service.title}
                </h3>
                <p className={`text-gray-300 mb-6 leading-relaxed ${language === 'AR' ? 'font-arabic' : ''}`}>
                  {service.description}
                </p>
                
                {service.features && (
                  <ul className={`text-sm text-gray-400 space-y-2 ${language === 'AR' ? 'font-arabic' : ''}`}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services3D;
