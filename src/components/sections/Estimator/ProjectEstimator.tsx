"use client";

import { useState } from "react";
import { 
  Calculator, 
  Clock, 
  Check, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  CreditCard, 
  Users, 
  LayoutDashboard, 
  Globe2, 
  BellRing
} from "lucide-react";

interface PlatformOption {
  id: string;
  name: string;
  desc: string;
  basePrice: number;
  baseWeeks: number;
}

interface FeatureOption {
  id: string;
  name: string;
  price: number;
  weeks: number;
  icon: React.ComponentType<{ className?: string }>;
}

const platforms: PlatformOption[] = [
  { id: "web-app", name: "Custom Web App / SaaS", desc: "Sistem aplikasi web dinamis berkecepatan tinggi", basePrice: 12000000, baseWeeks: 3 },
  { id: "mobile-app", name: "Mobile App (iOS & Android)", desc: "Aplikasi cross-platform React Native / Flutter", basePrice: 16000000, baseWeeks: 4 },
  { id: "ecosystem", name: "Web + Mobile Ecosystem", desc: "Satu database terpadu untuk web & aplikasi HP", basePrice: 25000000, baseWeeks: 6 },
  { id: "landing", name: "Enterprise Landing Page", desc: "Profil bisnis berkinerja tinggi & SEO-ready", basePrice: 4500000, baseWeeks: 1 },
];

const availableFeatures: FeatureOption[] = [
  { id: "auth", name: "Sistem Akun & Multi-Role User", price: 2000000, weeks: 1, icon: Users },
  { id: "payment", name: "Payment Gateway (Midtrans/QRIS)", price: 2500000, weeks: 1, icon: CreditCard },
  { id: "cms", name: "CMS / Admin Dashboard Data", price: 3500000, weeks: 1, icon: LayoutDashboard },
  { id: "security", name: "Audit Keamanan & SSL Hardening", price: 2000000, weeks: 0.5, icon: ShieldCheck },
  { id: "multilang", name: "Multi-Bahasa (ID & EN)", price: 1500000, weeks: 0.5, icon: Globe2 },
  { id: "notification", name: "Push Notification & WA Bot Alert", price: 2000000, weeks: 0.5, icon: BellRing },
];

