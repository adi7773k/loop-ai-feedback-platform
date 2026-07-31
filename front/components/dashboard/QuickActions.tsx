"use client";

import {
  Download,
  FileText,
  Bell,
  Settings,
} from "lucide-react";

const actions = [
  {
    title: "Export Report",
    icon: Download,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Generate PDF",
    icon: FileText,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Notifications",
    icon: Bell,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Settings",
    icon: Settings,
    color: "bg-purple-100 text-purple-600",
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">
        Quick Actions
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-indigo-500 hover:shadow-md"
            >
              <div className={`rounded-xl p-3 ${action.color}`}>
                <Icon size={22} />
              </div>

              <span className="font-medium">
                {action.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}