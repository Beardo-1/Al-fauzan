import React, { useState } from 'react';
import Map from '../components/Map';
import AdvancedMap from '../components/AdvancedMap';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const MapDemo: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<[number, number] | null>(null);

  // Sample data for different map examples
  const basicMarkers = [
    {
      position: [51.505, -0.09] as [number, number],
      title: 'London',
      popup: 'Welcome to London!'
    },
    {
      position: [51.51, -0.1] as [number, number],
      title: 'Hyde Park',
      popup: 'Beautiful park in London'
    }
  ];

  const coloredMarkers = [
    {
      position: [51.505, -0.09] as [number, number],
      title: 'Office',
      popup: 'Main Office',
      color: '#ef4444' // Red
    },
    {
      position: [51.51, -0.1] as [number, number],
      title: 'Store',
      popup: 'Retail Store',
      color: '#10b981' // Green
    },
    {
      position: [51.515, -0.085] as [number, number],
      title: 'Warehouse',
      popup: 'Storage Facility',
      color: '#3b82f6' // Blue
    }
  ];

  const samplePolygons = [
    {
      positions: [
        [51.505, -0.09],
        [51.51, -0.09],
        [51.51, -0.1],
        [51.505, -0.1]
      ] as [number, number][],
      color: '#ef4444',
      fillColor: '#fecaca',
      weight: 2,
      opacity: 0.8,
      fillOpacity: 0.3,
      popup: 'Service Area 1'
    }
  ];

  const handleMapClick = (latlng: [number, number]) => {
    setSelectedLocation(latlng);
  };

  const handleMarkerClick = (marker: any, index: number) => {
    console.log(`Marker ${index} clicked:`, marker);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Free Map Integration Demo
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our free map integration using Leaflet and OpenStreetMap. 
            No API keys required, completely free to use!
          </p>
        </div>

        <Tabs defaultValue="basic" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basic">Basic Map</TabsTrigger>
            <TabsTrigger value="advanced">Advanced Map</TabsTrigger>
            <TabsTrigger value="interactive">Interactive</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Basic Map</CardTitle>
                <CardDescription>
                  Simple map with default markers and OpenStreetMap tiles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Map
                  center={[51.505, -0.09]}
                  zoom={13}
                  markers={basicMarkers}
                  height="400px"
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Map</CardTitle>
                <CardDescription>
                  Map with colored markers, polygons, and search functionality
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AdvancedMap
                  center={[51.505, -0.09]}
                  zoom={13}
                  markers={coloredMarkers}
                  polygons={samplePolygons}
                  height="500px"
                  showSearch={true}
                  onMarkerClick={handleMarkerClick}
                  onMapClick={handleMapClick}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interactive" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Interactive Map</CardTitle>
                <CardDescription>
                  Click on the map to see coordinates. Try the search feature!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <AdvancedMap
                  center={[51.505, -0.09]}
                  zoom={13}
                  height="400px"
                  showSearch={true}
                  onMapClick={handleMapClick}
                />
                {selectedLocation && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">Selected Location:</h3>
                    <p className="text-blue-700">
                      Latitude: {selectedLocation[0].toFixed(6)}, 
                      Longitude: {selectedLocation[1].toFixed(6)}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="secondary">Free</Badge>
                    No API Keys
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Uses OpenStreetMap data which is completely free. No API keys or usage limits.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="secondary">Customizable</Badge>
                    Markers & Styles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Custom markers, colors, polygons, and interactive features. Fully responsive design.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="secondary">Search</Badge>
                    Location Search
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Built-in geocoding using Nominatim. Search for any location worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="secondary">Interactive</Badge>
                    Click Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Handle map clicks, marker clicks, and other interactive events.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="secondary">Mobile</Badge>
                    Touch Friendly
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Optimized for mobile devices with touch gestures and responsive controls.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="secondary">TypeScript</Badge>
                    Type Safe
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Full TypeScript support with proper type definitions and interfaces.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Usage Examples</CardTitle>
                <CardDescription>
                  Here are some code examples showing how to use the map components
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Basic Map:</h4>
                    <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<Map
  center={[51.505, -0.09]}
  zoom={13}
  markers={[
    {
      position: [51.505, -0.09],
      title: 'London',
      popup: 'Welcome to London!'
    }
  ]}
  height="400px"
/>`}
                    </pre>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Advanced Map with Search:</h4>
                    <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<AdvancedMap
  center={[51.505, -0.09]}
  zoom={13}
  markers={coloredMarkers}
  polygons={samplePolygons}
  height="500px"
  showSearch={true}
  onMarkerClick={handleMarkerClick}
  onMapClick={handleMapClick}
/>`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MapDemo;
