import React from "react";
import { BatteryCharging, Bot } from "lucide-react";
import Card from "../ui/Card";
import StatusBadge from "../ui/StatusBadge";
import ProgressBar from "../ui/ProgressBar";

function Metric({ label, value }) {
  return (
    <div className="mc-metric">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export default function RoverStatusCard({ telemetry }) {
  return (
    <Card title="ROVER STATUS" icon={Bot} className="rover-status-card">
      <StatusBadge status={telemetry.status} />

      <div className="mc-metrics-grid">
        <Metric label="Distance" value={`${telemetry.distance.toFixed(2)} m`} />
        <Metric label="Heading" value={`${String(telemetry.heading).padStart(3, "0")}°`} />
        <Metric label="Speed" value={`${telemetry.speed.toFixed(2)} m/s`} />
        <Metric label="Battery" value={`${telemetry.battery}%`} />
      </div>

      <div className="mc-progress-label">
        <span><BatteryCharging size={14} /> Battery</span>
        <b>{telemetry.battery}%</b>
      </div>
      <ProgressBar value={telemetry.battery} />
    </Card>
  );
}
