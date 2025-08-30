
import React from 'react';
import TransparentNavigation from '@/components/TransparentNavigation';
import ProjectsPage from '@/components/ProjectsPage';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Projects = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Global Video Background */}
      <div className="fixed inset-0 w-screen h-screen z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/videos/hero-banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <TransparentNavigation />
      
      {/* Page Header */}
      <div className="relative z-10 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            {language === 'EN' ? 'Our Projects' : 'مشاريعنا'}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            {language === 'EN' 
              ? 'Discover our portfolio of innovative real estate developments across Saudi Arabia'
              : 'اكتشف محفظة مشاريعنا العقارية المبتكرة في جميع أنحاء المملكة العربية السعودية'
            }
          </p>
        </div>
      </div>

      <ProjectsPage />
      <Footer />
    </div>
  );
};

export default Projects;
