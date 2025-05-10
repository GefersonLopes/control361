import { z } from "zod";

export const vehicleFilterSchema = z.object({
  status: z.enum(["tracked", "others"]),
  search: z.string().optional(),
});

export type VehicleFilterFormValues = z.infer<typeof vehicleFilterSchema>;
