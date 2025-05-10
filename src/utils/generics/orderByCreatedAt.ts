import { compareAsc, compareDesc, parseISO } from "date-fns";

export function orderByCreatedAt<T extends { createdAt: string | Date }>(
  items: T[],
  direction: "asc" | "desc" = "asc",
): T[] {
  return [...items].sort((a, b) => {
    const dateA =
      typeof a.createdAt === "string" ? parseISO(a.createdAt) : a.createdAt;
    const dateB =
      typeof b.createdAt === "string" ? parseISO(b.createdAt) : b.createdAt;

    return direction === "asc"
      ? compareAsc(dateA, dateB)
      : compareDesc(dateA, dateB);
  });
}
