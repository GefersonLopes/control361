import type { Vehicle } from "../../../types/veicle";

export interface MapPinProps {
  item: Vehicle;
  className?: string;
  onClick?: (item: Vehicle | null) => void;
  selected?: Vehicle | null;
}
