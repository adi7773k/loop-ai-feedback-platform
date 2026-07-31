"use client";

import { AlertTriangle } from "lucide-react";

export default function DangerZone() {
  return (
    <div className="rounded-2xl border border-red-300 bg-red-50 p-6 shadow-sm">

      <div className="flex items-start gap-4">

        <div className="rounded-xl bg-red-100 p-3">

          <AlertTriangle
            className="text-red-600"
            size={24}
          />

        </div>

        <div className="flex-1">

          <h2 className="text-xl font-bold text-red-700">
            Danger Zone
          </h2>

          <p className="mt-2 text-red-600">
            Deleting your account is permanent and cannot be undone.
          </p>

          <button className="mt-6 rounded-xl bg-red-600 px-6 py-3 text-white transition hover:bg-red-700">

            Delete Account

          </button>

        </div>

      </div>

    </div>
  );
}