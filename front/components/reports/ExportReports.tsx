"use client";

import {
  Download,
  FileSpreadsheet,
  FileText,
  File,
} from "lucide-react";

export default function ExportReports() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Export Report
      </h2>

      <div className="space-y-4">

        <button className="flex w-full items-center justify-between rounded-xl bg-indigo-600 px-5 py-4 text-white transition hover:bg-indigo-700">

          <div className="flex items-center gap-3">
            <Download size={20} />
            Export CSV
          </div>

        </button>

        <button className="flex w-full items-center justify-between rounded-xl border border-slate-300 px-5 py-4 transition hover:bg-slate-100">

          <div className="flex items-center gap-3">
            <FileSpreadsheet size={20} />
            Export Excel
          </div>

        </button>

        <button className="flex w-full items-center justify-between rounded-xl border border-slate-300 px-5 py-4 transition hover:bg-slate-100">

          <div className="flex items-center gap-3">
            <FileText size={20} />
            Export PDF
          </div>

        </button>

        <button className="flex w-full items-center justify-between rounded-xl border border-slate-300 px-5 py-4 transition hover:bg-slate-100">

          <div className="flex items-center gap-3">
            <File size={20} />
            Export DOCX
          </div>

        </button>

      </div>

    </div>
  );
}