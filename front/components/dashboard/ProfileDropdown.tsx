"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { clearSession, getSession } from "@/lib/auth";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    setEmail(getSession()?.email ?? null);
  }, []);

  const handleLogout = () => {
    clearSession();
    setOpen(false);
    // Full navigation so the dashboard's cached "logged in" render isn't
    // reused if the user logs back in during the same session.
    window.location.href = "/login";
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2"
      >
        <FiUser />
        <span>{email ?? "Admin"}</span>
      </button>

      {open && (
        <div
          className="
            absolute
            right-0
            mt-3
            bg-white
            dark:bg-gray-800
            shadow-lg
            rounded-lg
            p-4
            w-44
            z-50
          "
        >
          <p className="cursor-pointer">Profile</p>

          <Link
            href="/settings"
            className="block cursor-pointer mt-2"
            onClick={() => setOpen(false)}
          >
            Settings
          </Link>

          <p
            onClick={handleLogout}
            className="cursor-pointer mt-2 text-red-500"
          >
            Logout
          </p>
        </div>
      )}
    </div>
  );
}
