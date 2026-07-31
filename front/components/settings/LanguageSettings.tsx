"use client";

import { Globe } from "lucide-react";
import { languageOptions } from "@/data/settingsData";

export default function LanguageSettings() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <div className="rounded-xl bg-indigo-100 p-3">
          <Globe
            size={22}
            className="text-indigo-600"
          />
        </div>

        <div>

          <h2 className="text-xl font-bold">
            Language
          </h2>

          <p className="text-sm text-slate-500">
            Select your preferred language.
          </p>

        </div>

      </div>

      <select
        defaultValue="English"
        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-600"
      >
        {languageOptions.map((language) => (
          <option
            key={language}
            value={language}
          >
            {language}
          </option>
        ))}
      </select>

    </div>
  );
}