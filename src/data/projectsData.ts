export interface Project {
  id: string;
  title: string;
  description: string;
  overview: string;
  features: string[];
  specifications: Record<string, any>;
  timeline: Record<string, any>;
  images: string[];
  images_urls?: string[];
  main_image_url?: string;
  video?: string;
  video_url?: string;
  brochure?: string;
  totalArea?: string;
  area?: string;
  industrialZones?: number;
  commercialAreas?: number;
  parkingSpaces?: number;
  securityPosts?: number;
  roadNetwork?: string;
  industrialUnits?: number;
  loadingAreas?: number;
  status: string;
  location: string;
  investmentType: string;
  category?: string;
  year?: string;
  value?: string;
  long_description?: string;
  createdAt: string;
  updatedAt: string;
}

export const projectsData: Record<string, { EN: Project; AR: Project }> = {
  "1": {
    EN: {
      id: "1"
      title: "ALFAUZAN INDUSTRIAL CITY"
      description: "An integrated industrial and commercial city designed to provide advanced infrastructure supporting various industrial sectors (heavy, medium, and light) along with modern facilities including storage warehouses, logistics services, administrative and commercial areas, labor and executive housing, hotels, and training centers, offering an ideal environment for investment and production."
      overview: "An integrated industrial and commercial city designed to provide advanced infrastructure supporting various industrial sectors (heavy, medium, and light) along with modern facilities including storage warehouses, logistics services, administrative and commercial areas, labor and executive housing, hotels, and training centers, offering an ideal environment for investment and production."
      features: [
        "Factories of various sizes and industries"
        "Storage warehouses with flexible spaces"
        "Local and international investors in the industrial sector"
        "24/7 security surveillance systems"
        "Wide road networks designed for heavy trucks"
        "Comprehensive infrastructure including water, electricity, sewage, and telecommunications networks"
        "Smart zoning including industrial, commercial, administrative, and residential areas"
      ]
      specifications: {
        totalArea: "3,324,000 m²"
        industrialZones: 15
        commercialAreas: 8
        parkingSpaces: 2000
        securityPosts: 12
        roadNetwork: "Advanced"
        industrialUnits: 500
        loadingAreas: 25
      }
      timeline: {
        startDate: "2020"
        completionDate: "2024"
        phases: ["Phase 1: Infrastructure", "Phase 2: Industrial Units", "Phase 3: Commercial Areas"]
      }
      images: [
        "/assets/images/projects/Al fauzan industrial city/hero.png"
        "/assets/images/projects/Al fauzan industrial city/1.png"
        ""
        ""
      ]
      images_urls: [
        "/assets/images/projects/Al fauzan industrial city/hero.png"
        "/assets/images/projects/Al fauzan industrial city/1.png"
        ""
        ""
      ]
      main_image_url: "/assets/images/projects/Al fauzan industrial city/hero.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "3,324,000 m²"
      area: "3,324,000 m²"
      industrialZones: 15
      commercialAreas: 8
      parkingSpaces: 2000
      securityPosts: 12
      roadNetwork: "Advanced"
      industrialUnits: 500
      loadingAreas: 25
      status: "Completed"
      location: "Al-Kharj Road, Riyadh"
      category: "Industrial Cities"
      year: "2024"
      value: "1.2B"
      investmentType: "Industrial Development"
      long_description: "An integrated industrial and commercial city designed to provide advanced infrastructure supporting various industrial sectors (heavy, medium, and light) along with modern facilities including storage warehouses, logistics services, administrative and commercial areas, labor and executive housing, hotels, and training centers, offering an ideal environment for investment and production."
      createdAt: "2023-01-01"
      updatedAt: "2024-01-01"
    }
    AR: {
      id: "1"
      title: "مدينة الفوزان الصناعية"
      description: "مدينة صناعية وتجارية متكاملة مصممة لتوفير بنية تحتية متقدمة تدعم مختلف القطاعات الصناعية (الثقيلة والمتوسطة والخفيفة) مع مرافق حديثة تشمل مستودعات التخزين وخدمات اللوجستيك والمناطق الإدارية والتجارية والإسكان العمالي والتنفيذي والفنادق ومراكز التدريب، مما يوفر بيئة مثالية للاستثمار والإنتاج."
      overview: "مدينة صناعية وتجارية متكاملة مصممة لتوفير بنية تحتية متقدمة تدعم مختلف القطاعات الصناعية (الثقيلة والمتوسطة والخفيفة) مع مرافق حديثة تشمل مستودعات التخزين وخدمات اللوجستيك والمناطق الإدارية والتجارية والإسكان العمالي والتنفيذي والفنادق ومراكز التدريب، مما يوفر بيئة مثالية للاستثمار والإنتاج."
      features: [
        "مصانع بأحجام وصناعات متنوعة"
        "مستودعات تخزين بمساحات مرنة"
        "مستثمرون محليون ودوليون في القطاع الصناعي"
        "أنظمة مراقبة أمنية على مدار الساعة"
        "شبكات طرق واسعة مصممة للشاحنات الثقيلة"
        "بنية تحتية شاملة تشمل المياه والكهرباء والصرف الصحي وشبكات الاتصالات"
        "تخطيط ذكي يشمل المناطق الصناعية والتجارية والإدارية والسكنية"
      ]
      specifications: {
        totalArea: "3,324,000 متر مربع"
        industrialZones: 15
        commercialAreas: 8
        parkingSpaces: 2000
        securityPosts: 12
        roadNetwork: "متقدم"
        industrialUnits: 500
        loadingAreas: 25
      }
      timeline: {
        startDate: "2020"
        completionDate: "2024"
        phases: ["المرحلة الأولى: البنية التحتية", "المرحلة الثانية: الوحدات الصناعية", "المرحلة الثالثة: المناطق التجارية"]
      }
      images: [
        "/assets/images/projects/Al fauzan industrial city/hero.png"
        "/assets/images/projects/Al fauzan industrial city/1.png"
        ""
        ""
      ]
      images_urls: [
        "/assets/images/projects/Al fauzan industrial city/hero.png"
        "/assets/images/projects/Al fauzan industrial city/1.png"
        ""
        ""
      ]
      main_image_url: "/assets/images/projects/Al fauzan industrial city/hero.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "3,324,000 متر مربع"
      area: "3,324,000 متر مربع"
      industrialZones: 15
      commercialAreas: 8
      parkingSpaces: 2000
      securityPosts: 12
      roadNetwork: "متقدم"
      industrialUnits: 500
      loadingAreas: 25
      status: "مكتمل"
      location: "طريق الخرج، الرياض"
      category: "المدن الصناعية"
      year: "2024"
      value: "1.2 مليار"
      investmentType: "التطوير الصناعي"
      long_description: "مدينة صناعية وتجارية متكاملة مصممة لتوفير بنية تحتية متقدمة تدعم مختلف القطاعات الصناعية (الثقيلة والمتوسطة والخفيفة) مع مرافق حديثة تشمل مستودعات التخزين وخدمات اللوجستيك والمناطق الإدارية والتجارية والإسكان العمالي والتنفيذي والفنادق ومراكز التدريب، مما يوفر بيئة مثالية للاستثمار والإنتاج."
      createdAt: "2023-01-01"
      updatedAt: "2024-01-01"
    }
  }
  "2": {
    EN: {
      id: "2"
      title: "REMAS INDUSTRIAL PLAN"
      description: "An integrated industrial and commercial plan offering a modern environment and facilities that support various industrial and commercial activities while meeting the needs of investors and business owners."
      overview: "An integrated industrial and commercial plan offering a modern environment and facilities that support various industrial and commercial activities while meeting the needs of investors and business owners."
      features: [
        "Factories of various sizes to support different industrial sectors"
        "Commercial buildings prepared to meet the needs of companies and offices"
        "Local and international investors in the industrial sector"
        "Retail shops catering to the needs of small and medium-sized businesses"
        "Wide road networks designed for heavy trucks"
        "Comprehensive infrastructure, including water, electricity, sewage, and telecommunications networks"
        "Smart zoning, including industrial, commercial, administrative, and residential areas"
      ]
      specifications: {
        totalArea: "1,032,589.95 m²"
        industrialZones: 8
        commercialAreas: 4
        parkingSpaces: 800
        securityPosts: 6
        roadNetwork: "Modern"
        industrialUnits: 200
        loadingAreas: 15
      }
      timeline: {
        startDate: "2022"
        completionDate: "2023"
        phases: ["Phase 1: Infrastructure", "Phase 2: Industrial Units"]
      }
      images: [
        "/assets/images/projects/remas/remas.png"
      ]
      images_urls: [
        "/assets/images/projects/remas/remas.png"
      ]
      main_image_url: "/assets/images/projects/remas/remas.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "1,032,589.95 m²"
      area: "1,032,589.95 m²"
      industrialZones: 8
      commercialAreas: 4
      parkingSpaces: 800
      securityPosts: 6
      roadNetwork: "Modern"
      industrialUnits: 200
      loadingAreas: 15
      status: "Completed"
      location: "Istanbul Road, Al-Mashael District"
      category: "Industrial Plans"
      year: "2023"
      value: "400M"
      investmentType: "Industrial Development"
      long_description: "An integrated industrial and commercial plan offering a modern environment and facilities that support various industrial and commercial activities while meeting the needs of investors and business owners."
      createdAt: "2022-01-01"
      updatedAt: "2023-01-01"
    }
    AR: {
      id: "2"
      title: "مخطط ريماس الصناعي"
      description: "مخطط صناعي وتجاري متكامل يوفر بيئة حديثة ومرافق تدعم مختلف الأنشطة الصناعية والتجارية مع تلبية احتياجات المستثمرين وأصحاب الأعمال."
      overview: "مخطط صناعي وتجاري متكامل يوفر بيئة حديثة ومرافق تدعم مختلف الأنشطة الصناعية والتجارية مع تلبية احتياجات المستثمرين وأصحاب الأعمال."
      features: [
        "مصانع بأحجام متنوعة لدعم مختلف القطاعات الصناعية"
        "مباني تجارية مجهزة لتلبية احتياجات الشركات والمكاتب"
        "مستثمرون محليون ودوليون في القطاع الصناعي"
        "محلات تجارية تلبي احتياجات المؤسسات الصغيرة والمتوسطة"
        "شبكات طرق واسعة مصممة للشاحنات الثقيلة"
        "بنية تحتية شاملة تشمل المياه والكهرباء والصرف الصحي وشبكات الاتصالات"
        "تخطيط ذكي يشمل المناطق الصناعية والتجارية والإدارية والسكنية"
      ]
      specifications: {
        totalArea: "1,032,589.95 متر مربع"
        industrialZones: 8
        commercialAreas: 4
        parkingSpaces: 800
        securityPosts: 6
        roadNetwork: "حديث"
        industrialUnits: 200
        loadingAreas: 15
      }
      timeline: {
        startDate: "2022"
        completionDate: "2023"
        phases: ["المرحلة الأولى: البنية التحتية", "المرحلة الثانية: الوحدات الصناعية"]
      }
      images: [
        "/assets/images/projects/remas/remas.png"
      ]
      images_urls: [
        "/assets/images/projects/remas/remas.png"
      ]
      main_image_url: "/assets/images/projects/remas/remas.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "1,032,589.95 متر مربع"
      area: "1,032,589.95 متر مربع"
      industrialZones: 8
      commercialAreas: 4
      parkingSpaces: 800
      securityPosts: 6
      roadNetwork: "حديث"
      industrialUnits: 200
      loadingAreas: 15
      status: "مكتمل"
      location: "طريق إسطنبول، حي المشاعل"
      category: "المخططات الصناعية"
      year: "2023"
      value: "400 مليون"
      investmentType: "التطوير الصناعي"
      long_description: "مخطط صناعي وتجاري متكامل يوفر بيئة حديثة ومرافق تدعم مختلف الأنشطة الصناعية والتجارية مع تلبية احتياجات المستثمرين وأصحاب الأعمال."
      createdAt: "2022-01-01"
      updatedAt: "2023-01-01"
    }
  }
  "3": {
    EN: {
      id: "3"
      title: "SAMA INDUSTRIAL PLAN"
      description: "An integrated industrial plan aimed at providing an ideal environment for developing industrial and commercial businesses through modern designs and facilities that cater to diverse needs."
      overview: "An integrated industrial plan aimed at providing an ideal environment for developing industrial and commercial businesses through modern designs and facilities that cater to diverse needs."
      features: [
        "Factories of various sizes to support different industrial sectors"
        "Commercial buildings prepared to meet the needs of companies and offices"
        "Local and international investors in the industrial sector"
        "Retail shops catering to the needs of small and medium-sized businesses"
        "An advanced road network designed for heavy vehicle traffic"
        "Comprehensive infrastructure, including water and sewage systems"
        "Designated areas for factories, commercial buildings, and shops"
      ]
      specifications: {
        totalArea: "991,987.54 m²"
        industrialZones: 6
        commercialAreas: 3
        parkingSpaces: 600
        securityPosts: 4
        roadNetwork: "Advanced"
        industrialUnits: 150
        loadingAreas: 10
      }
      timeline: {
        startDate: "2022"
        completionDate: "2023"
        phases: ["Phase 1: Infrastructure", "Phase 2: Commercial Units"]
      }
      images: [
        "/assets/images/projects/SAMA/sama.png"
      ]
      images_urls: [
        "/assets/images/projects/SAMA/sama.png"
      ]
      main_image_url: "/assets/images/projects/SAMA/sama.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "991,987.54 m²"
      area: "991,987.54 m²"
      industrialZones: 6
      commercialAreas: 3
      parkingSpaces: 600
      securityPosts: 4
      roadNetwork: "Standard"
      industrialUnits: 150
      loadingAreas: 10
      status: "Completed"
      location: "Istanbul Road, Al-Mashael District"
      category: "Industrial Plans"
      year: "2023"
      value: "350M"
      investmentType: "Industrial Development"
      long_description: "An integrated industrial plan aimed at providing an ideal environment for developing industrial and commercial businesses through modern designs and facilities that cater to diverse needs."
      createdAt: "2022-01-01"
      updatedAt: "2023-01-01"
    }
    AR: {
      id: "3"
      title: "مخطط سما الصناعي"
      description: "مخطط صناعي متكامل يهدف إلى توفير بيئة مثالية لتطوير الأعمال الصناعية والتجارية من خلال التصاميم والمرافق الحديثة التي تلبي الاحتياجات المتنوعة."
      overview: "مخطط صناعي متكامل يهدف إلى توفير بيئة مثالية لتطوير الأعمال الصناعية والتجارية من خلال التصاميم والمرافق الحديثة التي تلبي الاحتياجات المتنوعة."
      features: [
        "مصانع بأحجام متنوعة لدعم مختلف القطاعات الصناعية"
        "مباني تجارية مجهزة لتلبية احتياجات الشركات والمكاتب"
        "مستثمرون محليون ودوليون في القطاع الصناعي"
        "محلات تجارية تلبي احتياجات المؤسسات الصغيرة والمتوسطة"
        "شبكة طرق متقدمة مصممة لحركة المركبات الثقيلة"
        "بنية تحتية شاملة تشمل أنظمة المياه والصرف الصحي"
        "مناطق مخصصة للمصانع والمباني التجارية والمحلات"
      ]
      specifications: {
        totalArea: "991,987.54 متر مربع"
        industrialZones: 6
        commercialAreas: 3
        parkingSpaces: 600
        securityPosts: 4
        roadNetwork: "متقدم"
        industrialUnits: 150
        loadingAreas: 10
      }
      timeline: {
        startDate: "2022"
        completionDate: "2023"
        phases: ["المرحلة الأولى: البنية التحتية", "المرحلة الثانية: الوحدات التجارية"]
      }
      images: [
        "/assets/images/projects/SAMA/sama.png"
      ]
      images_urls: [
        "/assets/images/projects/SAMA/sama.png"
      ]
      main_image_url: "/assets/images/projects/SAMA/sama.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "991,987.54 متر مربع"
      area: "991,987.54 متر مربع"
      industrialZones: 6
      commercialAreas: 3
      parkingSpaces: 600
      securityPosts: 4
      roadNetwork: "قياسي"
      industrialUnits: 150
      loadingAreas: 10
      status: "مكتمل"
      location: "طريق إسطنبول، حي المشاعل"
      category: "المخططات الصناعية"
      year: "2023"
      value: "350 مليون"
      investmentType: "التطوير الصناعي"
      long_description: "مخطط صناعي متكامل يهدف إلى توفير بيئة مثالية لتطوير الأعمال الصناعية والتجارية من خلال التصاميم والمرافق الحديثة التي تلبي الاحتياجات المتنوعة."
      createdAt: "2022-01-01"
      updatedAt: "2023-01-01"
    }
  }
  "4": {
    EN: {
      id: "4"
      title: "SHAMS INDUSTRIAL PLAN"
      description: "An integrated industrial and commercial plan offering a distinguished environment to support industrial and commercial activities with modern facilities that cater to the needs of investors and business owners."
      overview: "An integrated industrial and commercial plan offering a distinguished environment to support industrial and commercial activities with modern facilities that cater to the needs of investors and business owners."
      features: [
        "Factories of various sizes to support different industrial sectors"
        "Commercial buildings prepared to meet the needs of companies and offices"
        "Local and international investors in the industrial sector"
        "Retail shops catering to the needs of small and medium-sized businesses"
        "An advanced road network designed for heavy vehicle traffic"
        "Comprehensive infrastructure, including water and sewage systems"
        "Designated areas for factories, commercial buildings, and shops"
      ]
      specifications: {
        totalArea: "432,600 m²"
        industrialZones: 5
        commercialAreas: 3
        parkingSpaces: 400
        securityPosts: 3
        roadNetwork: "Advanced"
        industrialUnits: 100
        loadingAreas: 8
      }
      timeline: {
        startDate: "2022"
        completionDate: "2023"
        phases: ["Phase 1: Infrastructure", "Phase 2: Industrial Units"]
      }
      images: [
        "/assets/images/projects/Shams/shams.png"
        "/assets/images/projects/Shams/QR.png"
      ]
      images_urls: [
        "/assets/images/projects/Shams/shams.png"
        "/assets/images/projects/Shams/QR.png"
      ]
      main_image_url: "/assets/images/projects/Shams/shams.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "432,600 m²"
      area: "432,600 m²"
      industrialZones: 5
      commercialAreas: 3
      parkingSpaces: 400
      securityPosts: 3
      roadNetwork: "Advanced"
      industrialUnits: 100
      loadingAreas: 8
      status: "Completed"
      location: "Istanbul Street, Al-Sulay District"
      category: "Industrial Plans"
      year: "2023"
      value: "200M"
      investmentType: "Industrial Development"
      long_description: "An integrated industrial and commercial plan offering a distinguished environment to support industrial and commercial activities with modern facilities that cater to the needs of investors and business owners."
      createdAt: "2022-01-01"
      updatedAt: "2023-01-01"
    }
    AR: {
      id: "4"
      title: "مخطط شمس الصناعي"
      description: "مخطط صناعي وتجاري متكامل يوفر بيئة متميزة لدعم الأنشطة الصناعية والتجارية مع مرافق حديثة تلبي احتياجات المستثمرين وأصحاب الأعمال."
      overview: "مخطط صناعي وتجاري متكامل يوفر بيئة متميزة لدعم الأنشطة الصناعية والتجارية مع مرافق حديثة تلبي احتياجات المستثمرين وأصحاب الأعمال."
      features: [
        "مصانع بأحجام متنوعة لدعم مختلف القطاعات الصناعية"
        "مباني تجارية مجهزة لتلبية احتياجات الشركات والمكاتب"
        "مستثمرون محليون ودوليون في القطاع الصناعي"
        "محلات تجارية تلبي احتياجات المؤسسات الصغيرة والمتوسطة"
        "شبكة طرق متقدمة مصممة لحركة المركبات الثقيلة"
        "بنية تحتية شاملة تشمل أنظمة المياه والصرف الصحي"
        "مناطق مخصصة للمصانع والمباني التجارية والمحلات"
      ]
      specifications: {
        totalArea: "432,600 متر مربع"
        industrialZones: 5
        commercialAreas: 3
        parkingSpaces: 400
        securityPosts: 3
        roadNetwork: "متقدم"
        industrialUnits: 100
        loadingAreas: 8
      }
      timeline: {
        startDate: "2022"
        completionDate: "2023"
        phases: ["المرحلة الأولى: البنية التحتية", "المرحلة الثانية: الوحدات الصناعية"]
      }
      images: [
        "/assets/images/projects/Shams/shams.png"
        "/assets/images/projects/Shams/QR.png"
      ]
      images_urls: [
        "/assets/images/projects/Shams/shams.png"
        "/assets/images/projects/Shams/QR.png"
      ]
      main_image_url: "/assets/images/projects/Shams/shams.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "432,600 متر مربع"
      area: "432,600 متر مربع"
      industrialZones: 5
      commercialAreas: 3
      parkingSpaces: 400
      securityPosts: 3
      roadNetwork: "متقدم"
      industrialUnits: 100
      loadingAreas: 8
      status: "مكتمل"
      location: "شارع إسطنبول، حي السلي"
      category: "المخططات الصناعية"
      year: "2023"
      value: "200 مليون"
      investmentType: "التطوير الصناعي"
      long_description: "مخطط صناعي وتجاري متكامل يوفر بيئة متميزة لدعم الأنشطة الصناعية والتجارية مع مرافق حديثة تلبي احتياجات المستثمرين وأصحاب الأعمال."
      createdAt: "2022-01-01"
      updatedAt: "2023-01-01"
    }
  }
  "5": {
    EN: {
      id: "5"
      title: "EXIT 18 INDUSTRIAL PLAN"
      description: "An integrated industrial and residential plan providing an ideal environment for automotive-focused industrial workshops and residential buildings designed to meet the needs of workers and investors, with advanced infrastructure suited for industrial and residential purposes."
      overview: "An integrated industrial and residential plan providing an ideal environment for automotive-focused industrial workshops and residential buildings designed to meet the needs of workers and investors, with advanced infrastructure suited for industrial and residential purposes."
      features: [
        "Industrial workshops dedicated to automotive maintenance and repair"
        "Spacious parking areas to serve workshops and workers"
        "Local and international investors in the industrial sector"
        "24/7 security surveillance systems"
        "A modern road network designed for industrial and light vehicles"
        "Infrastructure for sewage and water networks"
        "Well-planned allocation of spaces between industrial workshops and residential buildings"
      ]
      specifications: {
        totalArea: "818,000 m²"
        industrialZones: 8
        commercialAreas: 4
        parkingSpaces: 600
        securityPosts: 5
        roadNetwork: "Modern"
        industrialUnits: 120
        loadingAreas: 12
      }
      timeline: {
        startDate: "2022"
        completionDate: "2024"
        phases: ["Phase 1: Infrastructure", "Phase 2: Industrial Units", "Phase 3: Residential Areas"]
      }
      images: [
        "/assets/images/projects/Exit 18/Exit 18.png"
        "/assets/images/projects/Exit 18/QR.png"
      ]
      images_urls: [
        "/assets/images/projects/Exit 18/Exit 18.png"
        "/assets/images/projects/Exit 18/QR.png"
      ]
      main_image_url: "/assets/images/projects/Exit 18/Exit 18.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "818,000 m²"
      area: "818,000 m²"
      industrialZones: 8
      commercialAreas: 4
      parkingSpaces: 600
      securityPosts: 5
      roadNetwork: "Modern"
      industrialUnits: 120
      loadingAreas: 12
      status: "Under Construction"
      location: "Al-Noor District, Exit 18"
      category: "Industrial Plans"
      year: "2024"
      value: "300M"
      investmentType: "Industrial Development"
      long_description: "An integrated industrial and residential plan providing an ideal environment for automotive-focused industrial workshops and residential buildings designed to meet the needs of workers and investors, with advanced infrastructure suited for industrial and residential purposes."
      createdAt: "2022-01-01"
      updatedAt: "2024-01-01"
    }
    AR: {
      id: "5"
      title: "مخطط خروج 18 الصناعي"
      description: "مخطط صناعي وسكني متكامل يوفر بيئة مثالية للورش الصناعية المتخصصة في السيارات والمباني السكنية المصممة لتلبية احتياجات العمال والمستثمرين، مع بنية تحتية متقدمة مناسبة للأغراض الصناعية والسكنية."
      overview: "مخطط صناعي وسكني متكامل يوفر بيئة مثالية للورش الصناعية المتخصصة في السيارات والمباني السكنية المصممة لتلبية احتياجات العمال والمستثمرين، مع بنية تحتية متقدمة مناسبة للأغراض الصناعية والسكنية."
      features: [
        "ورش صناعية متخصصة في صيانة وإصلاح السيارات"
        "مواقف سيارات واسعة لخدمة الورش والعمال"
        "مستثمرون محليون ودوليون في القطاع الصناعي"
        "أنظمة مراقبة أمنية على مدار الساعة"
        "شبكة طرق حديثة مصممة للمركبات الصناعية والخفيفة"
        "بنية تحتية لشبكات الصرف الصحي والمياه"
        "توزيع مدروس للمساحات بين الورش الصناعية والمباني السكنية"
      ]
      specifications: {
        totalArea: "818,000 متر مربع"
        industrialZones: 8
        commercialAreas: 4
        parkingSpaces: 600
        securityPosts: 5
        roadNetwork: "حديث"
        industrialUnits: 120
        loadingAreas: 12
      }
      timeline: {
        startDate: "2022"
        completionDate: "2024"
        phases: ["المرحلة الأولى: البنية التحتية", "المرحلة الثانية: الوحدات الصناعية", "المرحلة الثالثة: المناطق السكنية"]
      }
      images: [
        "/assets/images/projects/Exit 18/Exit 18.png"
        "/assets/images/projects/Exit 18/QR.png"
      ]
      images_urls: [
        "/assets/images/projects/Exit 18/Exit 18.png"
        "/assets/images/projects/Exit 18/QR.png"
      ]
      main_image_url: "/assets/images/projects/Exit 18/Exit 18.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "818,000 متر مربع"
      area: "818,000 متر مربع"
      industrialZones: 8
      commercialAreas: 4
      parkingSpaces: 600
      securityPosts: 5
      roadNetwork: "حديث"
      industrialUnits: 120
      loadingAreas: 12
      status: "قيد الإنشاء"
      location: "حي النور، خروج 18"
      category: "المخططات الصناعية"
      year: "2024"
      value: "300 مليون"
      investmentType: "التطوير الصناعي"
      long_description: "مخطط صناعي وسكني متكامل يوفر بيئة مثالية للورش الصناعية المتخصصة في السيارات والمباني السكنية المصممة لتلبية احتياجات العمال والمستثمرين، مع بنية تحتية متقدمة مناسبة للأغراض الصناعية والسكنية."
      createdAt: "2022-01-01"
      updatedAt: "2024-01-01"
    }
  }
  "6": {
    EN: {
      id: "6"
      title: "ALMANAKH INDUSTRIAL PLAN"
      description: "A specialized industrial plan providing an ideal environment to support diverse industrial activities, with a particular focus on marble, stone, and ceramic manufacturing, in addition to workshops and laboratories, within a modern infrastructure catering to investors' needs."
      overview: "A specialized industrial plan providing an ideal environment to support diverse industrial activities, with a particular focus on marble, stone, and ceramic manufacturing, in addition to workshops and laboratories, within a modern infrastructure catering to investors' needs."
      features: [
        "Workshops of various sizes to support industrial trades and maintenance"
        "24/7 security surveillance systems"
        "Local and international investors in the industrial sector"
        "Factories dedicated to marble, stone, and ceramic manufacturing"
        "Wide road networks designed for heavy trucks"
        "Infrastructure for sewage and water networks"
        "Designated areas for workshops, laboratories and marble, stone, and ceramic factories"
      ]
      specifications: {
        totalArea: "780,000 m²"
        industrialZones: 6
        commercialAreas: 3
        parkingSpaces: 500
        securityPosts: 4
        roadNetwork: "Modern"
        industrialUnits: 100
        loadingAreas: 10
      }
      timeline: {
        startDate: "2022"
        completionDate: "2024"
        phases: ["Phase 1: Infrastructure", "Phase 2: Industrial Units", "Phase 3: Specialized Manufacturing"]
      }
      images: [
        "/assets/images/projects/ALMANAKH/ALMANAKH.png"
        "/assets/images/projects/ALMANAKH/QR.png"
      ]
      images_urls: [
        "/assets/images/projects/ALMANAKH/ALMANAKH.png"
        "/assets/images/projects/ALMANAKH/QR.png"
      ]
      main_image_url: "/assets/images/projects/ALMANAKH/ALMANAKH.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "780,000 m²"
      area: "780,000 m²"
      industrialZones: 6
      commercialAreas: 3
      parkingSpaces: 500
      securityPosts: 4
      roadNetwork: "Modern"
      industrialUnits: 100
      loadingAreas: 10
      status: "Under Construction"
      location: "Al-Kharj Road, Exit 18"
      category: "Industrial Plans"
      year: "2024"
      value: "250M"
      investmentType: "Industrial Development"
      long_description: "A specialized industrial plan providing an ideal environment to support diverse industrial activities, with a particular focus on marble, stone, and ceramic manufacturing, in addition to workshops and laboratories, within a modern infrastructure catering to investors' needs."
      createdAt: "2022-01-01"
      updatedAt: "2024-01-01"
    }
    AR: {
      id: "6"
      title: "مخطط المناخ الصناعي"
      description: "مخطط صناعي متخصص يوفر بيئة مثالية لدعم الأنشطة الصناعية المتنوعة، مع التركيز بشكل خاص على تصنيع الرخام والحجر والسيراميك، بالإضافة إلى الورش والمختبرات، ضمن بنية تحتية حديثة تلبي احتياجات المستثمرين."
      overview: "مخطط صناعي متخصص يوفر بيئة مثالية لدعم الأنشطة الصناعية المتنوعة، مع التركيز بشكل خاص على تصنيع الرخام والحجر والسيراميك، بالإضافة إلى الورش والمختبرات، ضمن بنية تحتية حديثة تلبي احتياجات المستثمرين."
      features: [
        "ورش بأحجام متنوعة لدعم الحرف الصناعية والصيانة"
        "أنظمة مراقبة أمنية على مدار الساعة"
        "مستثمرون محليون ودوليون في القطاع الصناعي"
        "مصانع مخصصة لتصنيع الرخام والحجر والسيراميك"
        "شبكات طرق واسعة مصممة للشاحنات الثقيلة"
        "بنية تحتية لشبكات الصرف الصحي والمياه"
        "مناطق مخصصة للورش والمختبرات ومصانع الرخام والحجر والسيراميك"
      ]
      specifications: {
        totalArea: "780,000 متر مربع"
        industrialZones: 6
        commercialAreas: 3
        parkingSpaces: 500
        securityPosts: 4
        roadNetwork: "حديث"
        industrialUnits: 100
        loadingAreas: 10
      }
      timeline: {
        startDate: "2022"
        completionDate: "2024"
        phases: ["المرحلة الأولى: البنية التحتية", "المرحلة الثانية: الوحدات الصناعية", "المرحلة الثالثة: التصنيع المتخصص"]
      }
      images: [
        "/assets/images/projects/ALMANAKH/ALMANAKH.png"
        "/assets/images/projects/ALMANAKH/QR.png"
      ]
      images_urls: [
        "/assets/images/projects/ALMANAKH/ALMANAKH.png"
        "/assets/images/projects/ALMANAKH/QR.png"
      ]
      main_image_url: "/assets/images/projects/ALMANAKH/ALMANAKH.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "780,000 متر مربع"
      area: "780,000 متر مربع"
      industrialZones: 6
      commercialAreas: 3
      parkingSpaces: 500
      securityPosts: 4
      roadNetwork: "حديث"
      industrialUnits: 100
      loadingAreas: 10
      status: "قيد الإنشاء"
      location: "طريق الخرج، خروج 18"
      category: "المخططات الصناعية"
      year: "2024"
      value: "250 مليون"
      investmentType: "التطوير الصناعي"
      long_description: "مخطط صناعي متخصص يوفر بيئة مثالية لدعم الأنشطة الصناعية المتنوعة، مع التركيز بشكل خاص على تصنيع الرخام والحجر والسيراميك، بالإضافة إلى الورش والمختبرات، ضمن بنية تحتية حديثة تلبي احتياجات المستثمرين."
      createdAt: "2022-01-01"
      updatedAt: "2024-01-01"
    }
  }
  "7": {
    EN: {
      id: "7"
      title: "ALMASHAEL INDUSTRIAL PLAN"
      description: "An integrated industrial plan providing a suitable environment for establishing workshops and factories, with modern facilities and advanced infrastructure supporting various industrial activities to meet the needs of investors and business owners."
      overview: "An integrated industrial plan providing a suitable environment for establishing workshops and factories, with modern facilities and advanced infrastructure supporting various industrial activities to meet the needs of investors and business owners."
      features: [
        "Industrial workshops of various sizes suitable for craft and industrial activities"
        "Factories equipped with facilities that meet industrial production needs"
        "Local and international investors in the industrial sector"
        "Truck and vehicle parking areas designed to serve workshops and factories"
        "A modern internal road network designed to accommodate heavy and light vehicles"
        "Comprehensive infrastructure, including water, electricity, and sewage systems"
        "Well-planned allocation of spaces between workshops and factories"
      ]
      specifications: {
        totalArea: "864,000 m²"
        industrialZones: 7
        commercialAreas: 4
        parkingSpaces: 600
        securityPosts: 5
        roadNetwork: "Modern"
        industrialUnits: 150
        loadingAreas: 12
      }
      timeline: {
        startDate: "2022"
        completionDate: "2024"
        phases: ["Phase 1: Infrastructure", "Phase 2: Industrial Units", "Phase 3: Factory Development"]
      }
      images: [
        "/assets/images/projects/mashael/Mashael.png"
        "/assets/images/projects/mashael/QR.png"
      ]
      images_urls: [
        "/assets/images/projects/mashael/Mashael.png"
        "/assets/images/projects/mashael/QR.png"
      ]
      main_image_url: "/assets/images/projects/mashael/Mashael.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "864,000 m²"
      area: "864,000 m²"
      industrialZones: 7
      commercialAreas: 4
      parkingSpaces: 600
      securityPosts: 5
      roadNetwork: "Modern"
      industrialUnits: 150
      loadingAreas: 12
      status: "Under Construction"
      location: "Ibn Majah Street, Al-Sulay District"
      category: "Industrial Plans"
      year: "2024"
      value: "280M"
      investmentType: "Industrial Development"
      long_description: "An integrated industrial plan providing a suitable environment for establishing workshops and factories, with modern facilities and advanced infrastructure supporting various industrial activities to meet the needs of investors and business owners."
      createdAt: "2022-01-01"
      updatedAt: "2024-01-01"
    }
    AR: {
      id: "7"
      title: "مخطط المشاعل الصناعي"
      description: "مخطط صناعي متكامل يوفر بيئة مناسبة لإقامة الورش والمصانع، مع مرافق حديثة وبنية تحتية متقدمة تدعم مختلف الأنشطة الصناعية لتلبية احتياجات المستثمرين وأصحاب الأعمال."
      overview: "مخطط صناعي متكامل يوفر بيئة مناسبة لإقامة الورش والمصانع، مع مرافق حديثة وبنية تحتية متقدمة تدعم مختلف الأنشطة الصناعية لتلبية احتياجات المستثمرين وأصحاب الأعمال."
      features: [
        "ورش صناعية بأحجام متنوعة مناسبة للحرف والأنشطة الصناعية"
        "مصانع مجهزة بمرافق تلبي احتياجات الإنتاج الصناعي"
        "مستثمرون محليون ودوليون في القطاع الصناعي"
        "مواقف للشاحنات والمركبات مصممة لخدمة الورش والمصانع"
        "شبكة طرق داخلية حديثة مصممة لاستيعاب المركبات الثقيلة والخفيفة"
        "بنية تحتية شاملة تشمل أنظمة المياه والكهرباء والصرف الصحي"
        "توزيع مدروس للمساحات بين الورش والمصانع"
      ]
      specifications: {
        totalArea: "864,000 متر مربع"
        industrialZones: 7
        commercialAreas: 4
        parkingSpaces: 600
        securityPosts: 5
        roadNetwork: "حديث"
        industrialUnits: 150
        loadingAreas: 12
      }
      timeline: {
        startDate: "2022"
        completionDate: "2024"
        phases: ["المرحلة الأولى: البنية التحتية", "المرحلة الثانية: الوحدات الصناعية", "المرحلة الثالثة: تطوير المصانع"]
      }
      images: [
        "/assets/images/projects/mashael/Mashael.png"
        "/assets/images/projects/mashael/QR.png"
      ]
      images_urls: [
        "/assets/images/projects/mashael/Mashael.png"
        "/assets/images/projects/mashael/QR.png"
      ]
      main_image_url: "/assets/images/projects/mashael/Mashael.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "864,000 متر مربع"
      area: "864,000 متر مربع"
      industrialZones: 7
      commercialAreas: 4
      parkingSpaces: 600
      securityPosts: 5
      roadNetwork: "حديث"
      industrialUnits: 150
      loadingAreas: 12
      status: "قيد الإنشاء"
      location: "شارع ابن ماجة، حي السلي"
      category: "المخططات الصناعية"
      year: "2024"
      value: "280 مليون"
      investmentType: "التطوير الصناعي"
      long_description: "مخطط صناعي متكامل يوفر بيئة مناسبة لإقامة الورش والمصانع، مع مرافق حديثة وبنية تحتية متقدمة تدعم مختلف الأنشطة الصناعية لتلبية احتياجات المستثمرين وأصحاب الأعمال."
      createdAt: "2022-01-01"
      updatedAt: "2024-01-01"
    }
  }
  "8": {
    EN: {
      id: "8"
      title: "ALFAUZAN 96 INDUSTRIAL PLAN"
      description: "An integrated industrial and commercial plan providing an ideal environment for diverse workshops, residential buildings, and commercial yards, with advanced infrastructure to meet the needs of investors, industrial companies, and businesses."
      overview: "An integrated industrial and commercial plan providing an ideal environment for diverse workshops, residential buildings, and commercial yards, with advanced infrastructure to meet the needs of investors, industrial companies, and businesses."
      features: [
        "Diverse workshops of various sizes suitable for industrial and craft activities"
        "Residential buildings designed to provide housing units for workers and investors"
        "Local and international investors in the industrial sector"
        "24/7 security surveillance systems"
        "A road network designed for both heavy and light vehicles"
        "Comprehensive infrastructure, including water, electricity and sewage systems"
        "Designated areas for diverse workshops, residential buildings, and commercial yards"
      ]
      specifications: {
        totalArea: "1,096,000 m²"
        industrialZones: 10
        commercialAreas: 6
        parkingSpaces: 800
        securityPosts: 8
        roadNetwork: "Advanced"
        industrialUnits: 200
        loadingAreas: 15
      }
      timeline: {
        startDate: "2022"
        completionDate: "2024"
        phases: ["Phase 1: Infrastructure", "Phase 2: Industrial Units", "Phase 3: Residential Areas"]
      }
      images: [
        "/assets/images/projects/96/96.png"
        "/assets/images/projects/96/QR.png"
      ]
      images_urls: [
        "/assets/images/projects/96/96.png"
        "/assets/images/projects/96/QR.png"
      ]
      main_image_url: "/assets/images/projects/96/96.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "1,096,000 m²"
      area: "1,096,000 m²"
      industrialZones: 10
      commercialAreas: 6
      parkingSpaces: 800
      securityPosts: 8
      roadNetwork: "Advanced"
      industrialUnits: 200
      loadingAreas: 15
      status: "Under Construction"
      location: "Eastern Ring Road, Exit 18"
      category: "Industrial Plans"
      year: "2024"
      value: "400M"
      investmentType: "Industrial Development"
      long_description: "An integrated industrial and commercial plan providing an ideal environment for diverse workshops, residential buildings, and commercial yards, with advanced infrastructure to meet the needs of investors, industrial companies, and businesses."
      createdAt: "2022-01-01"
      updatedAt: "2024-01-01"
    }
    AR: {
      id: "8"
      title: "مخطط الفوزان 96 الصناعي"
      description: "مخطط صناعي وتجاري متكامل يوفر بيئة مثالية للورش المتنوعة والمباني السكنية والساحات التجارية، مع بنية تحتية متقدمة تلبي احتياجات المستثمرين والشركات الصناعية والأعمال التجارية."
      overview: "مخطط صناعي وتجاري متكامل يوفر بيئة مثالية للورش المتنوعة والمباني السكنية والساحات التجارية، مع بنية تحتية متقدمة تلبي احتياجات المستثمرين والشركات الصناعية والأعمال التجارية."
      features: [
        "ورش متنوعة بأحجام مختلفة مناسبة للأنشطة الصناعية والحرفية"
        "مباني سكنية مصممة لتوفير وحدات سكنية للعمال والمستثمرين"
        "مستثمرون محليون ودوليون في القطاع الصناعي"
        "أنظمة مراقبة أمنية على مدار الساعة"
        "شبكة طرق مصممة للمركبات الثقيلة والخفيفة"
        "بنية تحتية شاملة تشمل أنظمة المياه والكهرباء والصرف الصحي"
        "مناطق مخصصة للورش المتنوعة والمباني السكنية والساحات التجارية"
      ]
      specifications: {
        totalArea: "1,096,000 متر مربع"
        industrialZones: 10
        commercialAreas: 6
        parkingSpaces: 800
        securityPosts: 8
        roadNetwork: "متقدم"
        industrialUnits: 200
        loadingAreas: 15
      }
      timeline: {
        startDate: "2022"
        completionDate: "2024"
        phases: ["المرحلة الأولى: البنية التحتية", "المرحلة الثانية: الوحدات الصناعية", "المرحلة الثالثة: المناطق السكنية"]
      }
      images: [
        "/assets/images/projects/96/96.png"
        "/assets/images/projects/96/QR.png"
      ]
      images_urls: [
        "/assets/images/projects/96/96.png"
        "/assets/images/projects/96/QR.png"
      ]
      main_image_url: "/assets/images/projects/96/96.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "1,096,000 متر مربع"
      area: "1,096,000 متر مربع"
      industrialZones: 10
      commercialAreas: 6
      parkingSpaces: 800
      securityPosts: 8
      roadNetwork: "متقدم"
      industrialUnits: 200
      loadingAreas: 15
      status: "قيد الإنشاء"
      location: "الطريق الدائري الشرقي، خروج 18"
      category: "المخططات الصناعية"
      year: "2024"
      value: "400 مليون"
      investmentType: "التطوير الصناعي"
      long_description: "مخطط صناعي وتجاري متكامل يوفر بيئة مثالية للورش المتنوعة والمباني السكنية والساحات التجارية، مع بنية تحتية متقدمة تلبي احتياجات المستثمرين والشركات الصناعية والأعمال التجارية."
      createdAt: "2022-01-01"
      updatedAt: "2024-01-01"
    }
  }
  "9": {
    EN: {
      id: "9"
      title: "DURRAT ALSHARQ INDUSTRIAL PLAN"
      description: "An integrated industrial and commercial plan designed to support concrete industries block and marble manufacturing, as well as providing commercial showrooms and warehouses to meet the needs of various sectors, with modern infrastructure tailored for diverse activities."
      overview: "An integrated industrial and commercial plan designed to support concrete industries block and marble manufacturing, as well as providing commercial showrooms and warehouses to meet the needs of various sectors, with modern infrastructure tailored for diverse activities."
      features: [
        "Factories of various sizes and industries"
        "Storage warehouses with flexible spaces"
        "Local and international investors in the industrial sector"
        "24/7 security surveillance systems"
        "Wide road networks designed for heavy trucks"
        "Infrastructure for sewage and water networks"
        "Zones Designated for Concrete Factories, Retail Stores, and Warehouses"
      ]
      specifications: {
        totalArea: "3,245,000 m²"
        industrialZones: 12
        commercialAreas: 8
        parkingSpaces: 1200
        securityPosts: 10
        roadNetwork: "Advanced"
        industrialUnits: 300
        loadingAreas: 20
      }
      timeline: {
        startDate: "2022"
        completionDate: "2024"
        phases: ["Phase 1: Infrastructure", "Phase 2: Industrial Units", "Phase 3: Commercial Areas"]
      }
      images: [
        "/assets/images/projects/Durrat/Durrat.png"
        "/assets/images/projects/Durrat/QR.png"
      ]
      images_urls: [
        "/assets/images/projects/Durrat/Durrat.png"
        "/assets/images/projects/Durrat/QR.png"
      ]
      main_image_url: "/assets/images/projects/Durrat/Durrat.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "3,245,000 m²"
      area: "3,245,000 m²"
      industrialZones: 12
      commercialAreas: 8
      parkingSpaces: 1200
      securityPosts: 10
      roadNetwork: "Advanced"
      industrialUnits: 300
      loadingAreas: 20
      status: "Under Construction"
      location: "Second Ring Road, Al-Sulay District"
      category: "Industrial Plans"
      year: "2024"
      value: "800M"
      investmentType: "Industrial Development"
      long_description: "An integrated industrial and commercial plan designed to support concrete industries block and marble manufacturing, as well as providing commercial showrooms and warehouses to meet the needs of various sectors, with modern infrastructure tailored for diverse activities."
      createdAt: "2022-01-01"
      updatedAt: "2024-01-01"
    }
    AR: {
      id: "9"
      title: "مخطط درة الشرق الصناعي"
      description: "مخطط صناعي وتجاري متكامل مصمم لدعم صناعات الخرسانة والبلوك والرخام، بالإضافة إلى توفير معارض تجارية ومستودعات لتلبية احتياجات مختلف القطاعات، مع بنية تحتية حديثة مصممة للأنشطة المتنوعة."
      overview: "مخطط صناعي وتجاري متكامل مصمم لدعم صناعات الخرسانة والبلوك والرخام، بالإضافة إلى توفير معارض تجارية ومستودعات لتلبية احتياجات مختلف القطاعات، مع بنية تحتية حديثة مصممة للأنشطة المتنوعة."
      features: [
        "مصانع بأحجام وصناعات متنوعة"
        "مستودعات تخزين بمساحات مرنة"
        "مستثمرون محليون ودوليون في القطاع الصناعي"
        "أنظمة مراقبة أمنية على مدار الساعة"
        "شبكات طرق واسعة مصممة للشاحنات الثقيلة"
        "بنية تحتية لشبكات الصرف الصحي والمياه"
        "مناطق مخصصة لمصانع الخرسانة والمحلات التجارية والمستودعات"
      ]
      specifications: {
        totalArea: "3,245,000 متر مربع"
        industrialZones: 12
        commercialAreas: 8
        parkingSpaces: 1200
        securityPosts: 10
        roadNetwork: "متقدم"
        industrialUnits: 300
        loadingAreas: 20
      }
      timeline: {
        startDate: "2022"
        completionDate: "2024"
        phases: ["المرحلة الأولى: البنية التحتية", "المرحلة الثانية: الوحدات الصناعية", "المرحلة الثالثة: المناطق التجارية"]
      }
      images: [
        "/assets/images/projects/Durrat/Durrat.png"
        "/assets/images/projects/Durrat/QR.png"
      ]
      images_urls: [
        "/assets/images/projects/Durrat/Durrat.png"
        "/assets/images/projects/Durrat/QR.png"
      ]
      main_image_url: "/assets/images/projects/Durrat/Durrat.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "3,245,000 متر مربع"
      area: "3,245,000 متر مربع"
      industrialZones: 12
      commercialAreas: 8
      parkingSpaces: 1200
      securityPosts: 10
      roadNetwork: "متقدم"
      industrialUnits: 300
      loadingAreas: 20
      status: "قيد الإنشاء"
      location: "الطريق الدائري الثاني، حي السلي"
      category: "المخططات الصناعية"
      year: "2024"
      value: "800 مليون"
      investmentType: "التطوير الصناعي"
      long_description: "مخطط صناعي وتجاري متكامل مصمم لدعم صناعات الخرسانة والبلوك والرخام، بالإضافة إلى توفير معارض تجارية ومستودعات لتلبية احتياجات مختلف القطاعات، مع بنية تحتية حديثة مصممة للأنشطة المتنوعة."
      createdAt: "2022-01-01"
      updatedAt: "2024-01-01"
    }
  }
  "10": {
    EN: {
      id: "10"
      title: "RANEEM WAREHOUSING PLAN"
      description: "An integrated warehousing plan offering storage spaces of various sizes to meet the needs of diverse commercial and industrial activities, with modern design and advanced infrastructure that enhances operational efficiency for investors and business owners."
      overview: "An integrated warehousing plan offering storage spaces of various sizes to meet the needs of diverse commercial and industrial activities, with modern design and advanced infrastructure that enhances operational efficiency for investors and business owners."
      features: [
        "Warehouses of various sizes catering to storage needs for small, medium, and large businesses"
        "Spacious truck and vehicle parking areas facilitating transportation and logistics"
        "Local and international companies interested in enhancing their storage and transportation operations"
        "24/7 security surveillance systems"
        "Wide road networks designed for heavy trucks"
        "Infrastructure for sewage and water networks"
        "Flexible design allowing customization of warehouses based on client needs"
      ]
      specifications: {
        totalArea: "500,000 m²"
        industrialZones: 8
        commercialAreas: 6
        parkingSpaces: 600
        securityPosts: 6
        roadNetwork: "Advanced"
        industrialUnits: 150
        loadingAreas: 12
      }
      timeline: {
        startDate: "2022"
        completionDate: "2024"
        phases: ["Phase 1: Infrastructure", "Phase 2: Warehousing Units", "Phase 3: Commercial Areas"]
      }
      images: [
        "/assets/images/projects/Raneem/Raneem.png"
        "/assets/images/projects/Raneem/QR.png"
      ]
      images_urls: [
        "/assets/images/projects/Raneem/Raneem.png"
        "/assets/images/projects/Raneem/QR.png"
      ]
      main_image_url: "/assets/images/projects/Raneem/Raneem.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "500,000 m²"
      area: "500,000 m²"
      industrialZones: 8
      commercialAreas: 6
      parkingSpaces: 600
      securityPosts: 6
      roadNetwork: "Advanced"
      industrialUnits: 150
      loadingAreas: 12
      status: "Under Construction"
      location: "Exit 17, Al-Sulay District"
      category: "Warehousing Plans"
      year: "2024"
      value: "150M"
      investmentType: "Warehousing Development"
      long_description: "An integrated warehousing plan offering storage spaces of various sizes to meet the needs of diverse commercial and industrial activities, with modern design and advanced infrastructure that enhances operational efficiency for investors and business owners."
      createdAt: "2022-01-01"
      updatedAt: "2024-01-01"
    }
    AR: {
      id: "10"
      title: "مخطط رنيم للمستودعات"
      description: "مخطط مستودعات متكامل يوفر مساحات تخزين بأحجام متنوعة لتلبية احتياجات الأنشطة التجارية والصناعية المتنوعة، مع تصميم حديث وبنية تحتية متقدمة تعزز الكفاءة التشغيلية للمستثمرين وأصحاب الأعمال."
      overview: "مخطط مستودعات متكامل يوفر مساحات تخزين بأحجام متنوعة لتلبية احتياجات الأنشطة التجارية والصناعية المتنوعة، مع تصميم حديث وبنية تحتية متقدمة تعزز الكفاءة التشغيلية للمستثمرين وأصحاب الأعمال."
      features: [
        "مستودعات بأحجام متنوعة تلبي احتياجات التخزين للشركات الصغيرة والمتوسطة والكبيرة"
        "مناطق وقوف واسعة للشاحنات والمركبات تسهل النقل والخدمات اللوجستية"
        "شركات محلية ودولية مهتمة بتعزيز عمليات التخزين والنقل الخاصة بها"
        "أنظمة مراقبة أمنية على مدار الساعة"
        "شبكات طرق واسعة مصممة للشاحنات الثقيلة"
        "بنية تحتية لشبكات الصرف الصحي والمياه"
        "تصميم مرن يسمح بتخصيص المستودعات حسب احتياجات العملاء"
      ]
      specifications: {
        totalArea: "500,000 متر مربع"
        industrialZones: 8
        commercialAreas: 6
        parkingSpaces: 600
        securityPosts: 6
        roadNetwork: "متقدم"
        industrialUnits: 150
        loadingAreas: 12
      }
      timeline: {
        startDate: "2022"
        completionDate: "2024"
        phases: ["المرحلة الأولى: البنية التحتية", "المرحلة الثانية: وحدات المستودعات", "المرحلة الثالثة: المناطق التجارية"]
      }
      images: [
        "/assets/images/projects/Raneem/Raneem.png"
        "/assets/images/projects/Raneem/QR.png"
      ]
      images_urls: [
        "/assets/images/projects/Raneem/Raneem.png"
        "/assets/images/projects/Raneem/QR.png"
      ]
      main_image_url: "/assets/images/projects/Raneem/Raneem.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "500,000 متر مربع"
      area: "500,000 متر مربع"
      industrialZones: 8
      commercialAreas: 6
      parkingSpaces: 600
      securityPosts: 6
      roadNetwork: "متقدم"
      industrialUnits: 150
      loadingAreas: 12
      status: "قيد الإنشاء"
      location: "خروج 17، حي السلي"
      category: "مخططات المستودعات"
      year: "2024"
      value: "150 مليون"
      investmentType: "تطوير المستودعات"
      long_description: "مخطط مستودعات متكامل يوفر مساحات تخزين بأحجام متنوعة لتلبية احتياجات الأنشطة التجارية والصناعية المتنوعة، مع تصميم حديث وبنية تحتية متقدمة تعزز الكفاءة التشغيلية للمستثمرين وأصحاب الأعمال."
      createdAt: "2022-01-01"
      updatedAt: "2024-01-01"
    }
  }
  "11": {
    EN: {
      id: "11"
      title: "ISTANBUL WAREHOUSING PLAN"
      description: "An integrated warehousing, residential, and commercial plan offering an ideal environment to meet storage, housing, and commercial activity needs, with a modern design balancing all components to serve various investment sectors."
      overview: "An integrated warehousing, residential, and commercial plan offering an ideal environment to meet storage, housing, and commercial activity needs, with a modern design balancing all components to serve various investment sectors."
      features: [
        "Flexible warehouses catering to various storage needs"
        "24/7 security surveillance systems"
        "Local and international investors in the industrial sector"
        "Spacious truck and vehicle parking areas serving all components"
        "A modern road network designed for truck and commercial vehicle traffic"
        "Infrastructure for sewage and water networks"
        "Balanced and integrated distribution between warehouses, residential areas"
      ]
      specifications: {
        totalArea: "1,000,000 m²"
        industrialZones: 10
        commercialAreas: 8
        parkingSpaces: 800
        securityPosts: 8
        roadNetwork: "Advanced"
        industrialUnits: 200
        loadingAreas: 15
      }
      timeline: {
        startDate: "2022"
        completionDate: "2024"
        phases: ["Phase 1: Infrastructure", "Phase 2: Warehousing Units", "Phase 3: Residential Areas"]
      }
      images: [
        "/assets/images/projects/Istanbul/Istanbul.png"
        "/assets/images/projects/Istanbul/QR.png"
      ]
      images_urls: [
        "/assets/images/projects/Istanbul/Istanbul.png"
        "/assets/images/projects/Istanbul/QR.png"
      ]
      main_image_url: "/assets/images/projects/Istanbul/Istanbul.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "1,000,000 m²"
      area: "1,000,000 m²"
      industrialZones: 10
      commercialAreas: 8
      parkingSpaces: 800
      securityPosts: 8
      roadNetwork: "Advanced"
      industrialUnits: 200
      loadingAreas: 15
      status: "Under Construction"
      location: "Istanbul Road, Al-Sulay District"
      category: "Warehousing Plans"
      year: "2024"
      value: "300M"
      investmentType: "Warehousing Development"
      long_description: "An integrated warehousing, residential, and commercial plan offering an ideal environment to meet storage, housing, and commercial activity needs, with a modern design balancing all components to serve various investment sectors."
      createdAt: "2022-01-01"
      updatedAt: "2024-01-01"
    }
    AR: {
      id: "11"
      title: "مخطط إسطنبول للمستودعات"
      description: "مخطط مستودعات سكني وتجاري متكامل يوفر بيئة مثالية لتلبية احتياجات التخزين والسكن والأنشطة التجارية، مع تصميم حديث يوازن جميع المكونات لخدمة مختلف قطاعات الاستثمار."
      overview: "مخطط مستودعات سكني وتجاري متكامل يوفر بيئة مثالية لتلبية احتياجات التخزين والسكن والأنشطة التجارية، مع تصميم حديث يوازن جميع المكونات لخدمة مختلف قطاعات الاستثمار."
      features: [
        "مستودعات مرنة تلبي احتياجات التخزين المتنوعة"
        "أنظمة مراقبة أمنية على مدار الساعة"
        "مستثمرون محليون ودوليون في القطاع الصناعي"
        "مناطق وقوف واسعة للشاحنات والمركبات تخدم جميع المكونات"
        "شبكة طرق حديثة مصممة لحركة الشاحنات والمركبات التجارية"
        "بنية تحتية لشبكات الصرف الصحي والمياه"
        "توزيع متوازن ومتكامل بين المستودعات والمناطق السكنية"
      ]
      specifications: {
        totalArea: "1,000,000 متر مربع"
        industrialZones: 10
        commercialAreas: 8
        parkingSpaces: 800
        securityPosts: 8
        roadNetwork: "متقدم"
        industrialUnits: 200
        loadingAreas: 15
      }
      timeline: {
        startDate: "2022"
        completionDate: "2024"
        phases: ["المرحلة الأولى: البنية التحتية", "المرحلة الثانية: وحدات المستودعات", "المرحلة الثالثة: المناطق السكنية"]
      }
      images: [
        "/assets/images/projects/Istanbul/Istanbul.png"
        "/assets/images/projects/Istanbul/QR.png"
      ]
      images_urls: [
        "/assets/images/projects/Istanbul/Istanbul.png"
        "/assets/images/projects/Istanbul/QR.png"
      ]
      main_image_url: "/assets/images/projects/Istanbul/Istanbul.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "1,000,000 متر مربع"
      area: "1,000,000 متر مربع"
      industrialZones: 10
      commercialAreas: 8
      parkingSpaces: 800
      securityPosts: 8
      roadNetwork: "متقدم"
      industrialUnits: 200
      loadingAreas: 15
      status: "قيد الإنشاء"
      location: "طريق إسطنبول، حي السلي"
      category: "مخططات المستودعات"
      year: "2024"
      value: "300 مليون"
      investmentType: "تطوير المستودعات"
      long_description: "مخطط مستودعات سكني وتجاري متكامل يوفر بيئة مثالية لتلبية احتياجات التخزين والسكن والأنشطة التجارية، مع تصميم حديث يوازن جميع المكونات لخدمة مختلف قطاعات الاستثمار."
      createdAt: "2022-01-01"
      updatedAt: "2024-01-01"
    }
  }
  "12": {
    EN: {
      id: "12"
      title: "RANDA WAREHOUSING PLAN"
      description: "An integrated warehousing, residential, and commercial plan designed to meet storage, housing and commercial activity needs, with a modern design offering a comprehensive environment for investors and business owners, enhancing operational efficiency across all components."
      overview: "An integrated warehousing, residential, and commercial plan designed to meet storage, housing and commercial activity needs, with a modern design offering a comprehensive environment for investors and business owners, enhancing operational efficiency across all components."
      features: [
        "Warehouses of various sizes catering to storage needs for small, medium, and large businesses"
        "Residential units equipped to meet the needs of workers"
        "Local and international investors in the industrial sector"
        "24/7 security surveillance systems"
        "A road network designed for truck, commercial, and light vehicle traffic"
        "Infrastructure for sewage and water networks"
        "Smart allocation of spaces between warehouses, residential areas, and commercial facilities"
      ]
      specifications: {
        totalArea: "315,000 m²"
        industrialZones: 6
        commercialAreas: 4
        parkingSpaces: 400
        securityPosts: 4
        roadNetwork: "Advanced"
        industrialUnits: 100
        loadingAreas: 8
      }
      timeline: {
        startDate: "2022"
        completionDate: "2024"
        phases: ["Phase 1: Infrastructure", "Phase 2: Warehousing Units", "Phase 3: Residential Areas"]
      }
      images: [
        "/assets/images/projects/Randa/Randa.png"
        "/assets/images/projects/Randa/QR.png"
      ]
      images_urls: [
        "/assets/images/projects/Randa/Randa.png"
        "/assets/images/projects/Randa/QR.png"
      ]
      main_image_url: "/assets/images/projects/Randa/Randa.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "315,000 m²"
      area: "315,000 m²"
      industrialZones: 6
      commercialAreas: 4
      parkingSpaces: 400
      securityPosts: 4
      roadNetwork: "Advanced"
      industrialUnits: 100
      loadingAreas: 8
      status: "Under Construction"
      location: "Intersection of Second Ring Road and Al-Kharj Road"
      category: "Warehousing Plans"
      year: "2024"
      value: "100M"
      investmentType: "Warehousing Development"
      long_description: "An integrated warehousing, residential, and commercial plan designed to meet storage, housing and commercial activity needs, with a modern design offering a comprehensive environment for investors and business owners, enhancing operational efficiency across all components."
      createdAt: "2022-01-01"
      updatedAt: "2024-01-01"
    }
    AR: {
      id: "12"
      title: "مخطط رندة للمستودعات"
      description: "مخطط مستودعات سكني وتجاري متكامل مصمم لتلبية احتياجات التخزين والسكن والأنشطة التجارية، مع تصميم حديث يوفر بيئة شاملة للمستثمرين وأصحاب الأعمال، مما يعزز الكفاءة التشغيلية عبر جميع المكونات."
      overview: "مخطط مستودعات سكني وتجاري متكامل مصمم لتلبية احتياجات التخزين والسكن والأنشطة التجارية، مع تصميم حديث يوفر بيئة شاملة للمستثمرين وأصحاب الأعمال، مما يعزز الكفاءة التشغيلية عبر جميع المكونات."
      features: [
        "مستودعات بأحجام متنوعة تلبي احتياجات التخزين للشركات الصغيرة والمتوسطة والكبيرة"
        "وحدات سكنية مجهزة لتلبية احتياجات العمال"
        "مستثمرون محليون ودوليون في القطاع الصناعي"
        "أنظمة مراقبة أمنية على مدار الساعة"
        "شبكة طرق مصممة لحركة الشاحنات والمركبات التجارية والخفيفة"
        "بنية تحتية لشبكات الصرف الصحي والمياه"
        "توزيع ذكي للمساحات بين المستودعات والمناطق السكنية والمرافق التجارية"
      ]
      specifications: {
        totalArea: "315,000 متر مربع"
        industrialZones: 6
        commercialAreas: 4
        parkingSpaces: 400
        securityPosts: 4
        roadNetwork: "متقدم"
        industrialUnits: 100
        loadingAreas: 8
      }
      timeline: {
        startDate: "2022"
        completionDate: "2024"
        phases: ["المرحلة الأولى: البنية التحتية", "المرحلة الثانية: وحدات المستودعات", "المرحلة الثالثة: المناطق السكنية"]
      }
      images: [
        "/assets/images/projects/Randa/Randa.png"
        "/assets/images/projects/Randa/QR.png"
      ]
      images_urls: [
        "/assets/images/projects/Randa/Randa.png"
        "/assets/images/projects/Randa/QR.png"
      ]
      main_image_url: "/assets/images/projects/Randa/Randa.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "315,000 متر مربع"
      area: "315,000 متر مربع"
      industrialZones: 6
      commercialAreas: 4
      parkingSpaces: 400
      securityPosts: 4
      roadNetwork: "متقدم"
      industrialUnits: 100
      loadingAreas: 8
      status: "قيد الإنشاء"
      location: "تقاطع الطريق الدائري الثاني وطريق الخرج"
      category: "مخططات المستودعات"
      year: "2024"
      value: "100 مليون"
      investmentType: "تطوير المستودعات"
      long_description: "مخطط مستودعات سكني وتجاري متكامل مصمم لتلبية احتياجات التخزين والسكن والأنشطة التجارية، مع تصميم حديث يوفر بيئة شاملة للمستثمرين وأصحاب الأعمال، مما يعزز الكفاءة التشغيلية عبر جميع المكونات."
      createdAt: "2022-01-01"
      updatedAt: "2024-01-01"
    }
  }
  "13": {
    EN: {
      id: "13"
      title: "RANA WAREHOUSING PLAN"
      description: "An integrated warehousing and residential plan providing an ideal environment to meet commercial and industrial storage needs, along with residential buildings designed to provide housing units that cater to the needs of workers and investors, supported by advanced infrastructure."
      overview: "An integrated warehousing and residential plan providing an ideal environment to meet commercial and industrial storage needs, along with residential buildings designed to provide housing units that cater to the needs of workers and investors, supported by advanced infrastructure."
      features: [
        "Residential buildings designed to provide housing units for workers"
        "Storage warehouses with flexible spaces"
        "Local and international investors in the industrial sector"
        "24/7 security surveillance systems"
        "A road network designed for truck, commercial, and light vehicle traffic"
        "Infrastructure for sewage and water networks"
        "Strategic allocation of spaces between warehouses and residential buildings"
      ]
      specifications: {
        totalArea: "840,000 m²"
        industrialZones: 8
        commercialAreas: 6
        parkingSpaces: 700
        securityPosts: 7
        roadNetwork: "Advanced"
        industrialUnits: 150
        loadingAreas: 12
      }
      timeline: {
        startDate: "2022"
        completionDate: "2024"
        phases: ["Phase 1: Infrastructure", "Phase 2: Warehousing Units", "Phase 3: Residential Areas"]
      }
      images: [
        "/assets/images/projects/Rana/Rana.png"
        "/assets/images/projects/Rana/QR.png"
      ]
      images_urls: [
        "/assets/images/projects/Rana/Rana.png"
        "/assets/images/projects/Rana/QR.png"
      ]
      main_image_url: "/assets/images/projects/Rana/Rana.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "840,000 m²"
      area: "840,000 m²"
      industrialZones: 8
      commercialAreas: 6
      parkingSpaces: 700
      securityPosts: 7
      roadNetwork: "Advanced"
      industrialUnits: 150
      loadingAreas: 12
      status: "Under Construction"
      location: "Second Ring Road, Al-Sulay District"
      category: "Warehousing Plans"
      year: "2024"
      value: "200M"
      investmentType: "Warehousing Development"
      long_description: "An integrated warehousing and residential plan providing an ideal environment to meet commercial and industrial storage needs, along with residential buildings designed to provide housing units that cater to the needs of workers and investors, supported by advanced infrastructure."
      createdAt: "2022-01-01"
      updatedAt: "2024-01-01"
    }
    AR: {
      id: "13"
      title: "مخطط رنا للمستودعات"
      description: "مخطط مستودعات سكني متكامل يوفر بيئة مثالية لتلبية احتياجات التخزين التجارية والصناعية، بالإضافة إلى المباني السكنية المصممة لتوفير وحدات سكنية تلبي احتياجات العمال والمستثمرين، مدعومة ببنية تحتية متقدمة."
      overview: "مخطط مستودعات سكني متكامل يوفر بيئة مثالية لتلبية احتياجات التخزين التجارية والصناعية، بالإضافة إلى المباني السكنية المصممة لتوفير وحدات سكنية تلبي احتياجات العمال والمستثمرين، مدعومة ببنية تحتية متقدمة."
      features: [
        "مباني سكنية مصممة لتوفير وحدات سكنية للعمال"
        "مستودعات تخزين بمساحات مرنة"
        "مستثمرون محليون ودوليون في القطاع الصناعي"
        "أنظمة مراقبة أمنية على مدار الساعة"
        "شبكة طرق مصممة لحركة الشاحنات والمركبات التجارية والخفيفة"
        "بنية تحتية لشبكات الصرف الصحي والمياه"
        "توزيع استراتيجي للمساحات بين المستودعات والمباني السكنية"
      ]
      specifications: {
        totalArea: "840,000 متر مربع"
        industrialZones: 8
        commercialAreas: 6
        parkingSpaces: 700
        securityPosts: 7
        roadNetwork: "متقدم"
        industrialUnits: 150
        loadingAreas: 12
      }
      timeline: {
        startDate: "2022"
        completionDate: "2024"
        phases: ["المرحلة الأولى: البنية التحتية", "المرحلة الثانية: وحدات المستودعات", "المرحلة الثالثة: المناطق السكنية"]
      }
      images: [
        "/assets/images/projects/Rana/Rana.png"
        "/assets/images/projects/Rana/QR.png"
      ]
      images_urls: [
        "/assets/images/projects/Rana/Rana.png"
        "/assets/images/projects/Rana/QR.png"
      ]
      main_image_url: "/assets/images/projects/Rana/Rana.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "840,000 متر مربع"
      area: "840,000 متر مربع"
      industrialZones: 8
      commercialAreas: 6
      parkingSpaces: 700
      securityPosts: 7
      roadNetwork: "متقدم"
      industrialUnits: 150
      loadingAreas: 12
      status: "قيد الإنشاء"
      location: "الطريق الدائري الثاني، حي السلي"
      category: "مخططات المستودعات"
      year: "2024"
      value: "200 مليون"
      investmentType: "تطوير المستودعات"
      long_description: "مخطط مستودعات سكني متكامل يوفر بيئة مثالية لتلبية احتياجات التخزين التجارية والصناعية، بالإضافة إلى المباني السكنية المصممة لتوفير وحدات سكنية تلبي احتياجات العمال والمستثمرين، مدعومة ببنية تحتية متقدمة."
      createdAt: "2022-01-01"
      updatedAt: "2024-01-01"
    }
  }
  "14": {
    EN: {
      id: "14"
      title: "ALNAMOTHAJIYA WAREHOUSING PLAN"
      description: "An integrated warehousing plan combining storage, commercial, and industrial activities featuring warehouses, commercial yards, residential buildings, and workshops within an advanced infrastructure that supports diverse investment activities."
      overview: "An integrated warehousing plan combining storage, commercial, and industrial activities featuring warehouses, commercial yards, residential buildings, and workshops within an advanced infrastructure that supports diverse investment activities."
      features: [
        "High-standard warehouses with various sizes to meet storage requirements"
        "Industrial workshops of various sizes to support craft and industrial activities"
        "Local and international investors in the industrial sector"
        "24/7 security surveillance systems"
        "An advanced road network designed for truck, commercial, and industrial vehicle traffic"
        "Infrastructure for sewage and water networks"
        "Strategic allocation of spaces between warehouses and residential buildings"
      ]
      specifications: {
        totalArea: "1,012,720 m²"
        industrialZones: 12
        commercialAreas: 8
        parkingSpaces: 900
        securityPosts: 9
        roadNetwork: "Advanced"
        industrialUnits: 250
        loadingAreas: 18
      }
      timeline: {
        startDate: "2022"
        completionDate: "2024"
        phases: ["Phase 1: Infrastructure", "Phase 2: Warehousing Units", "Phase 3: Commercial Areas"]
      }
      images: [
        "/assets/images/projects/ALNAMOTHAJIYA/ALNAMOTHAJIYA.png"
        "/assets/images/projects/ALNAMOTHAJIYA/QR.png"
      ]
      images_urls: [
        "/assets/images/projects/ALNAMOTHAJIYA/ALNAMOTHAJIYA.png"
        "/assets/images/projects/ALNAMOTHAJIYA/QR.png"
      ]
      main_image_url: "/assets/images/projects/ALNAMOTHAJIYA/ALNAMOTHAJIYA.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "1,012,720 m²"
      area: "1,012,720 m²"
      industrialZones: 12
      commercialAreas: 8
      parkingSpaces: 900
      securityPosts: 9
      roadNetwork: "Advanced"
      industrialUnits: 250
      loadingAreas: 18
      status: "Under Construction"
      location: "Istanbul Road, Al-Sulay District"
      category: "Warehousing Plans"
      year: "2024"
      value: "250M"
      investmentType: "Warehousing Development"
      long_description: "An integrated warehousing plan combining storage, commercial, and industrial activities featuring warehouses, commercial yards, residential buildings, and workshops within an advanced infrastructure that supports diverse investment activities."
      createdAt: "2022-01-01"
      updatedAt: "2024-01-01"
    }
    AR: {
      id: "14"
      title: "مخطط النموذجية للمستودعات"
      description: "مخطط مستودعات متكامل يجمع بين أنشطة التخزين والتجارية والصناعية ويضم مستودعات وساحات تجارية ومباني سكنية وورش عمل ضمن بنية تحتية متقدمة تدعم أنشطة الاستثمار المتنوعة."
      overview: "مخطط مستودعات متكامل يجمع بين أنشطة التخزين والتجارية والصناعية ويضم مستودعات وساحات تجارية ومباني سكنية وورش عمل ضمن بنية تحتية متقدمة تدعم أنشطة الاستثمار المتنوعة."
      features: [
        "مستودعات عالية المستوى بأحجام متنوعة لتلبية متطلبات التخزين"
        "ورش صناعية بأحجام متنوعة لدعم الأنشطة الحرفية والصناعية"
        "مستثمرون محليون ودوليون في القطاع الصناعي"
        "أنظمة مراقبة أمنية على مدار الساعة"
        "شبكة طرق متقدمة مصممة لحركة الشاحنات والمركبات التجارية والصناعية"
        "بنية تحتية لشبكات الصرف الصحي والمياه"
        "توزيع استراتيجي للمساحات بين المستودعات والمباني السكنية"
      ]
      specifications: {
        totalArea: "1,012,720 متر مربع"
        industrialZones: 12
        commercialAreas: 8
        parkingSpaces: 900
        securityPosts: 9
        roadNetwork: "متقدم"
        industrialUnits: 250
        loadingAreas: 18
      }
      timeline: {
        startDate: "2022"
        completionDate: "2024"
        phases: ["المرحلة الأولى: البنية التحتية", "المرحلة الثانية: وحدات المستودعات", "المرحلة الثالثة: المناطق التجارية"]
      }
      images: [
        "/assets/images/projects/ALNAMOTHAJIYA/ALNAMOTHAJIYA.png"
        "/assets/images/projects/ALNAMOTHAJIYA/QR.png"
      ]
      images_urls: [
        "/assets/images/projects/ALNAMOTHAJIYA/ALNAMOTHAJIYA.png"
        "/assets/images/projects/ALNAMOTHAJIYA/QR.png"
      ]
      main_image_url: "/assets/images/projects/ALNAMOTHAJIYA/ALNAMOTHAJIYA.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "1,012,720 متر مربع"
      area: "1,012,720 متر مربع"
      industrialZones: 12
      commercialAreas: 8
      parkingSpaces: 900
      securityPosts: 9
      roadNetwork: "متقدم"
      industrialUnits: 250
      loadingAreas: 18
      status: "قيد الإنشاء"
      location: "طريق إسطنبول، حي السلي"
      category: "مخططات المستودعات"
      year: "2024"
      value: "250 مليون"
      investmentType: "تطوير المستودعات"
      long_description: "مخطط مستودعات متكامل يجمع بين أنشطة التخزين والتجارية والصناعية ويضم مستودعات وساحات تجارية ومباني سكنية وورش عمل ضمن بنية تحتية متقدمة تدعم أنشطة الاستثمار المتنوعة."
      createdAt: "2022-01-01"
      updatedAt: "2024-01-01"
    }
  }
  "15": {
    EN: {
      id: "15"
      title: "ALAZIZIYAH WAREHOUSING PLAN"
      description: "An integrated warehousing and commercial plan offering a modern environment that supports storage and commercial activities, with equipped warehouses, multi-purpose buildings (residential and commercial), and showrooms designed for product display and marketing making it a prime investment destination."
      overview: "An integrated warehousing and commercial plan offering a modern environment that supports storage and commercial activities, with equipped warehouses, multi-purpose buildings (residential and commercial), and showrooms designed for product display and marketing making it a prime investment destination."
      features: [
        "Multi-purpose buildings (residential and commercial) tailored to meet the needs of workers and businesses"
        "Storage warehouses with flexible spaces"
        "Local and international investors in the industrial sector"
        "24/7 security surveillance systems"
        "An advanced road network designed for truck, commercial, and industrial vehicle traffic"
        "Infrastructure for sewage and water networks"
        "Strategic allocation of spaces between warehouses and residential buildings"
      ]
      specifications: {
        totalArea: "623,215 m²"
        industrialZones: 6
        commercialAreas: 5
        parkingSpaces: 500
        securityPosts: 5
        roadNetwork: "Advanced"
        industrialUnits: 120
        loadingAreas: 10
      }
      timeline: {
        startDate: "2022"
        completionDate: "2024"
        phases: ["Phase 1: Infrastructure", "Phase 2: Warehousing Units", "Phase 3: Commercial Areas"]
      }
      images: [
        "/assets/images/projects/Aziziyah/Aziziyah.png"
        "/assets/images/projects/Aziziyah/QR.png"
      ]
      images_urls: [
        "/assets/images/projects/Aziziyah/Aziziyah.png"
        "/assets/images/projects/Aziziyah/QR.png"
      ]
      main_image_url: "/assets/images/projects/Aziziyah/Aziziyah.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "623,215 m²"
      area: "623,215 m²"
      industrialZones: 6
      commercialAreas: 5
      parkingSpaces: 500
      securityPosts: 5
      roadNetwork: "Advanced"
      industrialUnits: 120
      loadingAreas: 10
      status: "Under Construction"
      location: "Al-Aziziyah District, Al-Kharj Road"
      category: "Warehousing Plans"
      year: "2024"
      value: "180M"
      investmentType: "Warehousing Development"
      long_description: "An integrated warehousing and commercial plan offering a modern environment that supports storage and commercial activities, with equipped warehouses, multi-purpose buildings (residential and commercial), and showrooms designed for product display and marketing making it a prime investment destination."
      createdAt: "2022-01-01"
      updatedAt: "2024-01-01"
    }
    AR: {
      id: "15"
      title: "مخطط العزيزية للمستودعات"
      description: "مخطط مستودعات تجاري متكامل يوفر بيئة حديثة تدعم أنشطة التخزين والتجارية، مع مستودعات مجهزة ومباني متعددة الأغراض (سكنية وتجارية)، ومعارض مصممة لعرض وتسويق المنتجات مما يجعلها وجهة استثمارية رئيسية."
      overview: "مخطط مستودعات تجاري متكامل يوفر بيئة حديثة تدعم أنشطة التخزين والتجارية، مع مستودعات مجهزة ومباني متعددة الأغراض (سكنية وتجارية)، ومعارض مصممة لعرض وتسويق المنتجات مما يجعلها وجهة استثمارية رئيسية."
      features: [
        "مباني متعددة الأغراض (سكنية وتجارية) مصممة لتلبية احتياجات العمال والأعمال التجارية"
        "مستودعات تخزين بمساحات مرنة"
        "مستثمرون محليون ودوليون في القطاع الصناعي"
        "أنظمة مراقبة أمنية على مدار الساعة"
        "شبكة طرق متقدمة مصممة لحركة الشاحنات والمركبات التجارية والصناعية"
        "بنية تحتية لشبكات الصرف الصحي والمياه"
        "توزيع استراتيجي للمساحات بين المستودعات والمباني السكنية"
      ]
      specifications: {
        totalArea: "623,215 متر مربع"
        industrialZones: 6
        commercialAreas: 5
        parkingSpaces: 500
        securityPosts: 5
        roadNetwork: "متقدم"
        industrialUnits: 120
        loadingAreas: 10
      }
      timeline: {
        startDate: "2022"
        completionDate: "2024"
        phases: ["المرحلة الأولى: البنية التحتية", "المرحلة الثانية: وحدات المستودعات", "المرحلة الثالثة: المناطق التجارية"]
      }
      images: [
        "/assets/images/projects/Aziziyah/Aziziyah.png"
        "/assets/images/projects/Aziziyah/QR.png"
      ]
      images_urls: [
        "/assets/images/projects/Aziziyah/Aziziyah.png"
        "/assets/images/projects/Aziziyah/QR.png"
      ]
      main_image_url: "/assets/images/projects/Aziziyah/Aziziyah.png"
      video: "/assets/videos/project-video.mp4"
      video_url: "/assets/videos/project-video.mp4"
      brochure: "/assets/documents/project-brochure.pdf"
      totalArea: "623,215 متر مربع"
      area: "623,215 متر مربع"
      industrialZones: 6
      commercialAreas: 5
      parkingSpaces: 500
      securityPosts: 5
      roadNetwork: "متقدم"
      industrialUnits: 120
      loadingAreas: 10
      status: "قيد الإنشاء"
      location: "حي العزيزية، طريق الخرج"
      category: "مخططات المستودعات"
      year: "2024"
      value: "180 مليون"
      investmentType: "تطوير المستودعات"
      long_description: "مخطط مستودعات تجاري متكامل يوفر بيئة حديثة تدعم أنشطة التخزين والتجارية، مع مستودعات مجهزة ومباني متعددة الأغراض (سكنية وتجارية)، ومعارض مصممة لعرض وتسويق المنتجات مما يجعلها وجهة استثمارية رئيسية."
      createdAt: "2022-01-01"
      updatedAt: "2024-01-01"
    }
  }
};
