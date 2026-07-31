"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { rating: "1★", count: 12 },
  { rating: "2★", count: 26 },
  { rating: "3★", count: 54 },
  { rating: "4★", count: 140 },
  { rating: "5★", count: 320 },
];

export default function RatingChart() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Rating Distribution
      </h2>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="rating" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="count"
              fill="#4F46E5"
              radius={[6, 6, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}