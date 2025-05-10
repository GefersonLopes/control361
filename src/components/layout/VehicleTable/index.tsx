import { useTranslation } from "react-i18next";

import { useVehicles } from "../../../hooks/useVehicles";
import { useVehicleLabels } from "../../../utils/translate/vehicle";
import Spinner from "../../ui/Spinner";
import { Table, TableBody, TableHead, TableRow } from "../../ui/Table";
import Td from "../../ui/Td";
import Th from "../../ui/Th";
import AsyncFallback from "../AsyncFallback";

export default function VehicleTable() {
  const { data, isError, isLoading } = useVehicles();

  const { t } = useTranslation();
  const { tType, tStatus } = useVehicleLabels();

  return (
    <AsyncFallback
      isLoading={!!isLoading}
      isError={!!isError}
      errorContent="Erro ao carregar os veículos"
      loadingContent={<Spinner />}
      className="border-none"
    >
      <Table>
        <TableHead>
          <Th>{t("table.plate")}</Th>
          <Th>{t("table.fleet")}</Th>
          <Th>{t("table.type")}</Th>
          <Th>{t("table.model")}</Th>
          <Th>{t("table.status")}</Th>
        </TableHead>
        <TableBody>
          {data?.vehicles.map((r) => (
            <TableRow key={r.id}>
              <Td>{r.plate ?? "-"}</Td>
              <Td>{r.fleet ?? "-"}</Td>
              <Td>{tType(r.type)}</Td>
              <Td>{r.model ?? "-"}</Td>
              <Td>{tStatus(r.status)}</Td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </AsyncFallback>
  );
}
