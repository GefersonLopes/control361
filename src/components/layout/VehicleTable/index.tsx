import { useVehicles } from "../../../hooks/useVehicles";
import Spinner from "../../ui/Spinner";
import { Table, TableBody, TableHead, TableRow } from "../../ui/Table";
import Td from "../../ui/Td";
import Th from "../../ui/Th";
import AsyncFallback from "../AsyncFallback";

export default function VehicleTable() {
  const { data, isError, isLoading } = useVehicles();

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
          <Th>Placa</Th>
          <Th>Frota</Th>
          <Th>Tipo</Th>
          <Th>Modelo</Th>
          <Th>Status</Th>
        </TableHead>
        <TableBody>
          {data?.vehicles.map((r) => (
            <TableRow key={r.id}>
              <Td>{r.plate || "-"}</Td>
              <Td>{r.fleet || "-"}</Td>
              <Td>{r.type || "-"}</Td>
              <Td>{r.model || "-"}</Td>
              <Td>{r.status || "-"}</Td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </AsyncFallback>
  );
}
