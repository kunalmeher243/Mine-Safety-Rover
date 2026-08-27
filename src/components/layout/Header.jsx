import React from "react";
import { Radio, Wifi } from "lucide-react";

function Connection({ icon: Icon, label, connected }) {
  return (
    <div className="mc-connection">
      <Icon size={14} />
      <div>
        <span>{label}</span>
        <b className={connected ? "online" : "offline"}>
          {connected ? "CONNECTED" : "OFFLINE"}
        </b>
      </div>
    </div>
  );
}

export default function Header({ telemetry }) {
  return (
    <header className="mc-header">
      <div>
        <div className="mc-eyebrow">SURFACE STATION / MISSION CONTROL</div>
        <h1>MINEGUARD AI</h1>
      </div>

      <div className="mc-header-right">
        <div className="mc-header-stat"><span>MISSION</span><strong>#001</strong></div>
        <div className="mc-header-stat"><span>ROVER</span><strong>#01</strong></div>
        <Connection icon={Radio} label="LoRa" connected={telemetry?.lora ?? true} />
        <Connection icon={Wifi} label="ESP-NOW" connected={telemetry?.espNow ?? true} />
        <div className="mc-clock">19:42:31</div>
      </div>
    </header>
  );
}
