import React, { useState } from 'react';
import TransparentNavigation from '@/components/TransparentNavigation';
import Footer from '@/components/Footer';
import { Calendar, User, Tag, Eye, Share2, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const News = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Latest News & Updates",
      subtitle: "Stay informed with the latest developments in Saudi real estate",
      categories: ["All", "Company News", "Market Insights", "Project Updates", "Industry News", "Investment Tips"],
      articles: [
        {
          id: 1,
          title: "A MODON delegation visits Al-Fawzan Industrial City in Riyadh",
          excerpt: "The Director General of the Saudi Authority for Industrial Cities and Technology Zones (MODON) visited Al-Fawzan Industrial City to inspect the completed works and operational industrial activities.",
          content: "The Director General of the Saudi Authority for Industrial Cities and Technology Zones (MODON), Engineer Khalid Al-Salem, visited Al-Fawzan Industrial City in Riyadh to inspect the completed works and operational industrial activities in the city. During his visit, Al-Salem met with the CEO of Ali Al-Fawzan & Sons Real Estate Company, Mr. Ali Al-Fawzan, and his work team. He listened to a detailed explanation of what has been accomplished during the previous period and what is planned to be accomplished during the upcoming period, as well as what the company needs in terms of facilities to complete the development works after the company has completed all infrastructure works in the city and established many vital facilities that serve the work of industrial companies in the city, many of which have already started working through their facilities there. The visiting delegation, headed by the Director General of the Industrial Cities Authority, toured the industrial activities in the city along with the development sites and saw the completed works up close, praising those in charge of them, appreciating their speed and quality of achievement, and emphasizing the importance of speedy completion in line with the objectives of the Kingdom's Vision 2030.",
          category: "Company News",
          author: "Press Team",
          date: "2024-01-20",
          views: "3,250",
          comments: "67",
          image: "/assets/images/News/1.png",
          featured: true,
          readMoreUrl: "https://www.al-jazirahonline.com/2020/02/20/33378/"
        },
        {
          id: 2,
          title: "Prince Al-Qassim honors businessman Ali Al-Fawzan for his community contributions",
          excerpt: "Prince Faisal bin Mishaal bin Saud bin Abdulaziz, Governor of Al-Qassim Region, honored businessman Ali Al-Fawzan for his outstanding contributions to community development and social responsibility initiatives.",
          content: "Prince Faisal bin Mishaal bin Saud bin Abdulaziz, Governor of Al-Qassim Region, honored businessman Ali Al-Fawzan for his outstanding contributions to community development and social responsibility initiatives. The ceremony, which took place at the Prince's office in Buraydah, recognized Al-Fawzan's significant role in supporting various community projects and his commitment to corporate social responsibility. The honor reflects the recognition of Al-Fawzan's efforts in contributing to the Kingdom's Vision 2030 goals through sustainable development projects and community engagement initiatives. This prestigious recognition highlights the important role that private sector leaders play in supporting national development objectives and fostering strong community partnerships.",
          category: "Company News",
          author: "Press Team",
          date: "2024-01-18",
          views: "2,890",
          comments: "52",
          image: "/assets/images/News/2.png",
          featured: true,
          readMoreUrl: "https://www.spa.gov.sa/1705526?lang=ar&newsid=1705526"
        },
        {
          id: 3,
          title: "Ali Al-Fouzan Company wins the best real estate development company award in the industrial sector",
          excerpt: "At the Arabian Business Magazine Awards ceremony in Riyadh, Ali Al-Fouzan Company was recognized as the best real estate development company in the industrial sector, highlighting its excellence and leadership in industrial real estate development.",
          content: "Ali Al-Fouzan Company has been awarded the prestigious title of 'Best Real Estate Development Company in the Industrial Sector' at the Arabian Business Magazine Awards ceremony held in Riyadh. This recognition celebrates the company's outstanding achievements and leadership in industrial real estate development across the Kingdom. The award acknowledges Ali Al-Fouzan Company's commitment to excellence, innovation, and sustainable development practices in the industrial sector. The company's portfolio of industrial cities, warehouses, and manufacturing facilities has set new standards for quality and efficiency in the region. This prestigious accolade from Arabian Business Magazine, a leading business publication in the Middle East, further solidifies the company's position as a pioneer in industrial real estate development and its contribution to Saudi Arabia's economic diversification goals under Vision 2030.",
          category: "Company News",
          author: "Press Team",
          date: "2024-01-16",
          views: "2,750",
          comments: "45",
          image: "/assets/images/News/3.png",
          featured: true,
          readMoreUrl: "https://aawsat.com/home/article/115731"
        },
        {
          id: 4,
          title: "Ali Al-Fouzan and Sons Real Estate Company - Unique capabilities in developing plans, industrial facilities and warehouses",
          excerpt: "The planning and construction company demonstrates exceptional expertise in developing comprehensive industrial plans, state-of-the-art facilities, and modern warehouse solutions that meet the evolving needs of Saudi Arabia's industrial sector.",
          content: "Ali Al-Fouzan and Sons Real Estate Company has established itself as a leader in industrial development through its unique capabilities in planning and constructing industrial facilities and warehouses. The company's comprehensive approach encompasses master planning, facility design, and construction management, delivering turnkey solutions for industrial clients. With decades of experience in the Saudi market, the company has developed specialized expertise in creating efficient industrial layouts, modern warehouse facilities, and integrated industrial complexes. Their innovative approach to industrial development includes incorporating the latest technologies, sustainable practices, and flexible designs that can adapt to changing industrial requirements. The company's portfolio includes numerous successful industrial projects that have contributed significantly to the Kingdom's industrial growth and economic diversification objectives under Vision 2030.",
          category: "Company News",
          author: "Press Team",
          date: "2024-01-14",
          views: "2,650",
          comments: "38",
          image: "/assets/images/News/4.png",
          featured: true,
          readMoreUrl: "https://www.alriyadh.com/930934"
        },
        {
          id: 5,
          title: "Ali Al-Fouzan and Sons Real Estate Company signs a financing agreement for its customers with Amlak International",
          excerpt: "Strategic partnership to provide customers with facilitated financing solutions for purchasing warehouses and industrial facilities with competitive terms and conditions.",
          content: "Ali Al-Fouzan and Sons Real Estate Company has signed a significant financing agreement with Amlak International, one of the leading companies in its field, to provide exceptional financing facilities for customers interested in purchasing warehouses and industrial facilities. This agreement represents a major milestone in the company's commitment to facilitating customer access to industrial real estate investments. The partnership will enable customers to obtain financing for purchasing warehouses currently under construction with facilitated terms and competitive conditions. This agreement opens the door for fruitful cooperation between our company and Amlak International, serving our shared goals of delivering services to valued customers through the easiest means and highest quality standards. The agreement was signed during the major real estate forum in Riyadh, which is considered the most prominent of its kind, and celebrates the success of our company in launching its qualitative project (Jebel Ali Industrial City Project in Riyadh).",
          category: "Company News",
          author: "Press Team",
          date: "2024-01-13",
          views: "2,450",
          comments: "42",
          image: "/assets/images/News/5.png",
          featured: true,
          readMoreUrl: "https://www.argaam.com/ar/article/articledetail/id/946166"
        },

      ],
      blogPosts: []
    },
    AR: {
      title: "آخر الأخبار والتحديثات",
      subtitle: "ابق على اطلاع بآخر التطورات في العقارات السعودية",
      categories: ["الكل", "أخبار الشركة", "رؤى السوق", "تحديثات المشاريع", "أخبار الصناعة", "نصائح الاستثمار"],
      articles: [
        {
          id: 1,
          title: "وفد مدن يزور مدينة الفوزان الصناعية في الرياض",
          excerpt: "مدير عام الهيئة السعودية للمدن الصناعية ومناطق التقنية يزور مدينة الفوزان الصناعية لتفقد الأعمال المنجزة والفعاليات الصناعية العاملة.",
          content: "زار مدير عام الهيئة السعودية للمدن الصناعية ومناطق التقنية (مدن) المهندس خالد السالم مدينة الفوزان الصناعية بالرياض وذلك لتفقد الأعمال المنجزة في المدينة والفعاليات الصناعية العاملة فيها. وقد التقى السالم خلال زيارته بالرئيس التنفيذي لشركة علي الفوزان وأولاده العقارية الأستاذ علي الفوزان وفريق عمله واستمع خلال اللقاء إلى شرح مفصل عن ما تم إنجازه خلال الفترة السابقة وما هو مخطط لإنجازه خلال الفترة القادمة وما تحتاجه الشركة من تسهيلات لإتمام إنجاز أعمال التطوير بعد أن أنهت الشركة إنجاز جميع أعمال البنية التحتية في المدينة وأقامت العديد من المنشآت الحيوية التي تخدم أعمال الشركات الصناعية في المدينة والتي بدأ العديد منها فعليا في العمل من خلال منشآتها فيها. ثم جال الوفد الزائر برئاسة مدير عام هيئة المدن الصناعية على الفعاليات الصناعية في المدينة إلى جانب مواقع التطوير فيها وشاهد عن كثب الأعمال المنجزة واثنى علي القائمين عليها مقدرا لهم سرعة وجودة الإنجاز مؤكدا على أهمية سرعة الإنجاز بما يتواكب مع أهداف رؤية المملكة 2030.",
          category: "أخبار الشركة",
          author: "فريق الصحافة",
          date: "2024-01-20",
          views: "3,250",
          comments: "67",
          image: "/assets/images/News/1.png",
          featured: true,
          readMoreUrl: "https://www.al-jazirahonline.com/2020/02/20/33378/"
        },
        {
          id: 2,
          title: "أمير القصيم يكرم رجل الأعمال علي الفوزان لمساهماته المجتمعية",
          excerpt: "أمير منطقة القصيم الأمير فيصل بن مشعل بن سعود بن عبدالعزيز يكرم رجل الأعمال علي الفوزان لمساهماته المتميزة في التنمية المجتمعية ومبادرات المسؤولية الاجتماعية.",
          content: "كرم أمير منطقة القصيم الأمير فيصل بن مشعل بن سعود بن عبدالعزيز رجل الأعمال علي الفوزان لمساهماته المتميزة في التنمية المجتمعية ومبادرات المسؤولية الاجتماعية. أقيم الحفل في مكتب الأمير في بريدة، حيث تم الاعتراف بدور الفوزان المهم في دعم مختلف المشاريع المجتمعية والتزامه بالمسؤولية الاجتماعية للشركات. يعكس هذا التكريم الاعتراف بجهود الفوزان في المساهمة في أهداف رؤية المملكة 2030 من خلال مشاريع التنمية المستدامة ومبادرات المشاركة المجتمعية. يسلط هذا التكريم المرموق الضوء على الدور المهم الذي يلعبه قادة القطاع الخاص في دعم الأهداف التنموية الوطنية وتعزيز الشراكات المجتمعية القوية.",
          category: "أخبار الشركة",
          author: "فريق الصحافة",
          date: "2024-01-18",
          views: "2,890",
          comments: "52",
          image: "/assets/images/News/2.png",
          featured: true,
          readMoreUrl: "https://www.spa.gov.sa/1705526?lang=ar&newsid=1705526"
        },
        {
          id: 3,
          title: "شركة علي الفوزان تحصد جائزة أفضل شركة تطوير عقاري في القطاع الصناعي",
          excerpt: "في حفل جوائز مجلة آرابيان بزنس في الرياض، تم تكريم شركة علي الفوزان كأفضل شركة تطوير عقاري في القطاع الصناعي، مما يسلط الضوء على تميزها وقيادتها في تطوير العقارات الصناعية.",
          content: "حصدت شركة علي الفوزان الجائزة المرموقة لأفضل شركة تطوير عقاري في القطاع الصناعي في حفل جوائز مجلة آرابيان بزنس الذي أقيم في الرياض. هذا التكريم يحتفل بإنجازات الشركة المتميزة وقيادتها في تطوير العقارات الصناعية عبر المملكة. تعترف الجائزة بالتزام شركة علي الفوزان بالتميز والابتكار وممارسات التنمية المستدامة في القطاع الصناعي. محفظة الشركة من المدن الصناعية والمستودعات والمرافق التصنيعية وضعت معايير جديدة للجودة والكفاءة في المنطقة. هذه الجائزة المرموقة من مجلة آرابيان بزنس، وهي من أبرز المنشورات التجارية في الشرق الأوسط، تعزز من مكانة الشركة كرائدة في تطوير العقارات الصناعية ومساهمتها في أهداف تنويع الاقتصاد السعودي بموجب رؤية 2030.",
          category: "أخبار الشركة",
          author: "فريق الصحافة",
          date: "2024-01-16",
          views: "2,750",
          comments: "45",
          image: "/assets/images/News/3.png",
          featured: true,
          readMoreUrl: "https://aawsat.com/home/article/115731"
        },
        {
          id: 4,
          title: "شركة علي الفوزان وأولاده العقارية - قدرات فريدة في تطوير المخططات والمرافق الصناعية والمستودعات",
          excerpt: "شركة التخطيط والإنشاء تثبت خبرة استثنائية في تطوير المخططات الصناعية الشاملة والمرافق المتطورة وحلول المستودعات الحديثة التي تلبي الاحتياجات المتطورة للقطاع الصناعي السعودي.",
          content: "أثبتت شركة علي الفوزان وأولاده العقارية نفسها كرائدة في التطوير الصناعي من خلال قدراتها الفريدة في تخطيط وإنشاء المرافق الصناعية والمستودعات. يشمل نهج الشركة الشامل التخطيط الرئيسي وتصميم المرافق وإدارة الإنشاءات، مما يوفر حلولاً متكاملة للعملاء الصناعيين. مع عقود من الخبرة في السوق السعودي، طورت الشركة خبرة متخصصة في إنشاء التخطيطات الصناعية الفعالة ومرافق المستودعات الحديثة والمجمعات الصناعية المتكاملة. يشمل نهجها المبتكر للتطوير الصناعي دمج أحدث التقنيات والممارسات المستدامة والتصاميم المرنة التي يمكن أن تتكيف مع المتطلبات الصناعية المتغيرة. تشمل محفظة الشركة العديد من المشاريع الصناعية الناجحة التي ساهمت بشكل كبير في النمو الصناعي للمملكة وأهداف تنويع الاقتصاد بموجب رؤية 2030.",
          category: "أخبار الشركة",
          author: "فريق الصحافة",
          date: "2024-01-14",
          views: "2,650",
          comments: "38",
          image: "/assets/images/News/4.png",
          featured: true,
          readMoreUrl: "https://www.alriyadh.com/930934"
        },
        {
          id: 5,
          title: "شركة علي الفوزان وأولاده العقارية توقع اتفاقية تمويل لعملائها مع أملاك العالمية",
          excerpt: "شراكة استراتيجية لتوفير حلول تمويلية ميسرة للعملاء لشراء المستودعات والمرافق الصناعية بشروط تنافسية.",
          content: "وقعت شركة علي الفوزان وأولاده العقارية اتفاقية تمويل مهمة مع شركة أملاك العالمية، إحدى أبرز الشركات العاملة في مجالها، لتوفير تسهيلات تمويلية استثنائية للعملاء الراغبين في شراء المستودعات والمرافق الصناعية. تمثل هذه الاتفاقية معلماً مهماً في التزام الشركة بتسهيل وصول العملاء إلى الاستثمارات العقارية الصناعية. ستتيح الشراكة للعملاء الحصول على تمويل لشراء المستودعات الجاري إنشاؤها حالياً بشروط ميسرة وتنافسية. تفتح هذه الاتفاقية الباب للتعاون المثمر بين شركتنا وشركة أملاك العالمية، مما يخدم أهدافنا المشتركة في تقديم الخدمات للعملاء الكرام بأيسر السبل وأعلى معايير الجودة. تم توقيع الاتفاقية خلال المحفل العقاري الكبير في الرياض الذي يعتبر الأبرز من نوعه، وتحتفل بنجاح شركتنا في إطلاق مشروعها النوعي (مشروع مدينة جبل علي الصناعية بالرياض).",
          category: "أخبار الشركة",
          author: "فريق الصحافة",
          date: "2024-01-13",
          views: "2,450",
          comments: "42",
          image: "/assets/images/News/5.png",
          featured: true,
          readMoreUrl: "https://www.argaam.com/ar/article/articledetail/id/946166"
        },

      ],
      blogPosts: []
    }
  };

  const currentContent = content[language];
  const allPosts = [...currentContent.articles, ...currentContent.blogPosts];
  const filteredArticles = activeCategory === 'All' || activeCategory === 'الكل'
    ? allPosts
    : allPosts.filter(article => article.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Global Video Background */}
      <div className="fixed inset-0 w-screen h-screen z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/assets/videos/hero-banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <TransparentNavigation />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            {currentContent.title}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            {currentContent.subtitle}
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {currentContent.categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-yellow-400 text-black font-semibold'
                    : 'bg-black/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Articles */}
          {filteredArticles.find(article => article.featured) && (
            <div className="mb-12 space-y-8">
              {filteredArticles.filter(article => article.featured).map((article) => (
                <div key={article.id} className="grid lg:grid-cols-2 gap-8 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="bg-black/20 backdrop-blur-sm border border-white/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                        {article.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
                    <p className="text-gray-300 mb-6">{article.excerpt}</p>
                    <div className="flex items-center gap-6 text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <User className={`h-4 w-4 ${language === 'AR' ? 'ml-2' : 'mr-2'}`} />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className={`h-4 w-4 ${language === 'AR' ? 'ml-2' : 'mr-2'}`} />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <Eye className={`h-4 w-4 ${language === 'AR' ? 'ml-2' : 'mr-2'}`} />
                        {article.views}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className={`h-4 w-4 ${language === 'AR' ? 'ml-2' : 'mr-2'}`} />
                        {article.comments}
                      </div>
                    </div>
                    <button 
                      className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                      onClick={() => (article as any).readMoreUrl ? window.open((article as any).readMoreUrl, '_blank') : null}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.filter(article => !article.featured).map((article) => (
              <div key={article.id} className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-sm">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm line-clamp-3">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className={`h-4 w-4 ${language === 'AR' ? 'ml-1' : 'mr-1'}`} />
                      {article.author}
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Eye className={`h-4 w-4 ${language === 'AR' ? 'ml-1' : 'mr-1'}`} />
                        {article.views}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className={`h-4 w-4 ${language === 'AR' ? 'ml-1' : 'mr-1'}`} />
                        {article.comments}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button 
                      className="text-yellow-400 hover:text-yellow-300 font-medium"
                      onClick={() => (article as any).readMoreUrl ? window.open((article as any).readMoreUrl, '_blank') : null}
                    >
                      Read More →
                    </button>
                    <button className="text-gray-400 hover:text-white">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-white/90 mb-6">Subscribe to our newsletter for the latest real estate news and insights</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/90 backdrop-blur-sm border border-white/30 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
