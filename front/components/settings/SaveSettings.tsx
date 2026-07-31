"use client";

import { Save } from "lucide-react";

export default function SaveSettings() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <h2 className="text-xl font-bold">
            Save Changes
          </h2>

          <p className="mt-2 text-slate-500">
            Save all your updated settings.
          </p>

        </div>

        <button className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-700">

          <Save size={20} />

          Save Settings

        </button>

      </div>

    </div>
  );
}