import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

const industries = [
  {
    name: "FinTech",
    icon: "💳",
    description: "Payment systems, trading platforms, digital banking, and compliance tools.",
    gradient: "from-green-500/20 to-emerald-600/10",
    border: "hover:border-green-500/40",
  },
  {
    name: "Healthcare",
    icon: "🏥",
    description: "Patient management, telemedicine, diagnostics, and HIPAA-compliant SaaS.",
    gradient: "from-blue-500/20 to-cyan-600/10",
    border: "hover:border-blue-500/40",
  },
  {
    name: "EdTech",
    icon: "🎓",
    description: "Learning management systems, adaptive quizzes, and student engagement tools.",
    gradient: "from-purple-500/20 to-violet-600/10",
    border: "hover:border-purple-500/40",
  },
  {
    name: "Retail & E-Commerce",
    icon: "🛍️",
    description: "AI recommendations, inventory management, and omnichannel storefronts.",
    gradient: "from-orange-500/20 to-amber-600/10",
    border: "hover:border-orange-500/40",
  },
  {
    name: "SaaS Platforms",
    icon: "☁️",
    description: "Multi-tenant architecture, billing integrations, and scalable API design.",
    gradient: "from-teal-500/20 to-cyan-600/10",
    border: "hover:border-teal-500/40",
  },
  {
    name: "Logistics & Supply Chain",
    icon: "🚚",
    description: "Real-time tracking, route optimization, and warehouse management systems.",
    gradient: "from-red-500/20 to-rose-600/10",
    border: "hover:border-red-500/40",
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-[#0a2030]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Domain Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Industries We <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Serve</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Deep domain expertise across 6+ verticals, delivering solutions that understand your industry's unique challenges.
          </p>
        </AnimateIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {industries.map((industry) => (
            <StaggerItem key={industry.name}>
              <div
                className={`relative p-6 rounded-2xl border border-white/10 ${industry.border} bg-[#153848] bg-gradient-to-br ${industry.gradient} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary/5 group cursor-default`}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{industry.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{industry.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{industry.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
