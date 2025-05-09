import vehicles from "../../../utils/data/veicles";
import Td from "../../ui/Td";
import Th from "../../ui/Th";

function VehicleTable() {
  const rows = vehicles;
  return (
    <div className="mt-10 overflow-hidden rounded-xl border border-slate-700/60">
      <table className="min-w-full divide-y divide-slate-700/50 text-sm">
        <thead className="bg-slate-900/70 text-slate-300">
          <tr>
            <Th>Placa</Th>
            <Th>Frota</Th>
            <Th>Tipo</Th>
            <Th>Modelo</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800/60 bg-slate-900/30">
          {rows.map((r) => (
            <tr key={r.id} className="hover:bg-slate-800/40">
              <Td>{r.placa}</Td>
              <Td>{r.frota}</Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VehicleTable;
