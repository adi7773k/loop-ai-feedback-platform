const stats = [
  {
    value: "25K+",
    title: "Feedback Collected",
  },
  {
    value: "97%",
    title: "Positive Reviews",
  },
  {
    value: "4.9",
    title: "Average Rating",
  },
  {
    value: "500+",
    title: "Companies",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-slate-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10">

          {stats.map((item) => (
            <div
              key={item.title}
              className="text-center"
            >

              <h2 className="text-5xl font-bold text-white">
                {item.value}
              </h2>

              <p className="mt-4 text-slate-400">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}