"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          Feedback AI
        </h1>

        <div className="space-x-6">
          <Link href="/">Home</Link>

          <Link href="/dashboard">
            Dashboard
          </Link>

          <Link href="/login">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}