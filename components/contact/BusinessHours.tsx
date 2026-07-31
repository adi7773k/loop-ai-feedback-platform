"use client";

import { businessHours } from "@/data/contactData";

export default function BusinessHours() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Business Hours
      </h2>

      <div className="space-y-3">

        {businessHours.map((item) => (

          <div
            key={item.day}
            className="flex justify-between border-b pb-2"
          >

            <span>{item.day}</span>

            <span className="text-slate-500">
              {item.time}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}