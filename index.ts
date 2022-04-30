/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

let map: google.maps.Map;
let lat = 28.3562;
let lon = 75.58865339914321;
function updateLatLong() {
  lat = lat + 0.0001;
  initMap();
  if (lat === 28.357599999999998) {
    alert('Bus Exiting the location');
    clearInterval(interval);
  }
}
const interval = setInterval(updateLatLong, 1000, 10);
function initMap(): void {
  map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
    center: { lat: 28.35972264064087, lng: 75.58666856442957 },
    zoom: 16,
  });
  const busGeoCoordinates = [
    { lat: 28.357447289450498, lng: 75.58865339914321 },
    { lat: 28.355558994131204, lng: 75.59166820208328 },
    { lat: 28.354189959057198, lng: 75.58596046119106 },
    { lat: 28.357447289450498, lng: 75.58865339914321 },
  ];
  const flightPath = new google.maps.Polyline({
    path: busGeoCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });
  new google.maps.Marker({ position: { lat: lat, lng: lon }, map: map });
  flightPath.setMap(map);
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
