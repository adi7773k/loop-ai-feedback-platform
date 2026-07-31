"use client";

import { MessageSquare, Smile, Frown, Star } from "lucide-react";
import { statsData } from "@/data/dashboardData";

const icons = [
  <MessageSquare key="feedback" size={28} />,
  <Smile key="positive" size={28} />,
  <Frown key="negative" size={28} />,
  <Star key="rating" size={28} />,
];

export default function StatsCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      {statsData.map((item, index) => (
        <div
          key={item.id}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-slate-500">
                {item.title}
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                {item.value}
              </h2>

              <p className="mt-2 text-sm font-medium text-green-600">
                {item.change}
              </p>
            </div>

            <div
              className={`rounded-xl p-4 ${item.bg} ${item.color}`}
            >
              {icons[index]}
            </div>

          </div>
        </div>
      ))}

    </div>
  );
}