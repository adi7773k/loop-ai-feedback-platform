"use client";

export default function ContactForm() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Send us a Message
      </h2>

      <div className="space-y-4">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-600"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-600"
        />

        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-600"
        />

        <textarea
          rows={5}
          placeholder="Write your message..."
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-600"
        />

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700">
          Send Message
        </button>

      </div>

    </div>
  );
}