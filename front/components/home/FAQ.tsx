const faqs = [
  {
    question: "What is Feedback AI?",
    answer:
      "Feedback AI is a modern dashboard that helps businesses analyze customer feedback using charts and AI-powered insights.",
  },
  {
    question: "Can I export reports?",
    answer:
      "Yes. You can export analytics and reports in PDF or CSV format (Frontend UI for now).",
  },
  {
    question: "Is this mobile responsive?",
    answer:
      "Yes. The dashboard is fully responsive for desktop, tablet, and mobile devices.",
  },
  {
    question: "Does it support AI sentiment analysis?",
    answer:
      "Yes. The dashboard includes sentiment analysis visualization and AI insight sections.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-500">
            Everything you need to know about Feedback AI.
          </p>
        </div>

        <div className="mt-12 space-y-5">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">
                {faq.question}
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}