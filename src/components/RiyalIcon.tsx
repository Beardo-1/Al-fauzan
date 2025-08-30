import React from 'react';

interface RiyalIconProps {
  className?: string;
}

const RiyalIcon: React.FC<RiyalIconProps> = ({ className = "h-4 w-4" }) => {
  return (
    <img 
      src="/riyal-symbol.ico" 
      alt="Riyal" 
      className={className}
      style={{ 
        filter: 'brightness(0) saturate(100%) invert(84%) sepia(100%) saturate(1000%) hue-rotate(45deg) brightness(1) contrast(1)',
        objectFit: 'contain'
      }}
    />
  );
};

export default RiyalIcon;
