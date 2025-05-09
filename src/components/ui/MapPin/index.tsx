import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { OverlayView } from "@react-google-maps/api";
import clsx from "clsx";
import React from "react";

import MapInfoWindow from "../../layout/MapInfoWindow";
import type { MapPinProps } from "./types";

const MapPin: React.FC<MapPinProps> = ({
  item,
  className,
  onClick,
  selected,
}) => (
  <OverlayView
    key={item.id}
    position={{ lat: item.pos[0], lng: item.pos[1] }}
    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
  >
    <button
      type="button"
      className={clsx(
        "relative flex flex-col items-center cursor-pointer",
        className,
      )}
      onClick={() => onClick?.(item)}
    >
      <span
        className="flex items-center justify-center rounded-full w-12 h-12 relative"
        style={{ backgroundColor: item.color }}
        aria-hidden="true"
      >
        <LocalShippingOutlinedIcon
          className="text-white border-2 border-white rounded-full p-[5px] absolute z-10"
          style={{ fontSize: 40 }}
        />
      </span>

      {selected?.id === item.id && (
        <MapInfoWindow item={selected!} onCloseClick={() => onClick?.(null)} />
      )}

      <span
        className="w-4 h-4 transform rotate-45 -mt-3"
        style={{ backgroundColor: item.color }}
        aria-hidden="true"
      />
    </button>
  </OverlayView>
);

export default MapPin;
