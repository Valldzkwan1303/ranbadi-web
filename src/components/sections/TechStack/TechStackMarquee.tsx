"use client";

import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const allTechnologies = [
  { name: "Next.js 15", category: "Core Framework", tag: "App Router" },
  { name: "TypeScript", category: "Type-Safe Architecture", tag: "Clean Code" },
  { name: "Tailwind CSS", category: "Modern Responsive UI", tag: "Styling" },
  { name: "React 19", category: "Component Engineering", tag: "High-Perf" },
  { name: "PostgreSQL", category: "Relational Database", tag: "ACID Safe" },
  { name: "Supabase", category: "Cloud DB & Realtime", tag: "Backend" },
  { name: "Node.js", category: "Async Server Runtime", tag: "REST API" },
  { name: "Docker", category: "Containerization", tag: "DevOps" },
  { name: "AWS Cloud", category: "Infrastructure SLA", tag: "Cloud Scale" },
  { name: "Figma", category: "UI/UX Design System", tag: "Prototyping" },
  { name: "Python", category: "Data & Automation", tag: "Scripting" },
  { name: "Git & CI/CD", category: "Continuous Integration", tag: "Workflow" },
];

export default function TechStackMarquee() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Fungsi scroll ke kiri atau kanan
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Auto-scroll halus setiap 4 detik
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        // Jika sudah sampai ujung kanan, putar balik ke awal
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scroll("right");
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section 
      className="py-14 border-y border-slate-100 bg-slate-50/70 relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header Baris TechStack */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-1">
              <Sparkles className="w-3 h-3 text-blue-600" />
              <span>Daftar Teknologi Standar Industri</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Keahlian Rekayasa Software Ranbadi
            </h2>
          </div>

          {/* Tombol Geser Manual (Kiri & Kanan) */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="w-9 h-9 rounded-xl border border-slate-200 bg-white hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 flex items-center justify-center text-slate-700 shadow-xs transition active:scale-90 cursor-pointer"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="w-9 h-9 rounded-xl border border-slate-200 bg-white hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 flex items-center justify-center text-slate-700 shadow-xs transition active:scale-90 cursor-pointer"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CONTAINER SCROLL NYATA (Bisa di-swipe jari di HP / di-scroll trackpad) */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth py-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {allTechnologies.map((tech, index) => (
            <div
              key={index}
              className="w-64 sm:w-72 shrink-0 p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-white font-bold text-xs shadow-sm group-hover:bg-blue-600 transition-colors">
                    {tech.name.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600">
                    {tech.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {tech.category}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Production Stack</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}