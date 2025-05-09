import vehicles from "../../../utils/data/veicles";
import { Table, TableBody, TableHead, TableRow } from "../../ui/Table";
import Td from "../../ui/Td";
import Th from "../../ui/Th";

export default function VehicleTable() {
  return (
    <Table>
      <TableHead>
        <Th>Placa</Th>
        <Th>Frota</Th>
        <Th>Tipo</Th>
        <Th>Modelo</Th>
        <Th>Status</Th>
      </TableHead>
      <TableBody>
        {vehicles.map((r) => (
          <TableRow key={r.id}>
            <Td>{r.placa}</Td>
            <Td>{r.frota}</Td>
            <Td>{r.tipo}</Td>
            <Td>{r.modelo}</Td>
            <Td>{r.status}</Td>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
