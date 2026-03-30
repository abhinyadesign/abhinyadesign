"use client";

import { useState } from "react";
import AnimateIn from "./AnimateIn";
import { Send, CheckCircle } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-[#0a2030] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/8 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateIn className="text-center">
          <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-4">Newsletter</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Stay Ahead of the Curve
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Get our bi-weekly digest of the latest in web development, AI/ML, design systems, and startup tech — straight to your inbox.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-8">
              <CheckCircle className="w-14 h-14 text-secondary" />
              <p className="text-white font-bold text-xl">You&apos;re subscribed!</p>
              <p className="text-gray-400 text-sm">Check your inbox for a welcome email.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 px-5 py-3.5 bg-[#153848] border border-white/15 rounded-xl text-white placeholder-gray-500 text-sm focus:border-secondary focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-secondary to-accent text-white font-semibold rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg shadow-secondary/20 whitespace-nowrap disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? "Subscribing..." : "Subscribe Free"}
              </button>
            </form>
          )}

          <p className="text-gray-600 text-xs mt-5">
            No spam, ever. Unsubscribe in one click.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
