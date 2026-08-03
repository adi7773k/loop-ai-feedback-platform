import AIRecommendation from "./AIRecommendation";

export default function DashboardWidgets() {
  return (
    <section className="grid gap-6 lg:grid-cols-2">

      <AIRecommendation />

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

        <h2 className="mb-6 text-xl font-bold">

          Workspace Overview

        </h2>

        <div className="space-y-5">

          <div>

            <div className="mb-2 flex justify-between">

              <span>Feedback Processed</span>

              <span>82%</span>

            </div>

            <div className="h-3 rounded-full bg-slate-200">

              <div className="h-3 w-[82%] rounded-full bg-blue-600" />

            </div>

          </div>

          <div>

            <div className="mb-2 flex justify-between">

              <span>AI Completion</span>

              <span>91%</span>

            </div>

            <div className="h-3 rounded-full bg-slate-200">

              <div className="h-3 w-[91%] rounded-full bg-green-500" />

            </div>

          </div>

          <div>

            <div className="mb-2 flex justify-between">

              <span>Report Generation</span>

              <span>76%</span>

            </div>

            <div className="h-3 rounded-full bg-slate-200">

              <div className="h-3 w-[76%] rounded-full bg-cyan-500" />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}