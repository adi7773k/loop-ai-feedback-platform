"use client";

import { useState } from "react";
import { feedbackData } from "@/data/feedback";
import FeedbackCard from "./FeedbackCard";
import Filters from "./Filters";
import Pagination from "./Pagination";
import ExportCSV from "./ExportCSV";

type Props = {
  search: string;
};

export default function FeedbackInbox({
  search,
}: Props) {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 2;

  const filteredData = feedbackData.filter((item) => {
    const matchesSentiment =
      filter === "All" || item.sentiment === filter;

    const matchesSearch =
      item.user
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.message
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchesSentiment && matchesSearch;
  });

  const totalPages = Math.ceil(
    filteredData.length / itemsPerPage
  );

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentItems = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="mt-8">

      <Filters
        value={filter}
        onChange={(value) => {
          setFilter(value);
          setCurrentPage(1);
        }}
      />

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-2xl font-bold">
          Recent Feedback
        </h2>

        <ExportCSV />

      </div>

      {currentItems.length === 0 ? (
        <p className="text-center text-gray-500 py-10">
          No feedback found.
        </p>
      ) : (
        <div className="space-y-4">
          {currentItems.map((item) => (
            <FeedbackCard
              key={item.id}
              user={item.user}
              message={item.message}
              sentiment={item.sentiment}
              date={item.date}
            />
          ))}
        </div>
      )}

      {filteredData.length > itemsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

    </div>
  );
}