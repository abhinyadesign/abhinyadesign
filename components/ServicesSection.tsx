import React from "react";
import Link from "next/link";
import {
  Globe, Smartphone, Palette, Cloud, Brain, Shield,
} from "lucide-react";
import { siteData } from "@/data/siteData";
import type { Service } from "@/types";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
  Cloud: <Cloud className="w-6 h-6" />,
  Brain: <Brain className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#0f2a36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Our Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            We Provide the Best Services
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            From ideation to deployment, we offer end-to-end digital services that accelerate your business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.services.map((service: Service, index: number) => (
            <ServiceCard key={service.id} service={service} featured={index === 0} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-secondary/50 text-secondary rounded-xl hover:bg-secondary hover:text-white transition-all font-semibold"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, featured }: { service: Service; featured: boolean }) {
  return (
    <Link href={`/services/${service.slug}`} className="group">
      <div
        className={`relative h-full p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
          featured
            ? "bg-gradient-to-br from-secondary to-accent border-transparent text-white shadow-xl shadow-secondary/20"
            : "bg-[#153848] border-white/10 hover:border-secondary/40 hover:shadow-secondary/10"
        }`}
      >
        {featured && (
          <span className="absolute top-4 right-4 text-xs font-bold bg-white/20 text-white px-2 py-0.5 rounded-full">
            Top Rated
          </span>
        )}

        {/* Icon */}
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-xl mb-5 ${
            featured ? "bg-white/20 text-white" : "bg-secondary/10 text-secondary"
          }`}
        >
          {iconMap[service.icon] || <Globe className="w-6 h-6" />}
        </div>

        <h3 className={`text-lg font-bold mb-2 ${featured ? "text-white" : "text-white"}`}>
          {service.title}
        </h3>
        <p className={`text-sm leading-relaxed mb-5 ${featured ? "text-white/80" : "text-gray-400"}`}>
          {service.shortDescription}
        </p>

        <ul className="flex flex-col gap-1.5 mb-6">
          {service.features.slice(0, 3).map((f) => (
            <li
              key={f}
              className={`text-xs flex items-center gap-2 ${
                featured ? "text-white/70" : "text-gray-400"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${featured ? "bg-white" : "bg-secondary"}`} />
              {f}
            </li>
          ))}
        </ul>

        <span
          className={`text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all ${
            featured ? "text-white" : "text-secondary"
          }`}
        >
          Learn More →
        </span>
      </div>
    </Link>
  );
}
