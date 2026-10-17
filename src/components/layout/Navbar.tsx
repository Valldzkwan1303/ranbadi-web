// src/components/layout/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Layers } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Layanan", href: "#services" },
    { name: "Portofolio", href: "#portfolio" },
    { name: "Alur Kerja", href: "#workflow" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Tim", href: "#team" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all">
      <nav className="w-full max-w-6xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl bg-white/90 border border-slate-200/90 backdrop-blur-md shadow-sm">
        {/* Logo Ranbadi */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <span className="font-extrabold text-base tracking-tight text-slate-900 block leading-none">
              RANBADI
            </span>
            <span className="text-[10px] text-slate-500 font-medium tracking-wider">
              RANCANG BANGUN DIGITAL
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-600 transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button & Status Pill (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-medium text-emerald-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open for Projects</span>
          </div>
          <a
            href="/company-profile.pdf"
            download
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition shadow-xs"
          >
            <span>Compro PDF</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition shadow-sm shadow-blue-600/20"
          >
            Mulai Konsultasi
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto rounded-2xl bg-white border border-slate-200 p-5 shadow-xl transition-all">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-slate-700 hover:text-blue-600 py-2 border-b border-slate-100 last:border-b-0"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full text-center py-3 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition"
            >
              Mulai Konsultasi Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
}