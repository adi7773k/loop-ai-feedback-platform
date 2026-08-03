import {
  Upload,
  FileText,
  BarChart3,
  Sparkles,
} from "lucide-react";

const actions = [
  {
    title: "Upload CSV",
    icon: Upload,
  },
  {
    title: "Generate Report",
    icon: FileText,
  },
  {
    title: "Analytics",
    icon: BarChart3,
  },
  {
    title: "AI Insights",
    icon: Sparkles,
  },
];

export default function QuickActions() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

      {actions.map((action) => {

        const Icon = action.icon;

        return (
          <button
            key={action.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">

              <Icon
                size={22}
                className="text-blue-600"
              />

            </div>

            <h3 className="font-semibold">

              {action.title}

            </h3>

          </button>
        );

      })}

    </div>
  );
}