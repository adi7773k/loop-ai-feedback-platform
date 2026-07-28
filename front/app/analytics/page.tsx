import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Analytics</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-3">
              Weekly Performance
            </h2>

            <p className="text-gray-500">
              Analytics summary will appear here.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-3">
              Customer Growth
            </h2>

            <p className="text-gray-500">
              Growth metrics coming soon.
            </p>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}