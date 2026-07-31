import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-28 bg-gradient-to-r from-indigo-600 to-violet-600">

      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-5xl font-bold text-white">
          Ready to build smarter customer experiences?
        </h2>

        <p className="text-indigo-100 mt-6 text-lg">
          Start using FeedbackAI today.
        </p>

        <Link
          href="/register"
          className="inline-block mt-10 rounded-2xl bg-white px-8 py-4 font-semibold text-indigo-600 hover:bg-slate-100 transition"
        >
          Create Free Account
        </Link>

      </div>

    </section>
  );
}