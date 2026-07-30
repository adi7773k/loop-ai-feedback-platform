"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden p-2"
      >
        <Menu size={28} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/50">
          <div className="w-64 h-full bg-white dark:bg-gray-900 p-6">

            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold">
                Feedback AI
              </h2>

              <button onClick={() => setOpen(false)}>
                <X size={28} />
              </button>
            </div>

            <nav className="space-y-4">

              <Link href="/dashboard" className="block">
                Dashboard
              </Link>

              <Link href="/analytics" className="block">
                Analytics
              </Link>

              <Link href="/reports" className="block">
                Reports
              </Link>

              <Link href="/settings" className="block">
                Settings
              </Link>

            </nav>

          </div>
        </div>
      )}
    </>
  );
}