import { formatDateTime } from "../../../utils/generics/formatDate";
import { Link } from "../../ui/Link";
import type { MapInfoWindowProps } from "./types";

export default function MapInfoWindow({
  item,
  onCloseClick,
  position,
}: MapInfoWindowProps) {
  if (!item) return null;

  const { plate, fleet, createdAt } = item;

  return (
    <aside
      id="info-window"
      role="dialog"
      aria-label="Detalhes do veículo"
      className="absolute top-[-105px] left-1/2 transform -translate-x-1/2 z-50 cursor-default"
    >
      <div className="relative flex flex-col items-center">
        <section className="z-10 w-[166px] bg-dark text-white rounded-lg border border-quaternary drop-shadow-lg">
          <header className="relative">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onCloseClick();
              }}
              aria-label="Fechar janela de informações"
              className="text-2xl text-primary leading-none cursor-pointer w-6 h-6 absolute top-0 right-0"
            >
              x
            </button>
          </header>
          <dl className="px-3 pb-2 mt-[10px] text-[10px] font-poppins text-medium flex flex-col gap-0.5 text-center">
            <span>Placa {plate || "S/N"}</span>
            <span>Frota {fleet || "S/N"}</span>
            <span>{formatDateTime(createdAt)}</span>
            <Link
              href={`${import.meta.env.VITE_GOOGLE_MAPS_COORDINATES_URL}${position.lat},${position.lng}`}
              target="_blank"
            >
              {position.lat}, {position.lng}
            </Link>
          </dl>
        </section>
        <div
          aria-hidden="true"
          className="absolute w-8 h-8 bg-quaternary rotate-45 bottom-[-6px]"
        />
      </div>
    </aside>
  );
}
