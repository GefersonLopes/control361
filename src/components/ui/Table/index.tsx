import clsx from "clsx";

import type { RowProps, SectionProps, TableProps } from "./types";

export function Table({ children, className }: TableProps) {
  return (
    <div
      className={clsx(
        "mt-10 overflow-hidden rounded-2xl bg-dark border border-quaternary",
        className,
      )}
    >
      <table className="min-w-full text-sm border-collapse divide-y divide-x divide-quaternary">
        {children}
      </table>
    </div>
  );
}

export function TableHead({ children }: SectionProps) {
  return (
    <thead className="text-slate-300">
      <tr className="divide-x divide-y divide-quaternary">{children}</tr>
    </thead>
  );
}

export function TableBody({ children }: SectionProps) {
  return (
    <tbody className="divide-x divide-y divide-quaternary">{children}</tbody>
  );
}

export function TableRow({ children, className }: RowProps) {
  return (
    <tr
      className={clsx(
        "hover:bg-slate-800/40 divide-x divide-y divide-quaternary",
        className,
      )}
    >
      {children}
    </tr>
  );
}
