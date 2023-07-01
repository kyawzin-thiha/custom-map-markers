import {Switch, Tooltip} from '@nextui-org/react';
import {MarkerContainer} from '@/Components/Marker';
import "./styles.scss";

type Props = {
    isMarkerOpen: boolean,
    toggleMarker: () => void,
    toggleMenu: (e: React.MouseEvent) => void,
}
export const SideBarComp = ({isMarkerOpen, toggleMarker, toggleMenu} : Props) => {
    return (
        <>
            <div className="tool-bar">
                <Tooltip content={'If enabled, every pointers will be marked'}>
                    <Switch squared color="primary" checked={isMarkerOpen} onChange={toggleMarker}/>
                </Tooltip>
            </div>
            <div className="list">
                <MarkerContainer toggleMenu={toggleMenu}/>
            </div>
        </>
    )
}