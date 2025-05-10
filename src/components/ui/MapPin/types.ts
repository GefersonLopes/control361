import type { LocationVehicle, Vehicle } from "../../../types/veicle";

export interface MapPinProps {
  item: Vehicle;
  index: number;
  className?: string;
  onClick?: (item: Vehicle | null) => void;
  selected?: Vehicle | null;
  locations: LocationVehicle[];
}
