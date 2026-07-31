"use client";

import { Lock, ShieldCheck } from "lucide-react";

export default function AccountSettings() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Account Security
      </h2>

      <div className="space-y-6">

        <div>

          <label className="mb-2 block text-sm font-medium">
            Current Password
          </label>

          <input
            type="password"
            placeholder="••••••••"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-600"
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">
            New Password
          </label>

          <input
            type="password"
            placeholder="Enter new password"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-600"
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm password"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-600"
          />

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white transition hover:bg-indigo-700">

          <Lock size={18} />

          Update Password

        </button>

        <hr />

        <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">

          <div>

            <h3 className="font-semibold">
              Two-Factor Authentication
            </h3>

            <p className="text-sm text-slate-500">
              Secure your account with an extra verification step.
            </p>

          </div>

          <button className="flex items-center gap-2 rounded-lg border border-indigo-600 px-4 py-2 text-indigo-600 hover:bg-indigo-50">

            <ShieldCheck size={18} />

            Enable

          </button>

        </div>

      </div>

    </div>
  );
}