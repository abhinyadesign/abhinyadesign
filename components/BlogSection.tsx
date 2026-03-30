import Link from "next/link";
import { siteData } from "@/data/siteData";
import type { BlogPost } from "@/types";
import { Calendar, User } from "lucide-react";

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-[#0f2a36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Our Blog</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Recent Articles</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Insights, tutorials, and perspectives from our engineering and design teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.blogPosts.map((post: BlogPost) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-secondary/50 text-secondary rounded-xl hover:bg-secondary hover:text-white transition-all font-semibold"
          >
            View All Articles →
          </Link>
        </div>
      </div>
    </section>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  // Category colors
  const catColors: Record<string, string> = {
    Technology: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Design: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    "AI & ML": "bg-secondary/20 text-secondary border-secondary/30",
  };
  const catClass = catColors[post.category] || "bg-secondary/20 text-secondary border-secondary/30";

  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <div className="h-full bg-[#153848] border border-white/10 rounded-2xl overflow-hidden hover:border-secondary/30 hover:-translate-y-1 transition-all hover:shadow-xl hover:shadow-secondary/10">
        {/* Placeholder image */}
        <div className="h-48 bg-gradient-to-br from-primary via-[#153848] to-[#0a2030] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "linear-gradient(rgba(41,189,138,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(41,189,138,0.2) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
          <span className="text-6xl font-bold text-white/10">{post.title.charAt(0)}</span>
        </div>

        <div className="p-6">
          <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-4 ${catClass}`}>
            {post.category}
          </span>
          <h3 className="text-white font-bold text-base mb-3 leading-snug group-hover:text-secondary transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-3 h-3" />
              {post.author}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
