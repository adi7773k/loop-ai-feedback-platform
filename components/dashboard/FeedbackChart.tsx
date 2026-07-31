"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

import { feedbackData } from "@/data/chartData";

export default function FeedbackChart() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold">
        Monthly Feedback
      </h2>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={feedbackData}>

            <XAxis dataKey="month" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="feedback"
              stroke="#6D5EF5"
              fill="#C7D2FE"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}