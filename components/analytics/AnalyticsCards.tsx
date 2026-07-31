"use client";

import {
  MessageSquare,
  Smile,
  Frown,
  Star,
} from "lucide-react";

import { analyticsCards } from "@/data/analyticsData";

const icons = [
  MessageSquare,
  Smile,
  Frown,
  Star,
];

export default function AnalyticsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {analyticsCards.map((card, index) => {

        const Icon = icons[index];

        return (

          <div
            key={card.id}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {card.value}
                </h2>

                <p className="mt-2 text-sm font-medium text-green-600">
                  {card.growth}
                </p>

              </div>

              <div className={`rounded-xl p-4 ${card.color}`}>

                <Icon className={card.text} size={28} />

              </div>

            </div>

          </div>

        );

      })}

    </div>
  );
}