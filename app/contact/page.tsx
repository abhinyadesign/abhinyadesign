"use client";

import { useState } from "react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="py-20 bg-gradient-to-br from-[#0a1f2e] to-[#0f2a36] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "linear-gradient(rgba(41,189,138,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(41,189,138,0.2) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Contact Us</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Let&apos;s Build Something Great</h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">We&apos;d love to hear about your project. Fill in the form and we&apos;ll get back to you within 24 hours.</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-[#0f2a36]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left: Info */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>
                <div className="flex flex-col gap-6 mb-10">
                  {[
                    { icon: <Mail className="w-5 h-5" />, label: "Email", value: siteData.company.email, href: `mailto:${siteData.company.email}` },
                    { icon: <Phone className="w-5 h-5" />, label: "Phone", value: siteData.company.phone, href: `tel:${siteData.company.phone}` },
                    { icon: <MapPin className="w-5 h-5" />, label: "Location", value: siteData.company.address, href: "#" },
                  ].map((item) => (
                    <a key={item.label} href={item.href} className="flex items-start gap-5 group">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary flex-shrink-0 group-hover:bg-secondary group-hover:text-white transition-all">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">{item.label}</div>
                        <div className="text-white font-medium group-hover:text-secondary transition-colors">{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Office hours */}
                <div className="p-6 bg-[#153848] rounded-2xl border border-white/10">
                  <h3 className="text-white font-semibold mb-4">Office Hours</h3>
                  <div className="flex flex-col gap-2 text-sm text-gray-400">
                    <div className="flex justify-between"><span>Monday – Friday</span><span className="text-secondary">9:00 AM – 7:00 PM IST</span></div>
                    <div className="flex justify-between"><span>Saturday</span><span className="text-secondary">10:00 AM – 3:00 PM IST</span></div>
                    <div className="flex justify-between"><span>Sunday</span><span className="text-gray-600">Closed</span></div>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div>
                {submitted ? (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center p-12 bg-[#153848] rounded-2xl border border-secondary/30">
                      <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                      <p className="text-gray-400">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 p-8 bg-[#153848] rounded-2xl border border-white/10">
                    <h2 className="text-xl font-bold text-white mb-6">Send us a Message</h2>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-gray-400 mb-1.5 font-medium" htmlFor="name">Your Name *</label>
                        <input id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                          className="w-full bg-[#0f2a36] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:border-secondary focus:outline-none transition-colors"
                          placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-400 mb-1.5 font-medium" htmlFor="email">Email Address *</label>
                        <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                          className="w-full bg-[#0f2a36] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:border-secondary focus:outline-none transition-colors"
                          placeholder="you@company.com" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5 font-medium" htmlFor="company">Company Name</label>
                      <input id="company" name="company" type="text" value={form.company} onChange={handleChange}
                        className="w-full bg-[#0f2a36] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:border-secondary focus:outline-none transition-colors"
                        placeholder="Your Company LLC" />
                    </div>

                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5 font-medium" htmlFor="service">Service Interested In</label>
                      <select id="service" name="service" value={form.service} onChange={handleChange}
                        className="w-full bg-[#0f2a36] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-secondary focus:outline-none transition-colors appearance-none cursor-pointer">
                        <option value="">Select a service…</option>
                        {siteData.services.map((s) => (
                          <option key={s.slug} value={s.slug}>{s.title}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5 font-medium" htmlFor="message">Your Message *</label>
                      <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange}
                        className="w-full bg-[#0f2a36] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:border-secondary focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your project…" />
                    </div>

                    <button type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-secondary to-accent text-white font-bold rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg shadow-secondary/20">
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
