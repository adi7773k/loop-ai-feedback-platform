"use client";

import { userProfile } from "@/data/profileData";

export default function EditProfile() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Edit Profile
      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        <input
          defaultValue={userProfile.name}
          placeholder="Full Name"
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-600"
        />

        <input
          defaultValue={userProfile.email}
          placeholder="Email"
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-600"
        />

        <input
          defaultValue={userProfile.phone}
          placeholder="Phone"
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-600"
        />

        <input
          defaultValue={userProfile.location}
          placeholder="Location"
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-600"
        />

      </div>

      <button className="mt-6 rounded-xl bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700">

        Update Profile

      </button>

    </div>
  );
}