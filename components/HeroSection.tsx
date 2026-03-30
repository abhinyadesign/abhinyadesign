"use client";
import { ArrowRight, CheckCircle, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { siteData } from "@/data/siteData";
import AnimateIn from "./AnimateIn";

const highlights = ["Web & Mobile Development", "AI/ML Integration", "Cloud Infrastructure", "UI/UX Design"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f2e] via-[#0f2a36] to-[#0d1f2d]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(41,189,138,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(41,189,138,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/30 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <AnimateIn direction="up">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                Trusted by 80+ Companies Worldwide
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Transforming Ideas Into{" "}
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Digital Excellence
                </span>
              </h1>

              <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl">
                {siteData.company.description}
              </p>

              {/* Highlights */}
              <ul className="grid grid-cols-2 gap-2 mb-10">
                {highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* CTA Row */}
              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-secondary to-accent text-white font-semibold rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-secondary/20"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 hover:border-secondary/50 transition-all group"
                >
                  <Play className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
                  View Our Work
                </Link>
              </div>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
                {siteData.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Right: Visual */}
          <AnimateIn direction="left" delay={0.2} className="hidden lg:flex justify-center flex-col relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(41,189,138,0.15)] border border-white/10 group">
              <Image 
                src="/images/hero-illustration.png" 
                alt="Abhinya Design Digital Excellence" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f2e] via-transparent to-transparent opacity-80" />
              
              {/* Optional overlay text/badge for premium feel */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#153848]/60 backdrop-blur-md rounded-2xl border border-white/10">
                 <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold text-sm">Enterprise Grade</div>
                    <div className="text-xs text-gray-400 mt-1">Scalable Next.js & Cloud Solutions</div>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full fill-[#0f2a36] opacity-50">
          <path d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,21,960,16C1120,11,1280,21,1360,26.7L1440,32L1440,60L1360,60C1280,60,1120,60,960,60C800,60,640,60,480,60C320,60,160,60,80,60L0,60Z" />
        </svg>
      </div>
    </section>
  );
}
