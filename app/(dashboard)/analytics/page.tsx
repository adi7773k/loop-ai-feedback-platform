import AnalyticsHeader from "@/components/analytics/AnalyticsHeader";
import AnalyticsCards from "@/components/analytics/AnalyticsCards";
import MonthlyChart from "@/components/analytics/MonthlyChart";
import RatingChart from "@/components/analytics/RatingChart";
import SentimentPie from "@/components/analytics/SentimentPie";
import CategoryChart from "@/components/analytics/CategoryChart";
import TopProducts from "@/components/analytics/TopProducts";
import ExportAnalytics from "@/components/analytics/ExportAnalytics";

export default function AnalyticsPage() {
  return (
    <main className="space-y-8 p-6">

      <AnalyticsHeader />

      <AnalyticsCards />

      <div className="grid gap-6 lg:grid-cols-2">
        <MonthlyChart />
        <RatingChart />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <SentimentPie />
        <CategoryChart />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <TopProducts />
        <ExportAnalytics />
      </div>

    </main>
  );
}