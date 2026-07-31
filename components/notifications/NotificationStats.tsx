"use client";

import {
  Bell,
  MailOpen,
  CheckCircle,
  TriangleAlert,
} from "lucide-react";

import { notificationStats } from "@/data/notificationsData";

const icons = [
  Bell,
  MailOpen,
  CheckCircle,
  TriangleAlert,
];

export default function NotificationStats() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      {notificationStats.map((item, index) => {

        const Icon = icons[index];

        return (

          <div
            key={item.id}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {item.value}
                </h2>

              </div>

              <div className={`rounded-xl p-4 ${item.color}`}>

                <Icon
                  size={28}
                  className={item.textColor}
                />

              </div>

            </div>

          </div>

        );

      })}

    </div>
  );
}