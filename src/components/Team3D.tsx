
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  name: string;
  position: string;
  experience: string;
  bio?: string;
  image: string;
}

interface Team3DProps {
  members: TeamMember[];
  title: string;
  language: 'EN' | 'AR';
}

const Team3D: React.FC<Team3DProps> = ({ members, title, language }) => {
  const teamRef = useRef<HTMLDivElement>(null);
  const membersRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!teamRef.current) return;

    const ctx = gsap.context(() => {
      membersRef.current.forEach((member, index) => {
        if (!member) return;

        // Initial animation
        gsap.fromTo(member,
          {
            rotationY: -45,
            rotationX: 15,
            z: -200,
            opacity: 0,
            scale: 0.8
          },
          {
            rotationY: 0,
            rotationX: 0,
            z: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'back.out(1.7)',
            delay: index * 0.2,
            scrollTrigger: {
              trigger: member,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        // Hover animations
        const image = member.querySelector('.team-image');
        const info = member.querySelector('.team-info');

        if (image && info) {
          member.addEventListener('mouseenter', () => {
            gsap.to(image, { rotationY: 10, rotationX: -5, z: 30, duration: 0.3 });
            gsap.to(info, { y: -10, duration: 0.3 });
          });

          member.addEventListener('mouseleave', () => {
            gsap.to(image, { rotationY: 0, rotationX: 0, z: 0, duration: 0.3 });
            gsap.to(info, { y: 0, duration: 0.3 });
          });
        }
      });
    }, teamRef);

    return () => ctx.revert();
  }, [members]);

  return (
    <section ref={teamRef} className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-gradient ${language === 'AR' ? 'font-arabic' : ''}`}>
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              ref={el => membersRef.current[index] = el!}
              className="group cursor-pointer transform-3d"
              style={{ perspective: '1000px' }}
            >
              <div className="card-3d overflow-hidden hover-3d">
                <div className="team-image relative overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 team-info">
                    <h3 className={`text-2xl font-bold text-white mb-2 ${language === 'AR' ? 'font-arabic' : ''}`}>
                      {member.name}
                    </h3>
                    <p className={`text-yellow-400 font-medium mb-1 ${language === 'AR' ? 'font-arabic' : ''}`}>
                      {member.position}
                    </p>
                    <p className={`text-gray-300 text-sm ${language === 'AR' ? 'font-arabic' : ''}`}>
                      {member.experience}
                    </p>
                  </div>
                </div>
                
                {member.bio && (
                  <div className="p-6 bg-gray-900/90 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 absolute inset-x-0 bottom-0">
                    <p className={`text-gray-300 text-sm leading-relaxed ${language === 'AR' ? 'font-arabic' : ''}`}>
                      {member.bio}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team3D;
