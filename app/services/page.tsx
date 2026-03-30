import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import TechStackSection from "@/components/TechStackSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services | Abhinya Design",
  description: "Explore our full range of IT services — web development, mobile apps, cloud, AI/ML, design, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Page header */}
        <section className="py-20 bg-gradient-to-br from-[#0a1f2e] to-[#0f2a36] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "linear-gradient(rgba(41,189,138,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(41,189,138,0.2) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">What We Do</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Full-spectrum digital services to help your business grow faster and smarter.
            </p>
          </div>
        </section>
        <ServicesSection />
        <IndustriesSection />
        <TechStackSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
