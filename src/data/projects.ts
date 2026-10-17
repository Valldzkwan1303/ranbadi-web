// src/data/projects.ts

export interface Project {
  id: string;
  title: string;
  client: string;
  category: "web" | "mobile" | "enterprise";
  categoryLabel: string;
  summary: string;
  impactMetric: string;
  impactLabel: string;
  techStack: string[];
  gradient: string;
  previewMockup: {
    tag: string;
    headline: string;
    stat: string;
  };
}

export const projectsData: Project[] = [
  {
    id: "kopinusa-ecommerce",
    title: "Platform E-Commerce D2C & Sinkronisasi Kasir POS Multi-Outlet",
    client: "Kopi Nusantara Retail",
    category: "web",
    categoryLabel: "Web Platform",
    summary: "Membangun sistem pemesanan online langsung dengan integrasi gateway pembayaran otomatis dan inventaris 15 outlet fisik secara real-time.",
    impactMetric: "+145%",
    impactLabel: "Kenaikan Transaksi Digital",
    techStack: ["Next.js 15", "TypeScript", "Supabase", "Midtrans"],
    gradient: "from-amber-600/20 via-orange-500/10 to-transparent",
    previewMockup: {
      tag: "E-Commerce Suite",
      headline: "Checkout Flow 2 Langkah",
      stat: "1.2s Page Speed",
    },
  },
  {
    id: "medikasehat-ehr",
    title: "Sistem Manajemen Klinik & Rekam Medis Elektronik (RME) Terintegrasi",
    client: "Medika Sehat Group",
    category: "enterprise",
    categoryLabel: "Enterprise System",
    summary: "Digitalisasi alur rekam medis pasien berstandar SatuSehat Kemenkes dengan enkripsi data berlapis dan dashboard dokter yang intuitif.",
    impactMetric: "82%",
    impactLabel: "Efisiensi Waktu Antrean Pasien",
    techStack: ["React", "PostgreSQL", "Docker", "Tailwind CSS"],
    gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
    previewMockup: {
      tag: "Healthcare SaaS",
      headline: "Enkripsi AES-256 Sesuai Regulasi",
      stat: "Zero Data Leak",
    },
  },
  {
    id: "artha-fintech-mobile",
    title: "Aplikasi Dompet Digital & Manajemen Keuangan Mikro Berbasis QRIS",
    client: "Artha Finansial",
    category: "mobile",
    categoryLabel: "Mobile App",
    summary: "Aplikasi mobile lintas platform untuk transfer instan, pembayaran tagihan multi-biller, dan pencatatan cash flow otomatis bagi pelaku UMKM.",
    impactMetric: "120K+",
    impactLabel: "Pengguna Aktif Bulanan",
    techStack: ["React Native", "Node.js", "Redis", "AWS Cloud"],
    gradient: "from-emerald-600/20 via-teal-500/10 to-transparent",
    previewMockup: {
      tag: "Fintech App",
      headline: "QRIS Settlement Sub-Detik",
      stat: "99.98% SLA",
    },
  },
  {
    id: "logistik-fleet-iot",
    title: "Dashboard Telematika Armada & Pelacakan Logistik Real-Time",
    client: "TransLog Nusantara",
    category: "enterprise",
    categoryLabel: "Enterprise System",
    summary: "Platform kontrol armada terpadu yang memantau lokasi GPS truk, konsumsi bahan bakar, dan prediksi keterlambatan pengiriman via peta satelit.",
    impactMetric: "24%",
    impactLabel: "Penghematan Biaya Operasional BBM",
    techStack: ["Next.js", "TypeScript", "WebSocket", "PostgreSQL"],
    gradient: "from-indigo-600/20 via-purple-500/10 to-transparent",
    previewMockup: {
      tag: "IoT & Fleet Dashboard",
      headline: "Streaming Telemetri 300+ Armada",
      stat: "15ms Refresh Rate",
    },
  },
];