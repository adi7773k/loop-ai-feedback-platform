"use client";

export default function NotificationSettings() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Notification Settings
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between">

          <span>Email Notifications</span>

          <input
            type="checkbox"
            defaultChecked
            className="accent-indigo-600"
          />

        </div>

        <div className="flex justify-between">

          <span>Push Notifications</span>

          <input
            type="checkbox"
            defaultChecked
            className="accent-indigo-600"
          />

        </div>

        <div className="flex justify-between">

          <span>SMS Alerts</span>

          <input
            type="checkbox"
            className="accent-indigo-600"
          />

        </div>

      </div>

    </div>
  );
}