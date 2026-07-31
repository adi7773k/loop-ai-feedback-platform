"use client";

const activities = [
  {
    id: 1,
    title: "Updated profile information",
    time: "2 hours ago",
  },
  {
    id: 2,
    title: "Generated Analytics Report",
    time: "Yesterday",
  },
  {
    id: 3,
    title: "Reviewed 45 customer feedback",
    time: "2 days ago",
  },
  {
    id: 4,
    title: "Logged into dashboard",
    time: "3 days ago",
  },
];

export default function ActivityTimeline() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Recent Activity
      </h2>

      <div className="space-y-5">

        {activities.map((activity) => (

          <div
            key={activity.id}
            className="border-l-4 border-indigo-600 pl-4"
          >

            <h3 className="font-semibold">
              {activity.title}
            </h3>

            <p className="text-sm text-slate-500">
              {activity.time}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}