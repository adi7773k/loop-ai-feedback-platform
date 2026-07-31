"use client";

import { Bell, Search } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="mb-8 flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">

      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-1 text-slate-500">
          Welcome back! Here's your feedback analytics overview.
        </p>
      </div>

      <div className="flex w-full items-center gap-4 md:w-auto">

        {/* Search */}

        <div className="flex flex-1 items-center rounded-xl border border-slate-200 bg-white px-4 py-2 shadow-sm md:w-80">

          <Search size={18} className="text-slate-400" />

          <input
            type="text"
            placeholder="Search..."
            className="ml-2 w-full bg-transparent outline-none"
          />

        </div>

        {/* Notification */}

        <button className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition hover:bg-slate-100">

          <Bell size={20} />

        </button>

      </div>

    </div>
  );
}