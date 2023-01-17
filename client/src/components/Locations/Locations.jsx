import { useCallback, useEffect, useState } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNewPosition } from "../../actions";
import { Box, Text, Button } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup, useMap, Pane } from 'react-leaflet';
import L from "leaflet";
import userIcon from "./userIcon.png";
import branchIcon from "./branchIcon.png";
import NavBar from "../NavBar/NavBar";
import "./Locations.css"
import useGeolocation from "./MapHooks";

const locations = [
        {
            "station": 1,
            "address": "Rioja 1634",
            "locality": "Rosario, Santa Fe",
            "gps": "Rioja 1634, S2000AYZ Rosario, Santa Fe",
            "coordinates":[-32.94590336646448, -60.645849691211986] 
          
    
        },
        {
            "station": 2,
            "address": "Juramento 521",
            "locality": "Huinca Renanco, Córdoba",
            "gps": "Juramento 521, X6270 Huinca Renanco, Córdoba",
            "coordinates":[-34.84297996763283, -64.37832272962657]
            
        },
        {
            "station": 3,
            "address": "Jerónimo Salguero 829",
            "locality": "CABA",
            "gps": "Jerónimo Salguero 829, C1192 CABA",
            "coordinates":[-34.600036696188404, -58.4187063]
            
        },
        {
            "station": 4,
            "address": "Sarmiento 440",
            "locality": "Victoria, Entre Ríos",
            "gps": "Sarmiento 440, E3153 Victoria, Entre Ríos",
            "coordinates":[-32.62093987375818, -60.15819813546795]
           
        },
        {
            "station": 5,
            "address": "B. Soria 152",
            "locality": "Santa Rosa de Calamuchita, Córdoba",
            "gps": "B. Soria 152, Santa Rosa de Calamuchita, Córdoba",
            "coordinates":[-32.0722519452947, -64.5377802067588]
            
        },
        {
            "station": 6,
            "address": "Av. Pte. Juan Domingo Perón 390",
            "locality": "San Luis",
            "gps": "AAD, Av. Pte. Juan Domingo Perón 390, D5702 San Luis",
            "coordinates":[-33.30476258181199, -66.32542942883597]
          
        },
        {
            "station": 7,
            "address": "Av. Laurencena 244",
            "locality": "Paraná, Entre Ríos",
            "gps": "Av. Laurencena 244, E3100 Paraná, Entre Ríos",
            "coordinates":[-31.72082203329559, -60.51870973567507]
            
        },
        {
            "station": 8,
            "address": "San Martín 22",
            "locality": "Corrientes",
            "gps": "San Martín 22, W3400APB Corrientes",
            "coordinates":[-27.468365406454765, -58.85224041307138]
            
        },
        {
            "station": 9,
            "address": "Bartolomé Mitre 4001",
            "locality": "CABA",
            "gps": "Bartolomé Mitre 4001, C1201AAY CABA",
            "coordinates":[-34.60969271734928, -58.42293974497908]
     
        },
        {
            "station": 10,
            "address": "25 de Mayo 839",
            "locality": " Mendoza",
            "gps": "25 de Mayo 839, M5500AEA Mendoza",
            "coordinates":[-32.89188126757028, -68.8476694758806]
         
        },
        {
            "station": 11,
            "address": "Ayacucho 42",
            "locality": "Resistencia, Chaco",
            "gps": "Ayacucho 42, H3500AJB Resistencia, Chaco",
            "coordinates":[-27.448585915646884, -58.98280873473715]
           
        },
        {
            "station": 12,
            "address": "Emilio Mitre 1072",
            "locality": "CABA",
            "gps": "Parque Chacabuco, Emilio Mitre 1072, C1424AYV CABA",
            "coordinates":[-34.63304648837675, -58.44032369265895]
           
        },
        {
            "station": 13,
            "address": "Avenida Argentina 235",
            "locality": "Neuquén",
            "gps": "Avenida Argentina 235, Q8300 Neuquén",
            "coordinates":[-38.95244392757725, -68.05868577365065]
           
        },
        {
            "station": 14,
            "address": "Puerto Argentino/Stanley FIQQ 1ZZ",
            "locality": "Islas Malvinas (Falkland Islands)",
            "gps": "Puerto Argentino/Stanley FIQQ 1ZZ, Islas Malvinas (Falkland Islands)",
            "coordinates":[-51.69440327326043, -57.85718138843394]
           
        },
        {
            "station": 15,
            "address": "Gregoria Pérez 1288",
            "locality": "Islas Malvinas (Falkland Islands)",
            "gps": "Gregoria Pérez 1288, B1708ATL Morón, Provincia de Buenos Aires",
            "coordinates":[-34.684245656379694, -58.631214889156354]
           
        }
]



