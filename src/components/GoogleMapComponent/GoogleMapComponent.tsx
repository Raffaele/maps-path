import React, { useCallback, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { getStaticDirections } from "../../engine/staticDirection";

const containerStyle: React.CSSProperties = {
  flex: 1,
};

const center = {
  lat: 51.5074,
  lng: 0.1278,
};

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export const GoogleMapComponent: React.FC = () => {
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);

  const setupDirections = useCallback(() => {
    setDirections(getStaticDirections());
  }, [setDirections]);
  return (
    <LoadScript googleMapsApiKey={API_KEY} onLoad={setupDirections}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </LoadScript>
  );
};
