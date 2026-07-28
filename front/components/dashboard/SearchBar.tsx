"use client";

import { FiSearch } from "react-icons/fi";

type SearchBarProps = {
  search: string;
  setSearch: (value: string) => void;
};

export default function SearchBar({
  search,
  setSearch,
}: SearchBarProps) {
  return (
    <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2">
      <FiSearch />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search feedback..."
        className="bg-transparent outline-none ml-2 w-56"
      />
    </div>
  );
}