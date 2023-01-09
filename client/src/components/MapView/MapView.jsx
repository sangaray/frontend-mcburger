import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Box, Text, Button, Input } from "@chakra-ui/react";
import useGeolocation from "./MapHooks";
//import { useMap } from "react-leaflet";
import { useMapEvent } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
import L from "leaflet";
// import icon from "leaflet/dist/images/marker-icon.png";
import userIcon from "./userIcon.png";
import branchIcon from "./branchIcon.png";
import { useSelector } from "react-redux";
import "./MapView.css";

export default function MapView({ branches }) {
  const newPosition = useSelector((state) => state.mapPosition);
  const location = useGeolocation();
  const ZOOM_LEVEL = 15;

  let iconBranch = new L.icon({
    iconUrl: branchIcon,
    iconSize: [40, 40], // size of the icon
    iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
    popupAnchor: [-76, -76], // point from which the popup should open relative to the iconAnchor
  });

  let iconUser = new L.icon({
    iconUrl: userIcon,
    iconSize: [24, 36], // size of the icon
    iconAnchor: [12, 36], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });

  const getMarkers = () => {
    let markers = [];
    branches.map((branch) => {
      markers.push(
        <Marker position={branch.coordenadas} icon={iconBranch}>
          <Popup>
            {branch.gps} <br /> McBurger
          </Popup>
        </Marker>
      );
    });
    markers.push(
      <Marker
        position={[location.coordinates.lat, location.coordinates.lng]}
        icon={iconUser}
      >
        <Popup>
          You are here! <br />
        </Popup>
      </Marker>
    );
    return markers;
  };

  const LocationMarker = () => {
    const [position, setPosition] = useState(null);
    const map = useMapEvent({
      click() {
        map.locate();
      },
      locationfound(e) {
        // setPosition(e.latlng) lo borro porque genera una imagen en el mapa
        if (newPosition.status === "user") {
          map.flyTo(e.latlng, map.getZoom());
        } else {
          map.flyTo(newPosition.coordenates, map.getZoom());
        }
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  };

  return (
    <div>
      <MapContainer
        minZoom={6}
        center={newPosition.coordenates}
        zoom={ZOOM_LEVEL}
        scrollWheelZoom={true}
        className="leaflet-map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {getMarkers()}
        <LocationMarker />
      </MapContainer>
    </div>
  );
}
