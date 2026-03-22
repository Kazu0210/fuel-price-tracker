"use client";
import { useEffect, useState } from "react";

export default function Map() {
    const [LeafletMap, setLeafletMap] = useState<JSX.Element | null>(null);

    useEffect(() => {
        // Dynamically import react-leaflet and leaflet CSS only on client
        import("leaflet/dist/leaflet.css");
        import("react-leaflet").then(({ MapContainer, TileLayer }) => {
        setLeafletMap(
            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100%", width: "100%" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            </MapContainer>
        );
        
        });
    }, []);

    return (
        <div className="w-full h-full relative z-0" style={{ height: "100%", width: "100%" }}>
            {LeafletMap}
        </div>
    );
}
