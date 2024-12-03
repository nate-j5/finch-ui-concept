"use strict";
"use client";

import { useRef, useCallback, useState, useEffect } from "react";
import Map from "react-map-gl";
import Layout from "../components/Layout";
import CitySelector from "../components/ControlPanel";
import CityDetails from "../components/CityDetails";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const initialViewState = {
  latitude: 37.7749,
  longitude: -122.4194,
  zoom: 11,
  bearing: 0,
  pitch: 0,
};

export default function HomePage() {
  const mapRef = useRef(null);
  const [currentCity, setCurrentCity] = useState(null);

  const onSelectCity = useCallback((selectedCity) => {
    console.log("City selected:", selectedCity);
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: [selectedCity.longitude, selectedCity.latitude],
        duration: 2000,
      });
    }
    setCurrentCity(selectedCity);
  }, []);

  useEffect(() => {
    if (!MAPBOX_TOKEN) {
      console.error("Mapbox token is missing");
    }
  }, []);

  return (
    <Layout linkText="View Analytics">
      <div className="flex flex-col h-screen relative">
        {/* City Selector */}
        <CitySelector onSelectCity={onSelectCity} />

        {/* Map */}
        <div className="flex-grow">
          <Map
            ref={mapRef}
            initialViewState={initialViewState}
            mapStyle="mapbox://styles/mapbox/dark-v11"
            mapboxAccessToken={MAPBOX_TOKEN}
            className="w-full h-full"
          />
        </div>

        {/* City Details */}
        <CityDetails city={currentCity} />
      </div>
    </Layout>
  );
}
