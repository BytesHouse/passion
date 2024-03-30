import {GoogleMap, useJsApiLoader} from "@react-google-maps/api";
import {useCallback, useState} from "react";

const containerStyle = {
    width: '100%',
    height: '768px'
};

const center = {
    lat: 47.26451110839844,
    lng: 29.1550350189209
};

const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyArOtVNQ_EpkqiFPd5ebBv7lAZcR2yiMaM"
    })
    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map: any) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map: any) {
        setMap(null)
    }, [])
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={2}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
        </GoogleMap>
    ) : <></>
};

export default Map;