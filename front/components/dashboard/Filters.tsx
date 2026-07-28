"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function Filters({ value, onChange }: Props) {
  return (
    <div className="bg-white p-5 rounded-xl shadow mb-6 flex flex-wrap gap-4 items-center">
      <h3 className="font-semibold">Filter by Sentiment</h3>

      <select
        className="border rounded-lg px-4 py-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Positive">Positive</option>
        <option value="Neutral">Neutral</option>
        <option value="Negative">Negative</option>
      </select>
    </div>
  );
}
