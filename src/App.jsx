import React, { useState } from "react";
import MissionControlLayout from "./components/layout/MissionControlLayout";
import DashboardGrid from "./components/dashboard/DashboardGrid";
import ControlBar from "./components/controls/ControlBar";
import ConfirmDialog from "./components/controls/ConfirmDialog";
import ExportButton from "./components/mission/ExportButton";
import "./styles.css";

const telemetry = {
  status: "RUNNING",
  distance: 27.42,
  heading: 84,
  speed: 0.34,
  battery: 78,
  ch4: 0.42,
  co: 18,
  temperature: 31.4,
  humidity: 68,
  water: 12,
  lora: true,
  espNow: true,
  lastPacket: 420,
  mapX: 315,
  mapY: 65,
};

const history = Array.from({ length: 18 }, (_, i) => ({
  time: `19:${String((i * 3) % 60).padStart(2, "0")}`,
  ch4: 0.28 + Math.sin(i / 3) * 0.06 + i * 0.004,
  co: 15 + Math.sin(i / 2) * 2 + i * 0.15,
}));

const alerts = [
  { type: "warning", title: "Possible Survivor", text: "Thermal body blob detected", time: "19:41:52" },
  { type: "info", title: "Junction Detected", text: "Rover turned right", time: "19:40:23" },
  { type: "success", title: "Obstacle Cleared", text: "Front clearance restored", time: "19:39:18" },
];

const events = [
  { time: "19:42:18", title: "Gas monitoring normal", type: "info" },
  { time: "19:41:52", title: "Possible Survivor scan", type: "warning" },
  { time: "19:40:23", title: "Junction detected — right turn", type: "info" },
  { time: "19:39:18", title: "Obstacle cleared", type: "warning" },
  { time: "19:37:02", title: "Rover started", type: "success" },
];

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("Mission Control");
  const [showStop, setShowStop] = useState(false);

  return (
    <>
      <MissionControlLayout
        sidebarCollapsed={collapsed}
        setSidebarCollapsed={setCollapsed}
        active={active}
        setActive={setActive}
        telemetry={telemetry}
      >
        <div className="mc-page-head">
          <div>
            <span>MISSION #001 / ROVER #01</span>
            <h2>Underground Mission Control</h2>
          </div>
        </div>

        <DashboardGrid
          telemetry={telemetry}
          history={history}
          alerts={alerts}
          events={events}
        />

        <div className="mc-footer-actions">
          <ExportButton onExport={() => alert("Connect this to your CSV export endpoint.")} />
        </div>

        <ControlBar
          onStart={() => console.log("START")}
          onResume={() => console.log("RESUME")}
          onStop={() => setShowStop(true)}
          resumeDisabled={false}
        />
      </MissionControlLayout>

      <ConfirmDialog
        open={showStop}
        onCancel={() => setShowStop(false)}
        onConfirm={() => {
          console.log("STOP command");
          setShowStop(false);
        }}
      />
    </>
  );
}
