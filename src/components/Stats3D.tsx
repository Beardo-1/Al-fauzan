
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  number: string;
  label: string;
  icon?: string;
}

interface Stats3DProps {
  stats: Stat[];
  title?: string;
  subtitle?: string;
  language: 'EN' | 'AR';
}

const Stats3D: React.FC<Stats3DProps> = ({ stats, title, subtitle, language }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement[]>([]);
  const [animatedNumbers, setAnimatedNumbers] = useState<string[]>(stats.map(() => '0'));

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate statistics on scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        onEnter: () => {
          stats.forEach((stat, index) => {
            const numericValue = parseInt(stat.number.replace(/[^0-9]/g, ''));
            const suffix = stat.number.replace(/[0-9]/g, '');
            
            gsap.to({ value: 0 }, {
              value: numericValue,
              duration: 2,
              ease: 'power2.out',
              onUpdate: function() {
                const currentValue = Math.round(this.targets()[0].value).toString() + suffix;
                setAnimatedNumbers(prev => {
                  const newNumbers = [...prev];
                  newNumbers[index] = currentValue;
                  return newNumbers;
                });
              }
            });
          });

          // 3D hover animations for stat cards
          statsRef.current.forEach((card, index) => {
            if (!card) return;
            
            gsap.fromTo(card, 
              { 
                rotationY: -15,
                rotationX: 5,
                z: -50,
                opacity: 0 
              },
              { 
                rotationY: 0,
                rotationX: 0,
                z: 0,
                opacity: 1,
                duration: 0.8,
                delay: index * 0.1,
                ease: 'back.out(1.7)'
              }
            );
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [stats]);

  return (
    <section ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-gradient ${language === 'AR' ? 'font-arabic' : ''}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${language === 'AR' ? 'font-arabic' : ''}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={el => statsRef.current[index] = el!}
              className="card-3d text-center p-8 group hover-3d transform-3d"
              style={{ perspective: '1000px' }}
            >
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {animatedNumbers[index]}
                </div>
                <p className={`text-lg text-gray-300 font-medium ${language === 'AR' ? 'font-arabic' : ''}`}>
                  {stat.label}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats3D;
