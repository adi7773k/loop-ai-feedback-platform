type Props = {
  user: string;
  message: string;
  sentiment: string;
  date: string;
};

export default function FeedbackCard({
  user,
  message,
  sentiment,
  date,
}: Props) {
  return (
    <div className="bg-white shadow rounded-xl p-5 mb-4">
      <div className="flex justify-between">
        <h3 className="font-bold">{user}</h3>

        <span
          className={`px-3 py-1 rounded-full text-sm ${
            sentiment === "Positive"
              ? "bg-green-100 text-green-700"
              : sentiment === "Negative"
              ? "bg-red-100 text-red-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {sentiment}
        </span>
      </div>

      <p className="mt-3 text-gray-600">{message}</p>

      <p className="text-sm text-gray-400 mt-3">{date}</p>
    </div>
  );
}
