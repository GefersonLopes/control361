import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  type VehicleFilterFormValues,
  vehicleFilterSchema,
} from "../utils/schemas/vehicleFilter.schema";

export function useFilterForm(
  onSubmit: (values: VehicleFilterFormValues) => void,
  defaultValues?: Partial<VehicleFilterFormValues>,
) {
  const form = useForm<VehicleFilterFormValues>({
    resolver: zodResolver(vehicleFilterSchema),
    defaultValues: {
      status: defaultValues?.status ?? "tracked",
      search: defaultValues?.search ?? "",
    },
  });

  return {
    ...form,
    handleSubmit: form.handleSubmit(onSubmit),
  };
}
