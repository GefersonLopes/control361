import type { TFunction } from "i18next";
import { useTranslation } from "react-i18next";

export function useVehicleLabels() {
  const { t } = useTranslation();

  return {
    tType: (type: string) => t(`vehicleType.${type}`, type),
    tStatus: (status: string) => t(`status.${status}`, status),
    tIgnition: (val: string) => t(`ignition.${val}`, val),
  };
}

export function translateType(t: TFunction, type: string) {
  return t(`vehicleType.${type}`, type);
}
export function translateStatus(t: TFunction, status: string) {
  return t(`status.${status}`, status);
}
