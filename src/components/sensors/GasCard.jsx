import React from "react";
import { Activity, Thermometer, Zap } from "lucide-react";
import Card from "../ui/Card";
import StatusBadge from "../ui/StatusBadge";

const icons = {
  gas: Zap,
  air: Activity,
  temperature: Thermometer,
};

export default function GasCard({ label, value, unit, threshold, type = "gas" }) {
  const Icon = icons[type] || Activity;
  const numeric = Number(value);
  const danger = numeric >= threshold;
  const warning = numeric >= threshold * 0.65;
  const state = danger ? "DANGER" : warning ? "WARNING" : "NORMAL";

  return (
    <Card className={`gas-card ${danger ? "danger" : warning ? "warning" : ""}`}>
      <div className="mc-sensor-top">
        <span>{label}</span>
        <Icon size={16} />
      </div>
      <div className="mc-sensor-value">
        {value}<small>{unit}</small>
      </div>
      <StatusBadge status={state} />
    </Card>
  );
}
