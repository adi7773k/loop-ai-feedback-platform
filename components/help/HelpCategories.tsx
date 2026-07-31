"use client";

import { helpCategories } from "@/data/helpData";
import { FolderOpen } from "lucide-react";

export default function HelpCategories() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">
        Help Categories
      </h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {helpCategories.map((category) => (
          <div
            key={category.id}
            className="rounded-xl border border-slate-200 p-5 transition hover:border-indigo-500 hover:shadow-md"
          >
            <FolderOpen
              className="mb-3 text-indigo-600"
              size={28}
            />

            <h3 className="font-semibold">
              {category.title}
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}