import React from "react";
import RoverStatusCard from "../rover/RoverStatusCard";
import LiveVideo from "../rover/LiveVideo";
import GasCards from "../sensors/GasCards";
import SensorCharts from "../sensors/SensorCharts";
import AlertPanel from "../alerts/AlertPanel";
import CommunicationStatus from "../communication/CommunicationStatus";
import ThermalMap from "../vision/ThermalMap";
import TunnelMap from "../map/TunnelMap";
import MissionTimeline from "../mission/MissionTimeline";

export default function DashboardGrid({ telemetry, history, alerts, events }) {
  return (
    <div className="mc-dashboard-grid">
      <RoverStatusCard telemetry={telemetry} />
      <LiveVideo connected={telemetry.espNow} streamUrl={telemetry.videoUrl} />
      <AlertPanel alerts={alerts} />
      <GasCards telemetry={telemetry} />
      <TunnelMap roverX={telemetry.mapX ?? 315} roverY={telemetry.mapY ?? 65} />
      <ThermalMap temperatures={telemetry.thermal} />
      <SensorCharts data={history} />
      <CommunicationStatus telemetry={telemetry} />
      <MissionTimeline events={events} />
    </div>
  );
}
