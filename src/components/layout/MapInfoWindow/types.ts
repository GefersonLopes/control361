import type { Vehicle } from "../../../types/veicle";

export interface MapInfoWindowProps {
  item: Vehicle | null;
  position: { lat: number; lng: number };
  onCloseClick: () => void;
}
