import { Sparkles, ArrowRight } from "lucide-react";

export default function AIRecommendation() {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 p-6 text-white shadow-xl">

      <div className="flex items-center gap-3">

        <Sparkles size={24} />

        <h2 className="text-xl font-bold">
          AI Recommendation
        </h2>

      </div>

      <p className="mt-4 text-blue-100 leading-7">
        Customer sentiment has improved significantly.
        Consider launching a loyalty campaign to retain
        highly satisfied customers.
      </p>

      <button className="mt-6 flex items-center gap-2 rounded-2xl bg-white/20 px-5 py-3 font-medium backdrop-blur transition hover:bg-white/30">

        View Insights

        <ArrowRight size={18} />

      </button>

    </div>
  );
}