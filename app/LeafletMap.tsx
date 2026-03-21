import 'leaflet/dist/leaflet.css';

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
    <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
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
  );
}
