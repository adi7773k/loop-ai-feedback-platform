import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">

        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          AI Powered Customer
          <br />
          Feedback Dashboard
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
          Collect, analyze and visualize customer feedback using
          beautiful dashboards and AI-driven insights.
        </p>

        <div className="mt-10 flex justify-center gap-5">

          <Link
            href="/dashboard"
            className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Open Dashboard
          </Link>

          <Link
            href="/login"
            className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition"
          >
            Login
          </Link>

        </div>

      </div>
    </section>
  );
}