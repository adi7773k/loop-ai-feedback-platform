import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: Props) {
  return (
    <div className="bg-slate-100 min-h-screen">

      <Sidebar />

      <main className="lg:ml-72">

        <Navbar />

        <div className="p-6 pt-28">

          {children}

        </div>

      </main>

    </div>
  );
}