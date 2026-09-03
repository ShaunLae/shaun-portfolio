import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  radius?: "lg" | "md";
}

export function Card({ children, className = "", radius = "lg" }: CardProps) {
  const glass = radius === "md" ? "glass-md" : "glass";
  return <div className={`${glass} ${className}`.trim()}>{children}</div>;
}
