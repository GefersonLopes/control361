import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { OverlayView } from "@react-google-maps/api";
import clsx from "clsx";
import React from "react";

import type { LocationVehicle } from "../../../types/veicle";
import { findLastByPlate } from "../../../utils/generics/findLastByPlate";
import { getColorByIndex } from "../../../utils/generics/generateColorPalette";
import MapInfoWindow from "../../layout/MapInfoWindow";
import type { MapPinProps } from "./types";

const MapPin: React.FC<MapPinProps> = ({
  item,
  index,
  className,
  onClick,
  selected,
  locations,
}) => {
  const color = getColorByIndex(index, locations.length);

  const lastLocation = findLastByPlate(locations, item.plate) as unknown as
    | LocationVehicle
    | undefined;

  if (!lastLocation) return null;

  const { lat, lng } = lastLocation;

  if (!lat || !lng) return null;

  return (
    <OverlayView
      key={item.id}
      position={{ lat, lng }}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      getPixelPositionOffset={(w, h) => ({ x: -w / 2, y: -h })}
    >
      <div
        className={clsx(
          "relative flex flex-col items-center cursor-pointer",
          className,
          "translate-x-[-50%] translate-y-[-100%]",
        )}
        onClick={() => onClick?.(item)}
      >
        <span
          className="flex items-center justify-center rounded-full w-12 h-12 relative"
          style={{ backgroundColor: color }}
          aria-hidden="true"
        >
          <LocalShippingOutlinedIcon
            className="text-white border-2 border-white rounded-full p-[5px] absolute z-10"
            style={{ fontSize: 40 }}
          />
        </span>

        {selected?.id === item.id && (
          <MapInfoWindow
            item={selected!}
            position={{ lat, lng }}
            onCloseClick={() => onClick?.(null)}
          />
        )}

        <span
          className="w-4 h-4 transform rotate-45 -mt-3"
          style={{ backgroundColor: color }}
          aria-hidden="true"
        />
      </div>
    </OverlayView>
  );
};

export default MapPin;
