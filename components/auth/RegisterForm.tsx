"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import SocialLogin from "./SocialLogin";

export default function RegisterForm() {
  const router = useRouter();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Frontend Demo Register
    router.push("/dashboard");
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

      <h2 className="text-3xl font-bold text-slate-900">
        Create Account 🚀
      </h2>

      <p className="mt-2 text-slate-500">
        Create your account to access Feedback AI Dashboard.
      </p>

      <form onSubmit={handleRegister} className="mt-8 space-y-5">

        <div>
          <label className="mb-2 block text-sm font-medium">
            Full Name
          </label>

          <Input
            type="text"
            placeholder="John Doe"
          />
        </div>

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

        <div>
          <label className="mb-2 block text-sm font-medium">
            Confirm Password
          </label>

          <Input
            type="password"
            placeholder="••••••••"
          />
        </div>

        <Button type="submit" className="w-full">
          Create Account
        </Button>

      </form>

      <SocialLogin />

      <p className="mt-8 text-center text-sm text-slate-500">

        Already have an account?

        <Link
          href="/login"
          className="ml-2 font-semibold text-indigo-600 hover:underline"
        >
          Login
        </Link>

      </p>

    </div>
  );
}