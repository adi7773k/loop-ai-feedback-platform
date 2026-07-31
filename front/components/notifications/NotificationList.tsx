"use client";

import { notifications } from "@/data/notificationsData";
import NotificationCard from "./NotificationCard";

export default function NotificationList() {
  return (
    <div className="space-y-5">

      {notifications.map((item) => (

        <NotificationCard
          key={item.id}
          title={item.title}
          description={item.description}
          time={item.time}
          type={item.type}
          status={item.status}
        />

      ))}

    </div>
  );
}