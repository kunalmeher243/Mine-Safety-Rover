import React from "react";
import { Activity } from "lucide-react";
import {
  Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis
} from "recharts";
import Card from "../ui/Card";

export default function SensorCharts({ data }) {
  return (
    <Card title="REAL-TIME SENSOR HISTORY" icon={Activity} className="sensor-charts-card">
      <div className="mc-chart">
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="ch4Gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#26313b" strokeDasharray="3 3" />
            <XAxis dataKey="time" stroke="#6f7d88" fontSize={10} />
            <YAxis stroke="#6f7d88" fontSize={10} />
            <Tooltip
              contentStyle={{
                background: "#10161c",
                border: "1px solid #2a3540",
                borderRadius: 8,
                color: "#fff"
              }}
            />
            <Area type="monotone" dataKey="ch4" stroke="#f59e0b" fill="url(#ch4Gradient)" strokeWidth={2} />
            <Area type="monotone" dataKey="co" stroke="#60a5fa" fill="transparent" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
