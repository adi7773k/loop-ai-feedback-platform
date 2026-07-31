"use client";

export default function NotificationSettings() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Notification Preferences
      </h2>

      <div className="space-y-6">

        <div className="flex items-center justify-between">

          <div>

            <h3 className="font-medium">
              Email Notifications
            </h3>

            <p className="text-sm text-slate-500">
              Receive updates through email.
            </p>

          </div>

          <input
            type="checkbox"
            defaultChecked
            className="h-5 w-5 accent-indigo-600"
          />

        </div>

        <div className="flex items-center justify-between">

          <div>

            <h3 className="font-medium">
              Push Notifications
            </h3>

            <p className="text-sm text-slate-500">
              Get instant browser notifications.
            </p>

          </div>

          <input
            type="checkbox"
            defaultChecked
            className="h-5 w-5 accent-indigo-600"
          />

        </div>

        <div className="flex items-center justify-between">

          <div>

            <h3 className="font-medium">
              Weekly Reports
            </h3>

            <p className="text-sm text-slate-500">
              Receive weekly analytics reports.
            </p>

          </div>

          <input
            type="checkbox"
            className="h-5 w-5 accent-indigo-600"
          />

        </div>

        <div className="flex items-center justify-between">

          <div>

            <h3 className="font-medium">
              Marketing Emails
            </h3>

            <p className="text-sm text-slate-500">
              Receive product updates and offers.
            </p>

          </div>

          <input
            type="checkbox"
            className="h-5 w-5 accent-indigo-600"
          />

        </div>

      </div>

    </div>
  );
}