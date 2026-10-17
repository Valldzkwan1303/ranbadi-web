import { Globe, Smartphone, Palette, ShieldCheck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    colorBg: "bg-blue-50 text-blue-600 border-blue-100",
    title: "Web Application",
    desc: "Pembuatan aplikasi web dinamis, enterprise internal portal, dan dashboard menggunakan Next.js.",
  },
  {
    icon: Smartphone,
    colorBg: "bg-purple-50 text-purple-600 border-purple-100",
    title: "Mobile Responsive",
    desc: "Tampilan responsif di seluruh layar ponsel, tablet, hingga monitor resolusi ultra-lebar.",
  },
  {
    icon: Palette,
    colorBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
    title: "UI/UX & Prototyping",
    desc: "Desain sistem modern dan prototipe interaktif dengan pendekatan pengalaman pengguna yang teruji.",
  },
  {
    icon: ShieldCheck,
    colorBg: "bg-amber-50 text-amber-600 border-amber-100",
    title: "Secure & Scalable",
    desc: "Penerapan standar keamanan terkini, optimasi database, dan arsitektur kode yang siap berkembang.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
          SERVICES
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4">
          Layanan Unggulan Kami
        </h2>
        <p className="text-slate-600 text-sm mt-3">
          Kami menyediakan solusi digital komprehensif untuk mendukung percepatan bisnis Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((item, index) => {
          const Icon = item.icon;
          return (
            <div 
              key={index} 
              className="p-7 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:-translate-y-1.5 transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-blue-500/5 group flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 ${item.colorBg}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-50 flex items-center text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
                <span>Pelajari Detail</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}