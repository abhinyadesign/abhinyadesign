import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { siteData } from "@/data/siteData";
import { ArrowLeft, Calendar, User } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return siteData.blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = siteData.blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Abhinya Design Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = siteData.blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  // Category classes
  const catColors: Record<string, string> = {
    Technology: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Design: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    "AI & ML": "bg-secondary/20 text-secondary border-secondary/30",
  };
  const catClass = catColors[post.category] || "bg-secondary/20 text-secondary border-secondary/30";

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <article>
          {/* Header */}
          <header className="pt-24 pb-16 bg-[#0a2030] border-b border-white/10 relative overflow-hidden">
             <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: "linear-gradient(rgba(41,189,138,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(41,189,138,0.2) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }} />
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-secondary text-sm mb-8 hover:gap-3 transition-all"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
              
              <div className="mb-6">
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${catClass}`}>
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-secondary" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-secondary" />
                  {post.date}
                </div>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="py-16 bg-[#0f2a36]">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="prose prose-invert prose-lg max-w-none prose-a:text-secondary hover:prose-a:underline prose-headings:text-white prose-p:text-gray-300">
                <p className="lead text-xl text-gray-400 mb-8 border-l-4 border-secondary pl-6">
                  {post.excerpt}
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <h2>The Evolution of the Platform</h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <ul>
                  <li>Performance optimizations out of the box</li>
                  <li>Seamless integrations with third-party APIs</li>
                  <li>Enhanced developer experience</li>
                </ul>
                <h3>Looking Forward</h3>
                <p>
                  Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
                </p>
              </div>
            </div>
          </div>
        </article>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
