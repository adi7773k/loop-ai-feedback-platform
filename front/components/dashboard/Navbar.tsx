"use client";

import SearchBar from "./SearchBar";
import Notification from "./Notification";
import ProfileDropdown from "./ProfileDropdown";
import ThemeToggle from "./ThemeToggle";
import MobileSidebar from "./MobileSidebar";

type NavbarProps = {
  search: string;
  setSearch: (value: string) => void;
};

export default function Navbar({
  search,
  setSearch,
}: NavbarProps) {
  return (
    <header className="bg-white dark:bg-gray-900 dark:text-white shadow px-6 py-4 flex justify-between items-center">

      <div className="flex items-center gap-4">
        <MobileSidebar />

        <h1 className="text-2xl font-bold text-blue-600">
          Feedback AI
        </h1>
      </div>

      <div className="flex items-center gap-5">

        <div className="hidden md:block">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />
        </div>

        <ThemeToggle />

        <Notification />

        <ProfileDropdown />

      </div>

    </header>
  );
}