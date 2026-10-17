"use client";

import { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

export default function PortfolioSection() {
  const [filter, setFilter] = useState<"all" | "web" | "mobile" | "enterprise">("all");

  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-100">
      {/* Header Portofolio */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3 h-3 text-blue-600" />
            <span>KARYA & REKAYASA SISTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Studi Kasus Proyek Unggulan
          </h2>
          <p className="text-slate-600 text-sm mt-2 max-w-xl">
            Solusi digital nyata yang telah kami bangun dari perancangan arsitektur hingga rilis produksi dengan dampak bisnis terukur.
          </p>
        </div>

        {/* Tab Filter Kategori */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto overflow-x-auto max-w-full">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer shrink-0 ${
              filter === "all"
                ? "bg-white text-blue-600 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Semua
          </button>
          <button
            type="button"
            onClick={() => setFilter("web")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer shrink-0 ${
              filter === "web"
                ? "bg-white text-blue-600 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Web Platform
          </button>
          <button
            type="button"
            onClick={() => setFilter("mobile")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer shrink-0 ${
              filter === "mobile"
                ? "bg-white text-blue-600 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Mobile App
          </button>
          <button
            type="button"
            onClick={() => setFilter("enterprise")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer shrink-0 ${
              filter === "enterprise"
                ? "bg-white text-blue-600 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Enterprise System
          </button>
        </div>
      </div>

      {/* Grid Kartu Proyek */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group rounded-3xl bg-white border border-slate-200/90 overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Bagian Visual Mockup Atas */}
            <div className={`p-6 sm:p-8 bg-gradient-to-b ${project.gradient} border-b border-slate-100 relative overflow-hidden`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 bg-white/90 border border-slate-200/80 px-2.5 py-1 rounded-full backdrop-blur-xs">
                  {project.categoryLabel}
                </span>
                <span className="text-xs font-mono font-semibold text-slate-500">
                  {project.client}
                </span>
              </div>

              {/* Box Tampilan Antarmuka Mini */}
              <div className="rounded-2xl bg-slate-900 p-4 border border-slate-800 text-white shadow-lg transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-[10px] text-slate-400 font-mono">
                  <span>{project.previewMockup.tag}</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Live Production
                  </span>
                </div>
                <p className="text-sm font-bold text-slate-100">{project.previewMockup.headline}</p>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Audit Benchmark</span>
                  <span className="text-cyan-400 font-bold">{project.previewMockup.stat}</span>
                </div>
              </div>
            </div>

            {/* Bagian Detail Informasi Bawah */}
            <div className="p-6 sm:p-8 flex flex-col justify-between grow">
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Metrik Dampak Nyata */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6 flex items-baseline gap-3">
                  <span className="text-3xl font-black text-blue-600">
                    {project.impactMetric}
                  </span>
                  <span className="text-xs font-medium text-slate-600">
                    {project.impactLabel}
                  </span>
                </div>
              </div>

              {/* Tech Stack Pills & Tombol Masuk ke Halaman Detail Studi Kasus */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link Menuju Halaman Studi Kasus Proyek */}
                <Link
                  href={`/portfolio/${project.id}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition group-hover:translate-x-1 duration-200"
                >
                  <span>Lihat Studi Kasus</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}