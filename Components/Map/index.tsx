"use client"

import {GoogleMap, Marker, useLoadScript} from '@react-google-maps/api';
import {useEffect, useState} from 'react';
import getGetLocation from '@/server/utils/getlocation';

type Props = {
    isMarkerOpen: boolean;
}

const mapContainerStyle = {
    width: "100%",
    height: "100%",
};
export const GoogleMapComp = ({isMarkerOpen} : Props) => {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GCP_API_KEY as string,
    })
    const [userLocation, setUserLocation] = useState({lat: 0, lng: 0})

    const onMapClick = async (e: google.maps.MapMouseEvent) => {
        const location = e.latLng as google.maps.LatLng;
        const lat = location.lat();
        const lng = location.lng();
        await handleAddressChange(lat, lng);
        console.log(lat, lng);
        if(isMarkerOpen) {
            console.log("Will create a new marker here");
        }
    }

    const handleAddressChange = async (lat: number, lng: number) => {
        const geocoder = new google.maps.Geocoder();

        try{
            const response = await geocoder.geocode({location: {lat, lng}});

            console.log(response.results[0].formatted_address);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        (async () => {
            const location = await getGetLocation() as GeolocationPosition;
            const lat = location.coords.latitude;
            const lng = location.coords.longitude;
            setUserLocation({lat, lng});
        })()
    }, [])

    if(loadError) return <div>error</div>
    if(!isLoaded) return <div>loading</div>
    return (
        <>
            <GoogleMap id="map" mapContainerStyle={mapContainerStyle} zoom={15} center={userLocation} onClick={onMapClick} >
                <Marker position={userLocation} label={'Current Location'} />
                <Marker position={{lat:50.805832, lng: -1.087222 }} label={"Portsmouth"} />
            </GoogleMap>
            </>
    )
}