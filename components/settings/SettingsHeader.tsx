"use client";

import { Settings } from "lucide-react";

export default function SettingsHeader() {
  return (
    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

      <div>

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-indigo-100 p-3">
            <Settings
              className="text-indigo-600"
              size={24}
            />
          </div>

          <div>

            <h1 className="text-3xl font-bold text-slate-900">
              Settings
            </h1>

            <p className="mt-1 text-slate-500">
              Manage your account preferences and application settings.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}