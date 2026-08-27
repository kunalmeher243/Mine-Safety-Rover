# MineGuard AI — Modular React Components

## Components created

### Layout
- MissionControlLayout
- Sidebar
- Header

### UI
- Card
- StatusBadge
- ProgressBar

### Rover
- RoverStatusCard
- LiveVideo

### Sensors
- GasCard
- GasCards
- SensorCharts

### Alerts
- AlertPanel

### Controls
- EStopButton
- ResumeButton
- ControlBar
- ConfirmDialog

### Communication
- CommunicationStatus

### Vision
- ThermalMap

### Map
- TunnelMap

### Mission
- MissionTimeline
- ExportButton

### Dashboard
- DashboardGrid

## Run

```bash
npm install
npm run dev
```

## Real backend integration

Replace the demo data in `src/App.jsx` with Socket.IO telemetry from your Python gateway.

Suggested structure:

```js
{
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
  thermal: []
}
```

For the real MJPEG stream, pass its URL to `LiveVideo`.

For E-STOP and RESUME, replace the console handlers in `App.jsx` with your Socket.IO/LoRa command events.
