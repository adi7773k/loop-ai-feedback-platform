import {
  Star,
  MessageSquare,
} from "lucide-react";

const feedback = [
  {
    customer: "John Smith",
    product: "Mobile App",
    rating: 5,
    sentiment: "Positive",
    date: "12 Jul",
  },
  {
    customer: "Emma Watson",
    product: "Website",
    rating: 4,
    sentiment: "Positive",
    date: "11 Jul",
  },
  {
    customer: "Alex Brown",
    product: "Dashboard",
    rating: 2,
    sentiment: "Negative",
    date: "10 Jul",
  },
];

export default function RecentFeedbackTable() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b p-6">
        <h2 className="text-xl font-bold">
          Recent Feedback
        </h2>
      </div>

      <table className="w-full">

        <thead>

          <tr className="text-left text-sm text-slate-500">

            <th className="p-5">Customer</th>

            <th>Product</th>

            <th>Rating</th>

            <th>Sentiment</th>

            <th>Date</th>

          </tr>

        </thead>

        <tbody>

          {feedback.map((item) => (

            <tr
              key={item.customer}
              className="border-t hover:bg-slate-50"
            >

              <td className="p-5 font-medium">
                {item.customer}
              </td>

              <td>{item.product}</td>

              <td>

                <div className="flex items-center gap-1">

                  <Star
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  {item.rating}

                </div>

              </td>

              <td>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">

                  {item.sentiment}

                </span>

              </td>

              <td>{item.date}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}