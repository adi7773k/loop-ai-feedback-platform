"use client";

import { Camera } from "lucide-react";

export default function UploadAvatar() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Profile Picture
      </h2>

      <div className="flex flex-col items-center">

        <img
          src="https://i.pravatar.cc/250"
          alt="Avatar"
          className="h-36 w-36 rounded-full border-4 border-indigo-100"
        />

        <button className="mt-6 flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700">

          <Camera size={18} />

          Upload New Photo

        </button>

      </div>

    </div>
  );
}