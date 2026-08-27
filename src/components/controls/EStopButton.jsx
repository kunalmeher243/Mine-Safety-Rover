import React from "react";
import { ShieldAlert } from "lucide-react";

export default function EStopButton({ onClick, disabled = false }) {
  return (
    <button className="mc-control mc-estop" disabled={disabled} onClick={onClick}>
      <ShieldAlert size={19} />
      <span>EMERGENCY STOP</span>
    </button>
  );
}
