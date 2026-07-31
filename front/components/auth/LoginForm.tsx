"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import SocialLogin from "./SocialLogin";

export default function LoginForm() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Frontend Demo Login
    router.push("/dashboard");
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
      <h2 className="text-3xl font-bold text-slate-900">
        Welcome Back 👋
      </h2>

      <p className="mt-2 text-slate-500">
        Sign in to continue to your dashboard.
      </p>

      <form onSubmit={handleLogin} className="mt-8 space-y-5">

        <div>
          <label className="mb-2 block text-sm font-medium">
            Email Address
          </label>

          <Input
            type="email"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Password
          </label>

          <Input
            type="password"
            placeholder="••••••••"
          />
        </div>

        <Button type="submit" className="w-full">
          Sign In
        </Button>

      </form>

      <SocialLogin />

      <p className="mt-8 text-center text-sm text-slate-500">
        Don't have an account?

        <Link
          href="/register"
          className="ml-2 font-semibold text-indigo-600 hover:underline"
        >
          Register
        </Link>
      </p>
    </div>
  );
}