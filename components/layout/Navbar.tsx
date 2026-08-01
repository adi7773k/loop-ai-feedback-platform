"use client";

import {
  Bell,
  CalendarDays,
  Menu,
  Moon,
  Search,
  Sparkles,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-[290px] right-0 z-40 h-20 border-b border-slate-200 bg-white/90 backdrop-blur-xl">

      <div className="mx-auto flex h-full items-center justify-between px-8">

        {/* LEFT */}

        <div className="flex items-center gap-5">

          {/* Mobile Menu */}

          <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm lg:hidden">

            <Menu size={20} />

          </button>

          {/* Search */}

          <div className="hidden lg:flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition focus-within:ring-2 focus-within:ring-blue-500">

            <Search
              size={18}
              className="text-slate-400"
            />

            <input
              type="text"
              placeholder="Search feedback, reports..."
              className="w-[360px] bg-transparent text-sm outline-none placeholder:text-slate-400"
            />

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-4">

          {/* AI Button */}

          <button className="hidden xl:flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 font-medium text-white shadow-lg transition hover:scale-105">

            <Sparkles size={18} />

            AI Assistant

          </button>

          {/* Date */}

          <button className="hidden xl:flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm hover:bg-slate-50">

            <CalendarDays size={18} />

            <span className="text-sm font-medium">

              This Month

            </span>

          </button>

          {/* Dark Mode */}

          <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition hover:bg-slate-100">

            <Moon size={18} />

          </button>

          {/* Notification */}

          <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition hover:bg-slate-100">

            <Bell size={18} />

            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">

              3

            </span>

          </button>

          {/* User */}

          <button className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm transition hover:shadow-md">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 font-bold text-white">

              Z

            </div>

            <div className="hidden md:block text-left">

              <h4 className="text-sm font-semibold">

                Zara SS

              </h4>

              <p className="text-xs text-slate-500">

                Administrator

              </p>

            </div>

            <ChevronDown
              size={18}
              className="text-slate-500"
            />

          </button>

        </div>

      </div>

    </header>
  );
}