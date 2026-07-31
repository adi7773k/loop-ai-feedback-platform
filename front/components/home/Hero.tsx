import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 pt-40 pb-28">

      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-300/20 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left */}
        <div>

          <span className="rounded-full border border-indigo-200 bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            🚀 AI Powered Feedback Dashboard
          </span>

          <h1 className="mt-8 text-6xl font-extrabold leading-tight text-slate-900">
            Transform
            <br />

            Customer Feedback

            <span className="block text-indigo-600">
              Into Business Growth
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Analyze customer reviews with beautiful dashboards,
            AI-powered insights, interactive charts and powerful
            reporting tools.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/register"
              className="rounded-2xl bg-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-indigo-700"
            >
              Get Started
            </Link>

            <Link
              href="/dashboard"
              className="rounded-2xl border bg-white px-8 py-4 font-semibold shadow-sm transition hover:bg-slate-100"
            >
              Live Demo
            </Link>

          </div>

        </div>

        {/* Right */}
        <div className="relative">

          <div className="rounded-[32px] border border-white/30 bg-white/70 p-8 shadow-2xl backdrop-blur-xl">

            <div className="grid grid-cols-2 gap-5">

              <div className="rounded-2xl bg-indigo-600 p-6 text-white">

                <p className="text-sm opacity-80">
                  Total Feedback
                </p>

                <h2 className="mt-3 text-4xl font-bold">
                  12.5K
                </h2>

              </div>

              <div className="rounded-2xl bg-emerald-500 p-6 text-white">

                <p className="text-sm opacity-80">
                  Positive
                </p>

                <h2 className="mt-3 text-4xl font-bold">
                  89%
                </h2>

              </div>

              <div className="rounded-2xl bg-white p-6 shadow">

                <p className="text-sm text-slate-500">
                  Rating
                </p>

                <h2 className="mt-3 text-4xl font-bold text-slate-900">
                  ⭐ 4.8
                </h2>

              </div>

              <div className="rounded-2xl bg-white p-6 shadow">

                <p className="text-sm text-slate-500">
                  Reports
                </p>

                <h2 className="mt-3 text-4xl font-bold text-slate-900">
                  1,248
                </h2>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}