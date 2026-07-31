"use client";

import { Filter, CalendarDays } from "lucide-react";

export default function DashboardFilters() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-2">
        <Filter size={20} className="text-indigo-600" />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>

      <div className="flex flex-col gap-3 md:flex-row">
        <select className="rounded-xl border border-slate-300 px-4 py-2 outline-none focus:border-indigo-500">
          <option>All Products</option>
          <option>Website</option>
          <option>Dashboard</option>
          <option>Mobile App</option>
        </select>

        <select className="rounded-xl border border-slate-300 px-4 py-2 outline-none focus:border-indigo-500">
          <option>All Ratings</option>
          <option>5 Star</option>
          <option>4 Star</option>
          <option>3 Star</option>
        </select>

        <button className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700">
          <CalendarDays size={18} />
          Last 30 Days
        </button>
      </div>
    </div>
  );
}