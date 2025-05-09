import clsx from "clsx";

import type { RadioProps } from "./type";

export default function Radio({
  id,
  name,
  value,
  label,
  checked,
  onChange,
  className,
}: RadioProps) {
  return (
    <label htmlFor={id} className="cursor-pointer flex items-center gap-4">
      <div className="grid place-items-center">
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className={clsx(
            "peer col-start-1 row-start-1 appearance-none shrink-0 w-5 h-5 border-2",
            "border-[var(--color-primary)] rounded-full cursor-pointer",
            className,
          )}
        />

        <div
          className={clsx(
            "col-start-1 row-start-1 w-2.5 h-2.5 rounded-full",
            "bg-[var(--color-primary)] opacity-0 peer-checked:opacity-100 transition-opacity",
            className,
          )}
        />
      </div>

      <span className="text-[var(--color-light)] select-none font-inter text-medium text-xs">
        {label}
      </span>
    </label>
  );
}
