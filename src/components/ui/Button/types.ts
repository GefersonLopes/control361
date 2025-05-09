import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;
