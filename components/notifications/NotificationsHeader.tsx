"use client";

import { Bell } from "lucide-react";

export default function NotificationsHeader() {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

      <div className="flex items-center gap-4">

        <div className="rounded-xl bg-indigo-100 p-3">
          <Bell
            size={28}
            className="text-indigo-600"
          />
        </div>

        <div>

          <h1 className="text-3xl font-bold">
            Notifications
          </h1>

          <p className="mt-2 text-slate-500">
            Stay updated with your latest activities.
          </p>

        </div>

      </div>

      <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-700">

        Mark All Read

      </button>

    </div>
  );
}