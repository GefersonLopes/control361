import { useInfiniteQuery } from "@tanstack/react-query";

import { listVehiclesWithPaginate } from "../services/vehicles";
import { useVehicleStore } from "../store/vehicleStore";
import type { ParamsVehiclesProps, VehicleListContent } from "../types/veicle";

export function useVehiclesInfinite() {
  const { perPage, type, filter } = useVehicleStore();

  return useInfiniteQuery<VehicleListContent, Error>({
    queryKey: ["vehicles", { type, filter }],

    queryFn: ({ pageParam = 1 }) =>
      listVehiclesWithPaginate({
        page: pageParam,
        perPage,
        type,
        filter,
      } as ParamsVehiclesProps),

    initialPageParam: 1,

    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,

    staleTime: 1000 * 60 * 2,
  });
}