export default function ProjectEstimator() {
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformOption>(platforms[0]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["auth", "cms"]);
  const [clientName, setClientName] = useState("");
  const [clientCompany, setClientCompany] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [projectNotes, setProjectNotes] = useState("");

  // Toggle checklist fitur
  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Kalkulasi Total Harga & Waktu
  const totalFeaturePrice = selectedFeatures.reduce((acc, featId) => {
    const feat = availableFeatures.find((f) => f.id === featId);
    return acc + (feat ? feat.price : 0);
  }, 0);

  const totalFeatureWeeks = selectedFeatures.reduce((acc, featId) => {
    const feat = availableFeatures.find((f) => f.id === featId);
    return acc + (feat ? feat.weeks : 0);
  }, 0);

  const totalPrice = selectedPlatform.basePrice + totalFeaturePrice;
  const totalWeeks = Math.ceil(selectedPlatform.baseWeeks + totalFeatureWeeks);

  // Format Rupiah
  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Handler Kirim ke WhatsApp Resmi
  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const featureNames = selectedFeatures
      .map((id) => availableFeatures.find((f) => f.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    const textMessage = `Halo Tim PT Ranbadi, saya ingin konsultasi estimasi proyek:\n\n` +
      `*Nama:* ${clientName || "-"}\n` +
      `*Perusahaan:* ${clientCompany || "-"}\n` +
      `*No. WhatsApp:* ${clientPhone || "-"}\n\n` +
      `*Platform:* ${selectedPlatform.name}\n` +
      `*Fitur Tambahan:* ${featureNames || "Standar (Tanpa Addon)"}\n` +
      `*Estimasi Kalkulator:* ${formatRupiah(totalPrice)} (~${totalWeeks} Minggu)\n` +
      `*Catatan Tambahan:* ${projectNotes || "-"}\n\n` +
      `Mohon informasi jadwal diskusi teknis lebih lanjut. Terima kasih!`;

    const waNumber = "6281234567890"; // Ganti dengan nomor WhatsApp salah satu anggota tim
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(textMessage)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section id="calculator" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-100">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
          <Calculator className="w-3.5 h-3.5 text-blue-600" />
          <span>TRANSPARANSI BIAYA & JADWAL</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Kalkulator Estimasi Biaya Proyek
        </h2>
        <p className="text-slate-600 text-sm mt-2">
          Pilih spesifikasi arsitektur yang Anda butuhkan untuk mendapatkan simulasi anggaran dan estimasi waktu rilis secara instan.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* KOLOM KIRI: Kontrol Pilihan (Platform & Fitur) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Langkah 1: Pilih Platform */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
              1. Pilih Tipe Platform Utama
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {platforms.map((plat) => {
                const isSelected = selectedPlatform.id === plat.id;
                return (
                  <div
                    key={plat.id}
                    onClick={() => setSelectedPlatform(plat)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "bg-blue-50/80 border-blue-600 shadow-xs"
                        : "bg-white border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <h4 className={`text-sm font-bold ${isSelected ? "text-blue-900" : "text-slate-900"}`}>
                          {plat.name}
                        </h4>
                        {isSelected && <span className="w-2 h-2 rounded-full bg-blue-600" />}
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
                        {plat.desc}
                      </p>
                    </div>
                    <p className="text-xs font-mono font-bold text-blue-600">
                      Mulai {formatRupiah(plat.basePrice)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Langkah 2: Checklist Fitur Tambahan */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
              2. Kustomisasi Fitur Sistem (Add-ons)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {availableFeatures.map((feat) => {
                const isChecked = selectedFeatures.includes(feat.id);
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.id}
                    onClick={() => toggleFeature(feat.id)}
                    className={`p-3.5 rounded-2xl border transition cursor-pointer flex items-center justify-between ${
                      isChecked
                        ? "bg-blue-50/60 border-blue-500 text-blue-950"
                        : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isChecked ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold leading-tight">{feat.name}</p>
                        <p className="text-[10px] text-slate-500 font-mono mt-0.5">+{formatRupiah(feat.price)}</p>
                      </div>
                    </div>
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition ${isChecked ? "bg-blue-600 border-blue-600 text-white" : "border-slate-300"}`}>
                      {isChecked && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Langkah 3: Formulir Kontak Singkat */}
          <form onSubmit={handleSendToWhatsApp} className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              3. Kirim Hasil Rincian ke Tim Ranbadi
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs focus:outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">Perusahaan / Usaha</label>
                <input
                  type="text"
                  placeholder="Contoh: PT Sukses Mandiri"
                  value={clientCompany}
                  onChange={(e) => setClientCompany(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">Nomor WhatsApp Aktif</label>
              <input
                type="tel"
                required
                placeholder="Contoh: 08123456789"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs focus:outline-none focus:border-blue-600"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">Catatan Tambahan (Opsional)</label>
              <textarea
                rows={2}
                placeholder="Ceritakan sedikit kebutuhan spesifik proyek Anda..."
                value={projectNotes}
                onChange={(e) => setProjectNotes(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs focus:outline-none focus:border-blue-600"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition flex items-center justify-center gap-2 shadow-md shadow-blue-600/20 active:scale-98 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Kirim Rincian Estimasi via WhatsApp</span>
            </button>
          </form>
        </div>

        {/* KOLOM KANAN: Rekap Kartu Estimasi Real-Time (Sticky) */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <div className="p-7 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-2xl relative overflow-hidden">
            {/* Background Light Effect */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <span className="text-xs font-mono text-slate-400">Ringkasan Simulasi</span>
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-300 font-semibold">
                Otomatis
              </span>
            </div>

            {/* Total Harga Live */}
            <div className="mb-6">
              <p className="text-xs text-slate-400">Estimasi Total Investasi</p>
              <p className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mt-1">
                {formatRupiah(totalPrice)}
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                *Estimasi final akan disesuaikan setelah tahap *System Blueprinting*.
              </p>
            </div>

            {/* Estimasi Durasi Live */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-950 text-blue-400 flex items-center justify-center border border-blue-800/50">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-200">Estimasi Waktu Pengerjaan</p>
                  <p className="text-[11px] text-slate-400">Hingga siap rilis produksi</p>
                </div>
              </div>
              <span className="text-sm font-mono font-bold text-cyan-400">
                ~{totalWeeks} Minggu
              </span>
            </div>

            {/* Rincian Komponen Terpilih */}
            <div className="space-y-2.5 text-xs text-slate-300 border-t border-slate-800 pt-5">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Komponen Terpilih:</p>
              <div className="flex justify-between text-slate-300">
                <span>{selectedPlatform.name}</span>
                <span className="font-mono text-slate-400">{formatRupiah(selectedPlatform.basePrice)}</span>
              </div>
              {selectedFeatures.map((featId) => {
                const feat = availableFeatures.find((f) => f.id === featId);
                if (!feat) return null;
                return (
                  <div key={featId} className="flex justify-between text-slate-400 text-[11px]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {feat.name}
                    </span>
                    <span className="font-mono">{formatRupiah(feat.price)}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}