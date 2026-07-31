"use client";

import { Monitor, Moon, Sun } from "lucide-react";

export default function AppearanceSettings() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">
        Appearance
      </h2>

      <p className="mb-6 text-sm text-slate-500">
        Choose your preferred application theme.
      </p>

      <div className="grid gap-4 md:grid-cols-3">

        <button className="rounded-xl border-2 border-indigo-600 bg-indigo-50 p-6 transition hover:shadow-md">
          <Sun className="mx-auto mb-3 text-yellow-500" size={32} />
          <h3 className="font-semibold">Light</h3>
          <p className="mt-2 text-sm text-slate-500">
            Bright interface
          </p>
        </button>

        <button className="rounded-xl border border-slate-200 p-6 transition hover:border-indigo-500 hover:shadow-md">
          <Moon className="mx-auto mb-3 text-slate-700" size={32} />
          <h3 className="font-semibold">Dark</h3>
          <p className="mt-2 text-sm text-slate-500">
            Dark interface
          </p>
        </button>

        <button className="rounded-xl border border-slate-200 p-6 transition hover:border-indigo-500 hover:shadow-md">
          <Monitor className="mx-auto mb-3 text-indigo-600" size={32} />
          <h3 className="font-semibold">System</h3>
          <p className="mt-2 text-sm text-slate-500">
            Match system theme
          </p>
        </button>

      </div>
    </div>
  );
}