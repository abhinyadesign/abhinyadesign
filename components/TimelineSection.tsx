import AnimateIn from "./AnimateIn";

const milestones = [
  {
    year: "2018",
    title: "Founded in Hyderabad",
    description: "Abhinya Design was born with a 3-person team in a small co-working space, focused on delivering exceptional UI/UX design for local startups.",
    side: "left",
  },
  {
    year: "2019",
    title: "First Enterprise Client",
    description: "Signed our first enterprise-level contract — a custom ERP dashboard for a Hyderabad-based manufacturing firm. This shaped our approach to scalable architecture.",
    side: "right",
  },
  {
    year: "2020",
    title: "Mobile Division Launched",
    description: "Expanded into mobile app development. Built 12 iOS & Android apps in our first year, gaining deep expertise in React Native and Flutter.",
    side: "left",
  },
  {
    year: "2021",
    title: "AI & Cloud Practice",
    description: "Launched our AI/ML and Cloud Solutions division. Partnered with AWS and built our first generative AI-powered product recommendation engine.",
    side: "right",
  },
  {
    year: "2023",
    title: "80+ Clients Milestone",
    description: "Crossed 80 active global clients, expanded the team to 25+ engineers and designers, and opened a new office in Bengaluru.",
    side: "left",
  },
  {
    year: "2025",
    title: "Global Expansion",
    description: "Serving clients across India, UAE, UK, and USA. 150+ projects delivered, recognized as a Top IT Services company in South Asia.",
    side: "right",
  },
];

export default function TimelineSection() {
  return (
    <section className="py-24 bg-[#0f2a36]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Our Journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Built Over Years of Craft</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            From a lean startup to a full-service digital agency — here&apos;s how we got here.
          </p>
        </AnimateIn>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-secondary/40 to-transparent hidden md:block" />

          <div className="flex flex-col gap-12">
            {milestones.map((m, idx) => (
              <AnimateIn
                key={m.year}
                direction={m.side === "left" ? "left" : "right"}
                delay={idx * 0.1}
              >
                <div className={`flex items-center gap-6 md:gap-0 ${m.side === "right" ? "md:flex-row-reverse" : ""}`}>
                  {/* Content */}
                  <div className={`flex-1 ${m.side === "left" ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="inline-block bg-[#153848] border border-white/10 rounded-2xl p-6 hover:border-secondary/30 transition-colors hover:-translate-y-0.5 hover:shadow-lg hover:shadow-secondary/10">
                      <div className="text-xs text-secondary font-bold uppercase tracking-widest mb-2">{m.year}</div>
                      <h3 className="text-white font-bold text-lg mb-2">{m.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{m.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-secondary to-accent shadow-lg shadow-secondary/40 border-2 border-[#0f2a36] z-10" />

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
