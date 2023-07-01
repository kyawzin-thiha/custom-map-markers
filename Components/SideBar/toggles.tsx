import Image from 'next/image';
import OpenArrowIcon from '@/assets/arrow-open.svg';
import CloseArrowIcon from '@/assets/arrow-close.svg';
import "./styles.scss";

type Props = {
    isMenuOpen : boolean,
    toggleMenu: (e : React.MouseEvent) => void,
}

export const MenuToggles = ({isMenuOpen, toggleMenu} : Props) => {
    return (
        <>
            <div className={`toggle-menu open-icon ${isMenuOpen ? 'open' : 'close'} `} onClick={toggleMenu}>
                <Image src={OpenArrowIcon} alt="open arrow icon" width={20} height={20}/>
            </div>
            <div className={`toggle-menu close-icon ${isMenuOpen ? 'open' : 'close'} `} onClick={toggleMenu}>
                <Image src={CloseArrowIcon} alt="close arrow icon" width={30} height={30}/>
            </div>
        </>
    )
}