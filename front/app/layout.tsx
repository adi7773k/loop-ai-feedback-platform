import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>

    </html>
  );
}