import {
  BarChart3,
  MessageSquare,
  Brain,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Real-Time Analytics",
    description:
      "Monitor customer feedback instantly with interactive dashboards.",
    icon: BarChart3,
  },
  {
    title: "Feedback Management",
    description:
      "View, filter and organize all customer feedback in one place.",
    icon: MessageSquare,
  },
  {
    title: "AI Insights",
    description:
      "Discover sentiment and trending topics using AI-powered analysis.",
    icon: Brain,
  },
  {
    title: "Secure Platform",
    description:
      "Your data is protected with modern security standards.",
    icon: ShieldCheck,
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <feature.icon
                className="text-blue-600 mb-4"
                size={40}
              />

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}