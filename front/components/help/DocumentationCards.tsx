"use client";

import { BookOpen } from "lucide-react";

const docs = [
  "Dashboard Guide",
  "Analytics Guide",
  "Reports Guide",
  "Settings Guide",
];

export default function DocumentationCards() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">
        Documentation
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {docs.map((doc) => (
          <div
            key={doc}
            className="rounded-xl border border-slate-200 p-5 transition hover:border-indigo-500 hover:shadow-md"
          >
            <BookOpen
              className="mb-3 text-indigo-600"
              size={28}
            />

            <h3 className="font-semibold">
              {doc}
            </h3>

            <button className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
              Read Guide
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}