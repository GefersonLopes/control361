import clsx from "clsx";

import type { TdProps } from "./types";

function Td({ children, className }: TdProps) {
  return (
    <td
      className={clsx(
        "px-4 h-[40px] whitespace-nowrap text-center",
        "text-sm text-white text-normal tracking-wide font-inter",
        className,
      )}
    >
      {children}
    </td>
  );
}

export default Td;
