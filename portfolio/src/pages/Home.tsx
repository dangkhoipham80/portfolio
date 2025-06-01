import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}

      {/* Footer */}
    </div>
  );
};

export default Home;
