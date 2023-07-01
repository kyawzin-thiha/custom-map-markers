'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';
import {Tooltip, Switch, SwitchEvent} from '@nextui-org/react';
import {MarkerContainer} from '@/Components/Marker';
import {GoogleMapComp} from '@/Components/Map';
import getGetLocation from '@/server/utils/getlocation';
import OpenArrowIcon from '@/assets/arrow-open.svg';
import CloseArrowIcon from '@/assets/arrow-close.svg';
import CloseIcon from '@/assets/close.svg';
import {SideBarComp} from '@/Components/SideBar';
import {MenuToggles} from '@/Components/SideBar/toggles';
import {NewMarkerModal} from '@/Components/Modal';

export default function Home() {

    const [state, setState] = useState({
        isMenuOpen: false,
        isMarkerOpen: true,
    });
    const toggleMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        setState((prev) => ({...prev, isMenuOpen: !prev.isMenuOpen}));
    };
    const toggleMarker = () => {
        setState((prev) => ({...prev, isMarkerOpen: !prev.isMarkerOpen}));
    };

    return (
        <main className="landing-page">
            <MenuToggles isMenuOpen={state.isMenuOpen} toggleMenu={toggleMenu}/>
            <div className={`side-bar ${state.isMenuOpen ? 'open' : 'close'}`}>
                <SideBarComp isMarkerOpen={state.isMarkerOpen} toggleMarker={toggleMarker} toggleMenu={toggleMenu} />
            </div>
            <div className="map-container">
                <GoogleMapComp isMarkerOpen={state.isMarkerOpen}/>
            </div>

        </main>
    );
}
