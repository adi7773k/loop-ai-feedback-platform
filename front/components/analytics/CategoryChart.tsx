"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { category: "UI", reviews: 120 },
  { category: "Performance", reviews: 180 },
  { category: "Support", reviews: 95 },
  { category: "Features", reviews: 240 },
  { category: "Pricing", reviews: 160 },
];

export default function CategoryChart() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Feedback by Category
      </h2>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="category" />

            <YAxis />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="reviews"
              stroke="#6366F1"
              fill="#C7D2FE"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}