"use client"; // Ensure this is at the top

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styles from './MapComponent.module.css'; // Import your CSS Module

const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  shadowSize: [41, 41],
});

const MapComponent = () => {
  const [loaded, setLoaded] = useState(false);
  const position = [37.7749, -122.4194]; // Example coordinates for San Francisco

  useEffect(() => {
    setLoaded(true); // Set loaded state to true on mount
  }, []);

  if (typeof window === 'undefined') {
    return null; // Return null during SSR
  }

  return (
    <div className={`${styles.mapContainer} ${loaded ? 'loaded' : ''}`}>
      <MapContainer center={position} zoom={13} className={styles.map}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            Visit us at <strong>123 Dreamland Ave, Innovation City, AI 45678</strong>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
