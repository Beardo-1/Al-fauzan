# Free Map Integration Documentation

This project now includes a complete free map integration using **Leaflet** and **OpenStreetMap**. No API keys required!

## 🗺️ Features

### ✅ What's Included

- **Completely Free**: Uses OpenStreetMap data - no API keys or usage limits
- **Interactive Maps**: Zoom, pan, click events, and search functionality
- **Custom Markers**: Colored markers, custom icons, and popups
- **Polygons & Shapes**: Draw service areas, boundaries, and custom shapes
- **Search Integration**: Built-in geocoding using Nominatim
- **Mobile Responsive**: Touch-friendly controls and responsive design
- **TypeScript Support**: Full type safety with proper interfaces
- **Multiple Map Components**: Basic and advanced map options

## 📦 Installation

The required packages are already installed:

```bash
npm install leaflet react-leaflet @types/leaflet
```

## 🚀 Quick Start

### Basic Map Usage

```tsx
import Map from '@/components/Map';

function MyComponent() {
  return (
    <Map
      center={[24.7136, 46.6753]} // Riyadh coordinates
      zoom={13}
      markers={[
        {
          position: [24.7136, 46.6753],
          title: 'Office Location',
          popup: 'Our main office in Riyadh'
        }
      ]}
      height="400px"
    />
  );
}
```

### Advanced Map with Search

```tsx
import AdvancedMap from '@/components/AdvancedMap';

function MyComponent() {
  const handleMarkerClick = (marker, index) => {
    console.log(`Marker ${index} clicked:`, marker);
  };

  const handleMapClick = (latlng) => {
    console.log('Map clicked at:', latlng);
  };

  return (
    <AdvancedMap
      center={[24.7136, 46.6753]}
      zoom={13}
      markers={[
        {
          position: [24.7136, 46.6753],
          title: 'Office',
          popup: 'Main Office',
          color: '#ef4444' // Red marker
        }
      ]}
      polygons={[
        {
          positions: [
            [24.7136, 46.6753],
            [24.7236, 46.6753],
            [24.7236, 46.6853],
            [24.7136, 46.6853]
          ],
          color: '#ef4444',
          fillColor: '#fecaca',
          popup: 'Service Area'
        }
      ]}
      height="500px"
      showSearch={true}
      onMarkerClick={handleMarkerClick}
      onMapClick={handleMapClick}
    />
  );
}
```

## 🎯 Available Routes

### Map Demo Page
Visit `/map-demo` to see all map features in action:
- Basic map examples
- Advanced interactive features
- Search functionality
- Custom markers and polygons
- Code examples

### Contact Page
The contact page now includes a map showing the office location in Riyadh.

## 🛠️ Components

### 1. Map Component (`src/components/Map.tsx`)

Basic map component with essential features:

**Props:**
- `center?: [number, number]` - Map center coordinates [lat, lng]
- `zoom?: number` - Initial zoom level (default: 13)
- `markers?: Array<Marker>` - Array of markers to display
- `className?: string` - Additional CSS classes
- `height?: string` - Map height (default: "400px")
- `interactive?: boolean` - Enable/disable interactions (default: true)

### 2. AdvancedMap Component (`src/components/AdvancedMap.tsx`)

Advanced map component with additional features:

**Additional Props:**
- `polygons?: Array<Polygon>` - Array of polygons to display
- `showSearch?: boolean` - Show search input (default: false)
- `onMarkerClick?: (marker, index) => void` - Marker click handler
- `onMapClick?: (latlng) => void` - Map click handler

### 3. useMap Hook (`src/hooks/useMap.ts`)

Custom hook for map state management:

```tsx
import { useMap } from '@/hooks/useMap';

function MyComponent() {
  const {
    center,
    zoom,
    locations,
    addLocation,
    removeLocation,
    searchLocation,
    flyToLocation,
    fitBounds
  } = useMap([24.7136, 46.6753]);

  // Use the map functions...
}
```

## 🎨 Customization

### Custom Markers

```tsx
const markers = [
  {
    position: [24.7136, 46.6753],
    title: 'Custom Marker',
    popup: 'Click me!',
    color: '#ef4444' // Colored circle marker
  },
  {
    position: [24.7236, 46.6753],
    title: 'Icon Marker',
    popup: 'Custom icon',
    icon: '/path/to/custom-icon.png' // Custom icon URL
  }
];
```

### Custom Polygons

```tsx
const polygons = [
  {
    positions: [
      [24.7136, 46.6753],
      [24.7236, 46.6753],
      [24.7236, 46.6853],
      [24.7136, 46.6853]
    ],
    color: '#ef4444',
    fillColor: '#fecaca',
    weight: 2,
    opacity: 0.8,
    fillOpacity: 0.3,
    popup: 'Service Area'
  }
];
```

## 🔍 Search Functionality

The advanced map includes built-in search using OpenStreetMap's Nominatim service:

```tsx
<AdvancedMap
  showSearch={true}
  // ... other props
/>
```

Users can search for any location worldwide, and the map will automatically fly to the selected location.

## 📱 Mobile Support

- Touch gestures for zoom and pan
- Responsive design
- Mobile-optimized controls
- Touch-friendly search interface

## 🌐 Internationalization

The map components support RTL languages and can be integrated with your existing language system:

```tsx
<Map
  center={[24.7136, 46.6753]}
  markers={[
    {
      position: [24.7136, 46.6753],
      title: language === 'EN' ? 'Office' : 'مكتب',
      popup: language === 'EN' ? 'Main Office' : 'المكتب الرئيسي'
    }
  ]}
/>
```

## 🔧 Configuration

### Default Settings

- **Tile Provider**: OpenStreetMap (free)
- **Default Center**: Riyadh, Saudi Arabia [24.7136, 46.6753]
- **Default Zoom**: 13
- **Max Zoom**: 19
- **Attribution**: Required OpenStreetMap attribution

### Custom Tile Providers

You can easily switch to other free tile providers:

```tsx
// In the Map component, replace the tileLayer:
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors',
  maxZoom: 19,
}).addTo(map);

// Or use CartoDB:
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '© CartoDB',
  maxZoom: 19,
}).addTo(map);
```

## 🚨 Important Notes

1. **No API Keys Required**: This integration uses completely free services
2. **Usage Limits**: OpenStreetMap has generous usage limits for normal applications
3. **Attribution**: OpenStreetMap attribution is required and already included
4. **CORS**: All services used support CORS and work in browsers
5. **Performance**: Maps are optimized for performance with lazy loading

## 🎯 Use Cases

- **Contact Pages**: Show office locations
- **Property Listings**: Display property locations
- **Service Areas**: Show coverage zones
- **Event Locations**: Map event venues
- **Store Locators**: Find nearby stores
- **Real Estate**: Property maps and neighborhoods

## 🔗 Resources

- [Leaflet Documentation](https://leafletjs.com/reference.html)
- [OpenStreetMap](https://www.openstreetmap.org/)
- [Nominatim Geocoding](https://nominatim.org/)
- [React Leaflet](https://react-leaflet.js.org/)

---

**Ready to use!** The map integration is fully functional and ready for production use. Visit `/map-demo` to see all features in action.
