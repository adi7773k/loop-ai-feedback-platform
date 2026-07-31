"use client";

import { Download } from "lucide-react";

export default function AnalyticsHeader() {
  return (
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

      <div>
        <h1 className="text-3xl font-bold">
          Analytics
        </h1>

        <p className="mt-2 text-slate-500">
          AI-powered customer feedback analytics.
        </p>
      </div>

      <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700">

        <Download size={18} />

        Export Report

      </button>

    </div>
  );
}