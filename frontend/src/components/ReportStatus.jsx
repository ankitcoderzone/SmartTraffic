import React, { useState, useEffect , useRef } from "react";
import Url from "../charts/mapurl";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer,ZoomControl } from "react-leaflet";

const ReportStatus = () => {
  const [cityData] = useState({
    Location: "civil Line",
    totalVehicles: 45,
    alert: "Accident at Chungi",
    violations: {
      redLight: 70,
      overspeed: 50,
      noHelmet: 90,
    },
    vehicleTypes: {
      trucks: 50,
      buses: 40,
      cars: 20,
      twoWheelers: 60,
    },
  });
  const [center, setCenter] = useState({ lat: 25.4358, lng: 81.8463 })
  const Zoom_level = 20;
  const MapRef = useRef();

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header with dropdown */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <h2 className="text-2xl font-bold">City Overview</h2>
        <select
          className="border rounded-lg px-3 py-2"
          value={cityData.Location}
          onChange={(e) => console.log("Change city:", e.target.value)}
        >
          <option>Civil Line</option>
          <option>Naini</option>
          <option>Chungi</option>
        </select>
      </div>

      {/* Top cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Vehicle Tracked */}
        <div className="bg-white shadow rounded-xl p-4">
          <h3 className="text-lg font-semibold">Vehicles Tracked</h3>
          <p className="text-3xl font-bold text-blue-600">
            {cityData.totalVehicles.toLocaleString()}
          </p>
        </div>

        {/* Alert */}
        <div className="bg-white shadow p-4 rounded-xl">
          <h3 className="text-lg font-semibold text-red-700">ALERT</h3>
          <p>{cityData.alert}</p>
        </div>

        {/* Top Violations */}
        <div className="bg-white shadow rounded-xl p-4">
          <h3 className="text-lg font-semibold mb-3">Top Violations</h3>
          <div className="space-y-3">
            {Object.entries(cityData.violations).map(([key, value]) => {
              // Decide color based on percentage
              let colorClass = "bg-green-500";
              if (value > 80) colorClass = "bg-red-500";
              else if (value > 50) colorClass = "bg-yellow-500";

              return (
                <div key={key}>
                  <p className="capitalize">{key.replace(/([A-Z])/g, " $1")}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${colorClass} h-2 rounded-full`}
                      style={{ width: `${value}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{value}%</p>
                </div>
              );
            })}
          </div>
        </div>
        {/* Middle section */}
        
         <div className="bg-white shadow rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-2">Traffic Density Map</h3>
        <div className="w-full h-[350px] rounded-lg overflow-hidden">
          <MapContainer
            center={center}
            zoom={Zoom_level}
            ref={MapRef}
            zoomControl={true}
            className="h-[350px] w-full"
          >
            <TileLayer
              url={Url.maptiler.url}
              attribution={Url.maptiler.attribution}
            />
          </MapContainer>
        </div>
      </div>

          {/* Vehicle Breakdown */}
         <div className="bg-white shadow rounded-xl p-4">
        <h3 className="text-lg font-semibold mb-3">Vehicle Breakdown</h3>
        <ul className="space-y-2">
          <li>Trucks: <strong>{cityData.vehicleTypes.trucks}</strong></li>
          <li>Buses: <strong>{cityData.vehicleTypes.buses}</strong></li>
          <li>Cars: <strong>{cityData.vehicleTypes.cars}</strong></li>
          <li>2-Wheelers: <strong>{cityData.vehicleTypes.twoWheelers}</strong></li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default ReportStatus
