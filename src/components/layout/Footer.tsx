import Image from "next/image";
import { MapPin, Mail, Phone, Layers } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-20 pb-12 border-t border-slate-900 overflow-hidden">
      {/* 1. Wadah Background Gedung (Menggunakan z-0 agar tidak tertutup warna hitam) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/footer-building.jpg"
          alt="Ranbadi Architecture Building"
          fill
          priority
          className="object-cover object-center opacity-40 filter contrast-125 grayscale"
        />
        {/* 2. Dark Overlay Gradasi (Agar teks putih tetap terbaca tajam) */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/85" />
      </div>

      {/* 3. Seluruh Konten Footer Berada di Lapisan Terdepan (z-10) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Baris Atas Footer */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-10 pb-14 border-b border-slate-800/80">
          {/* Kolom 1: Profil Perusahaan */}
          <div className="col-span-2 md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Layers className="w-4 h-4" />
              </div>
              <span className="text-white font-extrabold text-base tracking-tight">PT RANBADI</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-sm">
              PT Rancang Bangun Digital adalah software development agency yang berfokus pada arsitektur sistem enterprise, aplikasi web modern, dan solusi cloud terukur di Indonesia.
            </p>
            {/* Status Sistem Operasional */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300 backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Semua Sistem Beroperasi Normal</span>
            </div>
          </div>

          {/* Kolom 2: Layanan */}
          <div className="col-span-1 md:col-span-2">
            <p className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Layanan</p>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#services" className="hover:text-blue-400 transition">Custom Web Apps</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Mobile Development</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">UI/UX Design System</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Cloud & DevOps</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Maintenance SLA</a></li>
            </ul>
          </div>

          {/* Kolom 3: Portofolio */}
          <div className="col-span-1 md:col-span-2">
            <p className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Portofolio</p>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#portfolio" className="hover:text-blue-400 transition">E-Commerce Platform</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition">Hospital Management</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition">Fintech Analytics</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition">SaaS Dashboard</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition">Company Portal</a></li>
            </ul>
          </div>

          {/* Kolom 4: Perusahaan */}
          <div className="col-span-1 md:col-span-2">
            <p className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Perusahaan</p>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#about" className="hover:text-blue-400 transition">Tentang Ranbadi</a></li>
              <li><a href="#team" className="hover:text-blue-400 transition">Tim Rekayasa</a></li>
              <li><a href="#workflow" className="hover:text-blue-400 transition">Alur Kerja Kami</a></li>
              <li><a href="#career" className="hover:text-blue-400 transition">Karir & Magang</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Hubungi Kami</a></li>
            </ul>
          </div>

          {/* Kolom 5: Kontak & Kantor */}
          <div className="col-span-1 md:col-span-2">
            <p className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Kantor</p>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>Kuningan Cyber Hub, Jakarta Selatan, Indonesia</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>kontak@ranbadi.id</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>+62 (21) 8920-1122</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Baris Bawah: Hak Cipta & Legalitas */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 PT Rancang Bangun Digital. Seluruh hak cipta dilindungi undang-undang.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition">Kebijakan Privasi</a>
            <a href="#" className="hover:text-slate-300 transition">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-slate-300 transition">Keamanan Sistem</a>
          </div>
        </div>
      </div>
    </footer>
  );
}