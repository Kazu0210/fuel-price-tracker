
'use client';
import 'leaflet/dist/leaflet.css';
import React from 'react';

export default function LeafletMap() {
  // Default coordinates (e.g., London)
  const position = [51.505, -0.09];
  // Dynamically import react-leaflet to avoid SSR issues
  const [MapContainer, setMapContainer] = React.useState(null);
  const [TileLayer, setTileLayer] = React.useState(null);
  const [Marker, setMarker] = React.useState(null);
  const [Popup, setPopup] = React.useState(null);

  React.useEffect(() => {
    import('react-leaflet').then((mod) => {
      setMapContainer(() => mod.MapContainer);
      setTileLayer(() => mod.TileLayer);
      setMarker(() => mod.Marker);
      setPopup(() => mod.Popup);
    });
  }, []);

  if (!MapContainer || !TileLayer || !Marker || !Popup) {
    return <div>Loading map...</div>;
  }

  return (
    <div className="relative w-full h-screen">
      {/* Floating input card */}
      <div className="absolute left-1/2 top-4 z-[1000] -translate-x-1/2 w-full max-w-md px-4 flex justify-center">
        <div className="bg-white/90 dark:bg-gray-900/90 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 w-full flex items-center gap-2">
          <input
            type="text"
            placeholder="Search location or fuel price..."
            className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>
      <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A sample marker.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
