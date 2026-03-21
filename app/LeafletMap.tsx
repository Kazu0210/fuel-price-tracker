
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
      {/* Floating input field */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-[1000] w-full max-w-xs px-4">
        <input
          type="text"
          placeholder="Search or enter location..."
          className="w-full rounded-lg border border-gray-300 bg-white bg-opacity-90 px-4 py-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
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
