import React from "react";
import { RotateCcw } from "lucide-react";

export default function ResumeButton({ onClick, disabled = false }) {
  return (
    <button className="mc-control mc-resume" disabled={disabled} onClick={onClick}>
      <RotateCcw size={17} />
      <span>RESUME</span>
    </button>
  );
}
