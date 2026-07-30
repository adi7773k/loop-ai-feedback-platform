const activities = [
  "Rahul submitted new feedback",
  "AI report generated",
  "New user registered",
  "Theme updated",
];

export default function RecentActivity() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6">
      <h2 className="text-xl font-bold mb-5">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {activities.map((item, index) => (
          <div
            key={index}
            className="border-l-4 border-blue-500 pl-4"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}