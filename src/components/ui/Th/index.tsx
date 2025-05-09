function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-4 py-2 text-left font-medium tracking-wide">
      {children}
    </th>
  );
}

export default Th;
