import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">

        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6">

          <label className="block mb-2 font-semibold">
            Workspace Name
          </label>

          <input
            className="border rounded-lg px-4 py-2 w-full"
            defaultValue="Feedback AI"
          />

        </div>

      </div>
    </DashboardLayout>
  );
}