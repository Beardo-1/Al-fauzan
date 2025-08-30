import { useState, useCallback } from 'react';

export interface MapLocation {
  lat: number;
  lng: number;
  title?: string;
  description?: string;
}

export interface MapBounds {
  north: number;
  south: number;
  east: number;
  west: number;
}

export const useMap = (initialCenter: [number, number] = [24.7136, 46.6753]) => {
  const [center, setCenter] = useState<[number, number]>(initialCenter);
  const [zoom, setZoom] = useState(13);
  const [locations, setLocations] = useState<MapLocation[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);

  const addLocation = useCallback((location: MapLocation) => {
    setLocations(prev => [...prev, location]);
  }, []);

  const removeLocation = useCallback((index: number) => {
    setLocations(prev => prev.filter((_, i) => i !== index));
  }, []);

  const updateLocation = useCallback((index: number, location: MapLocation) => {
    setLocations(prev => prev.map((loc, i) => i === index ? location : loc));
  }, []);

  const flyToLocation = useCallback((lat: number, lng: number, newZoom?: number) => {
    setCenter([lat, lng]);
    if (newZoom) setZoom(newZoom);
  }, []);

  const searchLocation = useCallback(async (query: string): Promise<MapLocation[]> => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5`
      );
      const data = await response.json();
      
      return data.map((item: any) => ({
        lat: parseFloat(item.lat),
        lng: parseFloat(item.lon),
        title: item.display_name,
        description: item.type
      }));
    } catch (error) {
      console.error('Search failed:', error);
      return [];
    }
  }, []);

  const getBounds = useCallback((): MapBounds => {
    if (locations.length === 0) {
      return {
        north: center[0] + 0.01,
        south: center[0] - 0.01,
        east: center[1] + 0.01,
        west: center[1] - 0.01
      };
    }

    const lats = locations.map(loc => loc.lat);
    const lngs = locations.map(loc => loc.lng);

    return {
      north: Math.max(...lats),
      south: Math.min(...lats),
      east: Math.max(...lngs),
      west: Math.min(...lngs)
    };
  }, [locations, center]);

  const fitBounds = useCallback(() => {
    const bounds = getBounds();
    const centerLat = (bounds.north + bounds.south) / 2;
    const centerLng = (bounds.east + bounds.west) / 2;
    setCenter([centerLat, centerLng]);
    
    // Calculate appropriate zoom level
    const latDiff = bounds.north - bounds.south;
    const lngDiff = bounds.east - bounds.west;
    const maxDiff = Math.max(latDiff, lngDiff);
    const newZoom = Math.floor(14 - Math.log2(maxDiff));
    setZoom(Math.max(10, Math.min(18, newZoom)));
  }, [getBounds]);

  const clearLocations = useCallback(() => {
    setLocations([]);
    setSelectedLocation(null);
  }, []);

  return {
    center,
    zoom,
    locations,
    selectedLocation,
    setCenter,
    setZoom,
    setSelectedLocation,
    addLocation,
    removeLocation,
    updateLocation,
    flyToLocation,
    searchLocation,
    getBounds,
    fitBounds,
    clearLocations
  };
};
