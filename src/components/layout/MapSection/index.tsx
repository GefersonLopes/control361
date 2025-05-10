import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useState } from "react";

import { useVehicles } from "../../../hooks/useVehicles";
import type { Vehicle } from "../../../types/veicle";
import MapPin from "../../ui/MapPin";
import Spinner from "../../ui/Spinner";
import AsyncFallback from "../AsyncFallback";
import FallbackContainer from "../FallbackContainer";
import Title from "../Title";

const containerStyle = { width: "100%", height: "100%" };
const center = { lat: -23.55052, lng: -46.633308 };

export default function MapSection() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY!,
  });
  const [selected, setSelected] = useState<Vehicle | null>(null);
  const { data } = useVehicles();

  return (
    <section className="mt-10 p-4 border border-slate-700/60 rounded-2xl bg-dark">
      <AsyncFallback
        isLoading={!isLoaded}
        isError={!!loadError}
        errorContent="Erro ao carregar o mapa"
        loadingContent={<Spinner />}
      >
        <Title title="Mapa rastreador" className="mb-4 ms-2" />
        <FallbackContainer>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
          >
            {data?.vehicles.map((v, i) => (
              <MapPin
                key={v.id}
                index={i}
                item={v}
                locations={data.locationVehicles}
                onClick={setSelected}
                selected={selected}
              />
            ))}
          </GoogleMap>
        </FallbackContainer>
      </AsyncFallback>
    </section>
  );
}
