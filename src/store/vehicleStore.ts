import { create } from "zustand";

import type { ParamsVehiclesProps } from "../types/veicle";

interface VehicleStore extends ParamsVehiclesProps {
  setPage: (page: number) => void;
  setPerPage: (perPage: number) => void;
  setType: (type: "tracked" | "others") => void;
  setFilter: (filter: string) => void;
}

export const useVehicleStore = create<VehicleStore>((set) => ({
  page: 1,
  perPage: 20,
  type: "tracked",
  filter: "",

  setPage: (page) => set({ page }),
  setPerPage: (perPage) => set({ perPage }),
  setType: (type) => set({ type }),
  setFilter: (filter) => set({ filter }),
}));
