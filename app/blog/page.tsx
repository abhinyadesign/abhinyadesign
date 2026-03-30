import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";
import NewsletterSection from "@/components/NewsletterSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Blog | Abhinya Design",
  description: "Insights, tutorials, and tech articles from the Abhinya Design team.",
};

export default function BlogPage() {
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
            <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Our Blog</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Insights & Articles</h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Technical deep-dives, design philosophy, and business strategy from our expert team.
            </p>
          </div>
        </section>
        <BlogSection />
        <NewsletterSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
