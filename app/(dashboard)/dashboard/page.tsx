"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import HeroBanner from "@/components/dashboard/HeroBanner";
import KPISection from "@/components/dashboard/KPISection";
import ChartsSection from "@/components/dashboard/charts/ChartsSection";
import DashboardBottom from "@/components/dashboard/tables/DashboardBottom";
import DashboardWidgets from "@/components/dashboard/widgets/DashboardWidgets";

export default function DashboardPage() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user has valid session
    const authSession = localStorage.getItem("authSession");
    
    if (!authSession) {
      // No session - redirect to login
      router.push("/login");
    } else {
      // Valid session - allow access
      setIsAuthorized(true);
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="mb-4 inline-block h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
          <p className="text-slate-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return null; // Router will redirect, so return nothing
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