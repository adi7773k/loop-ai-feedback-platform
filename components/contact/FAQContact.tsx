"use client";

const faqs = [
  {
    q: "How quickly do you respond?",
    a: "Usually within 24 hours.",
  },
  {
    q: "Do you provide live chat support?",
    a: "Yes, during business hours.",
  },
  {
    q: "Can I request a demo?",
    a: "Yes, contact us anytime.",
  },
];

export default function FAQContact() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Contact FAQ
      </h2>

      <div className="space-y-5">

        {faqs.map((faq) => (

          <div key={faq.q}>

            <h3 className="font-semibold">
              {faq.q}
            </h3>

            <p className="mt-2 text-slate-500">
              {faq.a}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}