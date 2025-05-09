import clsx from "clsx";

import type { ThProps } from "./types";

function Th({ children, className }: ThProps) {
  return (
    <th
      className={clsx(
        "sticky top-0 z-10 bg-dark",
        "px-4 h-[55px] text-center font-semibold ",
        "font-poppins text-sm text-white tracking-wide",
        className,
      )}
    >
      {children}
    </th>
  );
}

export default Th;
