"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

const techs = [
  { name: "Next.js", color: "bg-white/10 text-white" },
  { name: "React", color: "bg-blue-500/15 text-blue-300" },
  { name: "TypeScript", color: "bg-blue-600/15 text-blue-400" },
  { name: "Node.js", color: "bg-green-500/15 text-green-400" },
  { name: "Python", color: "bg-yellow-500/15 text-yellow-400" },
  { name: "AWS", color: "bg-orange-500/15 text-orange-400" },
  { name: "Docker", color: "bg-cyan-500/15 text-cyan-400" },
  { name: "Kubernetes", color: "bg-blue-400/15 text-blue-300" },
  { name: "PostgreSQL", color: "bg-indigo-500/15 text-indigo-400" },
  { name: "MongoDB", color: "bg-green-600/15 text-green-400" },
  { name: "Figma", color: "bg-purple-500/15 text-purple-400" },
  { name: "Flutter", color: "bg-cyan-600/15 text-cyan-300" },
  { name: "React Native", color: "bg-blue-500/15 text-blue-300" },
  { name: "TailwindCSS", color: "bg-teal-500/15 text-teal-400" },
  { name: "GraphQL", color: "bg-pink-500/15 text-pink-400" },
  { name: "Terraform", color: "bg-violet-500/15 text-violet-400" },
];

export default function TechStackSection() {
  return (
    <section className="py-20 bg-[#0a2030] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Our Tech Stack</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Built With <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Industry-Leading</span> Technologies
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            We choose the right tool for every job — from rapid prototyping to planet-scale production systems.
          </p>
        </AnimateIn>

        <StaggerContainer className="flex flex-wrap gap-3 justify-center" staggerDelay={0.04}>
          {techs.map((tech) => (
            <StaggerItem key={tech.name}>
              <span
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-sm font-semibold hover:border-secondary/40 hover:scale-105 transition-all cursor-default select-none ${tech.color}`}
              >
                <span className="w-2 h-2 rounded-full bg-current opacity-70" />
                {tech.name}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
