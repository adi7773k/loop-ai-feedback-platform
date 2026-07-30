export default function AIInsightCard() {
  return (
    <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">
        🤖 AI Insights
      </h2>

      <div className="space-y-3">
        <p>✅ Customer Satisfaction : <b>92%</b></p>

        <p>📈 Positive Sentiment : <b>68%</b></p>

        <p>⚠️ Negative Sentiment : <b>18%</b></p>

        <p>🔥 Trending Theme : <b>Dashboard UI</b></p>
      </div>
    </div>
  );
}