import Link from "next/link";
import Image from "next/image";
import { siteData } from "@/data/siteData";
import AnimateIn from "./AnimateIn";
import { ExternalLink } from "lucide-react";

export default function CaseStudiesSection() {
  return (
    <section id="portfolio" className="py-24 bg-[#0f2a36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Case Studies &amp; Results</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Real projects, real outcomes. See how we&apos;ve helped businesses transform digitally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.caseStudies.map((cs, i) => {
             const images = [
              "/images/case-study-1.png",
              "/images/case-study-2.png",
              "/images/case-study-3.png"
            ];
            const imgSrc = Object.values(images)[i % 3];

            return (
              <AnimateIn key={cs.slug} delay={i * 0.1}>
                <Link href={`/solutions/${cs.slug}`} className="group">
                  <div className="h-full bg-[#153848] rounded-2xl overflow-hidden border border-white/10 hover:border-secondary/30 hover:-translate-y-1 transition-all hover:shadow-xl hover:shadow-secondary/10 flex flex-col">
                    {/* Real generated Image */}
                    <div className="h-56 relative overflow-hidden bg-[#0a2030]">
                      <Image 
                        src={imgSrc} 
                        alt={cs.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#153848] via-transparent to-transparent opacity-90" />
                      <div className="absolute top-4 right-4 w-8 h-8 bg-[#153848]/80 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <span className="text-xs text-secondary font-semibold uppercase tracking-wider">{cs.category}</span>
                      <h3 className="text-white font-bold text-lg mt-2 mb-3 group-hover:text-secondary transition-colors leading-tight">{cs.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed flex-1">{cs.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
