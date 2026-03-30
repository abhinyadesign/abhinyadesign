import AnimateIn from "./AnimateIn";

const awards = [
  { name: "Clutch Top 100", year: "2024", emoji: "🏆" },
  { name: "GoodFirms Top Dev", year: "2024", emoji: "⭐" },
  { name: "AWS Partner", year: "2023", emoji: "☁️" },
  { name: "Google For Startups", year: "2023", emoji: "🚀" },
  { name: "NASSCOM Member", year: "2022", emoji: "🌐" },
  { name: "ISO 27001 Certified", year: "2023", emoji: "🔒" },
];

export default function AwardsSection() {
  return (
    <section className="py-16 bg-[#0f2a36] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-10">
          <p className="text-sm uppercase tracking-widest text-secondary font-semibold">
            Recognized & Certified
          </p>
        </AnimateIn>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {awards.map((award, i) => (
            <AnimateIn key={award.name} delay={i * 0.07}>
              <div className="flex flex-col items-center text-center p-5 bg-[#153848] rounded-2xl border border-white/10 hover:border-secondary/30 hover:-translate-y-1 hover:shadow-lg transition-all">
                <span className="text-3xl mb-2">{award.emoji}</span>
                <div className="text-white font-semibold text-xs leading-tight mb-1">{award.name}</div>
                <div className="text-gray-500 text-xs">{award.year}</div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
