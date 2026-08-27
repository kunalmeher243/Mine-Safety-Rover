import React from "react";
import { CheckCircle2, Radio } from "lucide-react";
import Card from "../ui/Card";
import StatusBadge from "../ui/StatusBadge";
import ProgressBar from "../ui/ProgressBar";

function Row({ label, connected, value }) {
  return (
    <div className="mc-comm-row">
      <div className="mc-comm-head">
        <span>{label}</span>
        <StatusBadge status={connected ? "CONNECTED" : "DISCONNECTED"} />
      </div>
      <ProgressBar value={value} />
    </div>
  );
}

export default function CommunicationStatus({ telemetry }) {
  return (
    <Card title="COMMUNICATION HEALTH" icon={Radio} className="communication-status">
      <Row label="LoRa" connected={telemetry.lora} value={telemetry.lora ? 96 : 0} />
      <Row label="ESP-NOW" connected={telemetry.espNow} value={telemetry.espNow ? 78 : 0} />

      <div className="mc-packet-age">
        <span>Last LoRa packet</span>
        <strong>{telemetry.lastPacket} ms ago</strong>
      </div>

      {!telemetry.espNow && (
        <div className="mc-resilience">
          <CheckCircle2 size={15} />
          <span>Gas telemetry, rover status and position remain active via LoRa.</span>
        </div>
      )}
    </Card>
  );
}
