"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { themeData } from "@/data/chartData";

export default function ThemeChart() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-5 dark:text-white">
        Top Feedback Themes
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={themeData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="theme" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="count"
            fill="#2563eb"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}