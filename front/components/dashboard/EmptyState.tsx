export default function EmptyState() {
  return (
    <div className="bg-white rounded-xl shadow p-10 text-center">
      <h2 className="text-2xl font-bold">
        No Feedback Found
      </h2>

      <p className="text-gray-500 mt-3">
        There is no feedback available for the selected filter.
      </p>
    </div>
  );
}
