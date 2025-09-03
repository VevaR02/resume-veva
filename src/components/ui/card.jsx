import * as React from "react";

export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`rounded-lg border bg-white dark:bg-gray-800 shadow ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}
