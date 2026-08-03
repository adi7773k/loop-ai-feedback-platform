import {
  Download,
  FileText,
} from "lucide-react";

const reports = [
  "Monthly Feedback Report",
  "Customer Satisfaction",
  "AI Sentiment Report",
];

export default function RecentReports() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Recent Reports
      </h2>

      <div className="space-y-4">

        {reports.map((report) => (

          <div
            key={report}
            className="flex items-center justify-between rounded-2xl bg-slate-50 p-4"
          >

            <div className="flex items-center gap-3">

              <FileText
                className="text-blue-600"
              />

              <span>{report}</span>

            </div>

            <button>

              <Download
                className="text-slate-500 hover:text-blue-600"
              />

            </button>

          </div>

        ))}

      </div>

    </div>
  );
}