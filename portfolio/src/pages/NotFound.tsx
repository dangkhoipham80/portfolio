import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <ThemeToggle />
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-8">The page you are looking for does not exist.</p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/80 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
