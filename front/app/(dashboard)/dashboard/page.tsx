import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardFilters from "@/components/dashboard/DashboardFilters";
import StatsCards from "@/components/dashboard/StatsCards";
import RevenueChart from "@/components/dashboard/RevenueChart";
import SentimentChart from "@/components/dashboard/SentimentChart";
import RecentFeedback from "@/components/dashboard/RecentFeedback";
import TopProducts from "@/components/dashboard/TopProducts";
import QuickActions from "@/components/dashboard/QuickActions";

export default function DashboardPage() {
  return (
    <main className="space-y-8 p-6">
      <DashboardHeader />

      <DashboardFilters />

      <StatsCards />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>

        <SentimentChart />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentFeedback />
        </div>

        <TopProducts />
      </div>

      <QuickActions />
    </main>
  );
}