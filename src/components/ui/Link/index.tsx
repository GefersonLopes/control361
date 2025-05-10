import clsx from "clsx";
import React from "react";

import type { LinkProps } from "./types";

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className,
  ...rest
}) => (
  <a
    href={href}
    className={clsx("text-white underline underline-offset-3", className)}
    {...rest}
  >
    {children}
  </a>
);
