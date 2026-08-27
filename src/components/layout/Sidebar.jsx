import React from "react";
import {
  Activity, Bell, Bot, ChevronLeft, HardHat, LayoutDashboard,
  Map, Menu, Settings, Thermometer, Timer
} from "lucide-react";

export default function Sidebar({ collapsed, setCollapsed, active, setActive }) {
  const items = [
    [LayoutDashboard, "Mission Control"],
    [Bot, "Rover"],
    [Activity, "Sensors"],
    [Thermometer, "Thermal Vision"],
    [Map, "Hazard Map"],
    [Bell, "Alerts"],
    [Timer, "Mission Logs"],
  ];

  return (
    <aside className={`mc-sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="mc-brand">
        <div className="mc-brand-mark"><HardHat size={20} /></div>
        {!collapsed && (
          <div>
            <strong>MINEGUARD</strong>
            <span>AI RESCUE SYSTEM</span>
          </div>
        )}
      </div>

      <button className="mc-collapse" onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? <Menu size={17} /> : <ChevronLeft size={17} />}
      </button>

      <nav className="mc-nav">
        {items.map(([Icon, label]) => (
          <button
            key={label}
            title={collapsed ? label : undefined}
            className={`mc-nav-item ${active === label ? "active" : ""}`}
            onClick={() => setActive(label)}
          >
            <Icon size={18} />
            {!collapsed && <span>{label}</span>}
          </button>
        ))}
      </nav>

      <div className="mc-sidebar-bottom">
        <button className="mc-nav-item">
          <Settings size={18} />
          {!collapsed && <span>Settings</span>}
        </button>
        {!collapsed && (
          <div className="mc-system-online">
            <span className="mc-dot" /> SYSTEM ONLINE
          </div>
        )}
      </div>
    </aside>
  );
}
