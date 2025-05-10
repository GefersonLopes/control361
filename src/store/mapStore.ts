import { create } from "zustand";

import type { Vehicle } from "../types/veicle";

interface mapStore {
  selectedVehicle: Vehicle | null;
  setSelectedVehicle: (v: Vehicle | null) => void;
}

export const useMapStore = create<mapStore>((set) => ({
  selectedVehicle: null,
  setSelectedVehicle: (selectedVehicle) => set({ selectedVehicle }),
}));
