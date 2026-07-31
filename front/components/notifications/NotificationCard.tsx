"use client";

import { Bell } from "lucide-react";

interface Props {
  title: string;
  description: string;
  time: string;
  type: string;
  status: string;
}

export default function NotificationCard({
  title,
  description,
  time,
  type,
  status,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-lg">

      <div className="flex justify-between">

        <div className="flex gap-4">

          <div className="rounded-xl bg-indigo-100 p-3">

            <Bell
              size={22}
              className="text-indigo-600"
            />

          </div>

          <div>

            <h3 className="font-semibold">
              {title}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {description}
            </p>

            <div className="mt-3 flex gap-3">

              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs text-indigo-600">
                {type}
              </span>

              <span
                className={`rounded-full px-3 py-1 text-xs ${
                  status === "Unread"
                    ? "bg-red-100 text-red-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {status}
              </span>

            </div>

          </div>

        </div>

        <span className="text-sm text-slate-400">
          {time}
        </span>

      </div>

    </div>
  );
}