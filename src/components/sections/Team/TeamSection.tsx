// src/components/sections/Team/TeamSection.tsx
import { Code2, Terminal, Palette, Cloud, ExternalLink } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const teamMembers = [
  {
    name: "Nauval & Co.", // Ganti dengan nama anggota tim asli kalian
    role: "Lead Systems Architect & Fullstack",
    icon: Terminal,
    focus: "Next.js, Architecture & Cloud",
    bio: "Memimpin perancangan alur arsitektur, optimasi performa backend terdistribusi, dan manajemen sprint.",
    skills: ["Next.js 15", "TypeScript", "System Design"],
  },
  {
    name: "Partner UI/UX Engineer", // Ganti dengan nama teman 2
    role: "Lead Product & UI/UX Designer",
    icon: Palette,
    focus: "Design Tokens & Usability Testing",
    bio: "Merancang wireframe terukur, flow psikologi pengguna, dan design system Figma berstandar enterprise.",
    skills: ["Figma", "Design System", "Wireframing"],
  },
  {
    name: "Partner Cloud Specialist", // Ganti dengan nama teman 3
    role: "Backend & Cloud Infrastructure",
    icon: Cloud,
    focus: "PostgreSQL, Docker & CI/CD",
    bio: "Bertanggung jawab atas efisiensi query database, otomatisasi pipeline deployment, dan keamanan data.",
    skills: ["PostgreSQL", "Docker", "DevOps"],
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-100">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            ENGINEERING ROSTER
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4">
            Tim Rekayasa di Balik Ranbadi
          </h2>
          <p className="text-slate-600 text-sm mt-2 max-w-xl">
            Kombinasi antara arsitek sistem, insinyur kode bersih, dan desainer produk berdedikasi tinggi.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, idx) => {
          const Icon = member.icon;
          return (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                    {member.focus}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-blue-600 mb-3">{member.role}</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {member.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/80 text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="text-[11px] font-mono">Ranbadi Core</span>
                <div className="flex gap-3">
                  <a href="#" className="hover:text-blue-600 transition"><GithubIcon className="w-4 h-4" /></a>
                  <a href="#" className="hover:text-blue-600 transition"><LinkedinIcon className="w-4 h-4" /></a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}