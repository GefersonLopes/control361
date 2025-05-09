import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { OverlayView } from "@react-google-maps/api";
import React from "react";

import type { Vehicle } from "../../../types/veicle";

export interface MapPinProps {
  onClick?: () => void;
  item: Vehicle;
}

const MapPin: React.FC<MapPinProps> = ({ onClick, item }) => (
  <OverlayView
    key={item.id}
    position={{ lat: item.pos[0], lng: item.pos[1] }}
    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
  >
    <div
      className="relative flex flex-col items-center cursor-pointer"
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
