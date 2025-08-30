import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TransparentNavigation from '@/components/TransparentNavigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import RiyalIcon from '@/components/RiyalIcon';
import { 
  ArrowLeft, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Car,
  Heart,
  Share2,
  Phone,
  Mail,
  Calendar,
  Star,
  Eye,
  Wifi,
  Shield,
  Zap,
  Trees,
  Camera,
  ChevronLeft,
  ChevronRight,
  Users,
  Building,
  Home,
  Waves,
  Dumbbell,
  Coffee,
  Utensils,
  ShoppingBag,
  Gamepad2,
  Sun,
  Mountain
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const DelMarCompound = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);

  const content = {
    EN: {
      backToProperties: "Back to Properties",
      propertyOverview: "Property Overview",
      features: "Features & Amenities",
      neighborhood: "Neighborhood",
      contactAgent: "Contact Agent",
      scheduleViewing: "Schedule Viewing",
      share: "Share Property",
      save: "Save Property",
      description: "Description",
      specifications: "Specifications",
      rentalDetails: "Rental Details",
      amenities: "Amenities",
      location: "Location",
      gallery: "Gallery",
      contactUs: "Contact Us",
      viewOnMap: "View on Map",
      totalArea: "Total Area",
      villas: "Villas",
      apartments: "Apartments",
      parkingSpaces: "Parking Spaces",
      yearBuilt: "Year Built",
      status: "Status",
      projectType: "Project Type",
      locationDetails: "Location Details",
      aboutProject: "About the Project",
      targetClients: "Target Clients",
      availableServices: "Available Services",
      designInfrastructure: "Design & Infrastructure"
    },
    AR: {
      backToProperties: "العودة إلى العقارات",
      propertyOverview: "نظرة عامة على العقار",
      features: "المميزات والمرافق",
      neighborhood: "الحي",
      contactAgent: "تواصل مع الوكيل",
      scheduleViewing: "حجز موعد زيارة",
      share: "مشاركة العقار",
      save: "حفظ العقار",
      description: "الوصف",
      specifications: "المواصفات",
      rentalDetails: "تفاصيل الإيجار",
      amenities: "المرافق",
      location: "الموقع",
      gallery: "المعرض",
      contactUs: "تواصل معنا",
      viewOnMap: "عرض على الخريطة",
      totalArea: "المساحة الإجمالية",
      villas: "الفيلات",
      apartments: "الشقق",
      parkingSpaces: "مواقف السيارات",
      yearBuilt: "سنة البناء",
      status: "الحالة",
      projectType: "نوع المشروع",
      locationDetails: "تفاصيل الموقع",
      aboutProject: "حول المشروع",
      targetClients: "العملاء المستهدفون",
      availableServices: "الخدمات المتاحة",
      designInfrastructure: "التصميم والبنية التحتية"
    }
  };

  const currentContent = content[language];

  const property = {
    title: language === 'EN' ? "DEL MAR COMPOUND" : "مجمع ديل مار السكني",
    subtitle: language === 'EN' 
      ? "The newest private residential project of Al-Fauzan group" 
      : "أحدث المشاريع السكنية الخاصة من مجموعة الفوزان",
    type: language === 'EN' ? "Residential Compound" : "مجمع سكني",
    price: language === 'EN' ? "Contact Us" : "تواصل معنا",
    location: language === 'EN' 
      ? "Al-Thumamah Road, near Imam University, Riyadh, Saudi Arabia" 
      : "طريق الثمامة، قرب جامعة الإمام، الرياض، المملكة العربية السعودية",
    totalArea: "25,000 m²",
    villas: 32,
    apartments: 112,
    buildings: 4,
    parking: 208,
    yearBuilt: 2024,
    status: language === 'EN' ? "Under Construction" : "قيد الإنشاء",
    heroImage: "/assets/images/projects/DMC/Hero.png?v=1",
    images: [
      "/assets/images/projects/DMC/Hero.png?v=1",
      "/assets/images/projects/DMC/Thumbnail.png?v=1",
      "/assets/images/projects/DMC/1.jpeg",
      "/assets/images/projects/DMC/2.jpeg",
      "/assets/images/projects/DMC/3.jpeg",
      "/assets/images/projects/DMC/4.jpeg",
      "/assets/images/projects/DMC/5.jpeg",
      "/assets/images/projects/DMC/6.jpeg",
      "/assets/images/projects/DMC/7.jpeg",
      "/assets/images/projects/DMC/8.jpeg",
      "/assets/images/projects/DMC/9.jpeg",
      "/assets/images/projects/DMC/10.jpeg",
      "/assets/images/projects/DMC/11.jpeg",
      "/assets/images/projects/DMC/12.jpeg",
      "/assets/images/projects/DMC/13.jpeg",
      "/assets/images/projects/DMC/14.jpeg",
      "/assets/images/projects/DMC/15.jpeg",
      "/assets/images/projects/DMC/16.jpeg",
      "/assets/images/projects/DMC/17.jpeg",
      "/assets/images/projects/DMC/18.jpeg",
      "/assets/images/projects/DMC/19.jpeg",
      "/assets/images/projects/DMC/20.jpeg"
    ],
    description: language === 'EN'
      ? "Del Mar Compound, the newest private residential project of Al-Fauzan group. Del Mar is located in Al-Thumamah Road close to Al-Imam University, Riyadh, Saudi Arabia. Del Mar resident has 32 villas, 4 building containing 112 residential apartment, with total area of 25,000 Sqm. Del Mar provides our residents with a pleasant environment and facilities such as Gym, Swimming Pool, Kids playing area, Barbeque Area, Mini Market and relaxation area."
      : "مجمع ديل مار، أحدث المشاريع السكنية الخاصة من مجموعة الفوزان، يقع في طريق الثمامة بالغرب من جامعة الإمام، الرياض، المملكة العربية السعودية. ديل مار يحتوي على 32 فيلا و 4 بنايات تحتوي على 112 شقة سكنية بمساحة إجمالية قدرها 25,000 متر مربع. تقدم ديل مار للمقيمين بها بيئة ممتعة ومرافق مثل: نادي رياضي، حمام سباحة، منطقة لعب الأطفال، منطقة شوي، ميني ماركت ومنطقة الاسترخاء.",
    features: language === 'EN' ? [
      "Gym",
      "Swimming Pool",
      "Kids Playing Area",
      "Barbeque Area",
      "Mini Market",
      "Relaxation Area"
    ] : [
      "نادي رياضي",
      "حمام سباحة",
      "منطقة لعب الأطفال",
      "منطقة شوي",
      "ميني ماركت",
      "منطقة استرخاء"
    ],
    amenities: [
      { icon: Dumbbell, name: language === 'EN' ? "Gym" : "نادي رياضي" },
      { icon: Waves, name: language === 'EN' ? "Swimming Pool" : "حمام سباحة" },
      { icon: Users, name: language === 'EN' ? "Kids Playing Area" : "منطقة لعب الأطفال" },
      { icon: Utensils, name: language === 'EN' ? "Barbeque Area" : "منطقة شوي" },
      { icon: ShoppingBag, name: language === 'EN' ? "Mini Market" : "ميني ماركت" },
      { icon: Trees, name: language === 'EN' ? "Relaxation Area" : "منطقة استرخاء" }
    ],
    agent: {
      name: language === 'EN' ? "Mohammad Tariq" : "محمد طارق",
      phone: "+966 565222000",
      email: "it@alfauzan.com",
      rating: 4.9,
      properties: 15
    },
    neighborhood: {
      schools: language === 'EN' ? ["Imam University", "Al-Thumamah Schools"] : ["جامعة الإمام", "مدارس الثمامة"],
      hospitals: language === 'EN' ? ["King Fahd Medical City", "Al-Thumamah Medical Center"] : ["مدينة الملك فهد الطبية", "مركز الثمامة الطبي"],
      malls: language === 'EN' ? ["Al-Thumamah Mall", "Granada Center"] : ["مول الثمامة", "مركز غرناطة"],
      restaurants: language === 'EN' ? ["The Globe", "Al-Thumamah Café", "Spazio"] : ["ذا جلوب", "مقهى الثمامة", "سبازيو"]
    },
    mapUrl: "https://www.google.com/maps/place/Del+Mar+Compound/@24.8468047,46.7754497,17z/data=!3m1!4b1!4m6!3m5!1s0x3e2efed0739f1581:0xebd9e10db3ab3a42!8m2!3d24.8468047!4d46.7754497!16s%2Fg%2F11c1s280mq?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
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
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <TransparentNavigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            {property.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            {property.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg text-white/80">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{property.location}</span>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <Button
          onClick={() => navigate('/properties')}
          variant="outline"
          className="absolute top-8 left-8 bg-black/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {currentContent.backToProperties}
        </Button>
      </section>

      {/* Property Overview */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Gallery */}
              <div className="relative mb-12">
                <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10">
                  <img 
                    src={property.images[currentImageIndex]} 
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Navigation Arrows */}
                  <Button
                    onClick={prevImage}
                    variant="outline"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    onClick={nextImage}
                    variant="outline"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </div>
                
                {/* Thumbnail Navigation */}
                <div className="flex gap-2 mt-4 overflow-x-auto">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden bg-black/20 backdrop-blur-sm border ${
                        index === currentImageIndex ? 'border-yellow-400' : 'border-white/20'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`${property.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-12 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-white">{currentContent.description}</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {property.description}
                </p>
              </div>

              {/* Specifications */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">{currentContent.specifications}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 p-6 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl">
                    <Square className="w-8 h-8 text-yellow-400" />
                    <div>
                      <p className="font-semibold text-white">{currentContent.totalArea}</p>
                      <p className="text-gray-300">{property.totalArea}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-6 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl">
                    <Home className="w-8 h-8 text-yellow-400" />
                    <div>
                      <p className="font-semibold text-white">{currentContent.villas}</p>
                      <p className="text-gray-300">{property.villas}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-6 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl">
                    <Building className="w-8 h-8 text-yellow-400" />
                    <div>
                      <p className="font-semibold text-white">{currentContent.apartments}</p>
                      <p className="text-gray-300">{property.apartments}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-6 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl">
                    <Car className="w-8 h-8 text-yellow-400" />
                    <div>
                      <p className="font-semibold text-white">{currentContent.parkingSpaces}</p>
                      <p className="text-gray-300">{property.parking}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rental Details */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">{currentContent.rentalDetails}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl">
                    <h3 className="text-xl font-semibold mb-4 text-yellow-400">{language === 'EN' ? 'Furnished Flats' : 'الشقق المفروشة'}</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white">{language === 'EN' ? '02 Bedrooms' : 'غرفتي نوم'}</span>
                        <div className="flex items-center gap-1 text-yellow-400 font-semibold">
                          <span>70,000</span>
                          <RiyalIcon className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white">{language === 'EN' ? '03 Bedrooms' : '3 غرف نوم'}</span>
                        <div className="flex items-center gap-1 text-yellow-400 font-semibold">
                          <span>80,000</span>
                          <RiyalIcon className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl">
                    <h3 className="text-xl font-semibold mb-4 text-yellow-400">{language === 'EN' ? 'Furnished Villas' : 'الفيلات المفروشة'}</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white">{language === 'EN' ? '03 Bedrooms' : '3 غرف نوم'}</span>
                        <div className="flex items-center gap-1 text-yellow-400 font-semibold">
                          <span>90,000</span>
                          <RiyalIcon className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl">
                    <h3 className="text-xl font-semibold mb-4 text-yellow-400">{language === 'EN' ? 'Furnished Studios' : 'الاستوديوهات المفروشة'}</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white">{language === 'EN' ? '01 Bedroom' : 'غرفة نوم واحدة'}</span>
                        <div className="flex items-center gap-1 text-yellow-400 font-semibold">
                          <span>55,000</span>
                          <RiyalIcon className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl">
                    <h3 className="text-xl font-semibold mb-4 text-yellow-400">{language === 'EN' ? 'Additional Fees' : 'الرسوم الإضافية'}</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white">{language === 'EN' ? 'Security Deposit (Refundable)' : 'الوديعة الأمنية (قابلة للاسترداد)'}</span>
                        <div className="flex items-center gap-1 text-yellow-400 font-semibold">
                          <span>5,000</span>
                          <RiyalIcon className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white">{language === 'EN' ? 'Administration Fees (Non-Refundable)' : 'رسوم الإدارة (غير قابلة للاسترداد)'}</span>
                        <span className="text-yellow-400 font-semibold">2.5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">{currentContent.amenities}</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl">
                      <amenity.icon className="w-6 h-6 text-yellow-400" />
                      <span className="font-medium text-white">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Neighborhood */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">{currentContent.neighborhood}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold mb-4 text-white">{language === 'EN' ? 'Schools' : 'المدارس'}</h3>
                    <ul className="space-y-2">
                      {property.neighborhood.schools.map((school, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          {school}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold mb-4 text-white">{language === 'EN' ? 'Hospitals' : 'المستشفيات'}</h3>
                    <ul className="space-y-2">
                      {property.neighborhood.hospitals.map((hospital, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          {hospital}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold mb-4 text-white">{language === 'EN' ? 'Shopping Centers' : 'مراكز التسوق'}</h3>
                    <ul className="space-y-2">
                      {property.neighborhood.malls.map((mall, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          {mall}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold mb-4 text-white">{language === 'EN' ? 'Restaurants' : 'المطاعم'}</h3>
                    <ul className="space-y-2">
                      {property.neighborhood.restaurants.map((restaurant, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          {restaurant}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
                             {/* Contact Card */}
               <div className="sticky top-8 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                 <div className="text-center mb-6">
                   <h3 className="text-xl font-bold text-white">{property.agent.name}</h3>
                  <div className="flex items-center justify-center gap-1 text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(property.agent.rating) ? 'fill-current' : ''}`} />
                    ))}
                    <span className="text-gray-300 ml-2">{property.agent.rating}</span>
                  </div>
                  <p className="text-gray-300">{property.agent.properties} {language === 'EN' ? 'Properties' : 'عقار'}</p>
                </div>

                                 <div className="space-y-4">
                   <Button 
                     className="w-full bg-yellow-400 hover:bg-yellow-500 text-black" 
                     size="lg"
                     onClick={() => window.open(`mailto:${property.agent.email}?subject=Del Mar Compound Inquiry`, '_blank')}
                   >
                     <Mail className="w-4 h-4 mr-2" />
                     {currentContent.contactAgent}
                   </Button>
                   <Button 
                     variant="outline" 
                     className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black" 
                     size="lg"
                     onClick={() => window.open(`mailto:${property.agent.email}?subject=Schedule Viewing - Del Mar Compound`, '_blank')}
                   >
                     <Calendar className="w-4 h-4 mr-2" />
                     {currentContent.scheduleViewing}
                   </Button>
                   <Button 
                     variant="outline" 
                     className="w-full border-white/20 text-white hover:bg-white/20" 
                     size="lg"
                     onClick={() => window.open(`mailto:${property.agent.email}`, '_blank')}
                   >
                     <Mail className="w-4 h-4 mr-2" />
                     {property.agent.email}
                   </Button>
                 </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">{language === 'EN' ? 'Price' : 'السعر'}</span>
                    <span className="text-2xl font-bold text-yellow-400">{property.price}</span>
                  </div>
                                     <div className="flex items-center justify-between mb-2">
                     <span className="text-gray-300">{currentContent.projectType}</span>
                     <span className="font-semibold text-white">{property.type}</span>
                   </div>
                   <div className="flex items-center justify-between">
                     <span className="text-gray-300">{currentContent.yearBuilt}</span>
                     <span className="font-semibold text-white">{property.yearBuilt}</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">{currentContent.location}</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {language === 'EN' 
                ? "Discover the strategic location of Del Mar Compound in the heart of Al-Thumamah, Riyadh"
                : "اكتشف الموقع الاستراتيجي لمجمع ديل مار في قلب الثمامة، الرياض"
              }
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">{currentContent.locationDetails}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-yellow-400 mt-1" />
                    <div>
                      <p className="font-semibold text-white">{language === 'EN' ? 'Address' : 'العنوان'}</p>
                      <p className="text-gray-300">{property.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Building className="w-6 h-6 text-yellow-400 mt-1" />
                    <div>
                      <p className="font-semibold text-white">{language === 'EN' ? 'Nearby Landmarks' : 'المعالم القريبة'}</p>
                      <p className="text-gray-300">
                        {language === 'EN' 
                          ? "Imam University, Al-Thumamah District, King Fahd Medical City"
                          : "جامعة الإمام، حي الثمامة، مدينة الملك فهد الطبية"
                        }
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Car className="w-6 h-6 text-yellow-400 mt-1" />
                    <div>
                      <p className="font-semibold text-white">{language === 'EN' ? 'Accessibility' : 'سهولة الوصول'}</p>
                      <p className="text-gray-300">
                        {language === 'EN' 
                          ? "Easy access to major highways and public transportation"
                          : "سهولة الوصول للطرق الرئيسية والمواصلات العامة"
                        }
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-8 bg-yellow-400 hover:bg-yellow-500 text-black" 
                  size="lg"
                  onClick={() => window.open(property.mapUrl, '_blank')}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  {currentContent.viewOnMap}
                </Button>
              </div>
            </div>
            
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.8468047!2d46.7754497!3d24.8468047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efed0739f1581%3A0xebd9e10db3ab3a42!2sDel%20Mar%20Compound!5e0!3m2!1sen!2ssa!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Del Mar Compound Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DelMarCompound;
