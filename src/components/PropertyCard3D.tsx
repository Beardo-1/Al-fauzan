
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MapPin, Bed, Bath, Square, Eye, Heart } from 'lucide-react';

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
  featured: boolean;
  type: string;
  status: string;
}

interface PropertyCard3DProps {
  property: Property;
  language: 'EN' | 'AR';
  onFavorite?: (id: number) => void;
  onView?: (id: number) => void;
}

const PropertyCard3D: React.FC<PropertyCard3DProps> = ({ 
  property, 
  language, 
  onFavorite, 
  onView 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      const card = cardRef.current;
      const image = card?.querySelector('.property-image');
      const content = card?.querySelector('.property-content');
      const actions = card?.querySelector('.property-actions');

      if (card && image && content && actions) {
        // Initial state
        gsap.set(actions, { y: 20, opacity: 0 });

        // Hover animations
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { 
            rotationY: 8, 
            rotationX: -4, 
            z: 30,
            scale: 1.02,
            duration: 0.4,
            ease: 'back.out(1.7)' 
          });
          gsap.to(image, { scale: 1.1, duration: 0.4 });
          gsap.to(actions, { y: 0, opacity: 1, duration: 0.3, delay: 0.1 });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, { 
            rotationY: 0, 
            rotationX: 0, 
            z: 0,
            scale: 1,
            duration: 0.3 
          });
          gsap.to(image, { scale: 1, duration: 0.3 });
          gsap.to(actions, { y: 20, opacity: 0, duration: 0.2 });
        });
      }
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="card-3d overflow-hidden group cursor-pointer transform-3d"
      style={{ perspective: '1000px' }}
    >
      {/* Property Image */}
      <div className="property-image relative overflow-hidden h-64">
        <img 
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        
        {/* Status Badge - REMOVED */}

        {/* Featured Badge */}
        {property.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </span>
          </div>
        )}

        {/* Property Type */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
            {property.type}
          </span>
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Property Content */}
      <div className="property-content p-6 bg-gray-900">
        <div className="flex items-start justify-between mb-3">
          <h3 className={`text-xl font-bold text-white line-clamp-2 flex-1 ${language === 'AR' ? 'font-arabic' : ''}`}>
            {property.title}
          </h3>
          <div className="text-right ml-4">
            <p className="text-2xl font-bold text-yellow-400">
              {property.price}
            </p>
          </div>
        </div>

        <div className={`flex items-center text-gray-400 mb-4 ${language === 'AR' ? 'font-arabic' : ''}`}>
          <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
          <span className="truncate">{property.location}</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          {property.bedrooms > 0 && (
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              <span>{property.bedrooms}</span>
            </div>
          )}
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{property.area}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="property-actions flex items-center justify-between">
          <button
            onClick={() => onView?.(property.id)}
            className="flex-1 bg-yellow-400 text-black py-2 px-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors mr-2 flex items-center justify-center"
          >
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </button>
          <button
            onClick={() => onFavorite?.(property.id)}
            className="bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Heart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard3D;
