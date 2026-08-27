import React from "react";
import { Bot } from "lucide-react";
import EStopButton from "./EStopButton";
import ResumeButton from "./ResumeButton";

export default function ControlBar({ onStart, onResume, onStop, resumeDisabled }) {
  return (
    <div className="mc-control-bar">
      <button className="mc-control mc-start" onClick={onStart}>
        <Bot size={17} /> START
      </button>
      <ResumeButton onClick={onResume} disabled={resumeDisabled} />
      <EStopButton onClick={onStop} />
    </div>
  );
}
