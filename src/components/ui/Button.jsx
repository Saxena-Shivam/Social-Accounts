import React from "react";

export default function Button({ className, onClick, children }) {
  return (
    <button
      className={`px-4 py-2 rounded-md transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