export default function Locations() {
    let center = [-34.603743591667396, -58.38151982455165]
    const zoom = 13;
    const dispatch = useDispatch();

    //llamo a la funcion useGeolocation la cual me retorna la ubicacion del usuario
    const userPosition = useGeolocation().coordinates

    //me traigo el estado de posicion el cual sera modificado por las cards o el boton de my position
    center = useSelector((state) => state.mapPosition.coordinates);

    //creo un estado map (este me ayudara a hacer referencia a mi mapa)
    const [map, setMap] = useState(null)

    //funcion que retorna distancia entre 2 puntos [lat,lng]
    const getKilometros = (lat1, lng1, lat2, lng2) => {
        let rad = function (x) { return x * Math.PI / 180; };
        let R = 6378.137; //Radio de la tierra en km
        let dLat = rad(lat2 - lat1);
        let dLong = rad(lng2 - lng1);
        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = R * c;
        return d.toFixed(2); //Retorna dos decimales
    }

    //funcion que ordena las cards segun su distancia con el usuario
    const orderByDistance = (array) => {
        array.sort(function (a, b) {
            a = getKilometros(userPosition.lat, userPosition.lng, a.coordinates[0], a.coordinates[1])
            b = getKilometros(userPosition.lat, userPosition.lng, b.coordinates[0], b.coordinates[1])
            return a - b;
        })
        return array
    }

    // const branches = useSelector((state) => state.branches);
    const branches = orderByDistance(locations)

    // defino iconos
    let iconBranch = new L.icon({
        iconUrl: branchIcon,
        iconSize: [40, 40], // size of the icon
        iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
        popupAnchor: [-76, -76]// point from which the popup should open relative to the iconAnchor
    })

    let iconUser = new L.icon({
        iconUrl: userIcon,
        iconSize: [24, 36], // size of the icon
        iconAnchor: [12, 36], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76]// point from which the popup should open relative to the iconAnchor
    })

    // funcion que llama a los marcadores
    const getMarkers = () => {
        let markers = [];
        locations.map(branch => {
            markers.push(
                <Marker position={branch.coordinates} icon={iconBranch}>
                    <Popup>
                        {branch.gps} <br /> McBurger
                    </Popup>
                </Marker>
            )
        })
        markers.push(
            <Marker position={[userPosition.lat, userPosition.lng]} icon={iconUser}>
                <Popup>
                    You are here! <br />
                </Popup>
            </Marker>
        )
        return markers
    }

    // funcion que genera las cards
    const CardsGenerator = () => {
        let array = [];

        const onClick = useCallback((branch) => {
            dispatch(setNewPosition({ coordinates: branch.coordinates }))
        },)

        branches.map(branch => {
            array.push(
                <Box className={"big-cards-map-container"} >
                    <Box className="cards-map-container" _hover={{ border: "2px", borderColor: "#651616", borderRadius: "15px" }} >
                        <Box className="text-map-cards-container">
                            <Text as={"b"}>
                                {branch.address}
                            </Text>
                            <Text display={"block"} as={"b"}>
                                {branch.locality}
                            </Text>
                            <Text fontWeight={"bold"}>
                                distance: {getKilometros(userPosition.lat, userPosition.lng, branch.coordinates[0], branch.coordinates[1])}km
                            </Text>
                        </Box>
                        <Box  className="button-card-map">
                            <Button colorScheme={"orange"} onClick={() => {onClick(branch); window.scroll(0, 0)}}>
                                Show in Map
                            </Button>
                        </Box>
                    </Box>
                </Box>
            )
        })
        return array
    }

    //funcion que actualiza el mapa
    const MapRenderUpdate = () => {
        const map = useMap()
        useEffect(() => {
            console.log("Actualizo")
            map.flyTo(center, 15)
        }, center)
    }

    //modifica el estado con la posicion del usuario
    function handleFilterUserPosition() {
        dispatch(setNewPosition({ coordinates: [userPosition.lat, userPosition.lng] }))
    }

    return (
        <Box bg={"#f5ebdc"}>
            <Box>
                <NavBar />
            </Box>

            <Box className="locations">

                <Box className="map-and-cards-container">

                    <Box  className="map-button-container">

                        <Box className="map-container">
                            <MapContainer minZoom={6} center={center} zoom={zoom} scrollWheelZoom={true} className="leaflet-map-container" ref={setMap}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <MapRenderUpdate />
                                {getMarkers()}
                            </MapContainer>
                        </Box>
                        <Box className="button-my-position-container">
                            <Box className="button-my-position">
                        <Button colorScheme={"orange"} onClick={() => handleFilterUserPosition()} mt={"10px"}>
                            My position
                        </Button>
                        </Box>
                        </Box>

                    </Box>
                    
                    <Box className="cards-map">
                        <CardsGenerator />
                    </Box>
                </Box>

            </Box>
            
        </Box>
    )
}


