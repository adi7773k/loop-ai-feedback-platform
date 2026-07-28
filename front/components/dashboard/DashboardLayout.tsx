"use client";

import { useEffect, useState } from "react";
import { getSession } from "@/lib/auth";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import StatsCards from "./StatsCards";
import AdvancedFilters from "./AdvancedFilters";
import FeedbackChart from "./FeedbackChart";
import SentimentChart from "./SentimentChart";
import ThemeChart from "./ThemeChart";
import AIInsightCard from "./AIInsightCard";
import RecentActivity from "./RecentActivity";
import FeedbackInbox from "./FeedbackInbox";

type DashboardLayoutProps = {
  children?: React.ReactNode;
};

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const session = getSession();
    if (!session) {
      // A full navigation (not router.replace) avoids Next.js's
      // client-side Router Cache serving a stale render on the way back
      // in after logging in.
      window.location.href = "/login";
      return;
    }
    setChecked(true);
  }, []);

  if (!checked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 lg:flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Navbar */}
        <Navbar
          search={search}
          setSearch={setSearch}
        />

        <main className="p-6 space-y-8">
          {children ? (
            children
          ) : (
            <>
              {/* Stats */}
              <StatsCards />

              {/* Filters */}
              <AdvancedFilters />

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <FeedbackChart />
                <SentimentChart />
              </div>

              {/* Theme Chart */}
              <ThemeChart />

              {/* AI + Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <AIInsightCard />
                <RecentActivity />
              </div>

              {/* Feedback Inbox */}
              <FeedbackInbox search={search} />
            </>
          )}
        </main>
      </div>
    </div>
  );
}