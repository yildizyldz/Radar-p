import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet-rotatedmarker";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import { planeIcon } from "../utils/constants";
import { open } from "../redux/slices/detail.Slice";
import { useEffect } from "react";
import { getFlights } from "../redux/actions";

const Map = () => {
  const dispatch = useDispatch();
  const { flights } = useSelector((store) => store.flight);

  return (
    <MapContainer
      center={[38.908216, 35.424321]}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {flights.map((flights) => (
        <Marker
          position={[flights.lat, flights.lng]}
          icon={planeIcon}
          rotationAngle={flights.deg - 45}
        >
          <Popup>
            <div className="popup">
              <span>Kod: {flights.code}</span>
              <button onClick={() => dispatch(open(flights.id))}>Detay</button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
