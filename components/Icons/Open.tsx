import React from "react";

function Open({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      className={`fill-current ${className}`}
      viewBox="0 0 16 16"
      color="currentColor"
    >
      <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
      <path d="M8 0a8 8 0 110 16A8 8 0 018 0zM1.5 8a6.5 6.5 0 1013 0 6.5 6.5 0 00-13 0z"></path>
    </svg>
  );
}

export default Open;
