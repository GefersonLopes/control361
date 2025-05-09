import clsx from "clsx";

import type { TdProps } from "./types";

function Td({ children, className }: TdProps) {
  return (
    <td className={clsx("px-4 py-2 whitespace-nowrap", className)}>
      {children}
    </td>
  );
}

export default Td;
