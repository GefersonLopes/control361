import clsx from "clsx";

import type { ThProps } from "./types";

function Th({ children, className }: ThProps) {
  return (
    <th
      className={clsx(
        "px-4 py-2 text-left font-medium tracking-wide",
        className,
      )}
    >
      {children}
    </th>
  );
}

export default Th;
