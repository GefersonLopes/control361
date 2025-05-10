import type { Vehicle } from "../../../types/veicle";

export interface MapInfoWindowProps {
  item: Vehicle;
  position: { lat: number; lng: number };
  onCloseClick: () => void;
}
