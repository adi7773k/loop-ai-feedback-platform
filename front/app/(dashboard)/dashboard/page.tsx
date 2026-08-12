"use client";

import { useSession } from "next-auth/react";

import HeroBanner from "@/components/dashboard/HeroBanner";
import KPISection from "@/components/dashboard/KPISection";
import ChartsSection from "@/components/dashboard/charts/ChartsSection";
import DashboardBottom from "@/components/dashboard/tables/DashboardBottom";
import DashboardWidgets from "@/components/dashboard/widgets/DashboardWidgets";

export default function DashboardPage() {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 inline-block h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
          <p className="text-slate-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <HeroBanner />
      <KPISection />
      <ChartsSection />
      <DashboardWidgets />
      <DashboardBottom />
    </div>
  );
}