import React from "react";
import GasCard from "./GasCard";

export default function GasCards({ telemetry }) {
  return (
    <div className="gas-cards-grid">
      <GasCard label="CH₄" value={telemetry.ch4.toFixed(2)} unit=" %" threshold={1.0} />
      <GasCard label="CO" value={telemetry.co} unit=" ppm" threshold={100} type="air" />
      <GasCard label="TEMPERATURE" value={telemetry.temperature.toFixed(1)} unit=" °C" threshold={45} type="temperature" />
      <GasCard label="HUMIDITY" value={telemetry.humidity} unit=" %" threshold={90} type="air" />
      <GasCard label="WATER LEVEL" value={telemetry.water} unit=" %" threshold={80} type="air" />
    </div>
  );
}
