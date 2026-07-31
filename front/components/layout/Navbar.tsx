"use client";

import { Bell, CalendarDays, Menu, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 right-0 left-0 lg:left-72 z-40 h-20 border-b border-slate-200 bg-white/80 backdrop-blur-xl">

      <div className="flex h-full items-center justify-between px-8">

        {/* Left */}
        <div className="flex items-center gap-5">

          <button className="rounded-xl border border-slate-200 p-3 hover:bg-slate-100 lg:hidden">

            <Menu size={20} />

          </button>

          <div className="hidden lg:flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">

            <Search
              size={18}
              className="text-slate-400"
            />

            <input
              type="text"
              placeholder="Search anything..."
              className="w-72 bg-transparent text-sm outline-none"
            />

          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-5">

          {/* Date */}

          <button className="hidden xl:flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">

            <CalendarDays size={18} />

            <span className="text-sm">
              May 12, 2024 - Jun 12, 2024
            </span>

          </button>

          {/* Notification */}

          <button className="relative rounded-xl border border-slate-200 bg-white p-3 shadow-sm hover:bg-slate-100">

            <Bell size={19} />

            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              3
            </span>

          </button>

          {/* Profile */}

          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">

              Z

            </div>

            <div className="hidden md:block">

              <h4 className="font-semibold">
                Zara
              </h4>

              <p className="text-xs text-slate-500">
                Administrator
              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}