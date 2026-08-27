import React from "react";

export default function StatusBadge({ status }) {
  const key = String(status).toLowerCase().replace(/\s+/g, "-");

  return (
    <span className={`mc-badge mc-badge-${key}`}>
      <span className="mc-badge-dot" />
      {status}
    </span>
  );
}
