"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function LandingNavbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          Feedback AI
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/" className="text-slate-700 hover:text-indigo-600">
            Home
          </Link>

          <Link href="#features" className="text-slate-700 hover:text-indigo-600">
            Features
          </Link>

          <Link href="#pricing" className="text-slate-700 hover:text-indigo-600">
            Pricing
          </Link>

          <Link href="#faq" className="text-slate-700 hover:text-indigo-600">
            FAQ
          </Link>

          <Link
            href="/login"
            className="rounded-xl border border-indigo-600 px-5 py-2 text-indigo-600 transition hover:bg-indigo-50"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-indigo-600 px-5 py-2 text-white transition hover:bg-indigo-700"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="rounded-lg p-2 hover:bg-slate-100 lg:hidden">
          <Menu size={24} />
        </button>

      </div>
    </header>
  );
}