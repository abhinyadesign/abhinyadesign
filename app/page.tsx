import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ClientsMarquee from "@/components/ClientsMarquee";
import ServicesSection from "@/components/ServicesSection";
import TechStackSection from "@/components/TechStackSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsCounterSection from "@/components/StatsCounterSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import AwardsSection from "@/components/AwardsSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Abhinya Design | Premium IT & Software Services",
  description:
    "Abhinya Design is a full-service IT company delivering web development, mobile apps, UI/UX design, cloud solutions, and AI/ML services.",
  keywords: ["IT services", "software company", "web development", "mobile apps", "UI/UX design", "Abhinya Design"],
  openGraph: {
    title: "Abhinya Design | Premium IT & Software Services",
    description: "Transforming ideas into digital excellence.",
    url: "https://abhinyadesign.com",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ClientsMarquee />
        <ServicesSection />
        <TechStackSection />
        <FeaturesSection />
        <StatsCounterSection />
        <CaseStudiesSection />
        <PricingSection />
        <ProcessSection />
        <TestimonialsSection />
        <BlogSection />
        <AwardsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
