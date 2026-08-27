import React from "react";
import { ShieldAlert, X } from "lucide-react";

export default function ConfirmDialog({ open, title = "Emergency Stop", onCancel, onConfirm }) {
  if (!open) return null;

  return (
    <div className="mc-modal-backdrop" role="dialog" aria-modal="true">
      <div className="mc-modal">
        <button className="mc-modal-close" onClick={onCancel} aria-label="Close">
          <X size={18} />
        </button>

        <ShieldAlert size={34} className="mc-modal-icon" />
        <h2>{title}</h2>
        <p>
          Immediately halt Rover #01? The STOP command will be sent through
          the LoRa control channel.
        </p>

        <div className="mc-modal-actions">
          <button className="mc-control mc-secondary" onClick={onCancel}>CANCEL</button>
          <button className="mc-control mc-estop" onClick={onConfirm}>STOP ROVER</button>
        </div>
      </div>
    </div>
  );
}
