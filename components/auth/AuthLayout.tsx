import { ReactNode } from "react";
import AuthBanner from "./AuthBanner";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">

      {/* Left Side */}
      <AuthBanner />

      {/* Right Side */}
      <div className="flex items-center justify-center bg-slate-50 p-8">

        <div className="w-full max-w-md">

          {children}

        </div>

      </div>

    </div>
  );
}