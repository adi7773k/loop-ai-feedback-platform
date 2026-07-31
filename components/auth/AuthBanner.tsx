import {
  Brain,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

export default function AuthBanner() {
  return (
    <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-indigo-600 via-violet-600 to-slate-900 p-12 text-white">

      {/* Logo */}
      <div>

        <h1 className="text-4xl font-bold">
          Feedback AI
        </h1>

        <p className="mt-4 text-indigo-100">
          AI Powered Customer Feedback Dashboard
        </p>

      </div>

      {/* Center */}
      <div className="space-y-8">

        <div className="flex gap-4">

          <div className="rounded-xl bg-white/10 p-4">
            <Brain size={28} />
          </div>

          <div>

            <h3 className="font-semibold text-xl">
              AI Insights
            </h3>

            <p className="text-indigo-100 mt-2">
              Automatically analyze customer sentiment.
            </p>

          </div>

        </div>

        <div className="flex gap-4">

          <div className="rounded-xl bg-white/10 p-4">
            <BarChart3 size={28} />
          </div>

          <div>

            <h3 className="font-semibold text-xl">
              Analytics
            </h3>

            <p className="text-indigo-100 mt-2">
              Interactive dashboards and beautiful charts.
            </p>

          </div>

        </div>

        <div className="flex gap-4">

          <div className="rounded-xl bg-white/10 p-4">
            <ShieldCheck size={28} />
          </div>

          <div>

            <h3 className="font-semibold text-xl">
              Secure
            </h3>

            <p className="text-indigo-100 mt-2">
              Enterprise-grade frontend architecture.
            </p>

          </div>

        </div>

      </div>

      {/* Footer */}
      <div>

        <p className="text-sm text-indigo-200">
          © 2025 Feedback AI Dashboard
        </p>

      </div>

    </div>
  );
}