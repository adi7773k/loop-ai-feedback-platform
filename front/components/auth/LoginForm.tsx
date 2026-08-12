"use client";

import Link from "next/link";
import { Building2, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const router = useRouter();

  const [workspace, setWorkspace] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      if (!workspace || !email || !password) {
        setError("Please fill all fields");
        return;
      }

      const result = await signIn("credentials", {
        workspace,
        email,
        password,
        redirect: false,
      });

      if (!result || result.error) {
        setError("Invalid workspace, email or password");
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      console.error(err);
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <div>
        <label className="mb-2 block font-semibold">Workspace</label>

        <div className="relative">
          <Building2
            className="absolute left-4 top-4 text-slate-400"
            size={20}
          />

          <input
            type="text"
            value={workspace}
            onChange={(e) => setWorkspace(e.target.value)}
            placeholder="your-workspace-slug"
            required
            className="w-full rounded-xl border border-slate-300 py-4 pl-12 pr-4 outline-none transition focus:border-blue-600"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block font-semibold">Email</label>

        <div className="relative">
          <Mail
            className="absolute left-4 top-4 text-slate-400"
            size={20}
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full rounded-xl border border-slate-300 py-4 pl-12 pr-4 outline-none transition focus:border-blue-600"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block font-semibold">Password</label>

        <div className="relative">
          <Lock
            className="absolute left-4 top-4 text-slate-400"
            size={20}
          />

          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
            className="w-full rounded-xl border border-slate-300 py-4 pl-12 pr-12 outline-none transition focus:border-blue-600"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-4 text-slate-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          <span className="text-sm">Remember Me</span>
        </label>

        <Link
          href="/forgot-password"
          className="text-sm font-semibold text-blue-600"
        >
          Forgot Password?
        </Link>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-semibold text-white transition hover:scale-[1.02] disabled:opacity-50"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-slate-500">OR</span>
        </div>
      </div>

      <button
        type="button"
        className="w-full rounded-xl border py-4 font-semibold transition hover:bg-slate-50"
      >
        Continue with Google
      </button>

      <p className="text-center text-slate-500">
        Don't have an account?{" "}
        <Link href="/register" className="font-semibold text-blue-600">
          Create Account
        </Link>
      </p>
    </form>
  );
}