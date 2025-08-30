import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface Marker {
  position: [number, number];
  title?: string;
  popup?: string;
  icon?: string; // URL for custom icon
  color?: string; // For colored markers
}

interface Polygon {
  positions: [number, number][];
  color?: string;
  fillColor?: string;
  weight?: number;
  opacity?: number;
  fillOpacity?: number;
  popup?: string;
}

interface MapProps {
  center?: [number, number];
  zoom?: number;
  markers?: Marker[];
  polygons?: Polygon[];
  className?: string;
  height?: string;
  interactive?: boolean;
  showSearch?: boolean;
  onMarkerClick?: (marker: Marker, index: number) => void;
  onMapClick?: (latlng: [number, number]) => void;
}

const AdvancedMap: React.FC<MapProps> = ({
  center = [51.505, -0.09],
  zoom = 13,
  markers = [],
  polygons = [],
  className = '',
  height = '400px',
  interactive = true,
  showSearch = false,
  onMarkerClick,
  onMapClick,
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const polygonsRef = useRef<L.Polygon[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize the map
    const map = L.map(mapRef.current, {
      center,
      zoom,
      zoomControl: interactive,
      dragging: interactive,
      touchZoom: interactive,
      scrollWheelZoom: interactive,
      doubleClickZoom: interactive,
      boxZoom: interactive,
      keyboard: interactive,
    });

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    // Add click handler
    if (onMapClick) {
      map.on('click', (e) => {
        onMapClick([e.latlng.lat, e.latlng.lng]);
      });
    }

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update markers
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Add new markers
    markers.forEach((markerData, index) => {
      let icon: L.Icon | L.DivIcon | undefined;

      if (markerData.icon) {
        icon = L.icon({
          iconUrl: markerData.icon,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
        });
      } else if (markerData.color) {
        icon = L.divIcon({
          className: 'custom-marker',
          html: `<div style="background-color: ${markerData.color}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
          iconSize: [20, 20],
          iconAnchor: [10, 10],
        });
      }

      const marker = L.marker(markerData.position, { icon }).addTo(mapInstanceRef.current!);
      
      if (markerData.title) {
        marker.bindTooltip(markerData.title);
      }
      if (markerData.popup) {
        marker.bindPopup(markerData.popup);
      }
      
      if (onMarkerClick) {
        marker.on('click', () => onMarkerClick(markerData, index));
      }

      markersRef.current.push(marker);
    });
  }, [markers, onMarkerClick]);

  // Update polygons
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    // Clear existing polygons
    polygonsRef.current.forEach(polygon => polygon.remove());
    polygonsRef.current = [];

    // Add new polygons
    polygons.forEach((polygonData) => {
      const polygon = L.polygon(polygonData.positions, {
        color: polygonData.color || '#3388ff',
        fillColor: polygonData.fillColor || '#3388ff',
        weight: polygonData.weight || 3,
        opacity: polygonData.opacity || 1,
        fillOpacity: polygonData.fillOpacity || 0.2,
      }).addTo(mapInstanceRef.current!);

      if (polygonData.popup) {
        polygon.bindPopup(polygonData.popup);
      }

      polygonsRef.current.push(polygon);
    });
  }, [polygons]);

  // Update map view
  useEffect(() => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView(center, zoom);
    }
  }, [center, zoom]);

  // Search functionality
  const handleSearch = async () => {
    if (!searchQuery.trim() || !mapInstanceRef.current) return;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&limit=1`
      );
      const data = await response.json();

      if (data.length > 0) {
        const { lat, lon } = data[0];
        mapInstanceRef.current.setView([parseFloat(lat), parseFloat(lon)], 15);
      }
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  return (
    <div className={`relative ${className}`}>
      {showSearch && (
        <div className="absolute top-4 left-4 z-[1000] bg-white rounded-lg shadow-lg p-2">
          <div className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search location..."
              className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button
              onClick={handleSearch}
              className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 transition-colors"
            >
              Search
            </button>
          </div>
        </div>
      )}
      <div
        ref={mapRef}
        className="w-full rounded-lg shadow-lg"
        style={{ height }}
      />
    </div>
  );
};

export default AdvancedMap;
