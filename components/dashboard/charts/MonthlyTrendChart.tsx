"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { monthlyData } from "./chartData";

export default function MonthlyTrendChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <AreaChart data={monthlyData}>

        <defs>

          <linearGradient
            id="feedbackGradient"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor="#2563EB" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#2563EB" stopOpacity={0.05} />
          </linearGradient>

        </defs>

        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="month" />

        <YAxis />

        <Tooltip />

        <Area
          type="monotone"
          dataKey="feedback"
          stroke="#2563EB"
          strokeWidth={3}
          fill="url(#feedbackGradient)"
        />

      </AreaChart>
    </ResponsiveContainer>
  );
}