
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface Timeline3DProps {
  events: TimelineEvent[];
  title: string;
  language: 'EN' | 'AR';
}

const Timeline3D: React.FC<Timeline3DProps> = ({ events, title, language }) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!timelineRef.current) return;

    const ctx = gsap.context(() => {
      // Animate timeline events on scroll
      eventsRef.current.forEach((event, index) => {
        if (!event) return;

        gsap.fromTo(event,
          {
            x: index % 2 === 0 ? -100 : 100,
            rotationY: index % 2 === 0 ? -30 : 30,
            opacity: 0,
            z: -100
          },
          {
            x: 0,
            rotationY: 0,
            opacity: 1,
            z: 0,
            duration: 1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: event,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }, timelineRef);

    return () => ctx.revert();
  }, [events]);

  return (
    <section ref={timelineRef} className="py-20 bg-gray-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-gradient ${language === 'AR' ? 'font-arabic' : ''}`}>
            {title}
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 rounded-full"></div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                ref={el => eventsRef.current[index] = el!}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} transform-3d`}
                style={{ perspective: '1000px' }}
              >
                <div className="flex-1 px-8">
                  <div className={`card-3d p-8 hover-3d ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-yellow-400 text-black text-xl font-bold px-4 py-2 rounded-lg inline-block mb-4">
                      {event.year}
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 text-white ${language === 'AR' ? 'font-arabic' : ''}`}>
                      {event.title}
                    </h3>
                    <p className={`text-gray-300 leading-relaxed ${language === 'AR' ? 'font-arabic' : ''}`}>
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full border-4 border-black shadow-lg transform hover:scale-125 transition-transform duration-300"></div>
                </div>

                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline3D;
