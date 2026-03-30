"use client";

import { useEffect, useRef, useState } from "react";
import AnimateIn from "./AnimateIn";

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered", description: "Across 15+ industries worldwide" },
  { value: 98,  suffix: "%", label: "Client Satisfaction", description: "Based on post-project surveys" },
  { value: 80,  suffix: "+", label: "Happy Clients",       description: "From startups to enterprises" },
  { value: 10,  suffix: "+", label: "Years Experience",    description: "Building digital products" },
];

function useCounter(target: number, duration: number = 2000, started: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);
  return count;
}

function StatCard({ stat, started }: { stat: typeof stats[0]; started: boolean }) {
  const count = useCounter(stat.value, 2200, started);
  return (
    <div className="text-center p-8 bg-[#153848] rounded-2xl border border-white/10 hover:border-secondary/30 transition-all group">
      <div className="text-5xl sm:text-6xl font-black text-transparent bg-gradient-to-br from-secondary to-accent bg-clip-text mb-2 group-hover:scale-105 transition-transform">
        {count}{stat.suffix}
      </div>
      <div className="text-white font-bold text-lg mb-1">{stat.label}</div>
      <div className="text-gray-400 text-sm">{stat.description}</div>
    </div>
  );
}

export default function StatsCounterSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-[#0f2a36] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-secondary/5 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateIn className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">By the Numbers</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Results That Speak for Themselves</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Our track record reflects our unwavering commitment to quality, speed, and client success.
          </p>
        </AnimateIn>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <AnimateIn key={stat.label} delay={0.1}>
              <StatCard stat={stat} started={started} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
