import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { siteData } from "@/data/siteData";
import { CheckCircle, ArrowLeft } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return siteData.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = siteData.services.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | Abhinya Design`,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = siteData.services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const related = siteData.services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-br from-[#0a1f2e] to-[#0f2a36] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "linear-gradient(rgba(41,189,138,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(41,189,138,0.2) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-secondary text-sm mb-8 hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </Link>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Service</p>
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">{service.title}</h1>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">{service.description}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-secondary to-accent text-white font-semibold rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg shadow-secondary/20"
                >
                  Get a Free Consultation →
                </Link>
              </div>
              <div className="bg-[#153848] rounded-2xl border border-white/10 p-8">
                <h3 className="text-white font-bold text-lg mb-6">What&apos;s Included</h3>
                <ul className="flex flex-col gap-4">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 bg-[#0f2a36]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Explore Other Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="group">
                  <div className="p-6 bg-[#153848] rounded-2xl border border-white/10 hover:border-secondary/30 hover:-translate-y-1 transition-all">
                    <h3 className="text-white font-semibold mb-2 group-hover:text-secondary transition-colors">{s.title}</h3>
                    <p className="text-gray-400 text-sm">{s.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
