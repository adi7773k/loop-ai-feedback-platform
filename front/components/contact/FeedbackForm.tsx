"use client";

export default function FeedbackForm() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Share Your Feedback
      </h2>

      <textarea
        rows={5}
        placeholder="Tell us about your experience..."
        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-600"
      />

      <button className="mt-5 rounded-xl bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700">
        Submit Feedback
      </button>

    </div>
  );
}