import type { LocationVehicle, Vehicle } from "../../../types/veicle";

export interface MapPinProps {
  item: Vehicle;
  index: number;
  className?: string;
  locations: LocationVehicle[];
}
