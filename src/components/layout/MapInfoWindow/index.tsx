import type { MapInfoWindowProps } from "./types";

export default function MapInfoWindow({
  item,
  onCloseClick,
}: MapInfoWindowProps) {
  if (!item) return null;

  const { pos, placa, frota, data } = item;
  const formattedDate = new Date(data).toLocaleString();

  return (
    <aside
      id="info-window"
      role="dialog"
      aria-label="Detalhes do veículo"
      className="absolute top-[-115px] left-1/2 transform -translate-x-1/2 z-50 cursor-default"
    >
      <div className="relative flex flex-col items-center">
        <section className="z-10 w-[166px] bg-dark text-white rounded-lg border border-quaternary drop-shadow-lg">
          <header className="flex justify-end px-1.5">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onCloseClick();
              }}
              aria-label="Fechar janela de informações"
              className="text-2xl text-primary leading-none"
            >
              &times;
            </button>
          </header>
          <dl className="px-3 pb-2 mt-[-10px] text-[10px] font-poppins text-medium flex flex-col gap-0.5">
            <span>Placa {placa}</span>
            <span>Frota {frota}</span>
            <span>{formattedDate.toLocaleString()}</span>
            <span className="border-b border-white pb-1">
              {pos[0].toFixed(5)}, {pos[1].toFixed(5)}
            </span>
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
