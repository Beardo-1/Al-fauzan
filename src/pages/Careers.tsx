
import React, { useState } from 'react';
import TransparentNavigation from '@/components/TransparentNavigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Clock, Users, Target, Award } from 'lucide-react';
import RiyalIcon from '@/components/RiyalIcon';

const Careers = () => {
  const [language, setLanguage] = useState('EN');

  const content = {
    EN: {
      title: "Join Our Team",
      subtitle: "Build your career with Saudi Arabia's leading real estate company",
      culture: {
        title: "Our Culture",
        values: [
          { icon: Users, title: "Collaborative", desc: "We work together to achieve excellence" },
          { icon: Target, title: "Goal-Oriented", desc: "We set ambitious targets and achieve them" },
          { icon: Award, title: "Excellence", desc: "We strive for the highest standards" }
        ]
      },
      openings: {
        title: "Current Openings",
        positions: [
          {
            id: 1,
            title: "Senior Real Estate Developer",
            department: "Development",
            location: "Riyadh, KSA",
            type: "Full-time",
            salary: "15,000 - 25,000",
            description: "Lead major development projects from conception to completion"
          },
          {
            id: 2,
            title: "Property Sales Manager",
            department: "Sales",
            location: "Dammam, KSA",
            type: "Full-time",
            salary: "8,000 - 15,000",
            description: "Manage property sales operations and client relationships"
          },
          {
            id: 3,
            title: "Marketing Specialist",
            department: "Marketing",
            location: "Riyadh, KSA",
            type: "Full-time",
            salary: "6,000 - 10,000",
            description: "Develop and execute marketing strategies for our properties"
          },
          {
            id: 4,
            title: "Financial Analyst",
            department: "Finance",
            location: "Riyadh, KSA",
            type: "Full-time",
            salary: "7,000 - 12,000",
            description: "Analyze financial data and support investment decisions"
          }
        ]
      },
      benefits: {
        title: "Why Work With Us",
        items: [
          "Competitive salary packages",
          "Health insurance coverage",
          "Professional development opportunities",
          "Performance-based bonuses",
          "Flexible working arrangements",
          "Career advancement pathways"
        ]
      }
    },
    AR: {
      title: "انضم إلى فريقنا",
      subtitle: "ابن مسيرتك المهنية مع الشركة العقارية الرائدة في المملكة العربية السعودية",
      culture: {
        title: "ثقافتنا",
        values: [
          { icon: Users, title: "تعاوني", desc: "نعمل معاً لتحقيق التميز" },
          { icon: Target, title: "موجه نحو الهدف", desc: "نضع أهدافاً طموحة ونحققها" },
          { icon: Award, title: "التميز", desc: "نسعى لأعلى المعايير" }
        ]
      },
      openings: {
        title: "الوظائف المتاحة حالياً",
        positions: [
          {
            id: 1,
            title: "مطور عقاري أول",
            department: "التطوير",
            location: "الرياض، المملكة العربية السعودية",
            type: "دوام كامل",
            salary: "15,000 - 25,000",
            description: "قيادة مشاريع التطوير الكبرى من الفكرة إلى التنفيذ"
          },
          {
            id: 2,
            title: "مدير مبيعات العقارات",
            department: "المبيعات",
            location: "الدمام، المملكة العربية السعودية",
            type: "دوام كامل",
            salary: "8,000 - 15,000",
            description: "إدارة عمليات مبيعات العقارات وعلاقات العملاء"
          },
          {
            id: 3,
            title: "أخصائي تسويق",
            department: "التسويق",
            location: "الرياض، المملكة العربية السعودية",
            type: "دوام كامل",
            salary: "6,000 - 10,000",
            description: "تطوير وتنفيذ استراتيجيات التسويق لعقاراتنا"
          },
          {
            id: 4,
            title: "محلل مالي",
            department: "المالية",
            location: "الرياض، المملكة العربية السعودية",
            type: "دوام كامل",
            salary: "7,000 - 12,000",
            description: "تحليل البيانات المالية ودعم قرارات الاستثمار"
          }
        ]
      },
      benefits: {
        title: "لماذا تعمل معنا",
        items: [
          "حزم رواتب تنافسية",
          "تغطية التأمين الصحي",
          "فرص التطوير المهني",
          "مكافآت على أساس الأداء",
          "ترتيبات عمل مرنة",
          "مسارات التقدم الوظيفي"
        ]
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-black text-white">
      <TransparentNavigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            {currentContent.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
            {currentContent.subtitle}
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-yellow-400">
            {currentContent.culture.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.culture.values.map((value, index) => (
              <div key={index} className="text-center animate-fade-in hover-scale">
                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-yellow-400">
            {currentContent.openings.title}
          </h2>
          <div className="space-y-6">
            {currentContent.openings.positions.map((position) => (
              <div key={position.id} className="bg-gray-900 rounded-lg p-8 hover-scale animate-fade-in">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                    <p className="text-gray-300 mb-4">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <RiyalIcon className="h-4 w-4 mr-2" />
                        {position.salary}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-8">
                    <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-yellow-400">
            {currentContent.benefits.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentContent.benefits.items.map((benefit, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg animate-fade-in hover-scale">
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
