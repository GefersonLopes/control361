import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { OverlayView } from "@react-google-maps/api";
import clsx from "clsx";
import React from "react";

import type { MapPinProps } from "./types";

const MapPin: React.FC<MapPinProps> = ({ onClick, item, className }) => (
  <OverlayView
    key={item.id}
    position={{ lat: item.pos[0], lng: item.pos[1] }}
    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
  >
    <div
      className={clsx(
        "relative flex flex-col items-center cursor-pointer",
        className,
      )}
      onClick={onClick}
    >
      <div
        className={`
          flex items-center justify-center
          rounded-full w-12 h-12
        `}
        style={{ backgroundColor: item.color }}
      >
        <LocalShippingOutlinedIcon
          className="
            text-white border-2
            border-white rounded-full
            p-[5px] absolute z-10
          "
          style={{ fontSize: 40 }}
        />
      </div>

      <div
        className={`
          w-4 h-4
          transform rotate-45 -mt-3
        `}
        style={{ backgroundColor: item.color }}
      />
    </div>
  </OverlayView>
);

export default MapPin;
