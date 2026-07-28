export default function ErrorState() {
  return (
    <div className="bg-red-100 border border-red-400 rounded-xl p-8 text-center">
      <h2 className="text-2xl font-bold text-red-700">
        Something went wrong
      </h2>

      <p className="mt-3 text-red-600">
        Unable to load feedback data.
      </p>
    </div>
  );
}
