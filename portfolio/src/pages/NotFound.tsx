import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    // The main container that will hold everything. It should be full screen.
    // We are placing the background, then a container for header/toggle, then the main content.
    <div className="relative min-h-screen w-full flex flex-col">
      {/* 1. StarBackground: This must be at the very back (z-index 0, as defined in index.css for .background-container)
           It should cover the entire viewport.
      */}
      <StarBackground />

      {/* 2. Header Layer: Navbar and ThemeToggle. They should be positioned above the background.
           Give them a specific z-index (e.g., z-30 or z-40) and ensure they are positioned Fixed/Absolute.
           Your Navbar might already have its own positioning.
      */}
      {/* Assuming Navbar and ThemeToggle are fixed/absolute and have their own z-index */}
      <Navbar />
      <ThemeToggle />

      {/* 3. Main 404 Content Layer: This should be above the StarBackground but potentially below Navbar/ThemeToggle 
           if they are part of a fixed header.
           If Navbar and ThemeToggle are already positioned fixed/absolute and have high z-index, 
           then the main content needs to be z-index 20 to sit above StarBackground.
      */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-glow-404 text-foreground">
          404 - Page Not Found
        </h1>
        <p className="mb-8 text-lg animate-fade-in-delay-1 text-foreground">
          The page you are looking for does not exist.
        </p>
        <button onClick={() => navigate("/")} className="button-bounce">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
