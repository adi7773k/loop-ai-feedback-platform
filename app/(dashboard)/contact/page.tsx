import ContactHeader from "@/components/contact/ContactHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import OfficeLocation from "@/components/contact/OfficeLocation";
import SocialLinks from "@/components/contact/SocialLinks";
import BusinessHours from "@/components/contact/BusinessHours";
import FAQContact from "@/components/contact/FAQContact";
import FeedbackForm from "@/components/contact/FeedbackForm";

export default function ContactPage() {
  return (
    <main className="space-y-8 p-6">

      <ContactHeader />

      <ContactInfo />

      <div className="grid gap-6 lg:grid-cols-2">

        <ContactForm />

        <OfficeLocation />

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <SocialLinks />

        <BusinessHours />

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <FAQContact />

        <FeedbackForm />

      </div>

    </main>
  );
}