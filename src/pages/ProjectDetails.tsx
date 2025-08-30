import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TransparentNavigation from '@/components/TransparentNavigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Building, 
  Users, 
  CheckCircle,
  Clock,
  Star,
  Share2,
  Heart,
  Phone,
  Mail,
  Download,
  Play,
  X,
  Send,
  Eye,
  FileText,
  Target,
  Award
} from 'lucide-react';
import RiyalIcon from '@/components/RiyalIcon';
import { useLanguage } from '@/contexts/LanguageContext';
import InteractiveImageGallery from '@/components/InteractiveImageGallery';
import ProjectFeaturesInfographic from '@/components/ProjectFeaturesInfographic';
import { projectsData, Project } from '@/data/projectsData';



const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showInterestForm, setShowInterestForm] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    investmentType: 'investment',
    budget: '1M-5M'
  });



  // Fetch project data from static data
  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        setError(null);
        
        if (!id) {
          setError('Project ID is required');
          return;
        }

        // Get project data from projectsData
        const projectData = projectsData[id];
        if (!projectData) {
          setError('Project not found');
          return;
        }

        const currentProject = projectData[language];
        setProject(currentProject);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id, language]);

  const content = {
    EN: {
      backToProjects: "Back to Projects",
      projectOverview: "Project Overview",
      keyFeatures: "Key Features",
      specifications: "Specifications",
      timeline: "Project Timeline",
      gallery: "Gallery",
      contact: "Contact Us",
      download: "Download Brochure",
      share: "Share Project",
      imInterested: "I'm Interested",
      investmentOpportunities: "Investment Opportunities",
      viewVideo: "View Video",
      totalArea: "Total Area",
      industrialZones: "Industrial Zones",
      commercialAreas: "Commercial Areas",
      parkingSpaces: "Parking Spaces",
      securityPosts: "Security Posts",
      roadNetwork: "Road Network",
      industrialUnits: "Industrial Units",
      loadingAreas: "Loading Areas",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      company: "Company Name",
      message: "Message",
      investmentType: "Investment Type",
      budget: "Budget Range",
      submit: "Submit Interest",
      cancel: "Cancel",
      formTitle: "Express Your Interest",
      formSubtitle: "Fill out the form below and we'll get back to you within 24 hours",
      investmentOptions: {
        investment: "Investment",
        partnership: "Partnership",
        consultation: "Consultation",
        other: "Other"
      },
      budgetOptions: {
        "1M-5M": "1M - 5M SAR",
        "5M-10M": "5M - 10M SAR", 
        "10M-25M": "10M - 25M SAR",
        "25M+": "25M+ SAR"
      }
    },
    AR: {
      backToProjects: "العودة للمشاريع",
      projectOverview: "نظرة عامة على المشروع",
      keyFeatures: "المميزات الرئيسية",
      specifications: "المواصفات",
      timeline: "الجدول الزمني للمشروع",
      gallery: "معرض الصور",
      contact: "اتصل بنا",
      download: "تحميل الكتيب",
      share: "مشاركة المشروع",
      imInterested: "أنا مهتم",
      investmentOpportunities: "فرص الاستثمار",
      viewVideo: "مشاهدة الفيديو",
      totalArea: "المساحة الإجمالية",
      industrialZones: "المناطق الصناعية",
      commercialAreas: "المناطق التجارية",
      parkingSpaces: "مواقف السيارات",
      securityPosts: "نقاط الأمن",
      roadNetwork: "شبكة الطرق",
      industrialUnits: "الوحدات الصناعية",
      loadingAreas: "مناطق التحميل",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      company: "اسم الشركة",
      message: "الرسالة",
      investmentType: "نوع الاستثمار",
      budget: "نطاق الميزانية",
      submit: "إرسال الاهتمام",
      cancel: "إلغاء",
      formTitle: "عبّر عن اهتمامك",
      formSubtitle: "املأ النموذج أدناه وسنرد عليك خلال 24 ساعة",
      investmentOptions: {
        investment: "استثمار",
        partnership: "شراكة",
        consultation: "استشارة",
        other: "أخرى"
      },
      budgetOptions: {
                "1M-5M": "1M - 5M",
        "5M-10M": "5M - 10M",
        "10M-25M": "10M - 25M",
        "25M+": "25M+"
      }
    }
  };

  const currentContent = content[language];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/v1/contact/project-interest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          project_title: project.title,
          investment_type: currentContent.investmentOptions[formData.investmentType as keyof typeof currentContent.investmentOptions],
          budget: currentContent.budgetOptions[formData.budget as keyof typeof currentContent.budgetOptions],
          message: formData.message
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Reset form and close modal
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          investmentType: 'investment',
          budget: '1M-5M'
        });
        setShowInterestForm(false);
        
        // Show success message
        alert(result.message || (language === 'EN' ? 'Thank you for your interest! We will contact you within 24 hours.' : 'شكراً لاهتمامك! سنتواصل معك خلال 24 ساعة.'));
      } else {
        alert(result.message || (language === 'EN' ? 'An error occurred. Please try again.' : 'حدث خطأ. يرجى المحاولة مرة أخرى.'));
      }
    } catch (error) {
      alert(language === 'EN' ? 'Network error. Please check your connection and try again.' : 'خطأ في الشبكة. يرجى التحقق من الاتصال والمحاولة مرة أخرى.');
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen overflow-x-hidden relative">
        <div className="fixed inset-0 w-screen h-screen z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/videos/hero-banner.mp4" type="video/mp4" />
            {language === 'AR' ? 'متصفحك لا يدعم تشغيل الفيديو.' : 'Your browser does not support the video tag.'}
          </video>
        </div>
        <TransparentNavigation />
        <div className="flex items-center justify-center min-h-screen z-10 relative">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
            <p className="text-white text-lg">{language === 'EN' ? 'Loading project...' : 'جاري تحميل المشروع...'}</p>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !project) {
    return (
      <div className="min-h-screen overflow-x-hidden relative">
        <div className="fixed inset-0 w-screen h-screen z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/videos/hero-banner.mp4" type="video/mp4" />
            {language === 'AR' ? 'متصفحك لا يدعم تشغيل الفيديو.' : 'Your browser does not support the video tag.'}
          </video>
        </div>
        <TransparentNavigation />
        <div className="flex items-center justify-center min-h-screen z-10 relative">
          <div className="text-center">
            <p className="text-white text-lg mb-4">{error || (language === 'EN' ? 'Project not found' : 'المشروع غير موجود')}</p>
            <Button onClick={() => navigate('/projects')} className="bg-yellow-400 hover:bg-yellow-500 text-black">
              {language === 'EN' ? 'Back to Projects' : 'العودة للمشاريع'}
            </Button>
          </div>
        </div>
      </div>
    );
  }

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
          {language === 'AR' ? 'متصفحك لا يدعم تشغيل الفيديو.' : 'Your browser does not support the video tag.'}
        </video>
      </div>

      <TransparentNavigation />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden z-10">
                 <img
           src={(project.images_urls && project.images_urls[currentImageIndex]) || project.main_image_url || project.images[0]}
           alt={project.title}
           className="w-full h-full object-cover"
         />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-24 left-6 z-10 flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className={language === 'AR' ? 'font-arabic' : ''}>{currentContent.backToProjects}</span>
        </button>

        {/* QR Code in Right Corner */}
        <a 
          href={project?.id === "2" 
            ? "https://www.google.com/maps?q=%D8%A7%D9%84%D9%85%D8%B4%D8%A7%D8%B9%D9%84%D8%8C+%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6+14326&ftid=0x3e2fa6c5762592e7:0x53323b90d7b1706a&entry=gps&lucs=,94282564,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94282134,94203019,47084304&g_ep=CAISEjI1LjMwLjAuNzg1NjQ2NTQ3MBgAINeCAypjLDk0MjgyNTY0LDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjgyMTM0LDk0MjAzMDE5LDQ3MDg0MzA0QgJTQQ%3D%3D&skid=4bb072a2-ef5c-41aa-918b-ec07a36b59c2&g_st=ipc"
            : project?.id === "3"
            ? "https://www.google.com/maps/place/24%C2%B035'42.7%22N+46%C2%B051'40.5%22E/@24.5951944,46.8586751,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.5951944!4d46.86125?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
            : project?.id === "4"
            ? "https://www.google.com/maps/place/Fouzan+Real+Estate/@24.6445934,46.8390385,17.31z/data=!4m12!1m5!3m4!2zMjTCsDM4JzI3LjMiTiA0NsKwNTAnMTguOCJF!8m2!3d24.6409167!4d46.8385556!3m5!1s0x3e2fa7e6f6ba4431:0x5f255fb01ff86919!8m2!3d24.6442475!4d46.8413776!16s%2Fg%2F11b7dqk9vx?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
            : project?.id === "5"
            ? "https://www.google.com/maps/place/An+Noor,+Riyadh+14272/@24.6351906,46.8063974,17z/data=!3m1!4b1!4m6!3m5!1s0x3e2f080b37cf68a5:0x4ea8419d81a9b09d!8m2!3d24.6351906!4d46.8063974!16s%2Fg%2F11g626qxx1?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
            : project?.id === "6"
            ? "https://www.google.com/maps?q=24.6029722,46.8223333&entry=gps&lucs=,94282564,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94282134,94203019,47084304&g_ep=CAISEjI1LjMwLjAuNzg1NjQ2NTQ3MBgAINeCAypjLDk0MjgyNTY0LDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjgyMTM0LDk0MjAzMDE5LDQ3MDg0MzA0QgJTQQ%3D%3D&skid=abb12424-6ae3-4950-8cbb-6ac161f726f1&g_st=ipc"
            : project?.id === "7"
            ? "https://www.google.com/maps/place/24%C2%B037'07.6%22N+46%C2%B052'06.0%22E/@24.6187778,46.8657584,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.6187778!4d46.8683333?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
            : project?.id === "8"
            ? "https://www.google.com/maps/place/24%C2%B037'02.6%22N+46%C2%B049'06.9%22E/@24.6173889,46.8160084,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.6173889!4d46.8185833?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
            : project?.id === "9"
            ? "https://www.google.com/maps?q=24.5996389,46.8859444&entry=gps&lucs=,94282564,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94282134,94203019,47084304&g_ep=CAISEjI1LjMwLjAuNzg1NjQ2NTQ3MBgAINeCAypjLDk0MjgyNTY0LDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjgyMTM0LDk0MjAzMDE5LDQ3MDg0MzA0QgJTQQ%3D%3D&skid=5b5c53fc-d339-4575-b762-a51397fe7246&g_st=ipc"
            : project?.id === "10"
            ? "https://www.google.com/maps?q=24.6263550,46.8819176&entry=gps&lucs=,94282564,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94282134,94203019,47084304&g_ep=CAISEjI1LjMwLjAuNzg1NjQ2NTQ3MBgAINeCAypjLDk0MjgyNTY0LDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjgyMTM0LDk0MjAzMDE5LDQ3MDg0MzA0QgJTQQ%3D%3D&skid=eaf8d8d1-1be4-4320-b8f5-8dbac57c22ed&g_st=ipc"
            : project?.id === "11"
            ? "https://www.google.com/maps/place/Al+Mashael,+Riyadh+14328/@24.6056953,46.8680255,17z/data=!3m1!4b1!4m6!3m5!1s0x3e2fa6e1275faed7:0xb73ff15426545d05!8m2!3d24.6056953!4d46.8680255!16s%2Fg%2F11tmshcbn0?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
            : project?.id === "12"
            ? "https://www.google.com/maps/place/24%C2%B034'48.7%22N+46%C2%B052'22.5%22E/@24.5801944,46.8703418,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.5801944!4d46.8729167?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
            : project?.id === "13"
            ? "https://www.google.com/maps/place/RQYA7509,+4848,+As+Sulay,+Riyadh+14324/@24.6481992,46.8909197,17z/data=!3m1!4b1!4m6!3m5!1s0x3e2fa66d1e940c4d:0x2fb31491614479b6!8m2!3d24.6481992!4d46.8909197!16s%2Fg%2F11x6r7wmkz?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
            : project?.id === "14"
            ? "https://www.google.com/maps/place/24%C2%B036'32.1%22N+46%C2%B051'14.7%22E/@24.6089014,46.8515051,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.6089014!4d46.85408?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
            : project?.id === "15"
            ? "https://www.google.com/maps?q=24.5864722,46.8006111&entry=gps&lucs=,94282564,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94282134,94203019,47084304&g_ep=CAISEjI1LjMwLjAuNzg1NjQ2NTQ3MBgAINeCAypjLDk0MjgyNTY0LDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjgyMTM0LDk0MjAzMDE5LDQ3MDg0MzA0QgJTQQ%3D%3D&skid=7bfedaf7-45df-4414-a65d-9183d1580283&g_st=ipc"
            : "https://www.google.com/maps?q=%D9%85%D8%AF%D9%8A%D9%86%D8%A9+%D8%A7%D9%84%D9%81%D9%88%D8%B2%D8%A7%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D9%8A%D8%A9%D8%8C+%D8%B7%D8%B1%D9%8A%D9%82+%D8%A7%D9%84%D8%AE%D8%B1%D8%AC%D8%8C+%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6+14548&ftid=0x3e2f99f12ee457e3:0x17b95c627c6482ec&entry=gps&lucs=,94282564,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94282134,94203019,47084304&g_ep=CAISEjI1LjMwLjAuNzg1NjQ2NTQ3MBgAINeCAypjLDk0MjgyNTY0LDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjgyMTM0LDk0MjAzMDE5LDQ3MDg0MzA0QgJTQQ%3D%3D&skid=f66e323c-5f41-4c91-b468-aae28b9f8efe&g_st=ipc"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-6 right-6 z-10 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-3"
          title="View on Google Maps"
        >
          <img 
            src={project?.id === "2" 
              ? "/assets/images/projects/remas/QR.png"
              : project?.id === "3"
              ? "/assets/images/projects/SAMA/QR.png"
              : project?.id === "4"
              ? "/assets/images/projects/Shams/QR.png"
              : project?.id === "5"
              ? "/assets/images/projects/Exit 18/QR.png"
              : project?.id === "6"
              ? "/assets/images/projects/ALMANAKH/QR.png"
              : project?.id === "7"
              ? "/assets/images/projects/mashael/QR.png"
              : project?.id === "8"
              ? "/assets/images/projects/96/QR.png"
              : project?.id === "9"
              ? "/assets/images/projects/Durrat/QR.png"
              : project?.id === "10"
              ? "/assets/images/projects/Raneem/QR.png"
              : project?.id === "11"
              ? "/assets/images/projects/Istanbul/QR.png"
              : project?.id === "12"
              ? "/assets/images/projects/Randa/QR.png"
              : project?.id === "13"
              ? "/assets/images/projects/Rana/QR.png"
              : project?.id === "14"
              ? "/assets/images/projects/ALNAMOTHAJIYA/QR.png"
              : project?.id === "15"
              ? "/assets/images/projects/Aziziyah/QR.png"
              : "/assets/images/projects/Al fauzan industrial city/QR.png"
            }
            alt="QR Code - View on Google Maps"
            className="w-24 h-24"
          />
        </a>

        {/* Project Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                {project?.category}
              </span>
                              <span className={`px-3 py-1 rounded-full text-sm ${
                  project?.status === 'مكتمل' || project?.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-orange-500 text-white'
                }`}>
                  {project?.status}
              </span>
            </div>
            
                          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-4 ${
                language === 'AR' ? 'font-arabic' : ''
              }`} style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                {project?.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/90 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span className={language === 'AR' ? 'font-arabic' : ''}>{project?.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center">
                <RiyalIcon className="h-5 w-5 mr-2" />
                <span className={language === 'AR' ? 'font-arabic' : ''}>{project.value}</span>
              </div>
              <div className="flex items-center">
                <Building className="h-5 w-5 mr-2" />
                <span className={language === 'AR' ? 'font-arabic' : ''}>{project.area}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-yellow-400 hover:bg-yellow-500 text-black"
                onClick={() => setShowInterestForm(true)}
              >
                <Target className="h-4 w-4 mr-2" />
                {currentContent.imInterested}
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                <Download className="h-4 w-4 mr-2" />
                {currentContent.download}
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                <Share2 className="h-4 w-4 mr-2" />
                {currentContent.share}
              </Button>
            </div>
          </div>
        </div>

                 {/* Image Navigation */}
         <div className="absolute bottom-6 right-6 flex space-x-2">
           {(project.images_urls && project.images_urls.length > 0 ? project.images_urls : [project.main_image_url || project.images[0]]).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-yellow-400' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        
        {/* Project Overview */}
        <section className="mb-20">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h2 className={`text-3xl md:text-4xl font-bold text-white mb-8 ${
              language === 'AR' ? 'font-arabic text-right' : ''
            }`} style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
              {currentContent.projectOverview}
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                                 <p className={`text-lg text-white/90 leading-relaxed mb-6 ${
                   language === 'AR' ? 'font-arabic text-right' : ''
                 }`} style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                   {project.long_description}
                </p>
              </div>
              
              {/* Specifications Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center border border-white/20">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">{project.specifications.totalArea}</div>
                  <div className="text-white/90">{currentContent.totalArea}</div>
                </div>
                                 <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center border border-white/20">
                   <div className="text-3xl font-bold text-yellow-400 mb-2">
                     {'industrialZones' in project.specifications ? project.specifications.industrialZones : project.specifications.industrialUnits}
                   </div>
                   <div className="text-white/90">{currentContent.industrialZones || currentContent.industrialUnits}</div>
                 </div>
                 <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center border border-white/20">
                   <div className="text-3xl font-bold text-yellow-400 mb-2">
                     {'commercialAreas' in project.specifications ? project.specifications.commercialAreas : project.specifications.commercialSpaces}
                   </div>
                   <div className="text-white/90">{currentContent.commercialAreas}</div>
                 </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center border border-white/20">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">{project.specifications.parkingSpaces}</div>
                  <div className="text-white/90">{currentContent.parkingSpaces}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Infographic */}
        <section className="mb-20">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h2 className={`text-3xl md:text-4xl font-bold text-white mb-8 ${
              language === 'AR' ? 'font-arabic text-right' : ''
            }`} style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
              {currentContent.keyFeatures}
            </h2>
            <ProjectFeaturesInfographic />
          </div>
        </section>



        {/* Video Section */}
        {project.video_url && (
          <section className="mb-20">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h2 className={`text-3xl md:text-4xl font-bold text-white mb-8 ${
                language === 'AR' ? 'font-arabic text-right' : ''
              }`} style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                {currentContent.viewVideo}
              </h2>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster={project.images[0]}
                >
                                     <source src={project.video_url} type="video/mp4" />
                  {language === 'AR' ? 'متصفحك لا يدعم تشغيل الفيديو.' : 'Your browser does not support the video tag.'}
                </video>
              </div>
            </div>
          </section>
        )}

                 {/* Interactive Gallery */}
         <section>
           <InteractiveImageGallery 
             images={project.images_urls.length > 0 ? project.images_urls : [project.main_image_url]} 
             title={project.title} 
           />
         </section>
      </div>

      {/* Interest Form Modal */}
      {showInterestForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className={`text-2xl font-bold text-white ${language === 'AR' ? 'font-arabic' : ''}`}>
                    {currentContent.formTitle}
                  </h3>
                  <p className={`text-white/80 mt-2 ${language === 'AR' ? 'font-arabic' : ''}`}>
                    {currentContent.formSubtitle}
                  </p>
                </div>
                <button
                  onClick={() => setShowInterestForm(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-white mb-2 ${language === 'AR' ? 'font-arabic' : ''}`}>
                      {currentContent.name} *
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder-white/50 backdrop-blur-md"
                      placeholder={currentContent.name}
                    />
                  </div>
                  <div>
                    <label className={`block text-white mb-2 ${language === 'AR' ? 'font-arabic' : ''}`}>
                      {currentContent.email} *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder-white/50 backdrop-blur-md"
                      placeholder={currentContent.email}
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-white mb-2 ${language === 'AR' ? 'font-arabic' : ''}`}>
                      {currentContent.phone}
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder-white/50 backdrop-blur-md"
                      placeholder={currentContent.phone}
                    />
                  </div>
                  <div>
                    <label className={`block text-white mb-2 ${language === 'AR' ? 'font-arabic' : ''}`}>
                      {currentContent.company}
                    </label>
                    <Input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder-white/50 backdrop-blur-md"
                      placeholder={currentContent.company}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-white mb-2 ${language === 'AR' ? 'font-arabic' : ''}`}>
                      {currentContent.investmentType}
                    </label>
                    <select
                      value={formData.investmentType}
                      onChange={(e) => setFormData({...formData, investmentType: e.target.value})}
                      className="w-full bg-white/10 border border-white/20 text-white rounded-md px-3 py-2 backdrop-blur-md"
                    >
                      {Object.entries(currentContent.investmentOptions).map(([key, value]) => (
                        <option key={key} value={key} className="bg-gray-800">{value}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={`block text-white mb-2 ${language === 'AR' ? 'font-arabic' : ''}`}>
                      {currentContent.budget}
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className="w-full bg-white/10 border border-white/20 text-white rounded-md px-3 py-2 backdrop-blur-md"
                    >
                      {Object.entries(currentContent.budgetOptions).map(([key, value]) => (
                        <option key={key} value={key} className="bg-gray-800">{value}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={`block text-white mb-2 ${language === 'AR' ? 'font-arabic' : ''}`}>
                    {currentContent.message}
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder-white/50 backdrop-blur-md min-h-[120px]"
                    placeholder={currentContent.message}
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button 
                    type="submit" 
                    className="bg-yellow-400 hover:bg-yellow-500 text-black flex-1"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {currentContent.submit}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowInterestForm(false)}
                    className="border-white text-white hover:bg-white hover:text-black"
                  >
                    {currentContent.cancel}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProjectDetails;
