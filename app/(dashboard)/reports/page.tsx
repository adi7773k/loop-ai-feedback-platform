import ReportsHeader from "@/components/reports/ReportsHeader";
import ReportStats from "@/components/reports/ReportStats";
import ReportFilters from "@/components/reports/ReportFilters";
import ReportsTable from "@/components/reports/ReportsTable";
import ReportPreview from "@/components/reports/ReportPreview";
import ExportReports from "@/components/reports/ExportReports";

export default function ReportsPage() {
  return (
    <main className="space-y-8 p-6">

      <ReportsHeader />

      <ReportStats />

      <ReportFilters />

      <ReportsTable />

      <div className="grid gap-6 lg:grid-cols-2">

        <ReportPreview />

        <ExportReports />

      </div>

    </main>
  );
}