import type { Vehicle } from "../../types/veicle";

const vehicles: Vehicle[] = [
  {
    id: 1,
    pos: [-23.56, -46.64],
    placa: "PRO 8C2 174",
    color: "#e11d48",
    frota: "000001",
    data: new Date(),
    tipo: "Motor",
    modelo: "Gol",
    status: "Em viagem",
  },
  {
    id: 2,
    pos: [-23.55, -46.62],
    placa: "KER 7D3 981",
    color: "#3b82f6",
    frota: "000002",
    data: new Date(),
    tipo: "Motor",
    modelo: "Audi A3",
    status: "Disponível",
  },
  {
    id: 3,
    pos: [-23.54, -46.65],
    placa: "PCK 9H1 222",
    color: "#10b981",
    frota: "000003",
    data: new Date(),
    tipo: "Motor",
    modelo: "Corsa",
    status: "Em Mantenção",
  },
];

export default vehicles;
