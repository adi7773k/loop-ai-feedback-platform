import NotificationsHeader from "@/components/notifications/NotificationsHeader";
import NotificationStats from "@/components/notifications/NotificationStats";
import NotificationFilters from "@/components/notifications/NotificationFilters";
import NotificationList from "@/components/notifications/NotificationList";
import NotificationSettings from "@/components/notifications/NotificationSettings";
import MarkAllRead from "@/components/notifications/MarkAllRead";

export default function NotificationsPage() {
  return (
    <main className="space-y-8 p-6">

      <NotificationsHeader />

      <NotificationStats />

      <NotificationFilters />

      <NotificationList />

      <div className="grid gap-6 lg:grid-cols-2">

        <NotificationSettings />

        <MarkAllRead />

      </div>

    </main>
  );
}