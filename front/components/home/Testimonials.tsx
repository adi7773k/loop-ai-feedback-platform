const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechNova",
    review:
      "Feedback AI helped us understand customer sentiment in minutes instead of hours.",
  },
  {
    name: "David Wilson",
    role: "CEO",
    company: "NextSoft",
    review:
      "The analytics dashboard is clean, fast and extremely useful for our business.",
  },
  {
    name: "Emily Carter",
    role: "Marketing Lead",
    company: "CreativeX",
    review:
      "Beautiful interface with powerful analytics. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-slate-500">
            Trusted by teams around the world.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-yellow-500 text-xl">
                ★★★★★
              </div>

              <p className="mt-5 leading-7 text-slate-600">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold">
                  {item.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {item.role} • {item.company}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}