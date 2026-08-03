"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

import { sentimentData } from "./chartData";

export default function SentimentPieChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>

      <PieChart>

        <Pie
          data={sentimentData}
          innerRadius={70}
          outerRadius={110}
          dataKey="value"
        >

          {sentimentData.map((entry) => (

            <Cell
              key={entry.name}
              fill={entry.color}
            />

          ))}

        </Pie>

        <Tooltip />

      </PieChart>

    </ResponsiveContainer>
  );
}