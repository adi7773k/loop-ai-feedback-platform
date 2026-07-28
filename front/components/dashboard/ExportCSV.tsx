"use client";

export default function ExportCSV() {
  const exportData = () => {
    const csv =
      "Name,Feedback,Sentiment\nRahul,Excellent Dashboard,Positive\nPriya,Need Dark Mode,Neutral";

    const blob = new Blob([csv], {
      type: "text/csv",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "feedback.csv";

    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={exportData}
      className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
    >
      Export CSV
    </button>
  );
}