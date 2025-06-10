import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import StarBackground from "./components/StarBackground";
import NatureBackground from "./components/NatureBackground";
import { useEffect, useState } from "react"; // Import useState and useEffect for dynamic dark mode

function App() {
  // State to track dark mode dynamically, synchronized with ThemeToggle and localStorage
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Initial check on component mount and sync with localStorage
    const storedTheme = localStorage.getItem("theme");
    // Default to dark mode if stored theme is 'dark' or if system preference is dark and no theme is stored
    const initialDarkMode =
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDarkMode(initialDarkMode);
    if (initialDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Observer to react to changes in the 'dark' class on the html element
    // This ensures App.tsx's background updates if ThemeToggle (or other parts) changes the theme.
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []); // Run only once on mount

  return (
    // Outer container for the entire application. It ensures the background fills the screen.
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Layer: Fixed to fill the screen and placed at the lowest z-index (z-0).
        This will render either StarBackground or NatureBackground based on the current theme.
      */}
      <div className="fixed inset-0 z-0">
        {isDarkMode ? <StarBackground /> : <NatureBackground />}
      </div>

      {/* Main Content Layer: This div holds all your pages (Home, NotFound, etc.).
        It's positioned relative and has a higher z-index (z-10) to appear above the background.
        It also takes up the full minimum height of the viewport to ensure content fills the screen.
      */}
      <div className="relative z-10 min-h-screen w-full flex flex-col">
        {/* BrowserRouter manages routing for your application */}
        <BrowserRouter>
          <Routes>
            {/* Route for the Home page */}
            <Route index element={<Home />} />
            {/* Catch-all route for any undefined paths, leading to NotFound page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
