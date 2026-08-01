const activities = [
  "AI generated new report",
  "250 feedback imported",
  "Monthly analytics updated",
  "New user joined workspace",
];

export default function ActivityTimeline() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">

        Activity

      </h2>

      <div className="space-y-5">

        {activities.map((activity) => (

          <div
            key={activity}
            className="flex gap-4"
          >

            <div className="mt-2 h-3 w-3 rounded-full bg-blue-600" />

            <div>

              <p className="font-medium">

                {activity}

              </p>

              <span className="text-sm text-slate-500">

                Just now

              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}