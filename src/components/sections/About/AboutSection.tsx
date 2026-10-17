// src/components/sections/About/AboutSection.tsx
import { ShieldCheck, Code2, Cpu, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const principles = [
    {
      title: "Arsitektur Skalabel Sebelum Baris Kode Pertama",
      desc: "Kami menolak koding terburu-buru tanpa perancangan skema data. Setiap endpoint dan relasi database dihitung untuk menampung pertumbuhan pengguna bisnis Anda.",
      icon: Cpu,
    },
    {
      title: "Clean Code & Strict Type Safety (TypeScript)",
      desc: "Menghindari 'spaghetti code' dengan menerapkan standardisasi linting ketat, modular component, dan dokumentasi arsitektur yang mudah dipelihara tim internal Anda.",
      icon: Code2,
    },
    {
      title: "Kepemilikan Repositori 100% Hak Milik Klien",
      desc: "Tidak ada 'vendor lock-in'. Seluruh source code, kredensial cloud, dan aset desain diserahkan penuh secara transparan tanpa biaya tersembunyi.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Kolom Kiri: Prinsip Rekayasa (Manifesto) */}
        <div className="lg:col-span-7">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            FILOSOFI RANCANG BANGUN
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4 mb-4">
            Rekayasa Perangkat Lunak Bukan Sekadar Menulis Kode.
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-8">
            PT Rancang Bangun Digital didirikan di atas keyakinan bahwa sistem digital yang berumur panjang membutuhkan kedisiplinan teknik yang sama seperti mendirikan gedung pencakar langit.
          </p>

          <div className="space-y-6">
            {principles.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Kolom Kanan: Visual Blueprint & Quality Matrix Card */}
        <div className="lg:col-span-5">
          <div className="p-7 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-2xl relative overflow-hidden">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-3 mb-6 border-b border-slate-800 text-xs font-mono text-slate-400">
              <span>ranbadi-qa-benchmark</span>
              <span className="text-emerald-400 font-bold">VERIFIED</span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-[10px] text-slate-400 block mb-1">Audit Keamanan & Kerentanan</span>
                <p className="text-sm font-bold text-emerald-400">0 Critical Vulnerabilities</p>
                <p className="text-[10px] text-slate-500 mt-0.5">OWASP Top 10 Security Hardened</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-[10px] text-slate-400 block mb-1">Google Core Web Vitals</span>
                <p className="text-sm font-bold text-cyan-400">Score 99/100 (Performance)</p>
                <p className="text-[10px] text-slate-500 mt-0.5">Optimasi aset & First Contentful Paint</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-[10px] text-slate-400 block mb-1">Arsitektur Modular</span>
                <p className="text-sm font-bold text-blue-400">Strict TypeScript & ESLint</p>
                <p className="text-[10px] text-slate-500 mt-0.5">Zero Any Types, 100% Type-Safe</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Standar Repositori</span>
              <span className="text-slate-200 font-bold">Production Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}