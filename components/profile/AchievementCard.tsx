"use client";

import { Award } from "lucide-react";

const achievements = [
  "Top Reviewer",
  "1000+ Feedback Reviewed",
  "Analytics Expert",
  "Project Administrator",
];

export default function AchievementCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Achievements
      </h2>

      <div className="space-y-4">

        {achievements.map((achievement) => (

          <div
            key={achievement}
            className="flex items-center gap-3 rounded-xl bg-yellow-50 p-4"
          >

            <Award
              className="text-yellow-600"
              size={22}
            />

            <span className="font-medium">
              {achievement}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}