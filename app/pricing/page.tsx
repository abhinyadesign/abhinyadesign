import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import { HelpCircle, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing | Abhinya Design",
  description: "Transparent, flexible pricing plans for startups, growing businesses, and enterprises.",
};

const faqs = [
  { q: "Do you offer custom pricing?", a: "Absolutely. Our Enterprise tier is fully custom — just reach out and we'll build a plan around your needs." },
  { q: "What payment methods do you accept?", a: "We accept bank transfers, UPI, PayPal, and all major credit/debit cards." },
  { q: "Is there a free trial?", a: "We offer a free 30-minute consultation call and project scoping session for all new clients." },
  { q: "What does '90-Day Support' mean?", a: "After launch, we actively monitor your product, fix any bugs, and answer technical questions for the defined support period." },
];

export default function PricingPage() {
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
            <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Pricing</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Simple, Transparent Pricing</h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">No hidden fees. No surprises. Just great software at fair prices.</p>
          </div>
        </section>

        <PricingSection />

        {/* FAQ */}
        <section className="py-24 bg-[#0a2030]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
            </div>
            <div className="flex flex-col gap-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="p-6 bg-[#153848] rounded-xl border border-white/10">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white font-semibold mb-2">{faq.q}</div>
                      <div className="text-gray-400 text-sm leading-relaxed">{faq.a}</div>
                    </div>
                  </div>
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
