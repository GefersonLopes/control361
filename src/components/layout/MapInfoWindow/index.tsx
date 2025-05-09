import { OverlayView } from "@react-google-maps/api";

import type { MapInfoWindowProps } from "./types";

export default function MapInfoWindow({
  item,
  onCloseClick,
}: MapInfoWindowProps) {
  if (!item) return null;

  const { pos, placa, frota, data } = item;
  const formattedDate = new Date(data);

  const getPixelOffset = (w: number, h: number) => ({
    x: -(w / 2),
    y: -h - 16,
  });

  return (
    <OverlayView
      position={{ lat: pos[0], lng: pos[1] }}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      getPixelPositionOffset={getPixelOffset}
    >
      <div className="relative flex flex-col items-center">
        <div className="z-10 w-[166px] bg-dark text-white rounded-lg border border-quaternary drop-shadow-lg">
          <div className="flex justify-end px-1.5">
            <button
              onClick={onCloseClick}
              className="text-2xl text-primary leading-none"
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
    </OverlayView>
  );
}
