"use client";

import { LifeBuoy } from "lucide-react";

export default function HelpHeader() {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

      <div className="flex items-center gap-4">

        <div className="rounded-xl bg-indigo-100 p-3">
          <LifeBuoy
            size={28}
            className="text-indigo-600"
          />
        </div>

        <div>

          <h1 className="text-3xl font-bold">
            Help Center
          </h1>

          <p className="mt-2 text-slate-500">
            Find answers, documentation and support resources.
          </p>

        </div>

      </div>

    </div>
  );
}