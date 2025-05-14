import React from "react";

export default function Card({ className, children }) {
  return (
    <div
      className={`p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 ${className}`}
    >
      {children}
    </div>
  );
}
