import React, { useState, useEffect, useRef } from 'react';

interface RoyalLoadingScreenProps {
  onLoadingComplete: () => void;
}

const RoyalLoadingScreen: React.FC<RoyalLoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoLoaded && videoRef.current) {
      // Listen for video end event
      const handleVideoEnd = () => {
        setIsVisible(false);
        setTimeout(() => {
          onLoadingComplete();
        }, 500);
      };

      videoRef.current.addEventListener('ended', handleVideoEnd);

      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('ended', handleVideoEnd);
        }
      };
    }
  }, [videoLoaded, onLoadingComplete]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-hidden">
      {/* Custom Video Background */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        onLoadedData={handleVideoLoad}
      >
        <source src="/assets/videos/loading-screen.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Loading indicator */}
      {!videoLoaded && (
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
            <p className="text-white text-lg">Loading...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoyalLoadingScreen;
