import React, { useMemo } from "react";
import { Thermometer, UserRoundSearch } from "lucide-react";
import Card from "../ui/Card";

export default function ThermalMap({ temperatures }) {
  const pixels = useMemo(() => {
    if (temperatures?.length === 768) return temperatures;
    return Array.from({ length: 768 }, (_, i) => {
      const x = i % 32;
      const y = Math.floor(i / 32);
      const d = Math.sqrt((x - 19) ** 2 + (y - 11) ** 2);
      return 25 + Math.max(0, 38 - d * 3.5);
    });
  }, [temperatures]);

  const min = 20;
  const max = 45;

  return (
    <Card title="THERMAL VISION" icon={Thermometer} className="thermal-map-card">
      <div className="thermal-grid">
        {pixels.map((temperature, i) => {
          const intensity = Math.max(0, Math.min(1, (temperature - min) / (max - min)));
          return (
            <div
              key={i}
              className="thermal-pixel"
              style={{ opacity: 0.12 + intensity * 0.88 }}
              title={`${Number(temperature).toFixed(1)}°C`}
            />
          );
        })}
      </div>

      <div className="mc-survivor-alert">
        <UserRoundSearch size={17} />
        <div>
          <strong>POSSIBLE SURVIVOR</strong>
          <span>Thermal body blob detected</span>
        </div>
      </div>
    </Card>
  );
}
