"use client";

import { CheckCheck } from "lucide-react";

export default function MarkAllRead() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold">
            Notification Actions
          </h2>

          <p className="mt-2 text-slate-500">
            Mark all notifications as read.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700">

          <CheckCheck size={20} />

          Mark All Read

        </button>

      </div>

    </div>
  );
}