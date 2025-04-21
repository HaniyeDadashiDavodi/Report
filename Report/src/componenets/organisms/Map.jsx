import React from "react";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet-geosearch/dist/geosearch.css";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";

function Map() {
  const [searchText, setSearchText] = useState("");
  const [location, setLocation] = useState(null);
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${searchText}&format=json&addressdetails=1`
      );
      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setLocation({ lat: parseFloat(lat), lon: parseFloat(lon) });
      } else {
        alert("مکان مورد نظر یافت نشد!");
      }
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };
  const iranBounds = [
    [25.0, 44.0],
    [39.0, 63.0],
  ];

  return (
    <>
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white py-1 px-4 rounded-xl shadow-md z-100000 flex justify-between items-center gap-2.5 sm:max-w-sm md:max-w-md lg:max-w-lg">
        <CancelIcon
          className="cursor-pointer text-[#8c8c8f]"
          onClick={() => setSearchText("")}
        />
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="مکان خود را در اینجا جستجو کنید..."
          className="rounded-lg w-full py-2 focus:outline-none text-sm font-semibold"
        />
        <button onClick={handleSearch} className="cursor-pointer">
          <SearchIcon className="text-[#8c8c8f]" />
        </button>
      </div>
      <div className="absolute right-4 top-3 z-1000 p-3 bg-[#8eb486] rounded-2xl text-white cursor-pointer">
        <PersonOutlineOutlinedIcon fontSize="large" />
      </div>
      <MapContainer
        center={location || [35.6892, 51.389]}
        zoom={location ? 15 : 12}
        bounds={iranBounds}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {location && (
          <Marker position={[location.lat, location.lon]}>
            <Popup>مکان جستجو شده</Popup>
          </Marker>
        )}
      </MapContainer>
    </>
  );
}

export default Map;
