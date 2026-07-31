"use client";

import { faqs } from "@/data/helpData";

export default function FAQSection() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">
        Frequently Asked Questions
      </h2>

      <div className="space-y-5">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="rounded-xl border border-slate-200 p-5"
          >
            <h3 className="font-semibold">
              {faq.question}
            </h3>

            <p className="mt-3 text-slate-500">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}