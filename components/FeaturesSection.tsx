import React from "react";
import { Zap, Shield, Settings, BarChart2, Users, Cpu } from "lucide-react";
import { siteData } from "@/data/siteData";
import type { Feature } from "@/types";

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Settings: <Settings className="w-6 h-6" />,
  BarChart2: <BarChart2 className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-[#0a2030]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Best Powerful Platform &amp; Engineering Team
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We combine world-class engineering talent with a laser-focus on your business outcomes. Our iterative, client-first approach ensures every deliverable exceeds expectations.
            </p>
            <div className="flex flex-col gap-4">
              {["SOC2 & GDPR Compliant Security", "Agile Sprints with Weekly Demos", "24/7 Dedicated Support & SLA"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 flex-shrink-0 rounded-full bg-secondary/20 border border-secondary flex items-center justify-center">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                  </span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {siteData.features.map((feature: Feature) => (
              <div
                key={feature.title}
                className="p-5 bg-[#153848] rounded-2xl border border-white/10 hover:border-secondary/30 hover:-translate-y-1 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-all">
                  {iconMap[feature.icon] || <Zap className="w-6 h-6" />}
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
