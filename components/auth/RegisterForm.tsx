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

      // Password length
      if (formData.password.length < 6) {
        setError("Password must be at least 6 characters");
        setLoading(false);
        return;
      }

      // Password match
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        setLoading(false);
        return;
      }

      // Terms check
      if (!formData.termsAccepted) {
        setError("Please accept Terms & Conditions");
        setLoading(false);
        return;
      }

      // Mock registration - replace with your API call
      const userData = {
        id: Date.now().toString(),
        fullName: formData.fullName,
        company: formData.company,
        email: formData.email,
        password: formData.password,
        createdAt: new Date().toISOString(),
      };

      // Save to localStorage (mock)
      localStorage.setItem("user", JSON.stringify(userData));

      setSuccess("Account created successfully! Redirecting to login...");

      // Redirect to login after 1.5 seconds
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (err) {
      setError("Registration failed. Please try again.");
      console.error(err);
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

      {/* Name */}
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
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
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
            {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
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
          I agree to the
          <span className="font-semibold text-blue-600">
            {" "}Terms & Conditions
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

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-slate-500">OR</span>
        </div>
      </div>

      {/* Google */}
      <button
        type="button"
        className="w-full rounded-xl border border-slate-300 bg-white py-4 font-semibold transition hover:bg-slate-50"
      >
        Continue with Google
      </button>

      {/* Login Link */}
      <p className="text-center text-slate-500">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-blue-600">
          Login
        </Link>
      </p>
    </form>
  );
}