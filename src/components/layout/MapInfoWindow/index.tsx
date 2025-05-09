import type { MapInfoWindowProps } from "./types";

export default function MapInfoWindow({
  item,
  onCloseClick,
}: MapInfoWindowProps) {
  if (!item) return null;

  const { pos, placa, frota, data } = item;
  const formattedDate = new Date(data);

  return (
    <main
      className="absolute top-[-115px] left-1/2 transform -translate-x-1/2 z-100 cursor-default"
      id="info-window"
    >
      <div className="relative flex flex-col items-center">
        <div className="z-10 w-[166px] bg-dark text-white rounded-lg border border-quaternary drop-shadow-lg">
          <div className="flex justify-end px-1.5">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onCloseClick();
              }}
              className="text-2xl text-primary leading-none cursor-pointer"
            >
              x
            </button>
          </div>
          <div className="px-3 pb-2 mt-[-10px] text-[10px] font-poppins text-medium flex flex-col items-center gap-0.5">
            <span>Placa {placa}</span>
            <div>Frota {frota}</div>
            <div>{formattedDate.toLocaleString()}</div>
            <div className="border-b border-white pb-1">
              {pos[0].toFixed(5)}, {pos[1].toFixed(5)}
            </div>
          </div>
        </div>

        <div className="absolute w-8 h-8 bg-quaternary rotate-45 bottom-[-6px]" />
      </div>
    </main>
  );
}
