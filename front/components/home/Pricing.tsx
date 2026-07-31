import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "Free",
    features: [
      "Basic Dashboard",
      "5 Reports",
      "Community Support",
    ],
  },
  {
    name: "Pro",
    price: "$19/mo",
    popular: true,
    features: [
      "Unlimited Analytics",
      "AI Insights",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited Users",
      "Advanced Security",
      "Dedicated Manager",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Simple Pricing
          </h2>

          <p className="mt-4 text-slate-500">
            Choose the perfect plan for your business.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 shadow-sm ${
                plan.popular
                  ? "border-indigo-600 shadow-xl"
                  : "border-slate-200"
              }`}
            >
              {plan.popular && (
                <span className="rounded-full bg-indigo-600 px-4 py-1 text-sm text-white">
                  Most Popular
                </span>
              )}

              <h3 className="mt-6 text-2xl font-bold">
                {plan.name}
              </h3>

              <p className="mt-3 text-5xl font-bold">
                {plan.price}
              </p>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature}>✔ {feature}</li>
                ))}
              </ul>

              <Link
                href="/register"
                className="mt-10 block rounded-xl bg-indigo-600 py-3 text-center font-semibold text-white hover:bg-indigo-700"
              >
                Get Started
              </Link>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}