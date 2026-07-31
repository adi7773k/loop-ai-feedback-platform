"use client";

import { PhoneCall } from "lucide-react";

export default function ContactHeader() {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

      <div className="flex items-center gap-4">

        <div className="rounded-xl bg-indigo-100 p-3">

          <PhoneCall
            size={30}
            className="text-indigo-600"
          />

        </div>

        <div>

          <h1 className="text-3xl font-bold">
            Contact Us
          </h1>

          <p className="mt-2 text-slate-500">
            We'd love to hear from you. Reach out anytime.
          </p>

        </div>

      </div>

    </div>
  );
}