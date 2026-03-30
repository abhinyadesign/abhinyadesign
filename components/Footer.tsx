import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Github, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { siteData } from "@/data/siteData";

const socialIcons: Record<string, React.ReactNode> = {
  LinkedIn: <Linkedin className="w-4 h-4" />,
  Instagram: <Instagram className="w-4 h-4" />,
  Github: <Github className="w-4 h-4" />,
  Facebook: <Facebook className="w-4 h-4" />,
};

export default function Footer() {
  return (
    <footer className="bg-[#0a2030] border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 ">
              <div className="relative w-40 h-40">
                <Image src="/images/abhinyalogo.png" alt="Abhinya Design" fill className="object-contain" />
              </div>
              {/* <span className="text-xl font-bold text-white">
                Abhinya<span className="text-secondary">Design</span>
              </span> */}
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              {siteData.company.description}
            </p>
            {/* Contact Info */}
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a href={`mailto:${siteData.company.email}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail className="w-4 h-4 text-secondary" />
                {siteData.company.email}
              </a>
              <a href={`tel:${siteData.company.phone}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="w-4 h-4 text-secondary" />
                {siteData.company.phone}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary" />
                {siteData.company.address}
              </span>
            </div>
            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {siteData.company.socials.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 text-gray-400 hover:bg-secondary hover:text-white transition-all"
                  aria-label={s.platform}
                >
                  {socialIcons[s.platform]}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {siteData.footerLinks.map((col) => (
            <div key={col.heading}>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-secondary transition-colors hover:pl-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <span>© {new Date().getFullYear()} {siteData.company.name}. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
