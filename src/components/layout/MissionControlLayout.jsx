import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function MissionControlLayout({ children, sidebarCollapsed, setSidebarCollapsed, active, setActive, telemetry }) {
  return (
    <div className="mc-layout">
      <Sidebar
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        active={active}
        setActive={setActive}
      />
      <main className={`mc-main ${sidebarCollapsed ? "mc-main-collapsed" : ""}`}>
        <Header telemetry={telemetry} />
        <div className="mc-content">{children}</div>
      </main>
    </div>
  );
}
