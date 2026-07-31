"use client";

import { userStats } from "@/data/profileData";

export default function UserStats() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      {userStats.map((item) => (

        <div
          key={item.id}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
        >

          <h2 className="text-3xl font-bold text-indigo-600">
            {item.value}
          </h2>

          <p className="mt-2 text-slate-500">
            {item.title}
          </p>

        </div>

      ))}

    </div>
  );
}