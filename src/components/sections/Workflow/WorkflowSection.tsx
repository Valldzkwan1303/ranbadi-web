// src/components/sections/Workflow/WorkflowSection.tsx
import { SearchCode, Palette, Code2, Rocket, CheckCircle2 } from "lucide-react";

const workflowSteps = [
  {
    step: "01",
    phase: "Discovery & Blueprint",
    title: "Analisis Arsitektur",
    desc: "Menganalisis alur proses bisnis, kebutuhan database terdistribusi, dan mitigasi risiko sebelum koding dimulai.",
    output: "System Blueprint & SRS",
    icon: SearchCode,
  },
  {
    step: "02",
    phase: "Rancang (UI/UX)",
    title: "Prototipe Interaktif",
    desc: "Penyusunan design system modular dan wireframe interaktif di Figma yang diuji usability-nya pada pengguna nyata.",
    output: "Figma Design System",
    icon: Palette,
  },
  {
    step: "03",
    phase: "Bangun (Clean Code)",
    title: "Agile Engineering",
    desc: "Konstruksi aplikasi menggunakan Next.js & TypeScript murni dengan pemisahan business logic dan database terukur.",
    output: "Production Codebase",
    icon: Code2,
  },
  {
    step: "04",
    phase: "Deployment & SLA",
    title: "Peluncuran Cloud",
    desc: "Rilis sistem ke infrastruktur cloud, penyerahan repositori GitHub 100% ke klien, dan garansi pemeliharaan.",
    output: "Aplikasi Live & Hak Cipta",
    icon: Rocket,
  },
];

export default function WorkflowSection() {
  return (
    <section id="workflow" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-100">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
          METODOLOGI TEKNIK
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4">
          Alur Rekayasa Rancang Bangun
        </h2>
        <p className="text-slate-600 text-sm mt-3">
          Setiap proyek dikerjakan melalui pipa rekayasa (*engineering pipeline*) yang presisi dan transparan.
        </p>
      </div>

      {/* Connected Roadmap Pipeline Container */}
      <div className="relative">
        {/* Garis Horizontal Penghubung (Berada di Belakang Sumbu Ikon) */}
        <div className="hidden lg:block absolute top-6 left-10 right-10 h-0.5 bg-gradient-to-r from-blue-300 via-blue-600 to-cyan-400 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {workflowSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex flex-col items-start group">
                {/* Node Titik Konektor Atas (Diberi bg-white solid agar garis tidak menembus teks) */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white border-2 border-blue-600 shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  {/* Badge Fase dengan Background Putih Tertutup Rapi */}
                  <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-mono font-bold text-slate-600 shadow-xs">
                    FASE {step.step}
                  </span>
                </div>

                {/* Konten Keterangan Kartu */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 group-hover:border-blue-400 group-hover:shadow-xl transition-all duration-300 w-full flex flex-col justify-between grow">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
                      {step.phase}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-800">
                    <span className="text-slate-400 font-normal">Deliverable:</span>
                    <span className="text-blue-600 font-mono text-[10px]">{step.output}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}