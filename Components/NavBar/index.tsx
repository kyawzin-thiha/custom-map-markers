"use client"

import {MarkerContainer} from '@/Components/Marker';
import Lottie from "lottie-react";
import LogoAnimation from "@/assets/map.json";
import "./styles.scss";

export const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="nav-bar--logo">
                <Lottie animationData={LogoAnimation} loop={true} width={30} height={30} />
            </div>
        </div>
    )
}