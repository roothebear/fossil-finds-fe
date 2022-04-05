import { React, useState, useCallback, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import MapFindCard from "../find/MapFindCard";

export default function FindsMap({ finds }) {
  const [mapCardDisplayed, setMapCardDisplayed] = useState(false);
  const [findSelected, setFindSelected] = useState("");

  const createPopUp = (find) => {
    setFindSelected(find);
    setMapCardDisplayed((currState) => {
      return !currState;
    });
  };

  const containerStyle = {
    width: "100%",
    height: "60vh",
  };

  const [currentPosition, setCurrentPosition] = useState({
    lat: 53.745,
    lng: 1.3,
  });

  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAP_API,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback((map) => {
    setMap(null);
  });

  const mapMarkers = finds.map((find) => {
    return (
      <Marker
        clickable={true}
        position={{ lat: find.latitude, lng: find.longitude }}
        key={find.find_id}
        onClick={() => createPopUp(find)}
      ></Marker>
    );
  });

  return isLoaded ? (
    <div className="map_container">
      <MapFindCard
        find={findSelected}
        key={findSelected.find_id}
        mapCardDisplayed={mapCardDisplayed}
      />
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentPosition}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {mapMarkers}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}
