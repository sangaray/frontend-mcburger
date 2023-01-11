import React, { useState, useEffect } from "react";

const useGeolocation = () => {

    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: "", lng: "" }
    })


    const onSuccess = location => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }
        });
    }

    const onError = error => {
        setLocation({
            loaded: true,
            error
        });
    }
    
    useEffect(() => {
        //validamos que el cliente brinde su ubicación
        if (!navigator.geolocation) {
            alert("You must provide your location in order to use the page correctly")
            setLocation(state => ({
                ...state,
                loaded: true,
                error: {
                    code: 0,
                    message: "Geolocation not supported"
                }
            }))
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, [])

    return location;

}

export default useGeolocation;