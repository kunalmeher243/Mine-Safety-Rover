import React from "react";
import { Download } from "lucide-react";

export default function ExportButton({ onExport }) {
  return (
    <button className="mc-export" onClick={onExport}>
      <Download size={16} />
      Export Session CSV
    </button>
  );
}
