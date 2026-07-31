import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Logo */}

          <div>

            <h2 className="text-2xl font-bold">
              Feedback AI
            </h2>

            <p className="mt-4 text-slate-400">
              AI-powered customer feedback dashboard for modern businesses.
            </p>

          </div>

          {/* Product */}

          <div>

            <h3 className="font-semibold">
              Product
            </h3>

            <ul className="mt-5 space-y-3 text-slate-400">

              <li>
                <Link href="/dashboard">
                  Dashboard
                </Link>
              </li>

              <li>
                <Link href="/analytics">
                  Analytics
                </Link>
              </li>

              <li>
                <Link href="/reports">
                  Reports
                </Link>
              </li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="font-semibold">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-slate-400">

              <li>
                <Link href="/help">
                  Help
                </Link>
              </li>

              <li>
                <Link href="/contact">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="/settings">
                  Settings
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-semibold">
              Contact
            </h3>

            <p className="mt-5 text-slate-400">
              support@feedbackai.com
            </p>

            <p className="mt-2 text-slate-400">
              +91 98765 43210
            </p>

          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">

          © 2026 Feedback AI Dashboard. All rights reserved.

        </div>

      </div>

    </footer>
  );
}