import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileCard from "@/components/profile/ProfileCard";
import UploadAvatar from "@/components/profile/UploadAvatar";
import UserStats from "@/components/profile/UserStats";
import EditProfile from "@/components/profile/EditProfile";
import ActivityTimeline from "@/components/profile/ActivityTimeline";
import AchievementCard from "@/components/profile/AchievementCard";

export default function ProfilePage() {
  return (
    <main className="space-y-8 p-6">

      <ProfileHeader />

      <div className="grid gap-6 lg:grid-cols-3">

        <ProfileCard />

        <div className="lg:col-span-2">
          <UploadAvatar />
        </div>

      </div>

      <UserStats />

      <EditProfile />

      <div className="grid gap-6 lg:grid-cols-2">

        <ActivityTimeline />

        <AchievementCard />

      </div>

    </main>
  );
}