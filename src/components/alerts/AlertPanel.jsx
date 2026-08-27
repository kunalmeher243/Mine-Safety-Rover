import React from "react";
import { Activity, AlertTriangle, Bell, CheckCircle2 } from "lucide-react";
import Card from "../ui/Card";

function AlertItem({ type, title, text, time }) {
  const Icon = type === "warning" ? AlertTriangle : type === "success" ? CheckCircle2 : Activity;

  return (
    <div className={`mc-alert-item ${type}`}>
      <Icon size={18} />
      <div>
        <strong>{title}</strong>
        <span>{text}</span>
      </div>
      <time>{time}</time>
    </div>
  );
}

export default function AlertPanel({ alerts = [] }) {
  return (
    <Card title="ACTIVE ALERTS" icon={Bell} className="alert-panel">
      <div className="mc-alert-list">
        {alerts.length ? alerts.map((alert, i) => <AlertItem key={i} {...alert} />) : (
          <div className="mc-no-alerts"><CheckCircle2 size={20} /> No active alerts</div>
        )}
      </div>
    </Card>
  );
}
