export default function LoadingState() {
  return (
    <div className="bg-white rounded-xl shadow p-10 text-center">
      <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>

      <p className="mt-4 text-gray-500">
        Loading feedback...
      </p>
    </div>
  );
}
