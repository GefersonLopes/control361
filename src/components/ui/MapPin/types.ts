import type { Vehicle } from "../../../types/veicle";

export interface MapPinProps {
  onClick?: () => void;
  item: Vehicle;
  className?: string;
}
