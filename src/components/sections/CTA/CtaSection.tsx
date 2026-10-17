// src/components/sections/CTA/CtaSection.tsx
import { MessageSquare, Mail, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function CtaSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="relative rounded-3xl bg-slate-950 border border-slate-800 p-8 sm:p-14 text-white overflow-hidden shadow-2xl">
        {/* Glow Ambient Blue/Cyan */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* SLA Pill Response */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs text-slate-300 mb-6 backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>SLA Respons Konsultasi: Kurang dari 2 Jam Kerja</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-4">
            Siap Merekayasa Solusi Digital yang Kokoh untuk Bisnis Anda?
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mx-auto mb-8">
            Diskusikan kebutuhan arsitektur aplikasi web, sistem enterprise, atau prototipe produk Anda langsung bersama tim arsitek sistem PT Ranbadi.
          </p>

          {/* Action Hub Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="https://wa.me/6281234567890" // Ganti no WA aktif tim
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition shadow-lg shadow-blue-600/30 active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Diskusi Cepat via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="mailto:kontak@ranbadi.id"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold transition"
            >
              <Mail className="w-4 h-4" />
              <span>Kirim Brief via Email Resmi</span>
            </a>
          </div>

          {/* Value Assurances Footer */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 pt-6 border-t border-slate-800/80">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" /> Perlindungan NDA Kerahasiaan Ide
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-cyan-400" /> Konsultasi Tahap 01 Gratis
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}