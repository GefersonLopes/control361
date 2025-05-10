import clsx from "clsx";

import type { RadioProps } from "./types";

export default function Radio({
  id,
  name,
  value,
  label,
  checked,
  onChange,
  className,
  ...props
}: RadioProps) {
  return (
    <div className={clsx("flex items-center gap-4", className)}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only"
        {...props}
      />

      <label
        htmlFor={id}
        className="flex items-center cursor-pointer select-none"
      >
        <span
          aria-hidden="true"
          className={clsx(
            "inline-flex items-center justify-center",
            "w-5 h-5 border-2 rounded-full",
            "border-[var(--color-primary)]",
            "transition-colors",
          )}
        >
          <span
            aria-hidden="true"
            className={clsx(
              "w-2.5 h-2.5 rounded-full",
              "bg-[var(--color-primary)]",
              checked ? "opacity-100" : "opacity-0",
              "transition-opacity",
            )}
          />
        </span>

        <span className="ml-2 text-xs font-inter text-[var(--color-light)]">
          {label}
        </span>
      </label>
    </div>
  );
}
