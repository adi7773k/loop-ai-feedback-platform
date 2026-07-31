"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";

export default function ContactSupport() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">
        Contact Support
      </h2>

      <div className="space-y-4">

        <div className="flex items-center gap-3">
          <Mail className="text-indigo-600" size={22} />
          support@example.com
        </div>

        <div className="flex items-center gap-3">
          <MessageCircle className="text-indigo-600" size={22} />
          Live Chat
        </div>

        <div className="flex items-center gap-3">
          <Phone className="text-indigo-600" size={22} />
          +91 9876543210
        </div>

      </div>
    </div>
  );
}