import type { Vehicle } from "../../../types/veicle";

export interface MapInfoWindowProps {
  item: Vehicle;
  onCloseClick: () => void;
}
