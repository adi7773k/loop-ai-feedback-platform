const stats = [
  {
    title: "Total Feedback",
    value: "130",
  },
  {
    title: "Negative %",
    value: "28%",
  },
  {
    title: "New This Week",
    value: "18",
  },
  {
    title: "Average Rating",
    value: "4.6 ⭐",
  },
  {
    title: "AI Score",
    value: "94%",
  },
];

export default function StatsCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
      {stats.map((item) => (
        <div
          key={item.title}
          className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:scale-105 transition duration-300"
        >
          <p className="text-gray-500 dark:text-gray-400">
            {item.title}
          </p>

          <h2 className="text-3xl font-bold mt-3">
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
}