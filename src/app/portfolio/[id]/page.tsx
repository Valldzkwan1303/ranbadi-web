// src/app/portfolio/[id]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { ArrowLeft, CheckCircle2, ShieldCheck, Zap, Layers, ArrowUpRight } from "lucide-react";

// Memberitahu Next.js daftar halaman yang akan dibuat secara statis saat build
export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-900 pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Tombol Kembali ke Beranda */}
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-blue-600 mb-8 transition group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Kembali ke Portofolio Ranbadi</span>
        </Link>

        {/* Badge & Metadata Header */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            {project.categoryLabel}
          </span>
          <span className="text-xs font-mono text-slate-500">
            Klien: <strong className="text-slate-800">{project.client}</strong>
          </span>
        </div>

        {/* Judul Proyek */}
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
          {project.title}
        </h1>

        {/* Card Highlight Dampak Nyata */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white mb-12 shadow-xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-mono text-cyan-400 mb-1">Hasil & Dampak Bisnis Terukur</p>
            <p className="text-4xl sm:text-5xl font-black text-white">{project.impactMetric}</p>
            <p className="text-xs text-slate-400 mt-1">{project.impactLabel}</p>
          </div>
          <div className="space-y-2 text-xs font-medium text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Audit Keamanan Lulus 100%</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Waktu Rilis Sesuai Milestone Target</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Full SLA Maintenance Guarantee</span>
            </div>
          </div>
        </div>

        {/* Bedah Kasus: Masalah vs Solusi Ranbadi */}
        <div className="space-y-10 border-b border-slate-200 pb-12 mb-12">
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>Latar Belakang & Tantangan Klien</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Sebelum bermitra dengan PT Ranbadi, {project.client} menghadapi kendala skalabilitas sistem, fragmentasi data antar platform, dan biaya infrastruktur server yang tidak efisien. Diperlukan rekonstruksi menyeluruh tanpa mengganggu operasional harian yang sedang berjalan.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
              <span>Solusi Rekayasa dari Ranbadi</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
              {project.summary}
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Tim Ranbadi mengimplementasikan arsitektur modular berbasis clean code, integrasi API real-time berlatensi rendah, serta optimasi query database sehingga mampu melayani lonjakan traffic secara stabil.
            </p>
          </div>

          {/* Tech Stack Breakdown */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Teknologi yang Diimplementasikan:
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Bawah Halaman Detail */}
        <div className="p-8 rounded-3xl bg-blue-50/60 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Punya Kebutuhan Sistem Serupa dengan {project.client}?
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Konsultasikan arsitektur dan estimasi waktu pengerjaan dengan arsitek sistem Ranbadi.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition shadow-md shadow-blue-600/20 shrink-0"
          >
            <span>Mulai Diskusi Proyek</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}