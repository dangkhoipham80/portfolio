import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import NatureBackground from "../components/NatureBackground";
import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection";
import AboutMeSection from "../components/AboutMeSection";
import SkillsSection from "../components/SkillsSection";
import Footer from "../components/Footer";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import { useTheme } from "../components/ThemeContext";
import { useEffect } from "react";

const Home = () => {
  const { isDarkMode } = useTheme();
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // delay để đảm bảo DOM đã render
    }
  }, [window.location.hash]);
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      {isDarkMode ? <StarBackground /> : <NatureBackground />}

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <MainSection />
        <AboutMeSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
