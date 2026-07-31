"use client";

import {
  FileText,
  CheckCircle,
  Clock,
  Download,
} from "lucide-react";

import { reportStats } from "@/data/reportsData";

const icons = [
  FileText,
  CheckCircle,
  Clock,
  Download,
];

export default function ReportStats() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      {reportStats.map((item, index) => {

        const Icon = icons[index];

        return (

          <div
            key={item.id}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {item.value}
                </h2>

                <p className="mt-2 text-sm font-medium text-green-600">
                  {item.change}
                </p>

              </div>

              <div className={`rounded-xl p-4 ${item.color}`}>

                <Icon
                  size={28}
                  className={item.text}
                />

              </div>

            </div>

          </div>

        );

      })}

    </div>
  );
}