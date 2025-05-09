function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    "Em viagem": "bg-emerald-600/20 text-emerald-400",
    Disponível: "bg-cyan-600/20 text-cyan-400",
    "Em manutenção": "bg-yellow-600/20 text-yellow-400",
  };
  return (
    <span
      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
        colors[status] ?? "bg-slate-700/40 text-slate-300"
      }`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;
