import React from 'react'

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = () =>{
    return <GoogleMap onClick={(e)=>console.log(e.latLng.lat)} defaultZoom={10} defaultCenter={{lat: 45.4545, lng: 43.435}}>
        <Marker position={{ lat: 45.4545, lng: 43.435 }} />
    </GoogleMap>
}

const MapGoogle = withScriptjs(withGoogleMap(Map))

export default MapGoogle
