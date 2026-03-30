import { siteData } from "@/data/siteData";
import { Search, Figma, Code2, Rocket } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search className="w-6 h-6" />,
  Figma: <Figma className="w-6 h-6" />,
  Code2: <Code2 className="w-6 h-6" />,
  Rocket: <Rocket className="w-6 h-6" />,
};

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-[#0a2030]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">How We Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Process</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A battle-tested 4-step process that delivers results on time, every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

          {siteData.process.map((step, index) => (
            <div key={step.step} className="relative flex flex-col items-center text-center group">
              {/* Step number badge */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white shadow-lg shadow-secondary/30 mb-6 group-hover:scale-110 transition-all">
                {iconMap[step.icon] || <Code2 className="w-6 h-6" />}
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#0a2030] border-2 border-secondary rounded-full text-xs font-bold text-secondary flex items-center justify-center">
                  {index + 1}
                </span>
              </div>

              <h3 className="text-white font-bold text-base mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
