"use client"

import {useState} from 'react';
import Image from 'next/image';
import {MarkerContainer} from '@/Components/Marker';
import { Tooltip, Switch } from "@nextui-org/react";
import OpenArrowIcon from "@/assets/arrow-open.svg";
import CloseArrowIcon from "@/assets/arrow-close.svg";
import CloseIcon from "@/assets/close.svg";

export default function Home() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = (e : React.MouseEvent) => {
        e.preventDefault();
        setIsMenuOpen(!isMenuOpen);
    }

  return (
      <main className="landing-page">
          <div className={`toggle-menu open-icon ${isMenuOpen ? "open" : "close"} `} onClick={toggleMenu}>
              <Image src={OpenArrowIcon} alt="open arrow icon" width={20} height={20} />
          </div>
          <div className={`toggle-menu close-icon ${isMenuOpen ? "open" : "close"} `} onClick={toggleMenu}>
              <Image src={CloseArrowIcon} alt="close arrow icon" width={30} height={30} />
          </div>
          <div className={`side-bar ${isMenuOpen ? "open" : "close"}`}>
                <div className="tool-bar">
                    <Tooltip content={"Add New Marker"}>
                        <button>
                            <Image src={CloseIcon} alt={"Close Icon"} width={30} height={30} />
                        </button>
                    </Tooltip>
                    <Tooltip content={"Close"}>
                        <Switch squared color="primary" checked={true}/>
                    </Tooltip>
                </div>
              <div className="list">
                  <MarkerContainer toggleMenu={toggleMenu} />
                  <MarkerContainer toggleMenu={toggleMenu} />
                  <MarkerContainer toggleMenu={toggleMenu} />

              </div>

          </div>
          <div className="map-container">

          </div>
      </main>
  )
}
