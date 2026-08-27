import React from "react";

export default function ProgressBar({ value = 0, variant = "default" }) {
  const safe = Math.max(0, Math.min(100, Number(value) || 0));

  return (
    <div className={`mc-progress ${variant}`}>
      <div style={{ width: `${safe}%` }} />
    </div>
  );
}
