import NavBar from "../NavBar/NavBar";
import MapView from "../MapView/MapView";
import React, { useEffect, useState } from "react";
import { Box, Text, Button, Input } from "@chakra-ui/react";
import "./Locations.css";
import "leaflet/dist/leaflet.css";
import LocationCards from "../LocationCards/LocationCards";
import { setNewPosition } from "../../actions";
import { useDispatch } from 'react-redux';

const locations = [
    {
        "station": 1,
        "address": "Rioja 1634",
        "locality": "Rosario, Santa Fe",
        "gps": "Rioja 1634, S2000AYZ Rosario, Santa Fe",
        "coordenadas": [-32.94590336646448, -60.645849691211986]

    },
    {
        "station": 2,
        "address": "Pres. Roca 549",
        "locality": "Rosario,Santa Fe",
        "gps": "Pres. Roca 549, S2000 CXK, Santa Fe",
        "coordenadas": [-32.94212135953638, -60.64393003539277]

    },
    {
        "station": 3,
        "address": "Av. Francia 1049",
        "locality": "Rosario, Santa Fe",
        "gps": "Av. Francia 1049, S2002QRC Rosario, Santa Fe",
        "coordenadas": [-32.9445415460106, -60.665973175868224]

    },
    {
        "station": 4,
        "address": "Sarmiento 440",
        "locality": "Victoria, Entre Ríos",
        "gps": "Sarmiento 440, E3153 Victoria, Entre Ríos",
        "coordenadas": [-32.62093987375818, -60.15819813546795]

    },
    {
        "station": 5,
        "address": "B. Soria 152",
        "locality": "Santa Rosa de Calamuchita, Córdoba",
        "gps": "B. Soria 152, Santa Rosa de Calamuchita, Córdoba",
        "coordenadas": [-32.0722519452947, -64.5377802067588]

    },
    {
        "station": 6,
        "address": "Av. Belgrano 1353",
        "locality": "Mina Clavero, Córdoba",
        "gps": "Av. Belgrano 1353, Mina Clavero, Córdoba",
        "coordenadas": [-31.723296453046903, -65.00321886265864]

    },
    {
        "station": 7,
        "address": "Av. Laurencena 244",
        "locality": "Paraná, Entre Ríos",
        "gps": "Av. Laurencena 244, E3100 Paraná, Entre Ríos",
        "coordenadas": [-31.72082203329559, -60.51870973567507]

    },
    {
        "station": 8,
        "address": "Las Magnolias 1087",
        "locality": "Federación, Entre Ríos",
        "gps": "Las Magnolias 1087, E3206CIV Federación, Entre Ríos",
        "coordenadas": [-30.98281987592543, -57.923731551185206]

    },
    {
        "station": 9,
        "address": "Obispo Oro 333",
        "locality": "Cordoba",
        "gps": "Obispo Oro 333, X5000BFG Córdoba",
        "coordenadas": [-31.425475097778342, -64.182947749234]

    },
    {
        "station": 10,
        "address": "25 de Mayo 839",
        "locality": " Mendoza",
        "gps": "25 de Mayo 839, M5500AEA Mendoza",
        "coordenadas": [-32.89188126757028, -68.8476694758806]

    },
    {
        "station": 11,
        "address": "Ayacucho 42",
        "locality": "Resistencia, Chaco",
        "gps": "Ayacucho 42, H3500AJB Resistencia, Chaco",
        "coordenadas": [-27.448585915646884, -58.98280873473715]

    },
    {
        "station": 12,
        "address": "Emilio Mitre 1072",
        "locality": "CABA",
        "gps": "Parque Chacabuco, Emilio Mitre 1072, C1424AYV CABA",
        "coordenadas": [-34.63304648837675, -58.44032369265895]

    }
]

export default function Locations() {
    const dispatch = useDispatch();
    const [branches, setBranches] = useState([]);
    
    function handleFilterUserPosition() {
        dispatch(setNewPosition({status:"user", coordenates:[]}))
    }
    

    const getBranches = () => {
        let array = [];
        locations.map(branch => array.push({
            station: branch.station,
            address: branch.address,
            locality: branch.locality,
            gps: branch.gps,
            coordenadas: branch.coordenadas
        })
        )
        setBranches(array)
    }

    useEffect(() => {
    }, [])

    useEffect(() => {
        getBranches();
    }, [])

    const cardsGenerator = () => {
        let array = [];
        branches.map(branch => {
            array.push(
                <Box>
                    <LocationCards address={branch.address} locality={branch.locality} coordenates={branch.coordenadas} />
                </Box>
            )
        })
        return array
    }
    

    return (
        <Box>
            <Box>
                <NavBar />
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} bg={"#f5ebdc"}>
                <Box className="ubications">
                    <Box>
                        <Text as={'b'} fontSize={'1.5rem'}>Home / Locations</Text>
                        <Box> </Box> {/* <Input border={'solid #000000'} display={'block'} w={'500px'} backgroundColor="white" mt="10px" mb={'10px'} placeholder="Enter your location here..." /> */}
                        <Text  as={'b'} fontSize={'1.5rem'} mb={"20px"}>Restaurants</Text>
                    </Box>
                    <Box mt={"20px"}>
                        {cardsGenerator()}
                    </Box>
                </Box>
                <Box position={"fixed"} w={"1050px"} h={"650px"} ml={"36%"} mt={"25px"}>
                    <MapView branches={branches}/>
                    <Button colorScheme={"orange"} onClick={() => handleFilterUserPosition()} mt={"10px"}>
                        My position
                    </Button>
                </Box>

            </Box>
        </Box>
    )
}