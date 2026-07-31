import {
  Brain,
  BarChart3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "AI Insights",
    description:
      "Automatically detect customer sentiment and trends using AI.",
    icon: Brain,
  },
  {
    title: "Real-time Analytics",
    description:
      "Beautiful dashboards with charts and live feedback metrics.",
    icon: BarChart3,
  },
  {
    title: "Enterprise Security",
    description:
      "Secure authentication and protected dashboard architecture.",
    icon: ShieldCheck,
  },
  {
    title: "Modern UI",
    description:
      "Premium SaaS experience with responsive design.",
    icon: Sparkles,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Everything You Need
          </h2>

          <p className="mt-5 text-slate-500">
            Powerful tools to analyze customer feedback.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">

          {features.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="inline-flex rounded-2xl bg-indigo-100 p-4">

                  <Icon
                    className="text-indigo-600"
                    size={28}
                  />

                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-500 leading-7">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}