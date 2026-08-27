import React from "react";
import { Camera, WifiOff } from "lucide-react";
import Card from "../ui/Card";

export default function LiveVideo({ connected = true, streamUrl = "" }) {
  return (
    <Card title="LIVE ROVER CAMERA" icon={Camera} className="live-video-card">
      <div className={`mc-video-frame ${connected ? "" : "offline"}`}>
        {connected ? (
          streamUrl ? (
            <img src={streamUrl} alt="Live rover camera" className="mc-video-img" />
          ) : (
            <div className="mc-video-placeholder">
              <Camera size={42} />
              <strong>MJPEG LIVE STREAM</strong>
              <span>1080p / ESP-NOW / RELAY #01</span>
            </div>
          )
        ) : (
          <div className="mc-video-placeholder">
            <WifiOff size={42} />
            <strong>VIDEO SIGNAL LOST</strong>
            <span>Safety telemetry remains active via LoRa</span>
          </div>
        )}
        {connected && <span className="mc-live-pill"><i /> LIVE</span>}
      </div>
    </Card>
  );
}
