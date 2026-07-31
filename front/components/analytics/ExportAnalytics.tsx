"use client";

import { Download, FileSpreadsheet, FileText } from "lucide-react";

export default function ExportAnalytics() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Export Analytics
      </h2>

      <div className="grid gap-4 md:grid-cols-3">

        <button className="flex items-center justify-center gap-3 rounded-xl bg-indigo-600 px-5 py-4 text-white transition hover:bg-indigo-700">

          <Download size={20} />

          Export CSV

        </button>

        <button className="flex items-center justify-center gap-3 rounded-xl border border-slate-300 px-5 py-4 transition hover:bg-slate-100">

          <FileSpreadsheet size={20} />

          Excel

        </button>

        <button className="flex items-center justify-center gap-3 rounded-xl border border-slate-300 px-5 py-4 transition hover:bg-slate-100">

          <FileText size={20} />

          PDF Report

        </button>

      </div>

    </div>
  );
}