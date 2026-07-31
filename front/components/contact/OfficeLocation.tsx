"use client";

import { MapPinned } from "lucide-react";

export default function OfficeLocation() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Office Location
      </h2>

      <div className="flex h-72 items-center justify-center rounded-xl bg-slate-100">

        <div className="text-center">

          <MapPinned
            size={60}
            className="mx-auto text-indigo-600"
          />

          <p className="mt-4 text-slate-500">
            Google Maps Integration Coming Soon
          </p>

        </div>

      </div>

    </div>
  );
}