import React from "react";
import { Map } from "lucide-react";
import Card from "../ui/Card";

export default function TunnelMap({
  roverX = 315,
  roverY = 65,
  hazards = [{ x: 470, y: 65 }],
  survivors = [{ x: 610, y: 190 }]
}) {
  return (
    <Card title="TUNNEL / HAZARD MAP" icon={Map} className="tunnel-map-card">
      <svg viewBox="0 0 720 260" className="tunnel-svg" role="img" aria-label="Underground tunnel map">
        <path d="M50 130 H245 V65 H470 V190 H665" className="tunnel-line" />
        <circle cx="50" cy="130" r="8" className="start-marker" />

        <circle cx={roverX} cy={roverY} r="10" className="rover-marker" />
        <text x={roverX - 20} y={roverY - 23}>ROVER</text>

        {hazards.map((h, i) => (
          <g key={`h-${i}`}>
            <circle cx={h.x} cy={h.y} r="18" className="hazard-marker" />
            <text x={h.x - 27} y={h.y - 27}>GAS ZONE</text>
          </g>
        ))}

        {survivors.map((s, i) => (
          <g key={`s-${i}`}>
            <circle cx={s.x} cy={s.y} r="13" className="survivor-marker" />
            <text x={s.x - 35} y={s.y + 32}>SURVIVOR</text>
          </g>
        ))}

        <text x="38" y="110">START</text>
      </svg>

      <div className="map-legend">
        <span><i className="legend rover" />Rover</span>
        <span><i className="legend danger" />Danger zone</span>
        <span><i className="legend survivor" />Possible survivor</span>
      </div>
    </Card>
  );
}
