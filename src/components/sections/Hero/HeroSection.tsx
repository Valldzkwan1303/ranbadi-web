"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  TrendingUp, 
  Users, 
  Smartphone, 
  Server, 
  Lock,
  Wifi
} from "lucide-react";

const slides = [
  {
    id: "01",
    badge: "Enterprise Web Systems",
    titlePrefix: "Rancang Bangun",
    titleHighlight: "Arsitektur Sistem",
    titleSuffix: "Masa Depan.",
    desc: "PT Ranbadi mengonstruksi platform digital, aplikasi web enterprise, dan arsitektur kode bersih berstandar industri dengan performa tinggi.",
    ctaText: "Konsultasi Web App",
    benefits: ["Standar Clean Code", "Arsitektur Skalabel", "Dedicated Engineer"],
    type: "laptop",
  },
  {
    id: "02",
    badge: "Cross-Platform Mobile Apps",
    titlePrefix: "Konstruksi Aplikasi",
    titleHighlight: "Mobile Andal",
    titleSuffix: "Skala Jutaan Pengguna.",
    desc: "Pengembangan aplikasi Android & iOS (React Native & Flutter) dengan performa mulus, integrasi payment gateway, dan UI/UX intuitif.",
    ctaText: "Bangun Aplikasi Mobile",
    benefits: ["Native Performance", "Offline-First Sync", "Multiplatform Support"],
    type: "mobile",
  },
  {
    id: "03",
    badge: "Cloud, DevOps & Security",
    titlePrefix: "Infrastruktur Cloud",
    titleHighlight: "Kokoh & Aman",
    titleSuffix: "Tanpa Downtime.",
    desc: "Otomatisasi CI/CD pipeline, migrasi AWS/GCP, optimasi database terdistribusi, dan audit keamanan berlapis untuk menjamin reliabilitas bisnis.",
    ctaText: "Audit Sistem Cloud",
    benefits: ["99.99% Uptime SLA", "Automated CI/CD", "Enterprise Security"],
    type: "cloud",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide setiap 5 detik
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section 
      className="relative pt-32 sm:pt-40 pb-20 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Dot Grid */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70" />

      {/* Ambient Radial Glow */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-tr from-blue-300/35 via-sky-200/40 to-indigo-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Navigasi Slide Header (Badge + Tombol Panah Aktif) */}
      <div className="flex items-center justify-between gap-4 mb-6 relative z-30">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50/90 text-xs font-semibold text-blue-700 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>{slides[current].badge}</span>
          </div>
          <span className="text-xs font-mono font-bold text-slate-400">
            {slides[current].id} / 03
          </span>
        </div>

        {/* Tombol Kontrol Prev & Next (Dipastikan 100% Bisa Diklik) */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prevSlide}
            className="w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 flex items-center justify-center text-slate-700 shadow-xs transition active:scale-90 cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 flex items-center justify-center text-slate-700 shadow-xs transition active:scale-90 cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* CAROUSEL TRACK (Slide Geser Fisik Nyata) */}
      <div className="overflow-hidden w-full">
        <div 
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full shrink-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
              {/* Sisi Teks */}
              <div className="lg:col-span-6 flex flex-col items-start text-left z-20">
                <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.18]">
                  {slide.titlePrefix} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
                    {slide.titleHighlight}
                  </span>{" "}
                  {slide.titleSuffix}
                </h1>

                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
                  {slide.desc}
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <a
                    href="#contact"
                    className="inline-flex justify-center items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition shadow-lg shadow-blue-600/25 active:scale-95"
                  >
                    {slide.ctaText}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#services"
                    className="inline-flex justify-center items-center px-6 py-3.5 rounded-xl border border-slate-200 bg-white/80 hover:bg-slate-50 text-slate-700 text-sm font-semibold transition shadow-xs"
                  >
                    Detail Layanan
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap gap-y-2 gap-x-6 text-xs font-medium text-slate-600">
                  {slide.benefits.map((b, i) => (
                    <span key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" /> {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sisi Visual */}
              <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[380px] lg:min-h-[460px]">
                {/* Visual 1: Laptop */}
                {slide.type === "laptop" && (
                  <div className="relative w-full flex items-center justify-center">
                    <div className="hidden sm:flex absolute -left-4 top-2 z-20 items-center gap-3 p-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl shadow-slate-200/60 backdrop-blur-md">
                      <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 font-medium">System Performance</p>
                        <p className="text-xs font-bold text-slate-900">99.8% Core Vitals</p>
                      </div>
                    </div>

                    <div className="hidden sm:flex absolute -right-2 bottom-4 z-20 items-center gap-3 p-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl shadow-slate-200/60 backdrop-blur-md">
                      <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 font-medium">Enterprise Ready</p>
                        <p className="text-xs font-bold text-slate-900">High Scalability</p>
                      </div>
                    </div>

                    <div className="w-full flex items-center justify-center pointer-events-none">
                      <Image
                        src="/laptop.png"
                        alt="PT Ranbadi Laptop Showcase"
                        width={1200}
                        height={850}
                        priority
                        className="w-full h-auto drop-shadow-[0_30px_45px_rgba(37,99,235,0.20)] select-none scale-110 lg:scale-125"
                      />
                    </div>
                  </div>
                )}

                {/* Visual 2: Mobile Smartphone */}
                {slide.type === "mobile" && (
                  <div className="relative w-full flex items-center justify-center py-6">
                    <div className="w-64 sm:w-72 rounded-[40px] bg-slate-900 border-4 border-slate-800 p-3 shadow-2xl shadow-blue-500/20 text-white">
                      <div className="w-20 h-4 bg-slate-800 rounded-full mx-auto mb-3" />
                      <div className="rounded-[28px] bg-slate-950 p-4 border border-slate-800/80 space-y-3 font-sans">
                        <div className="flex justify-between items-center text-[10px] text-slate-400">
                          <span>9:41 AM</span>
                          <Wifi className="w-3 h-3 text-slate-400" />
                        </div>
                        <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                          <p className="text-[10px] opacity-80">Ranbadi Mobile Gateway</p>
                          <p className="text-sm font-extrabold mt-0.5">Rp 248.500.000</p>
                          <p className="text-[9px] text-blue-200 mt-2">● Real-time Synced</p>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                          <span className="text-[11px] text-slate-300">API Response</span>
                          <span className="text-emerald-400 font-mono text-[10px]">12ms</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Visual 3: Cloud Terminal */}
                {slide.type === "cloud" && (
                  <div className="relative w-full max-w-md py-6">
                    <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 shadow-2xl text-slate-300 font-mono text-xs">
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                        <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                          <Server className="w-4 h-4 text-blue-400" />
                          <span>ranbadi-cluster-node-01</span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px]">
                          ONLINE
                        </span>
                      </div>
                      <div className="space-y-2 text-[11px]">
                        <p className="text-slate-500">// Automated CI/CD Pipeline</p>
                        <p className="text-blue-400">$ docker-compose up -d --scale web=4</p>
                        <p className="text-emerald-400">✓ 4 instances deployed across AWS ap-southeast-3</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Dots Navigasi */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              current === i ? "w-10 bg-blue-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}