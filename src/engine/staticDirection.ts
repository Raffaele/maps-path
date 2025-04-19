import { encode } from "@googlemaps/polyline-codec";

const encodedPath = encode([
  [51.5074, -0.1278],
  [51.509, -0.1],
  [51.511, -0.08],
  [51.5155, -0.0722],
]);
export function getStaticDirections() {
  const bounds: google.maps.LatLngBounds = new google.maps.LatLngBounds(
    { lat: 51.5074, lng: -0.1278 },
    { lat: 51.5155, lng: -0.0722 }
  );

  const overview_path: google.maps.LatLng[] = [
    { lat: 51.5074, lng: -0.1278 },
    { lat: 51.509, lng: -0.1 },
    { lat: 51.511, lng: -0.08 },
    { lat: 51.5155, lng: -0.0722 },
  ].map((latLng) => new google.maps.LatLng(latLng));

  const leg: google.maps.DirectionsLeg = {
    distance: { text: "3 km", value: 3000 },
    duration: { text: "10 mins", value: 600 },
    end_address: "Shoreditch, London, UK",
    end_location: new google.maps.LatLng({ lat: 51.5155, lng: -0.0722 }),
    start_address: "London, UK",
    start_location: new google.maps.LatLng({ lat: 51.5074, lng: -0.1278 }),
    steps: [],
    via_waypoints: [],
    traffic_speed_entry: [],
  };

  const mainRoute: google.maps.DirectionsRoute = {
    bounds,
    copyrights: "",
    legs: [leg],
    overview_path,
    overview_polyline: encodedPath,
    summary: "Static Route",
    warnings: [],
    waypoint_order: [],
  };

  const request: google.maps.DirectionsRequest = {
    origin: { lat: 51.5074, lng: -0.1278 },
    destination: { lat: 51.5155, lng: -0.0722 },
    travelMode: google.maps.TravelMode.DRIVING,
  };

  const staticDirections: google.maps.DirectionsResult = {
    geocoded_waypoints: [],
    routes: [mainRoute],
    request,
  };

  return staticDirections;
}

