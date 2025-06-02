import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection";
import AboutMeSection from "../components/AboutMeSection";
import SkillsSection from "../components/SkillsSection";
import Footer from "../components/Footer";
import ScrollIndicator from "../components/ScrollIndicator";
import { useRef } from "react";

const Home = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <MainSection />
        <AboutMeSection />
        <SkillsSection />
      </main>

      {/* Footer */}
      <Footer ref={footerRef} />

      {/* Scroll Indicator */}
      <ScrollIndicator footerRef={footerRef} targetId="#about" />
    </div>
  );
};

export default Home;
