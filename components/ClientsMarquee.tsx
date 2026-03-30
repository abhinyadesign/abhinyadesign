"use client";

const clients = [
  "TechCorp", "RetailBot AI", "EduTech Ventures",
  "FinStar", "MedPlus", "CloudNine", "DataSphere",
  "InnovateTech", "NextGen Labs", "PixelForge",
];

export default function ClientsMarquee() {
  return (
    <section className="py-14 bg-[#0a2030] border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-1">Trusted By</p>
        <h2 className="text-2xl font-bold text-white">Over 80+ Companies Trust Us</h2>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a2030] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a2030] to-transparent z-10 pointer-events-none" />

        {/* Marquee track */}
        <div className="flex gap-8 animate-marquee hover:[animation-play-state:paused]">
          {[...clients, ...clients].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 px-8 py-3 bg-[#153848] border border-white/10 rounded-xl hover:border-secondary/30 transition-colors flex items-center justify-center min-w-[160px]"
            >
              <span className="text-gray-300 font-semibold text-sm whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
