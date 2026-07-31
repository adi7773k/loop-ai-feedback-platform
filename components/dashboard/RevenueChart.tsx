"use client";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", feedback: 400 },
  { month: "Feb", feedback: 650 },
  { month: "Mar", feedback: 500 },
  { month: "Apr", feedback: 850 },
  { month: "May", feedback: 920 },
  { month: "Jun", feedback: 1200 },
  { month: "Jul", feedback: 1100 },
];

export default function RevenueChart() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-900">
          Feedback Overview
        </h2>

        <p className="text-sm text-slate-500">
          Monthly feedback trend
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="feedback"
              stroke="#4F46E5"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}