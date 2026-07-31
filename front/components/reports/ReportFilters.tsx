"use client";

import { Search, CalendarDays, Filter } from "lucide-react";

export default function ReportFilters() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        {/* Search */}

        <div className="relative w-full lg:w-96">

          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search reports..."
            className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 outline-none focus:border-indigo-600"
          />

        </div>

        {/* Filters */}

        <div className="flex flex-col gap-3 md:flex-row">

          <select className="rounded-xl border border-slate-300 px-4 py-3 outline-none">

            <option>All Status</option>
            <option>Completed</option>
            <option>Pending</option>

          </select>

          <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 hover:bg-slate-100">

            <CalendarDays size={18} />

            Last 30 Days

          </button>

          <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700">

            <Filter size={18} />

            Apply

          </button>

        </div>

      </div>

    </div>
  );
}