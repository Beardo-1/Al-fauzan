import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  // Total frames in the logo animation (0-51 based on the SVG files)
  const totalFrames = 52;
  const animationSpeed = 80; // milliseconds per frame

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => {
        if (prev >= totalFrames - 1) {
          // Animation complete, start fade out
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              onLoadingComplete();
            }, 500); // Wait for fade out
          }, 500); // Hold final frame for 500ms
          return prev;
        }
        return prev + 1;
      });
    }, animationSpeed);

    return () => clearInterval(interval);
  }, [onLoadingComplete, totalFrames]);

  const getSvgPath = (frame: number) => {
    const paddedFrame = frame.toString().padStart(3, '0');
    return `/assets/logos/animation/Untitled design_${paddedFrame}.svg`;
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center z-50 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(255,215,0,0.03)_50%,transparent_51%)] bg-[length:20px_20px] animate-pulse"></div>
      </div>

      {/* Logo Animation Container */}
      <div className="relative flex flex-col items-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <img
            src={getSvgPath(currentFrame)}
            alt="Alfauzan Logo Animation"
            className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.3))',
            }}
          />
          
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent rounded-full blur-xl animate-pulse"></div>
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 font-arabic">
            الفوزان للتطوير العقاري
          </h2>
          <h3 className="text-lg md:text-xl text-yellow-400 mb-6">
            Alfauzan Real Estate Development
          </h3>
          
          {/* Loading Progress */}
          <div className="relative">
            <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full transition-all duration-100 ease-out"
                style={{ width: `${(currentFrame / (totalFrames - 1)) * 100}%` }}
              ></div>
            </div>
            <p className="text-gray-400 text-sm mt-3">
              {Math.round((currentFrame / (totalFrames - 1)) * 100)}% Complete
            </p>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-60"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Bottom Branding */}
      <div className="absolute bottom-8 text-center">
        <p className="text-gray-500 text-xs">
          Powered by Innovation • Built with Excellence
        </p>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.6; }
          50% { transform: translateY(-20px) scale(1.1); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
