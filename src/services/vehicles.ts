import api from "../api/client";
import type {
  ParamsVehiclesProps,
  VehicleListContent,
  VehicleListResponse,
} from "../types/veicle";

async function listVehiclesWithPaginate({
  type = "tracked",
  page = 1,
  perPage = 10,
  filter = "",
}: ParamsVehiclesProps): Promise<VehicleListContent> {
  const params = { type, page, perPage } as ParamsVehiclesProps;
  if (filter) params.filter = filter;

  const { data } = await api.get<VehicleListResponse>(
    "/recruitment/vehicles/list-with-paginate",
    {
      params,
    },
  );

  return data.content as VehicleListContent;
}

export { listVehiclesWithPaginate };
