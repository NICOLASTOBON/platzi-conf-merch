import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

function Map({ location }) {
  const mapStyles = {
    height: "50vh",
    width: "100%"
  }
/* 
  const defaultCenter = {
    lat: 19.4267261,
    lng: -9.171844
  } */

  return (
    <LoadScript googleMapsApiKey={process.env.API_KEY_GOOGLE_MAPS} >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={9}
        center={location}
      >
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  )
}

export { Map }