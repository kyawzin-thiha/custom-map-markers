import Image from 'next/image';
import Address1 from "@/assets/address.svg";
import Address2 from "@/assets/address-2.svg";
import Delete from "@/assets/delete.svg";
import "./styles.scss"

type refProps = {
    toggleMenu: (e: React.MouseEvent) => void
}
export const MarkerContainer = ({toggleMenu} : refProps) => {
    return (
        <div className="marker" onClick={toggleMenu}>
            <div className="marker--header">
                This is marker name
                <div className="tools-bar">
                    <button className="remove-marker">
                        Remove
                    </button>
                </div>
            </div>
            <div className="marker--description">
                This is a marker description. There might be more words than marker name.
            </div>
            <div className="marker--address">
                <div>
                    <Image src={Address1} alt="Address Logo" width={20} height={20}/>
                    <span>This is an address</span>
                </div>
                <div>
                    <Image src={Address2} alt="Address Logo" width={20} height={20}/>
                    <span> 12.234432, 98.234234 </span>
                </div>
            </div>
        </div>
    )
}