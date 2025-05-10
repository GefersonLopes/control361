import { useRef } from "react";
import { useTranslation } from "react-i18next";

import { useInfiniteScroll } from "../../../hooks/useInfiniteScroll";
import { useVehiclesInfinite } from "../../../hooks/useVehiclesInfinite";
import { useVehicleLabels } from "../../../utils/translate/vehicle";
import Spinner from "../../ui/Spinner";
import { Table, TableBody, TableHead, TableRow } from "../../ui/Table";
import Td from "../../ui/Td";
import Th from "../../ui/Th";
import AsyncFallback from "../AsyncFallback";

export default function VehicleTable() {
  const {
    data,
    isError,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useVehiclesInfinite();

  const { t } = useTranslation();
  const { tType, tStatus } = useVehicleLabels();

  const scrollBoxRef = useRef<HTMLDivElement | null>(null);

  const vehicles = data?.pages.flatMap((p) => p.vehicles) ?? [];

  const sentinelaRef = useInfiniteScroll({
    root: scrollBoxRef.current,
    hasMore: hasNextPage ?? false,
    loading: isFetchingNextPage,
    onMore: fetchNextPage,
  });

  return (
    <AsyncFallback
      isLoading={!!isLoading && vehicles.length === 0}
      isError={!!isError}
      errorContent="Erro ao carregar os veículos"
      loadingContent={<Spinner />}
      className="border-none"
    >
      <Table ref={scrollBoxRef}>
        <TableHead>
          <Th>{t("table.plate")}</Th>
          <Th>{t("table.fleet")}</Th>
          <Th>{t("table.type")}</Th>
          <Th>{t("table.model")}</Th>
          <Th>{t("table.status")}</Th>
        </TableHead>
        <TableBody>
          {vehicles.map((r) => (
            <TableRow key={r.id}>
              <Td>{r.plate ?? "-"}</Td>
              <Td>{r.fleet ?? "-"}</Td>
              <Td>{tType(r.type)}</Td>
              <Td>{r.model ?? "-"}</Td>
              <Td>{tStatus(r.status)}</Td>
            </TableRow>
          ))}
          {hasNextPage && (
            <TableRow ref={sentinelaRef}>
              <Td colSpan={5} className="text-center py-4">
                {"Carregando mais..."}
              </Td>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </AsyncFallback>
  );
}
