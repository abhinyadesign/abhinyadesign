import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import TimelineSection from "@/components/TimelineSection";
import TechStackSection from "@/components/TechStackSection";
import StatsCounterSection from "@/components/StatsCounterSection";
import { siteData } from "@/data/siteData";
import { Target, Eye, Heart } from "lucide-react";
import Image from "next/image";
import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "About Us | Abhinya Design",
  description: "Learn about Abhinya Design — our story, team, values, and mission.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-br from-[#0a1f2e] to-[#0f2a36] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "linear-gradient(rgba(41,189,138,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(41,189,138,0.2) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">About Us</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Building Tomorrow&apos;s Digital World
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              {siteData.company.description}
            </p>
          </div>
        </section>

        {/* Timeline */}
        <TimelineSection />

        {/* Culture/Image Section */}
        <section className="py-24 bg-[#0a2030] relative">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <AnimateIn className="rounded-3xl overflow-hidden relative aspect-video shadow-[0_20px_60px_rgba(41,189,138,0.15)] group">
                <Image 
                  src="/images/about-team.png" 
                  alt="Abhinya Design Team Culture" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2030] via-[#0a2030]/20 to-transparent opacity-80" />
                <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 max-w-xl">
                   <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Makers at Heart.</h2>
                   <p className="text-gray-300 text-lg">We belong to a rare breed of engineers and designers who care deeply about the craft. The tools change, but the obsession with quality never fades.</p>
                </div>
             </AnimateIn>
           </div>
        </section>

        {/* TechStack */}
        <TechStackSection />

        {/* Stats */}
        <StatsCounterSection />

        {/* Team */}
        <section className="py-24 bg-[#0a2030]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Our Team</p>
              <h2 className="text-3xl font-bold text-white">Meet the Experts Behind the Magic</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {siteData.team.map((member) => (
                <div key={member.name} className="text-center group">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-2xl font-bold text-white shadow-lg group-hover:scale-105 transition-transform">
                    {member.name.charAt(0)}
                  </div>
                  <div className="text-white font-semibold">{member.name}</div>
                  <div className="text-secondary text-xs mt-1">{member.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
