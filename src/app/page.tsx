import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/Hero/HeroSection";
import TechStackMarquee from "@/components/sections/TechStack/TechStackMarquee";
import ServicesSection from "@/components/sections/Services/ServicesSection";
import PortfolioSection from "@/components/sections/Portfolio/PortfolioSection";
import WorkflowSection from "@/components/sections/Workflow/WorkflowSection";
import AboutSection from "@/components/sections/About/AboutSection";
import TeamSection from "@/components/sections/Team/TeamSection";
import CtaSection from "@/components/sections/CTA/CtaSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <HeroSection />
      <TechStackMarquee />
      <ServicesSection />
      <PortfolioSection />
      <WorkflowSection />
      <AboutSection />
      <TeamSection />
      <CtaSection />
      <Footer />
    </main>
  );
}