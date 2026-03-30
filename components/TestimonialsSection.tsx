"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const items = siteData.testimonials;
  const total = items.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section id="testimonials" className="py-24 bg-[#0a2030]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Our Customers Say About Us
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Don&apos;t just take our word for it — hear from the businesses we&apos;ve helped grow.
          </p>
        </div>

        {/* Desktop: All 3 cards */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {items.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} active={i === current} />
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <TestimonialCard testimonial={items[current]} active={true} />
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:border-secondary hover:text-secondary transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-secondary w-6" : "bg-white/20"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:border-secondary hover:text-secondary transition-all"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

interface TestProps {
  testimonial: (typeof siteData.testimonials)[0];
  active: boolean;
}

function TestimonialCard({ testimonial, active }: TestProps) {
  return (
    <div
      className={`p-6 rounded-2xl border transition-all ${
        active
          ? "bg-[#153848] border-secondary/30 shadow-xl shadow-secondary/10"
          : "bg-[#153848] border-white/10"
      }`}
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">&quot;{testimonial.review}&quot;</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold text-sm">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="text-white font-semibold text-sm">{testimonial.name}</div>
          <div className="text-gray-400 text-xs">{testimonial.role}, {testimonial.company}</div>
        </div>
      </div>
    </div>
  );
}
