import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import AuthProvider from "@/components/providers/AuthProvider";
=======
>>>>>>> 964f3a3ee2badd18c251f4b35a4ad362bc0de848

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Loop AI Feedback Platform",
  description:
    "Enterprise AI-powered customer feedback analytics platform.",
  keywords: [
    "Loop AI",
    "Feedback Dashboard",
    "Analytics",
    "Customer Insights",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${inter.variable} bg-slate-100 font-sans antialiased`}
      >
<<<<<<< HEAD
        <AuthProvider>{children}</AuthProvider>
=======
        {children}
>>>>>>> 964f3a3ee2badd18c251f4b35a4ad362bc0de848
      </body>

    </html>
  );
}