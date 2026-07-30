import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">
          Reports
        </h1>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6">
          <table className="w-full">

            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Report</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="py-3">Monthly Feedback</td>
                <td>Completed</td>
                <td>July 2025</td>
              </tr>

              <tr className="border-b">
                <td className="py-3">Sentiment Analysis</td>
                <td>Completed</td>
                <td>July 2025</td>
              </tr>

            </tbody>

          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}