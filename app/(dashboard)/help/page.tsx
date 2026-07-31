import HelpHeader from "@/components/help/HelpHeader";
import SearchHelp from "@/components/help/SearchHelp";
import HelpCategories from "@/components/help/HelpCategories";
import FAQSection from "@/components/help/FAQSection";
import DocumentationCards from "@/components/help/DocumentationCards";
import VideoTutorials from "@/components/help/VideoTutorials";
import ContactSupport from "@/components/help/ContactSupport";
import SupportTicket from "@/components/help/SupportTicket";

export default function HelpPage() {
  return (
    <main className="space-y-8 p-6">

      <HelpHeader />

      <SearchHelp />

      <HelpCategories />

      <FAQSection />

      <DocumentationCards />

      <VideoTutorials />

      <div className="grid gap-6 lg:grid-cols-2">

        <ContactSupport />

        <SupportTicket />

      </div>

    </main>
  );
}