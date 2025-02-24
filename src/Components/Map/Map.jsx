import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import Logo from "../Img/logo_background2.png"; 

const customIcon = new L.Icon({
    iconUrl: Logo, 
    iconSize: [150, 80],
    iconAnchor: [50, 80], 
    popupAnchor: [0, -70], 
});

function MyMap() {
  return (
    <div style={{ padding: "50px" }} className='map' id='harita'>
        <MapContainer center={[40.761429, 72.350773]} zoom={15} style={{ height: "500px", width: "100%", borderRadius: "20px" }}>
            <TileLayer url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" />
            <Marker position={[40.761429, 72.350773]} icon={customIcon}>
                <Popup>Andijon 3 - Renessans</Popup>
            </Marker>
        </MapContainer>
    </div>
  );
}

export default MyMap;
