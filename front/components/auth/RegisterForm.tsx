"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  User,
  Building2,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function RegisterForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      // Validation
      if (
        !formData.fullName ||
        !formData.company ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        setError("Please fill all fields");
        setLoading(false);
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(formData.email)) {
        setError("Invalid email format");
        setLoading(false);
        return;
      }

      // Password validation
      if (formData.password.length < 8) {
        setError("Password must be at least 8 characters");
        setLoading(false);
        return;
      }

      // Confirm password
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        setLoading(false);
        return;
      }

      // Terms and conditions
      if (!formData.termsAccepted) {
        setError("Please accept Terms & Conditions");
        setLoading(false);
        return;
      }

      // Generate workspace slug
      const workspaceSlug = slugify(formData.company);

      // Register user through backend API
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          password: formData.password,
          workspaceName: formData.company,
          workspaceSlug,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(
          data.message || "Registration failed. Please try again."
        );
        setLoading(false);
        return;
      }

      setSuccess(
        `Account created successfully! Your workspace ID is "${workspaceSlug}" — you'll need it to sign in. Redirecting to login...`
      );

      // Redirect to login
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err) {
      console.error(err);
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Error Message */}
      {error && (
        <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className="rounded-lg bg-green-50 p-3 text-sm text-green-600">
          {success}
        </div>
      )}

      {/* Full Name */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Full Name
        </label>

        <div className="relative">
          <User
            size={20}
            className="absolute left-4 top-4 text-slate-400"
          />

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full rounded-xl border border-slate-300 bg-white py-4 pl-12 pr-4 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Company */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Company
        </label>

        <div className="relative">
          <Building2
            size={20}
            className="absolute left-4 top-4 text-slate-400"
          />

          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Loop Technologies"
            className="w-full rounded-xl border border-slate-300 bg-white py-4 pl-12 pr-4 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {formData.company && (
          <p className="mt-1.5 text-xs text-slate-400">
            Workspace ID: {slugify(formData.company)}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Email Address
        </label>

        <div className="relative">
          <Mail
            size={20}
            className="absolute left-4 top-4 text-slate-400"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            className="w-full rounded-xl border border-slate-300 bg-white py-4 pl-12 pr-4 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Password
        </label>

        <div className="relative">
          <Lock
            size={20}
            className="absolute left-4 top-4 text-slate-400"
          />

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create Password"
            className="w-full rounded-xl border border-slate-300 bg-white py-4 pl-12 pr-12 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-4 text-slate-500"
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Confirm Password */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Confirm Password
        </label>

        <div className="relative">
          <Lock
            size={20}
            className="absolute left-4 top-4 text-slate-400"
          />

          <input
            type={showConfirm ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full rounded-xl border border-slate-300 bg-white py-4 pl-12 pr-12 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />

          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-4 top-4 text-slate-500"
          >
            {showConfirm ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Terms */}
      <label className="flex items-start gap-3">
        <input
          type="checkbox"
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleChange}
          className="mt-1"
        />

        <span className="text-sm text-slate-600">
          I agree to the{" "}
          <span className="font-semibold text-blue-600">
            Terms & Conditions
          </span>{" "}
          and Privacy Policy.
        </span>
      </label>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-semibold text-white shadow-lg transition hover:scale-[1.02] disabled:opacity-50"
      >
        {loading ? "Creating Account..." : "Create Account"}

        <ArrowRight size={18} />
      </button>

      {/* Login Link */}
      <p className="text-center text-slate-500">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-blue-600"
        >
          Login
        </Link>
      </p>
    </form>
  );
}