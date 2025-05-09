import clsx from "clsx";

import type { HeaderProps } from "./types";

const Header: React.FC<HeaderProps> = ({ title, children, className }) => {
  return (
    <header
      className={clsx(
        "w-full h-[59px] bg-tertiary px-6 shadow-md shadow-black/30 flex items-center justify-between",
        className,
      )}
    >
      <h1 className="text-lg font-medium tracking-wide md:text-base font-inter">
        {title}
      </h1>
      {children && (
        <div className="flex items-center space-x-4">{children}</div>
      )}
    </header>
  );
};

export default Header;
