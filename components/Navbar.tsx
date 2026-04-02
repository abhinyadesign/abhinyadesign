"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { siteData } from "@/data/siteData";
import type { NavLink } from "@/types";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f2a36]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-40 h-40 flex items-center justify-center">
              {/* Green Glow Background */}
              <div className="absolute w-20 h-20 bg-secondary/40 blur-2xl rounded-full pointer-events-none" />
              <Image
                src="/images/abhinyalogo.png"
                alt="Abhinya Design Logo"
                fill
                className="object-contain relative z-10"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            {/* <span className="text-xl font-bold text-white tracking-wide group-hover:text-secondary transition-colors">
              Abhinya<span className="text-secondary">Design</span>
            </span> */}
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {siteData.nav.map((link: NavLink) => (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm text-gray-300 hover:text-secondary transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-56 bg-[#153848] border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-secondary/20 transition-colors border-b border-white/5 last:border-none"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-secondary to-accent rounded-lg hover:opacity-90 transition-all hover:shadow-lg hover:shadow-secondary/30 hover:-translate-y-0.5"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-[#0f2a36] border-t border-white/10 pb-6 mt-2 rounded-b-2xl">
            {siteData.nav.map((link: NavLink) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block px-4 py-3 text-gray-300 hover:text-secondary transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children?.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    className="block px-8 py-2 text-sm text-gray-400 hover:text-secondary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="px-4 pt-4">
              <Link
                href="/contact"
                className="block w-full text-center px-5 py-3 font-semibold text-white bg-gradient-to-r from-secondary to-accent rounded-lg hover:opacity-90 transition-all"
                onClick={() => setIsOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
