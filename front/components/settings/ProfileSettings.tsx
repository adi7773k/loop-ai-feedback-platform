"use client";

import { profileData } from "@/data/settingsData";

export default function ProfileSettings() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Profile Settings
      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-medium">
            First Name
          </label>

          <input
            defaultValue={profileData.firstName}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-600"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Last Name
          </label>

          <input
            defaultValue={profileData.lastName}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-600"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Email
          </label>

          <input
            type="email"
            defaultValue={profileData.email}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-600"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Phone
          </label>

          <input
            defaultValue={profileData.phone}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-600"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium">
            Role
          </label>

          <input
            defaultValue={profileData.role}
            disabled
            className="w-full cursor-not-allowed rounded-xl border border-slate-300 bg-slate-100 px-4 py-3"
          />
        </div>

      </div>

    </div>
  );
}