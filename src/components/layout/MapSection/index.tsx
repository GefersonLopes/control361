import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useState } from "react";

import type { Vehicle } from "../../../types/veicle";
import vehicles from "../../../utils/data/veicles";
import MapPin from "../../ui/MapPin";
import MapInfoWindow from "../MapInfoWindow";

const containerStyle = { width: "100%", height: "100%" };
const center = { lat: -23.55052, lng: -46.633308 };

export default function MapSection() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY!,
  });
  const [selected, setSelected] = useState<Vehicle | null>(null);

  if (loadError) return <div>Erro ao carregar o mapa</div>;
  if (!isLoaded) return <div>Carregando mapa…</div>;

  return (
    <section className="mt-10 p-4 border border-slate-700/60 rounded-2xl bg-dark">
      <div className="h-[518px] overflow-hidden rounded-2xl border border-slate-700/60">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {vehicles.map((v) => (
            <MapPin key={v.id} item={v} onClick={() => setSelected(v)} />
          ))}

          <MapInfoWindow
            item={selected!}
            onCloseClick={() => setSelected(null)}
          />
        </GoogleMap>
      </div>
    </section>
  );
}
