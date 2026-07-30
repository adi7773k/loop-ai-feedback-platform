"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  BarChart3,
  FileText,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-blue-700 to-blue-900 text-white p-6">

      <h1 className="text-3xl font-bold mb-10">
        Feedback AI
      </h1>

      <nav className="flex flex-col gap-4">

        <Link
          href="/dashboard"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 transition"
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </Link>

        <Link
          href="/analytics"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 transition"
        >
          <BarChart3 size={20} />
          <span>Analytics</span>
        </Link>

        <Link
          href="/reports"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 transition"
        >
          <FileText size={20} />
          <span>Reports</span>
        </Link>

        <Link
          href="/settings"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 transition"
        >
          <Settings size={20} />
          <span>Settings</span>
        </Link>

      </nav>
    </aside>
  );
}