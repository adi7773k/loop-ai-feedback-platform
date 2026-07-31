import SettingsHeader from "@/components/settings/SettingsHeader";
import ProfileSettings from "@/components/settings/ProfileSettings";
import AccountSettings from "@/components/settings/AccountSettings";
import NotificationSettings from "@/components/settings/NotificationSettings";
import AppearanceSettings from "@/components/settings/AppearanceSettings";
import LanguageSettings from "@/components/settings/LanguageSettings";
import SaveSettings from "@/components/settings/SaveSettings";
import DangerZone from "@/components/settings/DangerZone";

export default function SettingsPage() {
  return (
    <main className="space-y-8 p-6">

      <SettingsHeader />

      <ProfileSettings />

      <div className="grid gap-6 lg:grid-cols-2">

        <AccountSettings />

        <NotificationSettings />

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <AppearanceSettings />

        <LanguageSettings />

      </div>

      <SaveSettings />

      <DangerZone />

    </main>
  );
}