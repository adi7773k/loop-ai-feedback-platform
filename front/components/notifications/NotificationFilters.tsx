"use client";

import { Search } from "lucide-react";

export default function NotificationFilters() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex flex-col gap-4 lg:flex-row">

        <div className="relative flex-1">

          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search notifications..."
            className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 outline-none focus:border-indigo-600"
          />

        </div>

        <select className="rounded-xl border border-slate-300 px-4 py-3">

          <option>All Status</option>
          <option>Unread</option>
          <option>Read</option>

        </select>

        <select className="rounded-xl border border-slate-300 px-4 py-3">

          <option>All Types</option>
          <option>AI</option>
          <option>Report</option>
          <option>Alert</option>
          <option>Account</option>

        </select>

      </div>

    </div>
  );
}