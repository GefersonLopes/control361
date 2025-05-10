import { orderByCreatedAt } from "./orderByCreatedAt";

export function findByPlate<T extends { plate: string }>(
  items: T[],
  plate: string,
): T | undefined {
  return items.find((item) => item.plate === plate);
}

export function findLastByPlate<
  T extends {
    plate: string;
    createdAt: string | Date;
    lat: number;
    lng: number;
  },
>(items: T[], plate: string): T | undefined {
  const sortedDesc = orderByCreatedAt(items, "desc");
  return sortedDesc.find((item) => item.plate === plate);
}
