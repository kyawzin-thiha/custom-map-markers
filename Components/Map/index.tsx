'use client';

import {GoogleMap, Marker, useLoadScript} from '@react-google-maps/api';
import {useEffect, useState} from 'react';
import getGetLocation from '@/server/utils/getlocation';
import {Simulate} from 'react-dom/test-utils';
import toggle = Simulate.toggle;
import {NewMarkerModal} from '@/Components/Modal';

type Props = {
    isMarkerOpen: boolean;
}

const mapContainerStyle = {
    width: '100%',
    height: '100%'
};
export const GoogleMapComp = ({isMarkerOpen}: Props) => {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GCP_API_KEY as string
    });
    const [userLocation, setUserLocation] = useState({lat: 50.805832, lng: -1.087222});

    const [newMarker, setNewMarker] = useState({
        lat: 0,
        lng: 0,
        address: ''
    })

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };
    const onMapClick = async (e: google.maps.MapMouseEvent) => {
        const location = e.latLng as google.maps.LatLng;
        const lat = location.lat();
        const lng = location.lng();
        const address = await handleAddressChange(lat, lng) as string;
        console.log(lat, lng);
        if (isMarkerOpen) {
            setNewMarker({lat, lng, address});
            console.log('Will create a new marker here');
            toggleModal();
        }
    };

    const handleAddressChange = async (lat: number, lng: number) => {
        const geocoder = new google.maps.Geocoder();

        try {
            const response = await geocoder.geocode({location: {lat, lng}});

            //console.log(response.results[0].formatted_address);
            return response.results[0].formatted_address;
        } catch (error) {
            console.log(error);
            return "";
        }
    };

    useEffect(() => {
        (async () => {
            const location = await getGetLocation() as GeolocationPosition;
            const lat = location.coords.latitude;
            const lng = location.coords.longitude;
            setUserLocation({lat, lng});
        })();
    }, []);

    if (loadError) return <div>error</div>;
    if (!isLoaded) return <div>loading</div>;
    return (
        <>
            <GoogleMap id="map" mapContainerStyle={mapContainerStyle} zoom={15} center={userLocation}
                       onClick={onMapClick}>
                <Marker position={userLocation} label={'Current Location'}/>
            </GoogleMap>
            {
                isModalOpen && (
                    <NewMarkerModal lat={newMarker.lat} lng={newMarker.lng} address={newMarker.address} isModalOpen={isModalOpen} toggleModal={toggleModal}/>
                )
            }
        </>
    );
};