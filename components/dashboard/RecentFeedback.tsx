"use client";

const feedbacks = [
  {
    id: 1,
    customer: "John Doe",
    product: "Smart Watch",
    rating: 5,
    status: "Positive",
  },
  {
    id: 2,
    customer: "Sarah Smith",
    product: "Laptop",
    rating: 4,
    status: "Positive",
  },
  {
    id: 3,
    customer: "David Lee",
    product: "Headphones",
    rating: 2,
    status: "Negative",
  },
  {
    id: 4,
    customer: "Emily",
    product: "Phone",
    rating: 3,
    status: "Neutral",
  },
];

export default function RecentFeedback() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold">Recent Feedback</h2>

        <button className="text-sm font-semibold text-indigo-600 hover:underline">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">

          <thead>
            <tr className="border-b">
              <th className="pb-3">Customer</th>
              <th className="pb-3">Product</th>
              <th className="pb-3">Rating</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>

          <tbody>

            {feedbacks.map((item) => (
              <tr key={item.id} className="border-b hover:bg-slate-50">

                <td className="py-4">{item.customer}</td>

                <td>{item.product}</td>

                <td>{"⭐".repeat(item.rating)}</td>

                <td>
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      item.status === "Positive"
                        ? "bg-green-100 text-green-700"
                        : item.status === "Negative"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

              </tr>
            ))}

          </tbody>

        </table>
      </div>
    </div>
  );
}