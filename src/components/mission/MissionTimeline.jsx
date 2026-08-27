import React from "react";
import { Timer } from "lucide-react";
import Card from "../ui/Card";

export default function MissionTimeline({ events = [] }) {
  return (
    <Card title="MISSION EVENTS" icon={Timer} className="mission-timeline">
      <div className="mc-timeline">
        {events.map((event, index) => (
          <div className="mc-timeline-item" key={event.id ?? index}>
            <span className={`mc-timeline-dot ${event.type || "info"}`} />
            <time>{event.time}</time>
            <strong>{event.title}</strong>
            {event.description && <span>{event.description}</span>}
          </div>
        ))}
      </div>
    </Card>
  );
}
