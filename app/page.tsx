import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import Pricing from "@/components/home/Pricing";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <Features />

        <Stats />

        <Testimonials />

        <Pricing />

        <FAQ />

        <CTA />

      </main>

      <Footer />
    </>
  );
}