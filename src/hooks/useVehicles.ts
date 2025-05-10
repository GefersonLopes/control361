import { useQuery } from "@tanstack/react-query";

import { listVehiclesWithPaginate } from "../services/vehicles";
import { useVehicleStore } from "../store/vehicleStore";
import type { ParamsVehiclesProps, VehicleListContent } from "../types/veicle";

export function useVehicles() {
  const { page, perPage, type, filter } = useVehicleStore();

  const params = {
    page,
    perPage,
    type,
    filter,
  } as ParamsVehiclesProps;

  return useQuery<VehicleListContent, Error>({
    queryKey: ["vehicles", params],
    queryFn: () => listVehiclesWithPaginate(params),
    staleTime: 1000 * 60 * 2,
    refetchInterval: 1000 * 60 * 2,
  });
}
