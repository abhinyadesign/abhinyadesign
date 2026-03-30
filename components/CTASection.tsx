import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-[#0a2030] relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2030] to-[#0f2a36]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-4">Get In Touch</p>
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          Have a Project in Mind?{" "}
          <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Let&apos;s Get to Work.
          </span>
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Tell us about your vision, and we&apos;ll craft a tailored solution that drives real results. No obligations, free consultation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white font-bold rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-secondary/30"
          >
            Start a Project
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="mailto:hello@abhinyadesign.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-bold rounded-xl hover:bg-white/5 hover:border-secondary/50 transition-all"
          >
            <Mail className="w-5 h-5 text-secondary" />
            Email Us Directly
          </a>
        </div>
      </div>
    </section>
  );
}
