"use client";

import { UserCircle2 } from "lucide-react";

export default function ProfileHeader() {
  return (
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

      <div className="flex items-center gap-4">

        <div className="rounded-xl bg-indigo-100 p-3">
          <UserCircle2
            size={30}
            className="text-indigo-600"
          />
        </div>

        <div>

          <h1 className="text-3xl font-bold">
            My Profile
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your personal information and account.
          </p>

        </div>

      </div>

    </div>
  );
}