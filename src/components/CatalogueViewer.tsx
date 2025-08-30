import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download } from 'lucide-react';

interface CatalogueViewerProps {
  language: 'EN' | 'AR';
}

const CatalogueViewer: React.FC<CatalogueViewerProps> = ({ language }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(1);
  const totalPages = 47;

  const content = {
    EN: {
      title: "Company Catalogue",
      subtitle: "Development Journey - Ali Al Fauzan and Sons Real Estate Company",
      navigation: "Page",
      of: "of",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      download: "Download Catalogue"
    },
    AR: {
      title: "كتالوج الشركة",
      subtitle: "رحلة التطوير - شركة علي الفوزان وأولاده العقارية",
      navigation: "صفحة",
      of: "من",
      zoomIn: "تكبير",
      zoomOut: "تصغير",
      download: "تحميل الكتالوج"
    }
  };

  const currentContent = content[language];

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const zoomIn = () => {
    if (zoom < 3) {
      setZoom(zoom + 0.2);
    }
  };

  const zoomOut = () => {
    if (zoom > 0.5) {
      setZoom(zoom - 0.2);
    }
  };

  const getPageImage = (pageNumber: number) => {
    const paddedNumber = pageNumber.toString().padStart(4, '0');
    return `/assets/images/catalogue/رحلة التطوير - شركة علي الفوزان وأولاده العقارية (1)_page-${paddedNumber}.jpg`;
  };

  return (
    <div className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            {currentContent.title}
          </h2>
          <p className="text-xl text-white/90 mb-8" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            {currentContent.subtitle}
          </p>
        </div>

        {/* Catalogue Viewer */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
            <div className="flex items-center space-x-4">
              <Button
                onClick={prevPage}
                disabled={currentPage === 1}
                variant="outline"
                className="border-white/30 text-white hover:bg-white/20 disabled:opacity-50"
              >
                <ChevronLeft className="h-4 w-4" />
                {language === 'AR' ? 'السابق' : 'Previous'}
              </Button>
              
              <span className="text-white font-medium">
                {currentContent.navigation} {currentPage} {currentContent.of} {totalPages}
              </span>
              
              <Button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                variant="outline"
                className="border-white/30 text-white hover:bg-white/20 disabled:opacity-50"
              >
                {language === 'AR' ? 'التالي' : 'Next'}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                onClick={zoomOut}
                disabled={zoom <= 0.5}
                variant="outline"
                size="sm"
                className="border-white/30 text-white hover:bg-white/20 disabled:opacity-50"
                title={currentContent.zoomOut}
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              
              <span className="text-white text-sm min-w-[60px] text-center">
                {Math.round(zoom * 100)}%
              </span>
              
              <Button
                onClick={zoomIn}
                disabled={zoom >= 3}
                variant="outline"
                size="sm"
                className="border-white/30 text-white hover:bg-white/20 disabled:opacity-50"
                title={currentContent.zoomIn}
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Page Display */}
          <div className="flex justify-center">
            <div className="relative overflow-auto max-h-[80vh] border border-white/20 rounded-lg">
              <img
                src={getPageImage(currentPage)}
                alt={`Page ${currentPage}`}
                className="max-w-full h-auto"
                style={{ transform: `scale(${zoom})`, transformOrigin: 'top left' }}
              />
            </div>
          </div>

          {/* Page Navigation Dots */}
          <div className="flex justify-center mt-6">
            <div className="flex space-x-2">
              {Array.from({ length: Math.min(10, totalPages) }, (_, i) => {
                const pageNum = Math.max(1, currentPage - 5) + i;
                if (pageNum > totalPages) return null;
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      pageNum === currentPage 
                        ? 'bg-yellow-400' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    title={`Page ${pageNum}`}
                  />
                );
              })}
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center mt-6">
            <Button
              variant="outline"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              <Download className="h-4 w-4 mr-2" />
              {currentContent.download}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogueViewer;

