"use client";

import { Download, Eye } from "lucide-react";
import { reports } from "@/data/reportsData";

export default function ReportsTable() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">

      <div className="border-b border-slate-200 p-6">

        <h2 className="text-xl font-bold">
          Reports List
        </h2>

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-50">

            <tr>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Report ID
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Title
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Date
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Type
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Status
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {reports.map((report) => (

              <tr
                key={report.id}
                className="border-t border-slate-100 hover:bg-slate-50"
              >

                <td className="px-6 py-4 font-medium">
                  {report.id}
                </td>

                <td className="px-6 py-4">
                  {report.title}
                </td>

                <td className="px-6 py-4">
                  {report.date}
                </td>

                <td className="px-6 py-4">
                  {report.type}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      report.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {report.status}
                  </span>

                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-3">

                    <button className="rounded-lg p-2 hover:bg-slate-100">

                      <Eye size={18} />

                    </button>

                    <button className="rounded-lg p-2 hover:bg-slate-100">

                      <Download size={18} />

                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}