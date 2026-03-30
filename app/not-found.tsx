"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f2a36] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "linear-gradient(rgba(41,189,138,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(41,189,138,0.2) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      
      <div className="text-center relative z-10 px-4">
        <div className="text-[120px] sm:text-[180px] font-black leading-none bg-gradient-to-br from-secondary to-accent bg-clip-text text-transparent">
          404
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-gray-400 mb-10 max-w-md mx-auto">
          Looks like this page wandered off. Don&apos;t worry — let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-secondary to-accent text-white font-semibold rounded-xl hover:opacity-90 transition-all"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
