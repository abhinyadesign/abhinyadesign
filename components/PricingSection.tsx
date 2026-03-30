import { Check } from "lucide-react";
import Link from "next/link";
import { siteData } from "@/data/siteData";
import type { PricingTier } from "@/types";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-[#0f2a36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            We Offer You Best Pricing
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Transparent, scalable pricing for every stage of your business — from MVP to enterprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {siteData.pricing.map((tier: PricingTier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={`relative flex flex-col p-8 rounded-2xl border transition-all ${
        tier.highlighted
          ? "bg-gradient-to-br from-secondary to-accent border-transparent shadow-2xl shadow-secondary/30 scale-105"
          : "bg-[#153848] border-white/10 hover:border-secondary/30"
      }`}
    >
      {tier.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-secondary text-xs font-bold px-4 py-1 rounded-full shadow-lg whitespace-nowrap">
          ⭐ Most Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className={`text-lg font-bold mb-1 ${tier.highlighted ? "text-white" : "text-white"}`}>
          {tier.name}
        </h3>
        <p className={`text-sm ${tier.highlighted ? "text-white/70" : "text-gray-400"}`}>
          {tier.description}
        </p>
      </div>

      <div className="mb-8">
        <div className={`text-4xl font-extrabold ${tier.highlighted ? "text-white" : "text-white"}`}>
          {tier.price}
        </div>
        <div className={`text-sm ${tier.highlighted ? "text-white/70" : "text-gray-400"}`}>
          {tier.period}
        </div>
      </div>

      <ul className="flex flex-col gap-3 flex-grow mb-8">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check
              className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                tier.highlighted ? "text-white" : "text-secondary"
              }`}
            />
            <span className={`text-sm ${tier.highlighted ? "text-white/80" : "text-gray-300"}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={`block text-center py-3.5 rounded-xl font-semibold text-sm transition-all ${
          tier.highlighted
            ? "bg-white text-secondary hover:bg-gray-100 shadow-lg"
            : "border border-secondary text-secondary hover:bg-secondary hover:text-white"
        }`}
      >
        {tier.cta}
      </Link>
    </div>
  );
}
