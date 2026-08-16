import React from "react";
import { MapContainer, Marker, Polyline, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const pin = (kind) => {
  const fill = kind === "hospital" ? "#4f7df3" : kind === "ambulance" ? "#111827" : kind === "helper" ? "#059669" : "#4f7df3";
  const glyph = kind === "hospital" ? "+" : kind === "ambulance" ? "A" : kind === "helper" ? "H" : "!";
  return L.divIcon({ className: "lifeaid-map-pin", html: `<span style="display:grid;place-items:center;width:34px;height:34px;border-radius:50% 50% 50% 4px;transform:rotate(-45deg);background:${fill};box-shadow:0 5px 14px rgba(15,23,42,.24);border:3px solid white"><b style="transform:rotate(45deg);font:800 14px Arial;color:white">${glyph}</b></span>`, iconSize:[34,34], iconAnchor:[17,34], popupAnchor:[0,-32] });
};

function Fit({points}){const map=useMap();React.useEffect(()=>{if(points.length>1)map.fitBounds(L.latLngBounds(points),{padding:[30,30]});},[map,JSON.stringify(points)]);return null;}

export default function MapView({incident,ambulance,helper,hospital}){const points=[incident,ambulance,helper,hospital].filter(Boolean).map(p=>[p.lat,p.lng]);const center=points[0]||[28.6139,77.209];return <div className="relative h-full min-h-[340px] overflow-hidden rounded-2xl border border-slate-200"><MapContainer center={center} zoom={13} scrollWheelZoom={false}><TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/><Fit points={points}/>{incident&&<Marker icon={pin("incident")} position={[incident.lat,incident.lng]}><Popup><b>Emergency</b><br/>{incident.address}</Popup></Marker>}{ambulance&&<Marker icon={pin("ambulance")} position={[ambulance.lat,ambulance.lng]}><Popup><b>Ambulance</b><br/>{ambulance.id}</Popup></Marker>}{helper&&<Marker icon={pin("helper")} position={[helper.lat,helper.lng]}><Popup><b>Helper</b></Popup></Marker>}{hospital&&<Marker icon={pin("hospital")} position={[hospital.lat,hospital.lng]}><Popup><b>{hospital.name}</b></Popup></Marker>}{points.length>1&&<Polyline positions={points} pathOptions={{weight:5,dashArray:"8 10",color:"#4f7df3"}}/>}</MapContainer><div className="pointer-events-none absolute bottom-3 left-3 z-[400] rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold text-slate-500 shadow-sm">Map tiles may require internet · demo coordinates</div></div>}
