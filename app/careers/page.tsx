import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Abhinya Design",
  description: "Join the Abhinya Design team. We're hiring talented engineers, designers, and product managers.",
};

const openings = [
  { title: "Senior Full-Stack Engineer", type: "Full-time", location: "Hyderabad / Remote", dept: "Engineering" },
  { title: "UI/UX Designer", type: "Full-time", location: "Hyderabad / Remote", dept: "Design" },
  { title: "React Native Developer", type: "Full-time", location: "Remote", dept: "Engineering" },
  { title: "DevOps / Cloud Engineer", type: "Full-time", location: "Hyderabad", dept: "Infrastructure" },
  { title: "Business Development Manager", type: "Full-time", location: "Hyderabad", dept: "Sales" },
];

const perks = [
  "🏠 Remote-First Culture",
  "📈 Equity for Early Employees",
  "📚 ₹50,000 Annual Learning Budget",
  "🏥 Comprehensive Health Insurance",
  "🌴 25 Days Paid Leave",
  "💻 Latest MacBook & Tools",
  "🚀 Work on Real-world Products",
  "🤝 Mentorship from Industry Experts",
];

export default function CareersPage() {
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Join Our Team</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Help Us Build the Future of Software</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Work alongside world-class engineers and designers on products that matter. We&apos;re a small team with big ambitions.</p>
          </div>
        </section>

        {/* Perks */}
        <section className="py-20 bg-[#0a2030]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Why Join Abhinya Design?</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {perks.map((perk) => (
                <div key={perk} className="p-5 bg-[#153848] rounded-2xl border border-white/10 text-center text-sm text-gray-300 font-medium hover:border-secondary/30 transition-colors">
                  {perk}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Openings */}
        <section className="py-20 bg-[#0f2a36]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Open Positions</h2>
            </div>
            <div className="flex flex-col gap-4">
              {openings.map((job) => (
                <div key={job.title} className="group flex items-center justify-between p-6 bg-[#153848] rounded-2xl border border-white/10 hover:border-secondary/30 hover:-translate-y-0.5 transition-all cursor-pointer">
                  <div>
                    <span className="text-xs text-secondary font-semibold uppercase tracking-wider">{job.dept}</span>
                    <h3 className="text-white font-bold text-lg mt-1">{job.title}</h3>
                    <div className="flex gap-4 mt-2">
                      <span className="flex items-center gap-1 text-gray-400 text-xs"><MapPin className="w-3 h-3" /> {job.location}</span>
                      <span className="flex items-center gap-1 text-gray-400 text-xs"><Briefcase className="w-3 h-3" /> {job.type}</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:border-secondary group-hover:text-secondary group-hover:bg-secondary/10 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <p className="text-gray-400 text-sm">Don&apos;t see your role?{" "}
                <Link href="/contact" className="text-secondary hover:underline">Send us your resume →</Link>
              </p>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
