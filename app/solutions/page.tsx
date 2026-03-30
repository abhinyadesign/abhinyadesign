import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import IndustriesSection from "@/components/IndustriesSection";
import CTASection from "@/components/CTASection";
import FeaturesSection from "@/components/FeaturesSection";

export const metadata: Metadata = {
  title: "Solutions | Abhinya Design",
  description: "Explore our case studies and business solutions across industries.",
};

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-[#0a1f2e] to-[#0f2a36] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "linear-gradient(rgba(41,189,138,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(41,189,138,0.2) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Solutions</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Built for Every Industry</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We&apos;ve built products for FinTech, Healthcare, EdTech, Retail, and more — and we can build for you.
            </p>
          </div>
        </section>
        <IndustriesSection />
        <CaseStudiesSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
