"use client";

import { PlayCircle } from "lucide-react";

const videos = [
  "Dashboard Overview",
  "Analytics Tutorial",
  "Reports Tutorial",
];

export default function VideoTutorials() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">
        Video Tutorials
      </h2>

      <div className="space-y-4">
        {videos.map((video) => (
          <div
            key={video}
            className="flex items-center justify-between rounded-xl border border-slate-200 p-4"
          >
            <div className="flex items-center gap-3">
              <PlayCircle className="text-red-500" size={24} />
              <span>{video}</span>
            </div>

            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
              Watch
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}