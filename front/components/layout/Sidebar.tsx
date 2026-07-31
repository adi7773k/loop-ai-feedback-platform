"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BarChart3,
  FileText,
  Bell,
  User,
  Settings,
  HelpCircle,
  Phone,
  Sparkles,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: FileText,
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    title: "Help",
    href: "/help",
    icon: HelpCircle,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: Phone,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex h-screen w-72 flex-col bg-[#0F172A] text-white fixed left-0 top-0">

      {/* Logo */}
      <div className="border-b border-slate-800 px-8 py-7">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500">

            <Sparkles size={22} />

          </div>

          <div>

            <h1 className="text-xl font-bold">
              Feedback AI
            </h1>

            <p className="text-xs text-slate-400">
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}
      <nav className="flex-1 px-5 py-6">

        <div className="space-y-2">

          {menuItems.map((item) => {

            const Icon = item.icon;

            const active = pathname === item.href;

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`flex items-center gap-4 rounded-xl px-5 py-3 transition-all
                ${
                  active
                    ? "bg-violet-600 text-white shadow-lg"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon size={20} />

                <span>{item.title}</span>

              </Link>
            );
          })}

        </div>

      </nav>

      {/* Upgrade Card */}
      <div className="px-5 pb-5">

        <div className="rounded-2xl bg-slate-800 p-5">

          <h3 className="font-semibold">
            Upgrade to Pro
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Unlock AI insights and premium analytics.
          </p>

          <button className="mt-5 w-full rounded-xl bg-violet-600 py-3 font-semibold hover:bg-violet-700 transition">

            Upgrade Now

          </button>

        </div>

      </div>

      {/* User */}
      <div className="border-t border-slate-800 px-5 py-5">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 font-bold">
            Z
          </div>

          <div>

            <h4 className="font-semibold">
              Zara
            </h4>

            <p className="text-sm text-slate-400">
              Admin
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}