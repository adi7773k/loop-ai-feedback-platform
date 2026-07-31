"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { contactInfo } from "@/data/contactData";

export default function ContactInfo() {
  return (
    <div className="grid gap-6 md:grid-cols-3">

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="mb-4 inline-flex rounded-xl bg-indigo-100 p-3">

          <Mail
            size={24}
            className="text-indigo-600"
          />

        </div>

        <h3 className="font-semibold">
          Email
        </h3>

        <p className="mt-2 text-slate-500 break-all">
          {contactInfo.email}
        </p>

      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="mb-4 inline-flex rounded-xl bg-green-100 p-3">

          <Phone
            size={24}
            className="text-green-600"
          />

        </div>

        <h3 className="font-semibold">
          Phone
        </h3>

        <p className="mt-2 text-slate-500">
          {contactInfo.phone}
        </p>

      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="mb-4 inline-flex rounded-xl bg-red-100 p-3">

          <MapPin
            size={24}
            className="text-red-600"
          />

        </div>

        <h3 className="font-semibold">
          Address
        </h3>

        <p className="mt-2 text-slate-500">
          {contactInfo.address}
        </p>

      </div>

    </div>
  );
}